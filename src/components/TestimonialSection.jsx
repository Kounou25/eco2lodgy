
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sophie Durand",
      role: "Propriétaire",
      project: "Résidence Eco-Valley",
      content: "Eco2lodgy a transformé notre vision en une réalité qui dépasse nos attentes. Leur approche combinant architecture durable et solutions numériques a créé une maison à la fois belle, fonctionnelle et économe en énergie.",
      avatar: "/images/testimonial1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Marc Leroux",
      role: "Directeur Général",
      project: "Siège Social GreenTech",
      content: "Le professionnalisme et l'expertise de l'équipe Eco2lodgy nous ont impressionnés. Ils ont su comprendre les besoins spécifiques de notre entreprise et proposer des solutions innovantes qui reflètent parfaitement notre identité.",
      avatar: "/images/testimonial2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Nadia Bensalem",
      role: "Investisseur Immobilier",
      project: "Complexe The Sustainable",
      content: "Travailler avec Eco2lodgy a été une expérience exceptionnelle. Leur vision globale, alliant architecture, ingénierie et solutions numériques, a permis de maximiser la valeur de notre investissement tout en créant un projet durable.",
      avatar: "/images/testimonial3.jpg",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-eco-green/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ce Que Disent Nos Clients</h2>
          <div className="h-1 w-20 bg-eco-green mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            La satisfaction de nos clients est notre priorité absolue. Découvrez leurs témoignages.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="flex space-x-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-5 h-5" 
                            fill={i < testimonial.rating ? "currentColor" : "none"} 
                          />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-xl md:text-2xl italic text-foreground/90 mb-8">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-eco-green"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{testimonial.name}</div>
                        <div className="text-foreground/70">{testimonial.role}</div>
                        <div className="text-eco-green text-sm">{testimonial.project}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="hover:bg-eco-green hover:text-white border-eco-green text-eco-green rounded-full transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="hover:bg-eco-green hover:text-white border-eco-green text-eco-green rounded-full transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-eco-green' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
