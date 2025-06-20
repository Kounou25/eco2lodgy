
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amina Moussa",
      role: "Artisan Formée",
      project: "Formation Construction Écologique",
      content: "Cette formation m'a permis de développer une expertise en construction durable. J'ai maintenant mon propre atelier et je forme d'autres femmes.",
      avatar: "/images/testimonial1.jpg",
      rating: 5,
      location: "Niamey",
      completedDate: "Janvier 2024"
    },
    {
      id: 2,
      name: "Ibrahim Sani",
      role: "Technicien Certifié",
      project: "Formation Énergies Renouvelables",
      content: "Grâce à Eco2lodgy, je maîtrise maintenant l'installation de panneaux solaires. Cela a transformé ma carrière professionnelle.",
      avatar: "/images/testimonial2.jpg",
      rating: 5,
      location: "Dosso",
      completedDate: "Février 2024"
    },
    {
      id: 3,
      name: "Fatima Garba",
      role: "Responsable Projet",
      project: "Formation Gestion de Projets",
      content: "Une formation complète qui m'a donné les outils pour gérer efficacement nos projets communautaires. Très pratique et applicable.",
      avatar: "/images/testimonial3.jpg",
      rating: 5,
      location: "Tahoua",
      completedDate: "Mars 2024"
    },
    {
      id: 4,
      name: "Moussa Abdou",
      role: "Entrepreneur",
      project: "Formation Agriculture Urbaine",
      content: "J'ai créé ma propre entreprise d'agriculture urbaine après cette formation. Les techniques apprises sont révolutionnaires.",
      avatar: "/images/testimonial4.jpg",
      rating: 5,
      location: "Maradi",
      completedDate: "Avril 2024"
    },
    {
      id: 5,
      name: "Aissata Ousmane",
      role: "Formatrice",
      project: "Formation Gestion de l'Eau",
      content: "Excellente formation qui combine théorie et pratique. Je recommande vivement à tous ceux qui veulent faire la différence.",
      avatar: "/images/testimonial5.jpg",
      rating: 5,
      location: "Tillabéri",
      completedDate: "Mai 2024"
    },
    {
      id: 6,
      name: "Harouna Maman",
      role: "Menuisier",
      project: "Formation Menuiserie Locale",
      content: "Les techniques traditionnelles mélangées aux méthodes modernes : c'est exactement ce dont j'avais besoin pour développer mon activité.",
      avatar: "/images/testimonial6.jpg",
      rating: 5,
      location: "Zinder",
      completedDate: "Juin 2024"
    }
  ];

  // Duplication pour un défilement infini
  const carouselItems = [...testimonials, ...testimonials];

  return (
    <section className="py-16 bg-gradient-to-br from-[#F5F5F5] to-white relative overflow-hidden" id="testimonials">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyRTVBMjciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Titre */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Quote className="w-6 h-6 text-[#2E5A27]" />
            <span className="inline-block px-4 py-2 bg-[#2E5A27]/10 text-[#2E5A27] text-sm font-semibold rounded-full">
              TÉMOIGNAGES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Ce que disent nos <span className="text-[#2E5A27]">participants</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de ceux qui ont transformé leur carrière grâce à nos formations
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-[#2E5A27] mb-2">500+</div>
            <div className="text-gray-600">Participants formés</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-[#2E5A27] mb-2">4.8</div>
            <div className="text-gray-600">Note moyenne</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-[#2E5A27] mb-2">95%</div>
            <div className="text-gray-600">Taux de satisfaction</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-[#2E5A27] mb-2">12</div>
            <div className="text-gray-600">Formations actives</div>
          </div>
        </div>

        {/* Carrousel */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="flex animate-scroll gap-6 py-4">
            {carouselItems.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 border border-gray-100 group"
              >
                {/* Header avec photo et infos */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2E5A27] to-[#556331] flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#2E5A27] text-lg group-hover:text-[#556331] transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.location} • {testimonial.completedDate}</p>
                  </div>
                </div>

                {/* Note */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(5.0)</span>
                </div>

                {/* Citation */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-[#2E5A27]/20 absolute -top-2 -left-2" />
                  <blockquote className="text-gray-700 italic leading-relaxed pl-4">
                    "{testimonial.content}"
                  </blockquote>
                </div>

                {/* Formation */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="bg-[#2E5A27]/5 px-3 py-2 rounded-full text-xs text-[#2E5A27] font-medium inline-block">
                    📚 {testimonial.project}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradients pour effet de fondu */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F5F5F5] via-[#F5F5F5] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-10" />
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Vous aussi, transformez votre avenir</h3>
            <p className="text-gray-600 mb-6">
              Rejoignez nos formations et développez des compétences qui feront la différence
            </p>
            <button className="bg-[#2E5A27] hover:bg-[#2E5A27]/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Découvrir nos formations
            </button>
          </div>
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
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group:hover .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
