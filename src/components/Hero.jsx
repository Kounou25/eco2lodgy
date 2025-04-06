
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
        backgroundImage: 'url(/images/archi.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay avec dégradé utilisant les couleurs du logo */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2E5A27]/80 to-[#2E5A27]/20"></div>
      
      {/* Contenu Hero centré */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center">
        <div className="space-y-8 max-w-3xl mx-auto">
          <h5 
            className="text-[#D4A017] font-medium uppercase tracking-wider transform opacity-0 transition-opacity duration-500" 
            ref={subtitleRef}
          >
            Solutions digitales pour la transition énergétique
          </h5>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance font-display transform opacity-0 transition-opacity duration-500" 
            ref={titleRef}
          >
            Innovation au Service de l'Humain et de l'Environnement
          </h1>
          <p 
            className="text-lg text-gray-200 max-w-2xl mx-auto text-balance transform opacity-0 transition-opacity duration-500" 
            ref={subtitleRef}
          >
            Eco2lodgy accompagne les collectivités, entreprises et particuliers dans la transition 
            énergétique et numérique grâce à des solutions innovantes de pilotage des ressources.
          </p>
          <div 
            className="flex flex-wrap gap-4 justify-center transform opacity-0 transition-opacity duration-500" 
            ref={ctaRef}
          >
            <Button className="bg-[#D4A017] text-black hover:bg-[#D4A017]/80 px-8 py-3 rounded-full transition-all duration-300 text-base font-medium group">
              Découvrir nos solutions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Carte Impact Environnemental positionnée en bas à droite */}
        <div className="absolute bottom-16 right-8 max-w-sm hidden md:block">
          <div className="glass-card p-4 rounded-xl shadow-lg backdrop-blur-sm bg-white/10 border border-white/20 transform transition-all duration-500 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="bg-[#2E5A27] text-white p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg text-white">Économies d'Énergie</h3>
                <p className="text-sm text-gray-200 mt-1">
                  Jusqu'à 30% d'économies d'énergie constatées grâce à nos solutions
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
        <span className="text-[#D4A017] text-sm mt-2">Défiler</span>
      </div>
    </section>
  );
};

export default Hero;
