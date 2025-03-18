
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PresentationSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Éco2lodgy, Partenaire Stratégique",
      subtitle: "Des solutions intégrées en ingénierie, maîtrise d'œuvre, promotion immobilière et R&D",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1618853686805-5e1523436f2c?q=80&w=800&auto=format&fit=crop" 
              alt="Logo Eco2lodgy" 
              className="w-full h-full object-cover rounded-full border-4 border-eco-green"
            />
          </div>
          <p className="text-lg font-medium mb-4">Siège : Niamey, Niger</p>
          <p className="text-lg font-medium">Partenaire principal : Ecotech (La Réunion)</p>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1606836576983-8b458e75221d?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Qui Sommes-Nous ?",
      subtitle: "Entreprise nigérienne spécialisée",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Le calcul de structure</li>
            <li>La maîtrise d'œuvre / maîtrise d'ouvrage</li>
            <li>La promotion immobilière / agence immobilière</li>
            <li>La R&D sur les matériaux innovants (low cost, low tech)</li>
            <li>La production et vente de matériaux de construction</li>
            <li>L'architecture bioclimatique</li>
            <li>La réalisation de cadastres par Lidar et photogrammétrie</li>
          </ul>
          <div className="mt-6 space-y-3">
            <p className="font-bold text-xl">Vision :</p>
            <p>Faire du Niger un pôle de référence en construction durable et résiliente</p>
            <p className="font-bold text-xl mt-4">Mission :</p>
            <p>Offrir des solutions de construction adaptées au climat, accessibles financièrement et profitables à l'économie locale</p>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1590274853742-d7674c128a7e?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Nos Domaines de Compétence",
      subtitle: "Des expertises complémentaires",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-eco-green">Calcul de structure</h3>
            <p>Expertise en béton, acier, terre stabilisée. Optimisation de la résistance et durabilité.</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-eco-green">Maîtrise d'œuvre</h3>
            <p>Gestion et coordination de A à Z. Contrôle qualité des chantiers et respect des normes.</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-eco-green">Promotion immobilière</h3>
            <p>Recherche foncière, montage financier, commercialisation. Assistance à la gestion locative.</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-eco-green">Laboratoire R&D</h3>
            <p>Études sur bétons biosourcés. Solutions low cost pour lutter contre inondations et chaleurs extrêmes.</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-eco-green">Matériaux innovants</h3>
            <p>Blocs de terre stabilisée, béton léger. Outils adaptés au marché local.</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-eco-green">Architecture bioclimatique</h3>
            <p>Conception adaptée (orientation, ventilation naturelle). Adaptation aux besoins culturels et climatiques.</p>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Projets Réalisés",
      subtitle: "Sélection de nos réalisations",
      content: (
        <div className="grid grid-cols-1 gap-4">
          <div className="flex bg-white/60 backdrop-blur-sm p-3 rounded-lg shadow-sm">
            <div className="w-16 h-16 flex-shrink-0 mr-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=400&auto=format&fit=crop" 
                alt="Projet Rive Sûre" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-eco-green">Projet "Rive Sûre" à Niamey</h3>
              <p>Digues de protection contre les crues</p>
            </div>
          </div>
          <div className="flex bg-white/60 backdrop-blur-sm p-3 rounded-lg shadow-sm">
            <div className="w-16 h-16 flex-shrink-0 mr-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590074072786-a66914d668f1?q=80&w=400&auto=format&fit=crop" 
                alt="Nouvelle Oasis" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-eco-green">Complexe "Nouvelle Oasis" à Zinder</h3>
              <p>50 logements sociaux climato-résilients</p>
            </div>
          </div>
          <div className="flex bg-white/60 backdrop-blur-sm p-3 rounded-lg shadow-sm">
            <div className="w-16 h-16 flex-shrink-0 mr-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560184611-5b5749138c3c?q=80&w=400&auto=format&fit=crop" 
                alt="Résidences Sahéliennes" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-eco-green">Programme "Résidences Sahéliennes"</h3>
              <p>Logements moyen standing, intégration bioclimatique</p>
            </div>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Nos Équipes et Ressources",
      subtitle: "Une expertise pluridisciplinaire",
      content: (
        <div className="space-y-6">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
              alt="Directeur"
              className="w-24 h-24 rounded-full border-2 border-eco-green mr-4 object-cover"
            />
            <div>
              <h3 className="font-bold text-xl text-eco-green">Direction</h3>
              <p>Dr. YOUSSOUFOU MAHAMAN LAOUALI SOULEY</p>
              <p className="text-sm">Docteur en génie civil reconnu internationalement</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-bold text-lg text-eco-green mb-2">Équipes pluridisciplinaires</h3>
              <ul className="space-y-1">
                <li>4 Ingénieurs structures</li>
                <li>5 Chercheurs et techniciens de laboratoire</li>
                <li>3 Architectes, 2 Urbanistes</li>
                <li>20 Maçons et techniciens qualifiés</li>
                <li>2 Géomètres-experts, 3 opérateurs drones</li>
              </ul>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-bold text-lg text-eco-green mb-2">Matériel et logistique</h3>
              <ul className="space-y-1">
                <li>2 drones UAV équipés Lidar</li>
                <li>Laboratoire d'essais complet</li>
                <li>Flotte de camions légers et minibus</li>
                <li>Coffrages modulaires et échafaudages</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Innovation et Développement",
      subtitle: "Nos axes prioritaires",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg flex">
            <div className="w-12 h-12 bg-eco-green rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">1</div>
            <div>
              <h3 className="font-bold text-lg text-eco-green">Habitat résilient</h3>
              <p>Diffusion de méthodes de construction sûres contre les inondations et la surchauffe</p>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg flex">
            <div className="w-12 h-12 bg-eco-green rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">2</div>
            <div>
              <h3 className="font-bold text-lg text-eco-green">Matériaux écologiques</h3>
              <p>Blocs de terre stabilisée, bétons biosourcés, faible impact carbone</p>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg flex">
            <div className="w-12 h-12 bg-eco-green rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">3</div>
            <div>
              <h3 className="font-bold text-lg text-eco-green">Approche Low Tech</h3>
              <p>Solutions simplifiées pour être adoptées par tous (fiches techniques, formations courtes)</p>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg flex">
            <div className="w-12 h-12 bg-eco-green rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">4</div>
            <div>
              <h3 className="font-bold text-lg text-eco-green">Cartographie rurale</h3>
              <p>Drones + SIG pour améliorer la planification foncière et le cadastre</p>
            </div>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Contact",
      subtitle: "Travaillons ensemble",
      content: (
        <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl max-w-md mx-auto">
          <div className="text-center mb-6">
            <h3 className="font-bold text-2xl text-eco-green mb-4">éco2lodgy</h3>
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-eco-green">
              <img 
                src="https://images.unsplash.com/photo-1618853686805-5e1523436f2c?q=80&w=400&auto=format&fit=crop" 
                alt="éco2lodgy logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 text-center">
            <p><span className="font-semibold">Adresse :</span> Quartier Yantala, Niamey, Niger</p>
            <p><span className="font-semibold">Téléphone :</span> +227 00 00 00 00</p>
            <p><span className="font-semibold">Email :</span> contact@eco2lodgy.ne</p>
            <p><span className="font-semibold">Site web :</span> www.eco2lodgy.ne</p>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-bold text-eco-green">Merci de votre attention</p>
            <p className="italic">Contactez-nous pour vos projets de construction durable</p>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8b?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section id="presentation" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-eco-green/20 text-eco-green text-sm rounded-full mb-4">
            PRÉSENTATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">Présentation de éco2lodgy</h2>
          <p className="text-foreground/80 mt-4 max-w-2xl mx-auto">
            Découvrez notre entreprise à travers cette présentation interactive qui détaille
            nos activités, nos innovations et notre vision pour le Niger.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Slide Background */}
          <div 
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url(${currentSlideData.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.2)'
            }}
          ></div>
          
          {/* Content Overlay */}
          <div className="relative z-10 min-h-[600px] rounded-2xl overflow-hidden bg-gradient-to-b from-eco-green/20 to-eco-green/50 backdrop-blur-sm">
            
            {/* Slide Content */}
            <div className="pt-10 pb-20 px-6 md:px-12 min-h-[600px]">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2">
                  {currentSlideData.title}
                </h3>
                <p className="text-white/80 text-lg">
                  {currentSlideData.subtitle}
                </p>
              </div>
              
              <div className="mt-10 bg-white/20 p-6 md:p-10 rounded-xl backdrop-blur-sm text-white shadow-lg">
                {currentSlideData.content}
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-6">
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-white/20 hover:bg-white/40 text-white rounded-full h-12 w-12"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <div className="flex items-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'w-8 bg-white' 
                        : 'w-3 bg-white/40 hover:bg-white/60'
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-white/20 hover:bg-white/40 text-white rounded-full h-12 w-12"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
