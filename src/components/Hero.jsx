import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Assuming the image is in your public/images folder
const backgroundImage = '/images/archi.jpg';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) title.classList.add('animate-fade-up', 'opacity-100');
    
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-up', 'opacity-100');
    }, 200);
    
    setTimeout(() => {
      if (cta) cta.classList.add('animate-fade-up', 'opacity-100');
    }, 400);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Dynamically set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay avec dégradé inspiré des couleurs du Niger et d’Eco2lodgy */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2E5A27]/80 via-[#D4A017]/20 to-transparent"></div>
      
      {/* Contenu Hero centré */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          <h5 
            className="text-[#D4A017] font-medium uppercase tracking-wider transform opacity-0 transition-opacity duration-500" 
            ref={subtitleRef}
          >
            Solutions durables pour le Sahel
          </h5>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance font-display transform opacity-0 transition-opacity duration-500" 
            ref={titleRef}
          >
            Transformer le Niger avec des logements résilients
          </h1>
          <p 
            className="text-lg text-gray-100 max-w-2xl mx-auto text-balance transform opacity-0 transition-opacity duration-500" 
            ref={subtitleRef}
          >
            Eco2lodgy lutte contre la crise du logement au Niger en concevant des solutions abordables, 
            écologiques et adaptées aux défis climatiques, tout en renforçant les communautés locales.
          </p>
          <div 
            className="flex flex-wrap gap-4 justify-center transform opacity-0 transition-opacity duration-500" 
            ref={ctaRef}
          >
            <Button className="bg-[#D4A017] text-black hover:bg-[#D4A017]/90 px-8 py-3 rounded-full transition-all duration-300 text-base font-medium group">
              Découvrir notre vision
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Carte Impact positionnée en bas à droite */}
        <div className="absolute bottom-16 right-8 max-w-sm hidden md:block">
          <div className="glass-card p-4 rounded-xl shadow-lg backdrop-blur-sm bg-white/10 border border-white/20 transform transition-all duration-500 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="bg-[#2E5A27] text-white p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg text-white">Résilience Climatique</h3>
                <p className="text-sm text-gray-200 mt-1">
                  Réduction de 7€ de dégâts par euro investi dans la prévention des inondations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scrolldown Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <div className="w-8 h-12 rounded-full border-2 border-[#D4A017] flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#D4A017] rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
        <span className="text-[#D4A017] text-sm mt-2">Explorer</span>
      </div>
    </section>
  );
};

export default Hero;