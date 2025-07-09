import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to format date
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://alphatek.fr:3008/api/testimonials/');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        
        // Map API data to the required format
        const formattedTestimonials = data.map(item => ({
          id: item.id,
          name: item.name,
          role: item.job_title,
          project: item.formation_title,
          content: item.testimonial,
          avatar: item.profile_image_url,
          rating: 5, // Rating not provided in API, defaulting to 5
          location: item.city,
          completedDate: formatDate(item.created_at)
        }));

        setTestimonials(formattedTestimonials);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des témoignages');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Duplication for infinite scrolling
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

        {/* Loading and Error States */}
        {isLoading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#2E5A27] border-t-transparent"></div>
            <span className="ml-4 text-lg text-gray-600">Chargement des témoignages...</span>
          </div>
        )}
        {error && <div className="text-center text-red-600">{error}</div>}

        {/* Stats Section */}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-[#2E5A27] mb-2">{testimonials.length}+</div>
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
        )}

        {/* Carrousel */}
        {!isLoading && !error && testimonials.length > 0 && (
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
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name} avatar`}
                        className="w-16 h-16 rounded-full object-cover shadow-lg"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.target.outerHTML = `
                            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#2E5A27] to-[#556331] flex items-center justify-center text-white text-xl font-bold shadow-lg">
                              ${testimonial.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          `;
                        }}
                      />
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
        )}

        {/* Call to action */}
        <div className="text-center mt-12">
          
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