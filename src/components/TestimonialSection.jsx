import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophie Durand",
      role: "Propriétaire",
      project: "Résidence Eco-Valley",
      content: "Eco2lodgy a créé une maison durable et économe qui dépasse nos attentes.",
      avatar: "/images/testimonial1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Marc Leroux",
      role: "Directeur Général",
      project: "Siège GreenTech",
      content: "Leur expertise a donné vie à des solutions innovantes pour notre entreprise.",
      avatar: "/images/testimonial2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Nadia Bensalem",
      role: "Investisseur",
      project: "Complexe Sustainable",
      content: "Une vision globale qui maximise la valeur tout en restant durable.",
      avatar: "/images/testimonial3.jpg",
      rating: 5,
    },
  ];

  // Duplication pour un défilement infini
  const carouselItems = [...testimonials, ...testimonials];

  return (
    <section className="py-12 bg-[#F5F5F5]" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-[#2E5A27]/10 text-[#2E5A27] text-sm rounded-full">
            TÉMOIGNAGES
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 font-display">Nos Clients Parlent</h2>
        </div>

        {/* Carrousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-6">
            {carouselItems.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-[#2E5A27]"
                  />
                  <div>
                    <h3 className="font-semibold text-[#2E5A27]">{testimonial.name}</h3>
                    <p className="text-xs text-foreground/60">{testimonial.role} - {testimonial.project}</p>
                  </div>
                </div>
                <div className="flex space-x-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <blockquote className="text-sm text-foreground/80 italic">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Gradients pour effet de fondu */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#F5F5F5] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#F5F5F5] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Animation CSS */}
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
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;