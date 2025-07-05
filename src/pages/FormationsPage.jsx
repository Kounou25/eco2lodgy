import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialSection from '../components/TestimonialSection';
import CertificatePhotosSection from '../components/CertificatePhotosSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { BookOpen, Users, Clock, Calendar, MapPin, ArrowRight, Search, Star, TrendingUp, Award, Filter, Play, AlertTriangle, UserCheck } from 'lucide-react';

const FormationsPage = () => {
  const [formations, setFormations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Récupération des données depuis l'API
  useEffect(() => {
    const fetchFormations = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://alphatek.fr:3008/api/formations');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des formations');
        }
        const data = await response.json();

        // Transformation des données pour correspondre au format attendu
        const transformedFormations = data.map(formation => ({
          id: formation.id,
          title: formation.title,
          description: formation.description,
          category: formation.category.toLowerCase(),
          duration: formation.duration,
          participants: `${formation.max_participants} max`,
          location: formation.location,
          price: `${parseFloat(formation.price).toLocaleString('fr-FR')} ${formation.currency}`,
          level: formation.level,
          startDate: formation.start_date,
          // Supposons que la date limite est 3 jours avant le début pour l'exemple
          registrationDeadline: new Date(new Date(formation.start_date).getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(),
          currentRegistrations: formation.current_participants,
          maxRegistrations: formation.max_participants,
          image: formation.cover_image.startsWith('http')
            ? formation.cover_image
            : `https://alphatek.fr:3008${formation.cover_image}`, // Ajout du domaine
          instructor: formation.instructor,
          rating: formation.rating || 4.5, // Valeur par défaut
          studentsCount: formation.studentsCount || Math.floor(Math.random() * 100) + 50, // Valeur par défaut
          isPopular: formation.tags?.includes('populaire') || false,
          icon: getCategoryIcon(formation.category),
          videoUrl: formation.intro_video || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          objectives: formation.objectives || [],
        }));

        setFormations(transformedFormations);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFormations();
  }, []);

  // Association des icônes aux catégories
  const getCategoryIcon = (category) => {
    const categoryIcons = {
      construction: '🏗️',
      environnement: '💧',
      energie: '☀️',
      agriculture: '🌱',
      artisanat: '🪵',
      gestion: '👥',
    };
    return categoryIcons[category.toLowerCase()] || '📚';
  };

  // Génération des catégories dynamiques
  const categories = [
    {
      id: 'all',
      name: 'Toutes les formations',
      count: formations.length,
      icon: '📚',
      description: 'Toutes nos formations disponibles',
    },
    ...[...new Set(formations.map(f => f.category))].map(category => ({
      id: category,
      name: category.charAt(0).toUpperCase() + category.slice(1),
      count: formations.filter(f => f.category === category).length,
      icon: getCategoryIcon(category),
      description: `Formations en ${category}`,
    })),
  ];

  // Filtrage des formations
  const filteredFormations = formations.filter(formation => {
    const matchesCategory = selectedCategory === 'all' || formation.category === selectedCategory;
    const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formation.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Formations populaires
  const popularFormations = formations.filter(f => f.isPopular).slice(0, 3);

  // Couleur selon le niveau
  const getLevelColor = (level) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Avancé': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Icône selon le niveau
  const getLevelIcon = (level) => {
    switch (level) {
      case 'Débutant': return '🌱';
      case 'Intermédiaire': return '📈';
      case 'Avancé': return '🎯';
      default: return '📋';
    }
  };

  // Vérification de la date limite d'inscription
  const isRegistrationDeadlineNear = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const timeDiff = deadlineDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff <= 3 && daysDiff > 0;
  };

  // Statut de disponibilité
  const getAvailabilityStatus = (current, max) => {
    const percentage = (current / max) * 100;
    if (percentage >= 90) return { status: 'critical', color: 'bg-red-500', text: 'Complet bientôt' };
    if (percentage >= 70) return { status: 'warning', color: 'bg-yellow-500', text: 'Places limitées' };
    return { status: 'available', color: 'bg-green-500', text: 'Places disponibles' };
  };

  // Affichage pendant le chargement
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#2E5A27] border-solid mx-auto mb-4"></div>
            <p className="text-lg font-semibold">Chargement des formations...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Affichage en cas d'erreur
  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <p className="text-lg font-semibold text-red-600">{error}</p>
            <p className="text-gray-600">Veuillez réessayer plus tard.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#2E5A27] via-[#4C956C] to-[#556331] text-white py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 gap-4 h-full transform rotate-12 scale-150">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="bg-white/20 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-300/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-white/15 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-green-300/10 rounded-full animate-float"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">Centre de Formation Eco2lodgy</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Développez vos
                <span className="block text-yellow-300 hero-underline">compétences</span>
                <span className="block">durables</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Maîtrisez les techniques écologiques avec nos formations pratiques certifiées, 
                dispensées par des experts locaux
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
                {[
                  { icon: BookOpen, value: `${formations.length}+`, label: "Formations" },
                  { icon: Users, value: "500+", label: "Apprenants" },
                  { icon: Award, value: "98%", label: "Satisfaction" },
                  { icon: Play, value: "100%", label: "Pratique" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  { icon: <Award className="w-5 h-5" />, text: "Certifications reconnues" },
                  { icon: <Users className="w-5 h-5" />, text: "Formateurs experts" },
                  { icon: <BookOpen className="w-5 h-5" />, text: "Apprentissage pratique" },
                  { icon: <Play className="w-5 h-5" />, text: "Supports multimédias" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-yellow-300/50 transition-all duration-300">
                    <span className="text-yellow-300">{feature.icon}</span>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('formations')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explorer les formations
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Formations Populaires */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-[#2E5A27]" />
                <span className="text-[#2E5A27] font-semibold">POPULAIRES</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Formations les plus demandées</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez les formations qui attirent le plus de participants
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularFormations.map((formation) => {
                const availability = getAvailabilityStatus(formation.currentRegistrations, formation.maxRegistrations);
                const isHot = isRegistrationDeadlineNear(formation.registrationDeadline);
                return (
                  <div
                    key={formation.id}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-gray-100"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={formation.image}
                        alt={formation.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                        <Badge className="bg-red-500 hover:bg-red-600 text-white border-0">
                          🔥 Populaire
                        </Badge>
                        {isHot && (
                          <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-0 animate-pulse">
                            🔥 HOT
                          </Badge>
                        )}
                        <Badge className={`${availability.color} text-white border-0`}>
                          {availability.text}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href={formation.videoUrl} target="_blank" rel="noopener noreferrer">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-300">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </a>
                      </div>
                      <div className="absolute bottom-4 right-4 text-3xl">{formation.icon}</div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#2E5A27] transition-colors duration-300">
                          {formation.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium">{formation.rating}</span>
                          <span className="text-gray-500">({formation.studentsCount} participants)</span>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-[#2E5A27]" />
                          <span>{new Date(formation.startDate).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-[#2E5A27]" />
                          <span>{formation.location}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-[#2E5A27]">
                          {formation.price}
                        </span>
                        <Link to={`/formations/${formation.id}`}>
                          <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/90 rounded-full group/btn">
                            Voir plus
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-white border-b" id="formations">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-[#2E5A27]" />
                <h3 className="text-lg font-semibold">Filtrer par catégorie</h3>
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Rechercher une formation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-2 border-gray-200 focus:border-[#2E5A27] rounded-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 text-left ${
                    selectedCategory === category.id
                      ? 'bg-[#2E5A27] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }`}
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="text-sm font-bold mb-1">{category.name}</div>
                  <div className="text-xs opacity-75 mb-2">{category.description}</div>
                  <div className="text-xs font-medium">
                    {category.count} formation{category.count > 1 ? 's' : ''}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Formations Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFormations.map((formation, index) => {
                const availability = getAvailabilityStatus(formation.currentRegistrations, formation.maxRegistrations);
                const isHot = isRegistrationDeadlineNear(formation.registrationDeadline);
                return (
                  <Card
                    key={formation.id}
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white rounded-2xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={formation.image}
                        alt={formation.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                        <Badge className={`${getLevelColor(formation.level)} border font-medium`}>
                          <span className="mr-1">{getLevelIcon(formation.level)}</span>
                          {formation.level}
                        </Badge>
                        {formation.isPopular && (
                          <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                            🔥 Populaire
                          </Badge>
                        )}
                        {isHot && (
                          <Badge className="bg-red-500 text-white border-0 animate-pulse">
                            🔥 HOT
                          </Badge>
                        )}
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className={`${availability.color} text-white border-0 text-xs`}>
                          {formation.maxRegistrations - formation.currentRegistrations} places
                        </Badge>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href={formation.videoUrl} target="_blank" rel="noopener noreferrer">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-300">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </a>
                      </div>
                      <div className="absolute bottom-4 right-4 text-3xl group-hover:scale-110 transition-transform duration-300">
                        {formation.icon}
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold group-hover:text-yellow-300 transition-colors duration-300">
                          {formation.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm">{formation.rating}</span>
                          <span className="text-xs opacity-75">({formation.studentsCount})</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardDescription className="text-gray-600 line-clamp-2">
                        {formation.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <div className="flex items-center gap-2">
                            <UserCheck className="w-4 h-4 text-[#2E5A27]" />
                            <span className="font-medium">{formation.currentRegistrations} inscrits</span>
                          </div>
                          <span className="text-[#2E5A27] font-bold">
                            {formation.maxRegistrations - formation.currentRegistrations} places restantes
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-300 ${availability.color}`}
                            style={{ width: `${(formation.currentRegistrations / formation.maxRegistrations) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 text-[#2E5A27]" />
                          <span>{formation.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4 text-[#2E5A27]" />
                          <span>{formation.participants}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-[#2E5A27]" />
                          <span>{formation.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-[#2E5A27]" />
                          <span>{new Date(formation.startDate).toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>
                      {isHot && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                          <div className="flex items-center gap-2 text-red-700 text-sm">
                            <AlertTriangle className="w-4 h-4" />
                            <span className="font-medium">Clôture des inscriptions dans 3 jours !</span>
                          </div>
                        </div>
                      )}
                      <div className="flex justify-between items-center pt-4 border-t">
                        <div className="text-2xl font-bold text-[#2E5A27]">
                          {formation.price}
                        </div>
                        <Link to={`/formations/${formation.id}`}>
                          <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/90 rounded-full group transition-all duration-300 hover:shadow-lg">
                            Voir détails
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            {filteredFormations.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Aucune formation trouvée</h3>
                <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
              </div>
            )}
          </div>
        </section>

        <TestimonialSection />
        <CertificatePhotosSection />
        <section className="py-16 bg-gradient-to-r from-[#2E5A27] to-[#556331] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à développer vos compétences ?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Rejoignez nos formations pratiques et devenez un acteur du développement durable au Niger
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact">
                  <Button size="lg" className="bg-white text-[#2E5A27] hover:bg-white/90 rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Nous contacter
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#2E5A27] rounded-full px-8 py-4 text-lg font-semibold"
                >
                  Télécharger la brochure
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FormationsPage;