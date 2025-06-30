
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const CertificatePhotosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificatePhotos = [
    {
      id: 1,
      title: "Remise Certificats Construction Écologique",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      date: "2024-01-15",
      location: "Niamey",
      participants: 18,
      formation: "Techniques de Construction Écologique",
      category: "Construction"
    },
    {
      id: 2,
      title: "Cérémonie Énergies Renouvelables",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      date: "2024-01-20",
      location: "Dosso",
      participants: 12,
      formation: "Installation Systèmes Solaires",
      category: "Énergie"
    },
    {
      id: 3,
      title: "Diplômes Agriculture Urbaine",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      date: "2024-01-25",
      location: "Maradi",
      participants: 22,
      formation: "Agriculture Urbaine Durable",
      category: "Agriculture"
    },
    {
      id: 4,
      title: "Certificats Gestion de l'Eau",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      date: "2024-02-01",
      location: "Tillabéri",
      participants: 15,
      formation: "Gestion de l'Eau et Assainissement",
      category: "Environnement"
    },
    {
      id: 5,
      title: "Attestations Menuiserie Locale",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      date: "2024-02-05",
      location: "Zinder",
      participants: 8,
      formation: "Menuiserie et Artisanat Local",
      category: "Artisanat"
    },
    {
      id: 6,
      title: "Remise Diplômes Gestion Projets",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      date: "2024-02-10",
      location: "Tahoua",
      participants: 25,
      formation: "Gestion de Projets Communautaires",
      category: "Gestion"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === certificatePhotos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [certificatePhotos.length]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === certificatePhotos.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? certificatePhotos.length - 1 : currentIndex - 1);
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Construction': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Énergie': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Agriculture': return 'bg-green-100 text-green-800 border-green-200';
      case 'Environnement': return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'Artisanat': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Gestion': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-[#2E5A27]" />
            <span className="text-[#2E5A27] font-semibold">RÉUSSITES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="text-[#2E5A27]">diplômés</span> en action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les moments forts des remises d'attestations et certificats de nos formations
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main carousel */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificatePhotos.map((photo, index) => (
                <div key={photo.id} className="min-w-full relative">
                  <div className="relative h-96 md:h-[500px]">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <div className="max-w-4xl">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className={`${getCategoryColor(photo.category)} border font-medium`}>
                            {photo.category}
                          </Badge>
                          <Badge className="bg-white/20 text-white border-white/30">
                            <Award className="w-3 h-3 mr-1" />
                            Certifié
                          </Badge>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">
                          {photo.title}
                        </h3>
                        
                        <p className="text-lg mb-4 text-white/90">
                          Formation : {photo.formation}
                        </p>
                        
                        <div className="flex flex-wrap gap-6 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(photo.date).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{photo.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{photo.participants} diplômés</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {certificatePhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#2E5A27] scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {certificatePhotos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative rounded-xl overflow-hidden group transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-[#2E5A27] scale-105' 
                    : 'hover:scale-105 hover:shadow-lg'
                }`}
              >
                <div className="aspect-square">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Small badge */}
                  <div className="absolute top-2 left-2">
                    <Badge className={`${getCategoryColor(photo.category)} text-xs border font-medium`}>
                      {photo.participants}
                    </Badge>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            { icon: Award, value: "150+", label: "Certificats remis", color: "text-[#2E5A27]" },
            { icon: Users, value: "500+", label: "Diplômés", color: "text-blue-600" },
            { icon: MapPin, value: "8", label: "Villes couvertes", color: "text-green-600" },
            { icon: Calendar, value: "2", label: "Ans d'expérience", color: "text-purple-600" }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatePhotosSection;
