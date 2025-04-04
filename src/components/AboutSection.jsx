import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Trophy, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { 
      icon: <Users className="w-10 h-10 text-[#2E5A27]" />,
      value: "50+", 
      label: "Experts",
      description: "Emplois directs qualifiés dès la Phase 1" 
    },
    { 
      icon: <Trophy className="w-10 h-10 text-[#2E5A27]" />,
      value: "40%", 
      label: "Réduction CO2",
      description: "Impact environnemental positif" 
    },
    { 
      icon: <Lightbulb className="w-10 h-10 text-[#2E5A27]" />,
      value: "30%", 
      label: "Économies",
      description: "Réduction des coûts de construction" 
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "Nous développons des matériaux révolutionnaires et des systèmes constructifs innovants."
    },
    {
      title: "Expertise",
      description: "Notre équipe combine expertise internationale et connaissance approfondie du contexte local."
    },
    {
      title: "Durabilité",
      description: "Nos solutions réduisent l'impact environnemental tout en garantissant une durabilité accrue."
    },
    {
      title: "Excellence",
      description: "Nous respectons les plus hauts standards de qualité et les normes internationales."
    },
  ];

  return (
    <section className="py-20 bg-[#D4A017]/30" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-[#2E5A27]/20 text-[#2E5A27] text-sm rounded-full mb-4">
              À PROPOS DE NOUS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Leader Émergent de la Construction au Niger</h2>
            <p className="text-foreground/80 mb-6">
              eco2lodgy, en alliance stratégique avec ecotech (La Réunion), transforme le secteur de la construction 
              au Niger en apportant des solutions innovantes aux défis critiques du logement en Afrique de l'Ouest.
            </p>
            <p className="text-foreground/80 mb-8">
              Dirigée par Dr. Youssoufou Mahaman Laouali Souley, expert nigérien reconnu internationalement, 
              notre équipe combine expertise technique et connaissance approfondie du marché local pour créer 
              une proposition de valeur unique.
            </p>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E5A27] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">{value.title}</h4>
                    <p className="text-sm text-foreground/70">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="mt-8 bg-[#2E5A27] hover:bg-[#2E5A27]/80 text-white transition-colors">
              Découvrir notre vision
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 lg:h-96">
              <img 
                src="/images/anec4.jpg" 
                alt="L'équipe eco2lodgy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E5A27]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Notre équipe</h3>
                <p className="text-white/90">Des experts passionnés par l'innovation durable</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-5 rounded-xl">
                  <div className="mb-3">{stat.icon}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                    <span className="text-[#2E5A27] font-medium">{stat.label}</span>
                  </div>
                  <p className="text-sm text-foreground/70 mt-2">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;