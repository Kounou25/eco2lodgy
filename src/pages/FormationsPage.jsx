
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialSection from '../components/TestimonialSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { BookOpen, Users, Clock, Calendar, MapPin, ArrowRight, Search, Star, TrendingUp, Award, Filter, Play, Video } from 'lucide-react';

const FormationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const formations = [
    {
      id: 1,
      title: "Techniques de Construction Écologique",
      description: "Apprenez les méthodes de construction durables utilisant des matériaux locaux.",
      category: "construction",
      duration: "5 jours",
      participants: "15 max",
      location: "Niamey",
      price: "75,000 FCFA",
      level: "Débutant",
      startDate: "2024-02-15",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      instructor: "Ing. Amadou Diallo",
      rating: 4.8,
      studentsCount: 127,
      isPopular: true,
      icon: "🏗️",
      videoUrl: "https://www.youtube.com/watch?v=eXcF2dAD0WI",
      objectives: [
        "Maîtriser les techniques de construction avec des matériaux locaux",
        "Comprendre les principes de la construction écologique",
        "Apprendre les méthodes de résistance aux inondations"
      ]
    },
    {
      id: 2,
      title: "Gestion de l'Eau et Assainissement",
      description: "Formation sur les systèmes d'eau durable et l'assainissement écologique.",
      category: "environnement",
      duration: "3 jours",
      participants: "20 max",
      location: "Tillabéri",
      price: "50,000 FCFA",
      level: "Intermédiaire",
      startDate: "2024-02-20",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      instructor: "Dr. Fatima Ousmane",
      rating: 4.9,
      studentsCount: 89,
      isPopular: false,
      icon: "💧",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      objectives: [
        "Concevoir des systèmes de récupération d'eau",
        "Installer des systèmes d'assainissement écologique",
        "Maintenance et gestion des installations"
      ]
    },
    {
      id: 3,
      title: "Énergies Renouvelables Locales",
      description: "Installation et maintenance de systèmes solaires adaptés au contexte local.",
      category: "energie",
      duration: "4 jours",
      participants: "12 max",
      location: "Dosso",
      price: "60,000 FCFA",
      level: "Débutant",
      startDate: "2024-03-01",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      instructor: "Tech. Ibrahim Moussa",
      rating: 4.7,
      studentsCount: 65,
      isPopular: true,
      icon: "☀️",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      objectives: [
        "Installer des panneaux solaires",
        "Dimensionner un système photovoltaïque",
        "Maintenance et dépannage"
      ]
    },
    {
      id: 4,
      title: "Agriculture Urbaine Durable",
      description: "Techniques d'agriculture en milieu urbain avec des méthodes écologiques.",
      category: "agriculture",
      duration: "6 jours",
      participants: "25 max",
      location: "Maradi",
      price: "45,000 FCFA",
      level: "Débutant",
      startDate: "2024-03-10",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      instructor: "Agr. Aissata Sani",
      rating: 4.6,
      studentsCount: 112,
      isPopular: false,
      icon: "🌱",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      objectives: [
        "Créer un jardin urbain productif",
        "Techniques de compostage",
        "Gestion de l'eau en agriculture urbaine"
      ]
    },
    {
      id: 5,
      title: "Menuiserie et Artisanat Local",
      description: "Formation en menuiserie utilisant le bois local et techniques traditionnelles.",
      category: "artisanat",
      duration: "7 jours",
      participants: "10 max",
      location: "Zinder",
      price: "80,000 FCFA",
      level: "Avancé",
      startDate: "2024-03-15",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
      instructor: "Maître Moustapha Garba",
      rating: 4.9,
      studentsCount: 43,
      isPopular: false,
      icon: "🪵",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      objectives: [
        "Maîtriser les outils de menuiserie",
        "Travailler le bois local",
        "Créer des meubles durables"
      ]
    },
    {
      id: 6,
      title: "Gestion de Projets Communautaires",
      description: "Méthodes de gestion et coordination de projets de développement local.",
      category: "gestion",
      duration: "4 jours",
      participants: "30 max",
      location: "Tahoua",
      price: "55,000 FCFA",
      level: "Intermédiaire",
      startDate: "2024-03-20",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
      instructor: "Dr. Harouna Abdou",
      rating: 4.8,
      studentsCount: 78,
      isPopular: true,
      icon: "👥",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      objectives: [
        "Planifier un projet communautaire",
        "Gérer les ressources et équipes",
        "Évaluer l'impact des projets"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les formations', count: formations.length },
    { id: 'construction', name: 'Construction', count: formations.filter(f => f.category === 'construction').length },
    { id: 'environnement', name: 'Environnement', count: formations.filter(f => f.category === 'environnement').length },
    { id: 'energie', name: 'Énergie', count: formations.filter(f => f.category === 'energie').length },
    { id: 'agriculture', name: 'Agriculture', count: formations.filter(f => f.category === 'agriculture').length },
    { id: 'artisanat', name: 'Artisanat', count: formations.filter(f => f.category === 'artisanat').length },
    { id: 'gestion', name: 'Gestion', count: formations.filter(f => f.category === 'gestion').length }
  ];

  const filteredFormations = formations.filter(formation => {
    const matchesCategory = selectedCategory === 'all' || formation.category === selectedCategory;
    const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formation.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFormations = formations.filter(f => f.isPopular).slice(0, 3);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Débutant': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Avancé': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLevelIcon = (level) => {
    switch(level) {
      case 'Débutant': return '🌱';
      case 'Intermédiaire': return '📈';
      case 'Avancé': return '🎯';
      default: return '📋';
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-r from-[#2E5A27] via-[#4C956C] to-[#556331] text-white py-32 overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="grid grid-cols-8 gap-4 h-full transform rotate-12 scale-150">
      {Array.from({ length: 64 }).map((_, i) => (
        <div key={i} className="bg-white/20 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
      ))}
    </div>
  </div>
  
  {/* Floating Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
    <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-300/20 rounded-full animate-bounce"></div>
    <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-white/15 rounded-full animate-pulse"></div>
    <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-green-300/10 rounded-full animate-float"></div>
  </div>

  <div className="container mx-auto px-4 text-center relative z-10">
    <div className="max-w-4xl mx-auto">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
        <BookOpen className="w-5 h-5" />
        <span className="font-medium">Centre de Formation Eco2lodgy</span>
      </div>

      {/* Main Title */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Développez vos
        <span className="block text-yellow-300 hero-underline">compétences</span>
        <span className="block">durables</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
        Maîtrisez les techniques écologiques avec nos formations pratiques certifiées, 
        dispensées par des experts locaux
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
        {[
          { icon: BookOpen, value: "15+", label: "Formations" },
          { icon: Users, value: "500+", label: "Apprenants" },
          { icon: Award, value: "98%", label: "Satisfaction" },
          { icon: Video, value: "100%", label: "Pratique" }
        ].map((stat, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <stat.icon className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-white/80">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {[
          { icon: <Award className="w-5 h-5" />, text: "Certifications reconnues" },
          { icon: <Users className="w-5 h-5" />, text: "Formateurs experts" },
          { icon: <BookOpen className="w-5 h-5" />, text: "Apprentissage pratique" },
          { icon: <Video className="w-5 h-5" />, text: "Supports multimédias" }
        ].map((feature, index) => (
          <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-yellow-300/50 transition-all duration-300">
            <span className="text-yellow-300">{feature.icon}</span>
            <span className="text-sm font-medium">{feature.text}</span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
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

    {/* Scroll Indicator */}
    {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div> */}
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
              {popularFormations.map((formation, index) => (
                <div
                  key={formation.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-gray-100"
                >
                  {/* Image de couverture */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={formation.image} 
                      alt={formation.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-red-500 hover:bg-red-600 text-white border-0">
                        🔥 Populaire
                      </Badge>
                    </div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors duration-300">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 right-4 text-3xl">{formation.icon}</div>
                  </div>

                  {/* Content */}
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
                      <span className="text-2xl font-bold text-[#2E5A27]">{formation.price}</span>
                      <Link to={`/formations/${formation.id}`}>
                        <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/90 rounded-full group/btn">
                          Voir plus
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-white border-b" id="formations">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-[#2E5A27]" />
                <h3 className="text-lg font-semibold">Filtrer les formations</h3>
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
            
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-[#2E5A27] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Formations Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFormations.map((formation, index) => (
                <Card 
                  key={formation.id} 
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white rounded-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image de couverture */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={formation.image} 
                      alt={formation.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={`${getLevelColor(formation.level)} border font-medium`}>
                        <span className="mr-1">{getLevelIcon(formation.level)}</span>
                        {formation.level}
                      </Badge>
                      {formation.isPopular && (
                        <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                          🔥 Populaire
                        </Badge>
                      )}
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-300">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 right-4 text-3xl group-hover:scale-110 transition-transform duration-300">
                      {formation.icon}
                    </div>

                    {/* Title Overlay */}
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
              ))}
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

        {/* Testimonials Section */}
        <TestimonialSection />

        {/* CTA Section */}
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
    </>
  );
};

export default FormationsPage;
