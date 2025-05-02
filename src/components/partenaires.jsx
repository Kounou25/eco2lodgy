import React, { useState, useEffect } from 'react';

const PartnersSection = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('https://alphatek.fr:3008/api/partners/');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des partenaires');
        }
        const data = await response.json();
        // Adaptation des données au format attendu par le composant
        const formattedPartners = data.partners.map(partner => ({
          name: partner.name,
          description: partner.description,
          logo: partner.logo_url.startsWith('http') 
            ? partner.logo_url 
            : `https://alphatek.fr:3008${partner.logo_url}` // Ajout du domaine si l'URL est relative
        }));
        setPartners(formattedPartners);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  // Duplication de la liste pour un défilement infini visuel
  const carouselItems = [...partners, ...partners];

  if (loading) {
    return (
      <section className="py-16 bg-[#F5F5F5]" id="partners">
        <div className="container mx-auto px-4">
          <p className="text-center">Chargement des partenaires...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-[#F5F5F5]" id="partners">
        <div className="container mx-auto px-4">
          <p className="text-center text-red-600">Erreur : {error}</p>
        </div>
      </section>
    );
  }

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