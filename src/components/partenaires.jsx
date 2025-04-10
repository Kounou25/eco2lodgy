import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PartnersSection = () => {
  // Liste fictive de partenaires (à remplacer par vos données réelles)
  const partners = [
    {
      name: "Ministere de l'urbanisme et de l'habitat",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Coat_of_arms_of_Niger.svg/langfr-1920px-Coat_of_arms_of_Niger.svg.png",
      description: "Fournisseur de matériaux écologiques locaux",
    },
    {
      name: "Ecotech",
      logo: "https://www.iccoi.fr/images/00-Eco-tech/whatsapp-image-2024-09-20-a-06-53-08_7dc4dcc5.jpg",
      description: "Ile de la reuinion",},
    {
      name: "Getec",
      logo: "https://www.reunionnaisdumonde.com/IMG/jpg/getec-3.jpg",
      description: "Innovateur en technologies durables",
    },
    {
      name: "SETM",
      logo: "https://optimus.re/wp-content/uploads/2023/09/ICON-LOGO-2.png",
      description: "Soutien aux communautés locales",
    },
    {
      name: "NGS",
      logo: "https://i.pinimg.com/736x/68/3d/9a/683d9a1a8150ee8b29bfd25d46804605.jpg",
      description: "Spécialiste en construction durable",
    },
  ];

  // Duplication de la liste pour un défilement infini visuel
  const carouselItems = [...partners, ...partners];

  return (
    <section className="py-16 bg-[#F5F5F5]" id="partners">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-[#2E5A27]/10 text-[#2E5A27] text-sm rounded-full">
            NOS PARTENAIRES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 font-display">
            Ensemble pour un avenir durable
          </h2>
          <p className="text-foreground/70 mt-2">
            Nous collaborons avec des acteurs clés pour transformer l'habitat au Niger.
          </p>
        </div>

        {/* Carrousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-8">
            {carouselItems.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-20 mx-auto mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold text-[#2E5A27]">{partner.name}</h3>
                <p className="text-sm text-foreground/60">{partner.description}</p>
              </div>
            ))}
          </div>

          {/* Gradient pour effet de fondu aux extrémités */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F5F5F5] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F5F5F5] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* CSS pour l'animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;