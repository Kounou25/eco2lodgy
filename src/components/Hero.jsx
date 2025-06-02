import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Assuming the image is in your public/images folder
const backgroundImage = '/images/2a.jpg';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const elements = [
      { ref: titleRef, delay: 0 },
      { ref: subtitleRef, delay: 200 },
      { ref: descriptionRef, delay: 400 },
      { ref: ctaRef, delay: 600 },
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current.classList.add('animate-slide-up', 'opacity-100');
        }, delay);
      }
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat animate-bg-zoom"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      aria-labelledby="hero-title"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-24 md:py-36 relative z-10 text-center">
        <div className="space-y-10 max-w-4xl mx-auto">
          <h5
            ref={subtitleRef}
            className="text-[#D4A017] text-lg md:text-xl font-semibold uppercase tracking-widest opacity-0 transition-all duration-700"
          >
            Solutions durables pour le Sahel
          </h5>
          <h1
            id="hero-title"
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight opacity-0 transition-all duration-700"
          >
            Transformer le Niger avec des logements résilients
          </h1>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed opacity-0 transition-all duration-700"
          >
            Eco2lodgy lutte contre la crise du logement au Niger en concevant des solutions abordables,
            écologiques et adaptées aux défis climatiques, tout en renforçant les communautés locales.
          </p>
          <div
            ref={ctaRef}
            className="flex flex-wrap gap-6 justify-center opacity-0 transition-all duration-700"
          >
            <a href="#about">
              <Button
                className="bg-[#D4A017] text-black text-lg font-semibold px-10 py-4 rounded-full hover:bg-[#D4A017]/80 transition-all duration-300 group"
                aria-label="Découvrir notre vision"
              >
                Découvrir qui nous sommes
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scrolldown Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <div className="w-8 h-12 rounded-full border-2 border-[#D4A017] flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#D4A017] rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
        <span className="text-[#D4A017] text-sm font-medium mt-3">Explorer</span>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes zoomInOut {
          0% {
            background-size: 100% 100%;
          }
          50% {
            background-size: 110% 110%;
          }
          100% {
            background-size: 100% 100%;
          }
        }
        .animate-slide-up {
          animation: slideUp 0.7s ease-out forwards;
        }
        .animate-bg-zoom {
          animation: zoomInOut 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;