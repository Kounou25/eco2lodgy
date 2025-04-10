import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PresentationSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Eco2lodgy, Solutions Durables",
      subtitle: "Acteur clé pour le développement durable au Niger",
      content: (
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 md:w-40 md:h-40 mb-6">
            <img
              src="/images/eco2lodgy-logo.jpg" // Replace with actual logo path
              alt="Logo Eco2lodgy"
              className="w-full h-full object-cover rounded-full border-4 border-[#2E5A27]"
            />
          </div>
          <p className="text-lg font-medium mb-4">Siège : Niamey, Niger</p>
          <p className="text-lg font-medium">Contact : eco2lodgy@gmail.com | +227 9132 1882</p>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1606836576983-8b458e75221d?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Qui Sommes-Nous ?",
      subtitle: "Une entreprise innovante au service du Niger",
      content: (
        <div className="space-y-4">
          <p className="text-lg">Eco2lodgy relève les défis du logement et de l’urbanisme au Niger avec des solutions durables adaptées au Sahel.</p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Construction résiliente aux inondations et chaleur</li>
            <li>Promotion immobilière abordable</li>
            <li>Technologies avancées (LiDAR, drones)</li>
            <li>Matériaux locaux écologiques</li>
            <li>Formation et transfert de compétences</li>
          </ul>
          <div className="mt-6 space-y-3">
            <p className="font-bold text-xl">Vision :</p>
            <p>Transformer le Niger en modèle de construction durable (Page 8)</p>
            <p className="font-bold text-xl mt-4">Mission :</p>
            <p>Répondre à la crise du logement avec des solutions accessibles et résilientes (Page 3)</p>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1590274853742-d7674c128a7e?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Nos Départements",
      subtitle: "Expertise pluridisciplinaire",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-[#2E5A27]">Technique</h3>
            <p>Ingénierie et construction durable avec matériaux locaux (Page 10)</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-[#2E5A27]">Urbanisme</h3>
            <p>Conception bioclimatique et aménagement (Page 12)</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-[#2E5A27]">R&D</h3>
            <p>Innovation en matériaux écologiques (Page 13)</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-[#2E5A27]">Économie</h3>
            <p>Modèles financiers viables (Page 14)</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-[#2E5A27]">Numérique</h3>
            <p>Cartographie et outils technologiques (Page 15)</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-[#2E5A27]">Formation</h3>
            <p>Transfert de compétences locales (Page 16)</p>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Projets Pilotes",
      subtitle: "Nos initiatives au Niger",
      content: (
        <div className="grid grid-cols-1 gap-4">
          <div className="flex bg-white/60 backdrop-blur-sm p-3 rounded-lg shadow-sm">
            <div className="w-16 h-16 flex-shrink-0 mr-4 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=400&auto=format&fit=crop"
                alt="Cadastre Numérisé"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#2E5A27]">Cadastre Numérisé</h3>
              <p>Levés cadastraux précis pour une gestion foncière efficace (Page 20)</p>
            </div>
          </div>
          <div className="flex bg-white/60 backdrop-blur-sm p-3 rounded-lg shadow-sm">
            <div className="w-16 h-16 flex-shrink-0 mr-4 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590074072786-a66914d668f1?q=80&w=400&auto=format&fit=crop"
                alt="Logements Résilients"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#2E5A27]">Logements Résilients</h3>
              <p>Construction adaptée aux inondations et chaleur (Page 21)</p>
            </div>
          </div>
          <div className="flex bg-white/60 backdrop-blur-sm p-3 rounded-lg shadow-sm">
            <div className="w-16 h-16 flex-shrink-0 mr-4 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560184611-5b5749138c3c?q=80&w=400&auto=format&fit=crop"
                alt="Projet Pilote Niamey"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#2E5A27]">Projet Pilote Niamey</h3>
              <p>Quartier Francophinie, logements durables (Page 25)</p>
            </div>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Nos Équipes",
      subtitle: "Une force multidisciplinaire",
      content: (
        <div className="space-y-6">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
              alt="Youssoufou Mahaman"
              className="w-24 h-24 rounded-full border-2 border-[#2E5A27] mr-4 object-cover"
            />
            <div>
              <h3 className="font-bold text-xl text-[#2E5A27]">Coordination</h3>
              <p>Youssoufou Mahaman (Page 18)</p>
              <p className="text-sm">Responsable des projets stratégiques</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-bold text-lg text-[#2E5A27] mb-2">Effectifs</h3>
              <ul className="space-y-1">
                <li>6 Départements (Page 9)</li>
                <li>20 Employés et collaborateurs (Page 17)</li>
                <li>Experts en ingénierie, urbanisme, R&D</li>
              </ul>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-bold text-lg text-[#2E5A27] mb-2">Ressources</h3>
              <ul className="space-y-1">
                <li>Drones pour levés cadastraux (Page 7)</li>
                <li>Outils de construction durable</li>
                <li>Technologies SIG (Page 15)</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Impact et Innovation",
      subtitle: "Nos priorités pour le Niger",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg flex">
            <div className="w-12 h-12 bg-[#2E5A27] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">1</div>
            <div>
              <h3 className="font-bold text-lg text-[#2E5A27]">Résilience Climatique</h3>
              <p>7€ économisés par € investi contre les inondations (Page 21)</p>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg flex">
            <div className="w-12 h-12 bg-[#2E5A27] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">2</div>
            <div>
              <h3 className="font-bold text-lg text-[#2E5A27]">Logement Abordable</h3>
              <p>+15% d’offre de logements en 5 ans (Page 22)</p>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg flex">
            <div className="w-12 h-12 bg-[#2E5A27] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">3</div>
            <div>
              <h3 className="font-bold text-lg text-[#2E5A27]">Développement Local</h3>
              <p>10 000 emplois créés (Page 23)</p>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg flex">
            <div className="w-12 h-12 bg-[#2E5A27] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">4</div>
            <div>
              <h3 className="font-bold text-lg text-[#2E5A27]">Cadastre Précis</h3>
              <p>+20-30% de recettes fiscales (Page 20)</p>
            </div>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Contactez-Nous",
      subtitle: "Collaborons pour un Niger durable",
      content: (
        <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl max-w-md mx-auto">
          <div className="text-center mb-6">
            <h3 className="font-bold text-2xl text-[#2E5A27] mb-4">Eco2lodgy</h3>
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#2E5A27]">
              <img
                src="/images/eco2lodgy-logo.jpg" // Replace with actual logo path
                alt="Eco2lodgy logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 text-center">
            <p><span className="font-semibold">Adresse :</span> Quartier Francophinie, Niamey, Niger (Page 25)</p>
            <p><span className="font-semibold">Téléphone :</span> +227 9132 1882 (Page 18)</p>
            <p><span className="font-semibold">Email :</span> eco2lodgy@gmail.com (Page 18)</p>
            <p><span className="font-semibold">Site :</span> www.eco2lodgy.alphatech.fr (Page 25)</p>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-bold text-[#2E5A27]">Prêt à bâtir l’avenir ?</p>
            <p className="italic">Contactez-nous pour vos projets durables</p>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8b?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <section
      id="presentation"
      className="relative py-20 bg-gray-50 overflow-hidden"
      aria-label="Présentation interactive de Eco2lodgy"
    >
      <div className="container mx-auto px-4">
        <header className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#2E5A27]/20 text-[#2E5A27] text-sm font-semibold rounded-full mb-4">
            PRÉSENTATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800">
            Eco2lodgy en Action
          </h2>
          <p className="text-foreground/80 mt-4 max-w-2xl mx-auto text-lg md:text-xl">
            Explorez notre mission, nos expertises et notre impact pour un Niger résilient et durable.
          </p>
        </header>

        <div className="relative max-w-6xl mx-auto">
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden transition-opacity duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${currentSlideData.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.25) blur(2px)',
            }}
          ></div>

          <div
            ref={slideRef}
            className="relative z-10 min-h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#2E5A27]/40 to-[#D4A017]/40 backdrop-blur-lg shadow-2xl transition-all duration-500 ease-in-out"
            key={currentSlide}
          >
            <div className="pt-12 pb-20 px-6 md:px-12 min-h-[600px] flex flex-col justify-between">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-display mb-3 animate-slideIn">
                  {currentSlideData.title}
                </h3>
                <p className="text-white/90 text-lg md:text-xl animate-slideIn delay-100">
                  {currentSlideData.subtitle}
                </p>
              </div>

              <div className="mt-8 bg-white/25 p-6 md:p-10 rounded-xl backdrop-blur-md text-white shadow-lg flex-1 animate-fadeIn">
                {currentSlideData.content}
              </div>
            </div>

            <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-6 md:px-12">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 hover:bg-white/40 text-white rounded-full h-12 w-12 transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-[#2E5A27]"
                onClick={prevSlide}
                aria-label="Slide précédente"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="flex items-center space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2E5A27] ${
                      index === currentSlide
                        ? 'w-10 bg-[#D4A017] scale-110'
                        : 'w-3 bg-white/60 hover:bg-white/90 hover:scale-105'
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Aller au slide ${index + 1}`}
                    aria-current={index === currentSlide ? 'true' : 'false'}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 hover:bg-white/40 text-white rounded-full h-12 w-12 transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-[#2E5A27]"
                onClick={nextSlide}
                aria-label="Slide suivante"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </section>
  );
};

export default PresentationSection;