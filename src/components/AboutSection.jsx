
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Trophy, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { 
      icon: <Users className="w-10 h-10 text-eco-green" />,
      value: "15+", 
      label: "Experts",
      description: "Architectes, ingénieurs et développeurs passionnés" 
    },
    { 
      icon: <Trophy className="w-10 h-10 text-eco-green" />,
      value: "120+", 
      label: "Projets Réalisés",
      description: "Projets architecturaux et numériques livrés avec succès" 
    },
    { 
      icon: <Lightbulb className="w-10 h-10 text-eco-green" />,
      value: "8+", 
      label: "Années d'Expérience",
      description: "D'expertise dans l'innovation durable" 
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "Nous recherchons constamment des solutions novatrices pour répondre aux défis contemporains."
    },
    {
      title: "Durabilité",
      description: "Chaque projet intègre des principes de développement durable et d'efficacité énergétique."
    },
    {
      title: "Excellence",
      description: "Nous nous engageons à fournir un travail de la plus haute qualité dans tous nos domaines d'expertise."
    },
    {
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour réaliser leur vision."
    },
  ];

  return (
    <section className="py-20 bg-eco-beige/30" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-eco-green/20 text-eco-green text-sm rounded-full mb-4">
              À PROPOS DE NOUS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Une Approche Intégrée de l'Architecture et du Numérique</h2>
            <p className="text-foreground/80 mb-6">
              Eco2lodgy est née d'une vision : créer une agence multidisciplinaire où l'architecture, 
              l'ingénierie et les technologies numériques se rencontrent pour offrir des solutions complètes et innovantes.
            </p>
            <p className="text-foreground/80 mb-8">
              Notre équipe d'experts combine des compétences variées pour concevoir des espaces et des 
              solutions numériques qui répondent aux besoins actuels tout en anticipant ceux de demain, 
              avec une forte orientation vers la durabilité et l'efficacité énergétique.
            </p>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-eco-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">{value.title}</h4>
                    <p className="text-sm text-foreground/70">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="mt-8 bg-eco-green hover:bg-eco-light text-white transition-colors">
              En savoir plus sur Eco2lodgy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 lg:h-96">
              <img 
                src="/images/about-team.jpg" 
                alt="L'équipe Eco2lodgy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-green/60 to-transparent"></div>
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
                    <span className="text-eco-green font-medium">{stat.label}</span>
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
