import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Résidence Eco-Valley",
      category: "Architecture Résidentielle",
      description: "Un ensemble résidentiel moderne intégrant des solutions écologiques innovantes et des espaces verts.",
      image: "/images/archi.jpg",
    },
    {
      id: 2,
      title: "Tour Green Square",
      category: "Architecture Commerciale",
      description: "Un immeuble de bureaux à énergie positive, alliant esthétique contemporaine et technologies durables.",
      image: "/images/anec2.jpg",
    },
    {
      id: 3,
      title: "App Immobilière 360°",
      category: "Solution Numérique",
      description: "Application permettant une visite virtuelle immersive de biens immobiliers avec réalité augmentée.",
      image: "/images/anec3.jpg",
    },
    {
      id: 4,
      title: "Complexe The Sustainable",
      category: "Promotion Immobilière",
      description: "Développement d'un quartier mixte intégrant logements, commerces et espaces culturels.",
      image: "/images/anec5.jpg",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    scrollToIndex((activeIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    scrollToIndex((activeIndex - 1 + projects.length) % projects.length);
  };

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.querySelector('.project-item').offsetWidth;
      sliderRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#2E5A27]">Nos Derniers Projets</h2>
            <div className="h-1 w-20 bg-[#2E5A27] mt-4 mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-2xl">
              Découvrez quelques-uns de nos projets récents qui illustrent notre expertise et notre approche.
            </p>
          </div>
          <div className="flex space-x-2 mt-6 md:mt-0">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="hover:bg-[#2E5A27] hover:text-white border-[#2E5A27] text-[#2E5A27] rounded-full transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide} 
              className="hover:bg-[#2E5A27] hover:text-white border-[#2E5A27] text-[#2E5A27] rounded-full transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-500 gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-item min-w-[300px] md:min-w-[400px] lg:min-w-[500px] flex-shrink-0 snap-center"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full transform transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative w-500px] h-[620px] overflow-hidden mx-auto mt-4">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block px-3 py-1 bg-[#2E5A27]/90 text-white text-sm rounded-full mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-foreground/80 mb-4">{project.description}</p>
                    <Button 
                      variant="outline" 
                      className="border-[#2E5A27] text-[#2E5A27] hover:bg-[#2E5A27] hover:text-white transition-colors"
                    >
                      Voir le projet
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-[#2E5A27]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/80 text-white transition-colors">
            Voir tous nos projets
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;