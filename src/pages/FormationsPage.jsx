
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Clock, Calendar, MapPin, ArrowRight } from 'lucide-react';

const FormationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      image: "/images/construction.jpg",
      instructor: "Ing. Amadou Diallo",
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
      image: "/images/water.jpg",
      instructor: "Dr. Fatima Ousmane",
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
      image: "/images/solar.jpg",
      instructor: "Tech. Ibrahim Moussa",
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
      image: "/images/agriculture.jpg",
      instructor: "Agr. Aissata Sani",
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
      level: "Débutant",
      startDate: "2024-03-15",
      image: "/images/woodwork.jpg",
      instructor: "Maître Moustapha Garba",
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
      image: "/images/management.jpg",
      instructor: "Dr. Harouna Abdou",
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

  const filteredFormations = selectedCategory === 'all' 
    ? formations 
    : formations.filter(formation => formation.category === selectedCategory);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#2E5A27] to-[#556331] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Formations Eco2lodgy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Développez vos compétences avec nos formations pratiques en développement durable
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                <span>Formations certifiantes</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                <span>Formateurs experts</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6" />
                <span>Approche pratique</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-[#2E5A27] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              {filteredFormations.map((formation) => (
                <Card key={formation.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-[#2E5A27] to-[#556331] relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className={getLevelColor(formation.level)}>
                        {formation.level}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{formation.title}</h3>
                      <p className="text-sm opacity-90">Par {formation.instructor}</p>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardDescription className="text-gray-600">
                      {formation.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#2E5A27]" />
                        <span>{formation.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#2E5A27]" />
                        <span>{formation.participants}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#2E5A27]" />
                        <span>{formation.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#2E5A27]" />
                        <span>{new Date(formation.startDate).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="text-2xl font-bold text-[#2E5A27]">
                        {formation.price}
                      </div>
                      <Link to={`/formations/${formation.id}`}>
                        <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/90">
                          Voir détails
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#D4A017]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à développer vos compétences ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez nos formations pratiques et devenez un acteur du développement durable au Niger
            </p>
            <Link to="/#contact">
              <Button size="lg" className="bg-[#2E5A27] hover:bg-[#2E5A27]/90">
                Nous contacter pour plus d'informations
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FormationsPage;
