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
      title: "Cadastre Numérisé",
      category: "Numérique",
      description: "Levés cadastraux précis avec drones et LiDAR pour une gestion foncière efficace au Niger (Page 20).",
      image: "https://images.unsplash.com/photo-1628595350929-1816db9bf9f2?q=80&w=800&auto=format&fit=crop", // Drone aerial view
    },
    {
      id: 2,
      title: "Logements Résilients",
      category: "Technique",
      description: "Construction de logements adaptés aux inondations et à la chaleur extrême avec matériaux locaux (Page 21).",
      image: "https://images.unsplash.com/photo-1590074072786-a66914d668f1?q=80&w=800&auto=format&fit=crop", // Sustainable housing in arid area
    },
    {
      id: 3,
      title: "Projet Pilote Niamey",
      category: "Urbanisme",
      description: "Quartier Francophonie : développement de logements durables et bioclimatiques à Niamey (Page 25).",
      image: "https://images.unsplash.com/photo-1560184611-5b5749138c3c?q=80&w=800&auto=format&fit=crop", // Modern eco-friendly residential area
    },
    {
      id: 4,
      title: "Matériaux Écologiques",
      category: "R&D",
      description: "Production de blocs de terre stabilisée et bétons biosourcés pour un habitat abordable (Page 13).",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop", // Construction with natural materials
    },
    {
      id: 5,
      title: "Formation Artisans",
      category: "Formation",
      description: "Transfert de compétences aux artisans locaux pour des techniques de construction durable (Page 16).",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800&auto=format&fit=crop", // Workers training on-site
    },
    {
      id: 6,
      title: "Plan Économique",
      category: "Économie",
      description: "Modèle financier pour logements abordables, visant +15% d’offre en 5 ans (Page 22).",
      image: "https://images.unsplash.com/photo-1459257831348-f51f207c9e39?q=80&w=800&auto=format&fit=crop", // Financial planning or community development
    },
  ];

  const categories = ['Tous', ...new Set(projects.map((project) => project.category))];

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
    <section className="py-20 bg-[#D4A017]/10" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#2E5A27]">Nos Projets au Niger</h2>
            <div className="h-1 w-20 bg-[#2E5A27] mt-2 mb-4"></div>
            <p className="text-lg text-foreground/80 max-w-2xl">
              Découvrez nos initiatives pour un habitat durable et résilient au Sahel.
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

        <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setActiveIndex(0);
                scrollToIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[#2E5A27] text-white'
                  : 'bg-gray-100 text-[#2E5A27] hover:bg-[#2E5A27]/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block px-3 py-1 bg-[#D4A017]/90 text-black text-sm rounded-full mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-foreground/80 text-sm mb-4">{project.description}</p>
                    <Button
                      variant="outline"
                      className="border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-black transition-colors text-sm"
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
                  index === activeIndex ? 'bg-[#D4A017]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/80 text-white transition-colors">
            Tous nos projets
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;