import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Clock, Calendar, MapPin, ArrowLeft, CheckCircle, User, Award, Video, AlertTriangle } from 'lucide-react';

const FormationDetail = () => {
  const { id } = useParams();
  const [formation, setFormation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Récupération des données depuis l'API
  useEffect(() => {
    const fetchFormation = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://alphatek.fr:3008/api/formations/${id}`);
        if (!response.ok) {
          throw new Error(response.status === 404 ? 'Formation non trouvée' : 'Erreur serveur');
        }
        const data = await response.json();

        // Transformation des données pour correspondre au format attendu
        const transformedFormation = {
          id: data.id || parseInt(id),
          title: data.title || 'Formation sans titre',
          description: data.description || 'Aucune description disponible.',
          category: data.category?.toLowerCase() || 'autre',
          duration: data.duration || 'Durée non spécifiée',
          participants: data.max_participants ? `${data.max_participants} max` : 'Non spécifié',
          location: data.location || 'Lieu non spécifié',
          price: data.price && data.currency ? `${parseFloat(data.price).toLocaleString('fr-FR')} ${data.currency}` : 'Prix non spécifié',
          level: data.level || 'Niveau non spécifié',
          startDate: data.start_date || new Date().toISOString(),
          endDate: data.end_date || new Date().toISOString(),
          image: data.cover_image
            ? data.cover_image.startsWith('http')
              ? data.cover_image
              : `https://alphatek.fr:3008${data.cover_image}`
            : 'https://via.placeholder.com/1200x600',
          videoUrl: data.intro_video || 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          instructor: data.instructor || 'Formateur non spécifié',
          instructorBio: data.instructor_bio || 'Expert dans son domaine avec plusieurs années d’expérience.',
          objectives: Array.isArray(data.objectives) && data.objectives.length > 0
            ? data.objectives
            : ['Objectifs non spécifiés'],
          program: Array.isArray(data.program) && data.program.length > 0
            ? data.program.map((item, index) => {
                if (typeof item !== 'string' || !item.includes(':')) {
                  return {
                    day: `Jour ${index + 1}`,
                    title: 'Contenu du jour',
                    content: 'Description non disponible',
                  };
                }
                const [day, title, content] = item.split(':');
                return {
                  day: day || `Jour ${index + 1}`,
                  title: title || 'Contenu du jour',
                  content: content || 'Description non disponible',
                };
              })
            : [{ day: 'Jour 1', title: 'Programme non spécifié', content: 'Aucun programme détaillé disponible' }],
          prerequisites: Array.isArray(data.prerequisites) && data.prerequisites.length > 0
            ? data.prerequisites
            : ['Aucun prérequis spécifique'],
          included: Array.isArray(data.included) && data.included.length > 0
            ? data.included
            : [
                data.certification_type || 'Certificat de formation',
                'Support de cours complet',
                'Matériaux pour les exercices pratiques',
                'Suivi post-formation',
              ],
        };

        setFormation(transformedFormation);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFormation();
  }, [id]);

  // Couleur selon le niveau
  const getLevelColor = (level) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Affichage pendant le chargement
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gray-50 pt-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#2E5A27] border-solid mx-auto mb-4"></div>
            <p className="text-lg font-semibold">Chargement de la formation...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Affichage en cas d'erreur ou formation non trouvée
  if (error || !formation) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gray-50 pt-20">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">{error || 'Formation non trouvée'}</h1>
            <Link to="/formations">
              <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/90 rounded-full">
                Retour aux formations
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-gray-50 pt-20">
        {/* Hero Section avec Image */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={formation.image}
            alt={formation.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <Link to="/formations" className="inline-flex items-center text-white hover:text-yellow-300 mb-4 transition-colors duration-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              <div className="max-w-3xl">
                <div className="mb-4">
                  <Badge className={`${getLevelColor(formation.level)} border-0 text-lg px-4 py-2`}>
                    {formation.level}
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {formation.title}
                </h1>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  {formation.description}
                </p>
                <div className="flex flex-wrap gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">{formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">{formation.participants}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">{formation.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{new Date(formation.startDate).toLocaleDateString('fr-FR')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Vidéo d'introduction */}
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="w-5 h-5 text-[#2E5A27]" />
                      Vidéo de présentation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
                      <iframe
                        src={formation.videoUrl}
                        title={`Présentation - ${formation.title}`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="text-gray-600 mt-4">
                      Découvrez en détail le contenu de cette formation et les compétences que vous allez acquérir.
                    </p>
                  </CardContent>
                </Card>

                {/* Objectifs */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#2E5A27]" />
                      Objectifs de la formation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {formation.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Programme */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#2E5A27]" />
                      Programme détaillé
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {formation.program.map((day, index) => (
                        <div key={index} className="border-l-4 border-[#2E5A27] pl-4">
                          <h4 className="font-semibold text-[#2E5A27] mb-1">{day.day}</h4>
                          <h5 className="font-medium mb-2">{day.title}</h5>
                          <p className="text-gray-600">{day.content}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Prérequis */}
                <Card>
                  <CardHeader>
                    <CardTitle>Prérequis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {formation.prerequisites.map((prerequisite, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-[#2E5A27] mt-1 flex-shrink-0" />
                          <span>{prerequisite}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-1 space-y-6">
                {/* Inscription Card */}
                <Card className="sticky top-24 shadow-xl border-0">
                  <CardHeader className="text-center bg-gradient-to-r from-[#2E5A27] to-[#4C956C] text-white rounded-t-lg">
                    <div className="text-3xl font-bold mb-2">
                      {formation.price}
                    </div>
                    <p className="text-white/90">
                      Du {new Date(formation.startDate).toLocaleDateString('fr-FR')} au {new Date(formation.endDate).toLocaleDateString('fr-FR')}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4 p-6">
                    <Link to={`/formations/${formation.id}/inscription`}>
                      <Button className="w-full bg-[#2E5A27] hover:bg-[#2E5A27]/90 text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        S'inscrire maintenant
                      </Button>
                    </Link>
                    <div className="text-center text-sm text-gray-500">
                      Places limitées : {formation.participants}
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Cette formation inclut :</h4>
                      <ul className="text-sm space-y-1">
                        {formation.included.slice(0, 3).map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Formateur */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5 text-[#2E5A27]" />
                      Formateur
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-[#2E5A27] to-[#4C956C] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        {formation.instructor.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h4 className="font-semibold mb-2">{formation.instructor}</h4>
                      <p className="text-sm text-gray-600">{formation.instructorBio}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Inclus */}
                <Card>
                  <CardHeader>
                    <CardTitle>Inclus dans la formation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {formation.included.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FormationDetail;