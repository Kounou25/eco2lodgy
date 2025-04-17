
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, WifiIcon, AlertCircle, Settings, LineChart, Zap } from 'lucide-react';

const Eco2BoxSection = () => {
  const features = [
    {
      icon: <WifiIcon className="w-6 h-6 text-[#2E5A27]" />,
      title: "Collecte de données",
      description: "Collecte des données de consommation en temps réel via des capteurs connectés."
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-[#2E5A27]" />,
      title: "Analyse avancée",
      description: "Suivi, analyse et visualisation des consommations via notre plateforme intuitive."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-[#2E5A27]" />,
      title: "Détection d'anomalies",
      description: "Identification automatique des comportements anormaux et des fuites."
    },
    {
      icon: <Settings className="w-6 h-6 text-[#2E5A27]" />,
      title: "Alertes personnalisées",
      description: "Configuration de notifications sur mesure selon vos besoins spécifiques."
    },
    {
      icon: <LineChart className="w-6 h-6 text-[#2E5A27]" />,
      title: "Indicateurs de performance",
      description: "Suivi des KPIs énergétiques pour optimiser votre consommation."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#2E5A27]" />,
      title: "Économies d'énergie",
      description: "Jusqu'à 30% d'économies d'énergie constatées chez nos clients."
    }
  ];

  const applications = [
    "Établissements scolaires",
    "Bâtiments publics",
    "Bureaux",
    "Espaces de coworking",
    "Logements collectifs",
    "Commerces"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#2E5A27]/10 text-[#2E5A27] text-sm font-semibold rounded-full mb-4">
            NOTRE SOLUTION PHARE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
            La Eco2Box, votre outil connecté pour une gestion optimale de l'énergie
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Solution complète de monitoring énergétique pour réduire vos consommations 
            et améliorer votre impact environnemental.
          </p>
        </div>

        {/* Product Showcase with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop" 
              alt="Eco2Box Device" 
              className="w-full h-auto rounded-xl"
            />
            
            <div className="mt-8 flex justify-center">
              <div className="flex gap-4">
                <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/80 text-white">
                  Demander une démo
                </Button>
                {/* <Button variant="outline" className="border-[#2E5A27] text-[#2E5A27] hover:bg-[#2E5A27]/10">
                  En savoir plus
                </Button> */}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#2E5A27]">Fonctionnalités clés</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-4 p-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-2 bg-[#2E5A27]/10 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="bg-[#D4A017]/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Domaines d'application</h3>
              <p className="mb-6 text-gray-700">
                Nos solutions s'adaptent à différents types de bâtiments et d'usages pour optimiser 
                la performance énergétique dans tous les secteurs.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#2E5A27] rounded-full"></div>
                    <span>{app}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/80 text-white transition-colors">
                  Découvrir tous nos cas d'usage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden h-64 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2000&auto=format&fit=crop" 
                alt="Applications de l'Eco2Box" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E5A27]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Impact environnemental</h3>
                <p className="text-white/90">Réduction significative des émissions de CO₂</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eco2BoxSection;
