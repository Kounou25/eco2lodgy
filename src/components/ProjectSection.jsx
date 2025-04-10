import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const sliderRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Résidence Eco-Valley",
      category: "Architecture Résidentielle",
      description: "Un ensemble résidentiel moderne avec solutions écologiques.",
      image: "/images/archi.jpg",
    },
    {
      id: 2,
      title: "Tour Green Square",
      category: "Architecture Commerciale",
      description: "Un immeuble de bureaux à énergie positive.",
      image: "/images/anec2.jpg",
    },
    {
      id: 3,
      title: "App Immobilière 360°",
      category: "Solution Numérique",
      description: "Visite virtuelle immersive avec réalité augmentée.",
      image: "/images/anec3.jpg",
    },
    {
      id: 4,
      title: "Complexe The Sustainable",
      category: "Promotion Immobilière",
      description: "Quartier mixte durable avec logements et commerces.",
      image: "/images/anec5.jpg",
    },
  ];

  // Liste unique des catégories + "Tous"
  const categories = ['Tous', ...new Set(projects.map((project) => project.category))];

  // Filtrer les projets selon la catégorie sélectionnée
  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % filteredProjects.length;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
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
        {/* Titre et Filtre */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#2E5A27]">Nos Derniers Projets</h2>
            <div className="h-1 w-20 bg-[#2E5A27] mt-2 mb-4"></div>
            <p className="text-lg text-foreground/80 max-w-2xl">
              Explorez nos projets selon vos centres d’intérêt.
            </p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
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

        {/* Filtre par catégorie */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setActiveIndex(0); // Réinitialiser l'index lors du changement de filtre
                scrollToIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[#2E5A27] text-white'
                  : 'bg-gray-100 text-[#2E5A27] hover:bg-[#2E5A27]/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carrousel */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-item min-w-[300px] md:min-w-[400px] lg:min-w-[500px] flex-shrink-0 snap-center"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full transform transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative h-[250px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block px-3 py-1 bg-[#2E5A27]/90 text-white text-sm rounded-full mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-foreground/80 text-sm mb-4">{project.description}</p>
                    <Button
                      variant="outline"
                      className="border-[#2E5A27] text-[#2E5A27] hover:bg-[#2E5A27] hover:text-white transition-colors text-sm"
                    >
                      Voir le projet
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateurs */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-[#2E5A27]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bouton Tous les projets */}
        <div className="text-center mt-8">
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