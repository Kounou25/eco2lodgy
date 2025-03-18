
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Staggered animation for hero elements
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
    <section className="relative min-h-screen flex items-center bg-eco-green/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-radial from-eco-beige to-eco-beige/30 opacity-70"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <h5 className="text-eco-green font-medium transform transition-opacity duration-500" ref={subtitleRef}>
              LEADER DE LA CONSTRUCTION AU NIGER
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance font-display transform transition-opacity duration-500" ref={titleRef}>
              Innovation et Excellence dans la Construction au Niger
            </h1>
            <p className="text-lg text-foreground/80 max-w-lg text-balance transform transition-opacity duration-500" ref={subtitleRef}>
              eco2lodgy transforme le secteur de la construction au Niger en apportant des solutions innovantes 
              aux défis critiques du logement en Afrique de l'Ouest.
            </p>
            <div className="flex flex-wrap gap-4 transform transition-opacity duration-500" ref={ctaRef}>
              <Button className="bg-eco-green hover:bg-eco-light text-white px-6 py-6 rounded-full transition-all duration-300 text-base font-medium group">
                Découvrir nos innovations
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green/10 px-6 py-6 rounded-full transition-all duration-300 text-base font-medium">
                Nos réalisations
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl transform md:rotate-2 transition-all duration-500 hover:rotate-0 image-container">
              <img 
                src="/images/anec4.jpg" 
                alt="Construction innovante eco2lodgy" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-green/40 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 md:-left-12 glass-card p-4 max-w-xs rounded-xl shadow-lg transform -rotate-3 transition-all duration-500 hover:rotate-0">
              <div className="flex items-start gap-4">
                <div className="bg-eco-green text-white p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Impact Environnemental</h3>
                  <p className="text-sm text-foreground/70 mt-1">
                    Réduction de 40% des émissions de CO2 grâce à nos solutions innovantes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scrolldown Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-eco-green flex justify-center pt-2">
          <div className="w-1 h-3 bg-eco-green rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
        <span className="text-eco-green text-sm mt-2">Défiler</span>
      </div>
    </section>
  );
};

export default Hero;
