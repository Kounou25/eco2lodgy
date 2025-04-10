import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Leaf, Home, Droplet } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { 
      icon: <Leaf className="w-10 h-10 text-[#2E5A27]" />,
      value: "100%", 
      label: "Matériaux Locaux",
      description: "Utilisation de ressources écologiques du Niger" 
    },
    { 
      icon: <Home className="w-10 h-10 text-[#2E5A27]" />,
      value: "500+", 
      label: "Logements",
      description: "Projets durables en cours ou réalisés" 
    },
    { 
      icon: <Droplet className="w-10 h-10 text-[#2E5A27]" />,
      value: "80%", 
      label: "Résilience",
      description: "Réduction des risques d'inondations" 
    },
  ];

  const values = [
    {
      title: "Résilience Climatique",
      description: "Des solutions conçues pour résister aux inondations et au changement climatique."
    },
    {
      title: "Durabilité",
      description: "Matériaux écologiques locaux pour un faible impact environnemental."
    },
    {
      title: "Innovation",
      description: "Technologie moderne au service de l'habitat nigérien."
    },
    {
      title: "Accessibilité",
      description: "Logements abordables adaptés aux besoins des communautés."
    },
  ];

  return (
    <section className="py-20 bg-[#D4A017]/20" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#2E5A27]/10 text-[#2E5A27] text-sm rounded-full">
            QUI SOMMES-NOUS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 font-display">Eco2lodgy : Transformer l'Habitat au Niger</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte principal et valeurs */}
          <div className="space-y-6">
            <p className="text-foreground/80 text-lg">
              Eco2lodgy est une entreprise innovante qui relève les défis complexes du logement et de l'urbanisme au Niger 
              à travers des solutions durables et adaptées au contexte local. Notre approche intègre résilience climatique, 
              matériaux écologiques et technologie moderne pour transformer le secteur de l'habitat.
            </p>
            <p className="text-foreground/80">
              Nous développons des logements abordables et durables qui répondent aux besoins spécifiques des communautés 
              nigériennes, particulièrement face aux risques d'inondations et aux impacts du changement climatique. 
              Notre expertise s'appuie sur l'utilisation de matériaux locaux et écologiques, réduisant l'empreinte 
              environnementale tout en créant des opportunités économiques.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2E5A27] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#2E5A27]">{value.title}</h4>
                    <p className="text-sm text-foreground/70">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-6 bg-[#2E5A27] hover:bg-[#2E5A27]/90 text-white transition-colors">
              En savoir plus
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Image et statistiques */}
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-64 lg:h-80 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1593952873517-1c7bd65eadaf?q=80&w=2000&auto=format&fit=crop" 
                alt="Logements durables au Niger" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E5A27]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="text-xl font-bold text-white">Nos Projets</h3>
                <p className="text-white/90">Des habitats durables pour le Niger</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 p-4 rounded-lg shadow-sm text-center">
                  <div className="mb-2 flex justify-center">{stat.icon}</div>
                  <div className="flex justify-center items-baseline gap-1">
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                    <span className="text-[#2E5A27] font-medium text-sm">{stat.label}</span>
                  </div>
                  <p className="text-xs text-foreground/60 mt-1">{stat.description}</p>
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