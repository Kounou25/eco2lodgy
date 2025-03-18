
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 bg-eco-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            Prêt à Transformer Votre Vision en Réalité ?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment 
            notre approche intégrée peut vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-eco-green hover:bg-eco-beige transition-colors px-6 py-6 text-base font-medium rounded-full group">
              Demander un devis
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 px-6 py-6 text-base font-medium rounded-full">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
