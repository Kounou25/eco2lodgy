
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Trophy, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { 
      icon: <Users className="w-10 h-10 text-[#2E5A27]" />,
      value: "100+", 
      label: "Clients",
      description: "Collectivités et entreprises accompagnées" 
    },
    { 
      icon: <Trophy className="w-10 h-10 text-[#2E5A27]" />,
      value: "30%", 
      label: "Économies",
      description: "D'énergie constatées en moyenne" 
    },
    { 
      icon: <Lightbulb className="w-10 h-10 text-[#2E5A27]" />,
      value: "24/7", 
      label: "Monitoring",
      description: "Suivi en temps réel des consommations" 
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "Nous développons des solutions digitales de pointe pour le pilotage des ressources énergétiques."
    },
    {
      title: "Durabilité",
      description: "Nos outils permettent de réduire significativement les consommations et les émissions de CO₂."
    },
    {
      title: "Accessibilité",
      description: "Des interfaces intuitives et pédagogiques adaptées à tous les utilisateurs."
    },
    {
      title: "Expertise",
      description: "Notre équipe combine connaissance technique et compréhension des enjeux énergétiques."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Acteur de l'Innovation Durable</h2>
            <p className="text-foreground/80 mb-6">
              Eco2lodgy accompagne les collectivités, entreprises et particuliers dans la transition énergétique 
              et numérique grâce à des solutions innovantes de pilotage des ressources.
            </p>
            <p className="text-foreground/80 mb-8">
              Notre vision est de construire une ville durable, inclusive et intelligente, où l'innovation est 
              mise au service de l'humain et de l'environnement.
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
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop" 
                alt="Solutions digitales Eco2lodgy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E5A27]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Nos Solutions</h3>
                <p className="text-white/90">Des outils connectés pour une gestion intelligente de l'énergie</p>
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
