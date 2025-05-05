import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://alphatek.fr:3008/api/projects/');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des projets');
        }
        const data = await response.json();
        // Adaptation des données au format attendu par le composant
        const formattedProjects = data.projects.map(project => ({
          id: project.id,
          title: project.title,
          category: project.project_type.charAt(0).toUpperCase() + project.project_type.slice(1), // Capitalisation du type
          description: project.description,
          image: project.image_url.startsWith('http') 
            ? project.image_url 
            : `https://alphatek.fr:3008${project.image_url}` // Ajout du domaine si l'URL est relative
        }));
        setProjects(formattedProjects);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
      const itemWidth = sliderRef.current.querySelector('.project-item')?.offsetWidth;
      if (itemWidth) {
        sliderRef.current.scrollTo({
          left: index * itemWidth,
          behavior: 'smooth',
        });
      }
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-[#D4A017]/10" id="projects">
        <div className="container mx-auto px-4">
          <p className="text-center">Chargement des projets...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-[#D4A017]/10" id="projects">
        <div className="container mx-auto px-4">
          <p className="text-center text-red-600">Erreur : {error}</p>
        </div>
      </section>
    );
  }

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

        {/* <div className="text-center mt-8">
          <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/80 text-white transition-colors">
            Tous nos projets
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectSection;