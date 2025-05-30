import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, X, Download, Github, ChevronRight, Circle } from 'lucide-react';

const ProjectHeroCarousel3D = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const timeoutRef = useRef(null);
  const controls = useAnimation();

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  useEffect(() => {
    // Données d'exemple pour simuler la réponse de l'API
    const exampleProjects = [
      {
        id: 1,
        title: "Maison Éco-Moderne",
        project_type: "résidentiel",
        description: "Une maison durable construite avec des matériaux locaux et des technologies écologiques.",
        full_description: "Ce projet illustre une maison résidentielle moderne intégrant des panneaux solaires, une isolation en terre crue et un système de récupération d'eau de pluie. Conçu pour minimiser l'empreinte carbone tout en offrant un confort optimal.",
        image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        secondary_image1: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        secondary_image2: "https://images.unsplash.com/photo-1600585152915-18cffe6b0060?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        secondary_image3: "https://images.unsplash.com/photo-1600585153490-0f3b8162a5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        technologies: ["Panneaux solaires", "Terre crue", "Récupération d'eau"],
        links: [
          { type: 'website', url: '/brochure/maison-eco-moderne.pdf' },
          { type: 'github', url: 'https://github.com/alphatek/maison-eco' }
        ],
        stats: [
          { label: 'Impact', value: '1500+ personnes' },
          { label: 'Durée', value: '18 mois' },
          { label: 'Budget', value: '750K €' }
        ],
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 2,
        title: "École Verte",
        project_type: "éducatif",
        description: "Une école durable avec des salles de classe en bois local et un toit végétalisé.",
        full_description: "Ce projet d'école écologique utilise des matériaux recyclés et un toit végétalisé pour réduire la consommation énergétique. Les salles de classe sont conçues pour maximiser la lumière naturelle.",
        image_url: "https://images.unsplash.com/photo-1622547748229-32edcd3b2b07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        secondary_image1: "https://images.unsplash.com/photo-1622547748281-4b6b2f23c4c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        secondary_image2: "https://images.unsplash.com/photo-1622547748302-6b7b2f24c5d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        secondary_image3: null,
        technologies: ["Bois local", "Toit végétalisé", "Éclairage LED"],
        links: [
          { type: 'website', url: '/brochure/ecole-verte.pdf' },
          { type: 'github', url: 'https://github.com/alphatek/ecole-verte' }
        ],
        stats: [
          { label: 'Impact', value: '800+ étudiants' },
          { label: 'Durée', value: '12 mois' },
          { label: 'Budget', value: '500K €' }
        ],
        video_url: null
      },
      {
        id: 3,
        title: "Centre Communautaire",
        project_type: "communautaire",
        description: "Un espace communautaire durable avec des matériaux recyclés et une conception bioclimatique.",
        full_description: "Ce centre communautaire utilise des matériaux recyclés et une conception bioclimatique pour créer un espace inclusif et éco-responsable, adapté aux besoins de la communauté locale.",
        image_url: "https://images.unsplash.com/photo-1593642634443-44c7f7f3b7c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        secondary_image1: "https://images.unsplash.com/photo-1593642634456-55c8f8f4b8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        secondary_image2: null,
        secondary_image3: null,
        technologies: ["Matériaux recyclés", "Conception bioclimatique"],
        links: [
          { type: 'website', url: '/brochure/centre-communautaire.pdf' },
          { type: 'github', url: 'https://github.com/alphatek/centre-communautaire' }
        ],
        stats: [
          { label: 'Impact', value: '2000+ visiteurs' },
          { label: 'Durée', value: '24 mois' },
          { label: 'Budget', value: '1M €' }
        ],
        video_url: null
      }
    ];

    const formattedProjects = exampleProjects.map((project) => ({
      id: project.id,
      title: project.title,
      category: project.project_type.charAt(0).toUpperCase() + project.project_type.slice(1),
      description: project.description,
      fullDescription: project.full_description || project.description,
      image: project.image_url,
      secondaryImages: [
        project.secondary_image1,
        project.secondary_image2,
        project.secondary_image3
      ].filter(img => img !== null && img !== project.image_url),
      technologies: project.technologies,
      links: project.links,
      stats: project.stats,
      videoUrl: project.video_url
    }));

    setProjects(formattedProjects);
    setLoading(false);

    // Commenter la récupération via API pour utiliser les données d'exemple
    /*
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://alphatek.fr:3008/api/projects/');
        if (!response.ok) throw new Error('Erreur lors de la récupération des projets');
        const data = await response.json();
        
        const formattedProjects = data.projects.map((project) => ({
          id: project.id,
          title: project.title,
          category: project.project_type.charAt(0).toUpperCase() + project.project_type.slice(1),
          description: project.description,
          fullDescription: project.full_description || project.description,
          image: project.image_url.startsWith('http') 
            ? project.image_url 
            : `https://alphatek.fr:3008${project.image_url}`,
          secondaryImages: [
            project.secondary_image1 || project.image_url,
            project.secondary_image2 || project.image_url,
            project.secondary_image3 || project.image_url
          ].filter(img => img !== project.image_url),
          technologies: project.technologies || ['Eco-construction', 'Bois local', 'Terre'],
          links: project.links || [
            { type: 'website', url: 'https://example.com' },
            { type: 'github', url: 'https://github.com' }
          ],
          stats: project.stats || [
            { label: 'Impact', value: '1000+ personnes' },
            { label: 'Durée', value: '12 mois' },
            { label: 'Budget', value: '500K €' }
          ],
          videoUrl: project.video_url || null
        }));
        
        setProjects(formattedProjects);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
    */
  }, []);

  useEffect(() => {
    if (projects.length > 1 && !isHovered && !isDragging) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 7000);
      return () => clearTimeout(timeoutRef.current);
    }
  }, [activeIndex, projects, isHovered, isDragging]);

  const nextSlide = () => {
    controls.start({
      x: '-100%',
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }).then(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
      controls.set({ x: '100%', opacity: 0 });
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
      });
    });
    clearTimeout(timeoutRef.current);
  };

  const prevSlide = () => {
    controls.start({
      x: '100%',
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }).then(() => {
      setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
      controls.set({ x: '-100%', opacity: 0 });
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
      });
    });
    clearTimeout(timeoutRef.current);
  };

  const goToSlide = (index) => {
    if (index === activeIndex) return;
    
    const direction = index > activeIndex ? 1 : -1;
    controls.start({
      x: `${direction * 100}%`,
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }).then(() => {
      setActiveIndex(index);
      controls.set({ x: `${direction * -100}%`, opacity: 0 });
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
      });
    });
    clearTimeout(timeoutRef.current);
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const diff = startX - currentX;
    
    if (diff > 100) {
      nextSlide();
      setIsDragging(false);
    } else if (diff < -100) {
      prevSlide();
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    
    const rect = carouselRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    x.set(((e.clientX - centerX) / width) * 150);
    y.set(((e.clientY - centerY) / height) * 150);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (loading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10 p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mx-auto mb-4 border-4 border-t-[#2E5A27] border-r-[#D4A017] border-b-transparent border-l-transparent rounded-full"
          />
          <h3 className="text-2xl font-semibold text-gray-800">Chargement en cours...</h3>
          <p className="text-gray-600 mt-2">Découverte des projets en préparation</p>
        </motion.div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center z-10 p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl max-w-md"
        >
          <h3 className="text-2xl font-semibold text-red-600 mb-4">Erreur</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <Button 
            onClick={() => window.location.reload()} 
            className="bg-[#2E5A27] hover:bg-[#D4A017] text-white px-6 py-3 rounded-lg"
          >
            Réessayer
          </Button>
        </motion.div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center z-10 p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl max-w-md"
        >
          <h3 className="text-2xl font-semibold text-[#2E5A27] mb-4">Aucun projet disponible</h3>
          <p className="text-gray-600 mb-6">Revenez bientôt pour découvrir nos nouveaux projets !</p>
          <Button 
            onClick={() => window.location.reload()} 
            className="bg-[#2E5A27] hover:bg-[#D4A017] text-white px-6 py-3 rounded-lg"
          >
            Actualiser
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#2E5A27]/5"
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 80],
              x: [0, (Math.random() - 0.5) * 80],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col justify-center z-10 py-12">
        {/* Navigation controls */}
        <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12 z-20 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isHovered ? 1 : 0.7, x: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto"
          >
            <Button
              variant="ghost"
              size="lg"
              onClick={prevSlide}
              className="rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-[#2E5A27] shadow-lg h-12 w-12 p-0 group"
              aria-label="Projet précédent"
            >
              <ArrowLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isHovered ? 1 : 0.7, x: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto"
          >
            <Button
              variant="ghost"
              size="lg"
              onClick={nextSlide}
              className="rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-[#2E5A27] shadow-lg h-12 w-12 p-0 group"
              aria-label="Projet suivant"
            >
              <ArrowRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Project showcase */}
        <div 
          className="relative w-full flex items-center justify-center overflow-hidden px-4 md:px-12"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          ref={carouselRef}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[activeIndex]?.id || 'empty'}
              className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              animate={controls}
              initial={{ x: 0, opacity: 1 }}
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1200
              }}
            >
              {/* Project content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
                className="relative z-10 text-center lg:text-left"
              >
                <motion.span
                  className="inline-block px-4 py-1.5 bg-[#D4A017]/20 text-[#D4A017] font-medium rounded-full mb-4 text-sm uppercase tracking-wide"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {projects[activeIndex]?.category}
                </motion.span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  {projects[activeIndex]?.title.split(' ').map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.4 + i * 0.08,
                        type: "spring",
                        stiffness: 120,
                        damping: 12
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>
                
                <motion.p
                  className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {projects[activeIndex]?.description}
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <Button
                    size="lg"
                    className="bg-[#2E5A27] hover:bg-[#D4A017] text-white text-base px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all group"
                    onClick={() => openProjectModal(projects[activeIndex])}
                  >
                    <span className="flex items-center">
                      Découvrir
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#2E5A27] text-[#2E5A27] hover:bg-[#2E5A27]/10 text-base px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    En savoir plus
                  </Button>
                </motion.div>
              </motion.div>

              {/* Project visual */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <div className="relative aspect-[4/3] w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      rotateX,
                      rotateY,
                      transformPerspective: 1200,
                      transformStyle: 'preserve-3d'
                    }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <motion.img
                      src={projects[activeIndex]?.image}
                      alt={projects[activeIndex]?.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 8, ease: "linear" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    
                    {/* Floating technologies */}
                    {projects[activeIndex]?.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        className="absolute bg-white/90 backdrop-blur-sm text-[#2E5A27] px-3 py-1.5 rounded-full text-xs font-medium shadow-md"
                        style={{
                          left: `${15 + (i * 20)}%`,
                          bottom: '8%',
                          zIndex: 10,
                          rotateY: rotateY,
                          rotateX: rotateX
                        }}
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + i * 0.08 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation footer */}
        <motion.div
          className="pt-8 px-4 md:px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative p-2"
                  aria-label={`Aller au projet ${index + 1}`}
                >
                  {index === activeIndex ? (
                    <motion.div
                      layoutId="activeCircle"
                      className="w-2.5 h-2.5 bg-[#D4A017] rounded-full shadow-md"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-1.5 h-1.5 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              {projects[activeIndex]?.stats?.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <p className="text-xl font-semibold text-[#2E5A27]">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeProjectModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative bg-white/95 backdrop-blur-md rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <motion.button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="h-5 w-5 text-gray-700" />
              </motion.button>

              <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                {/* Image Carousel */}
                <div className="space-y-6">
                  <motion.div
                    className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden"
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedProject.activeImage || selectedProject.image}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                      >
                        {selectedProject.videoUrl && !selectedProject.activeImage ? (
                          <iframe
                            src={selectedProject.videoUrl}
                            className="w-full h-full object-cover rounded-xl"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <img
                            src={selectedProject.activeImage || selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    {(selectedProject.secondaryImages.length > 0 || selectedProject.videoUrl) && (
                      <div className="absolute inset-0 flex items-center justify-between px-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            const allImages = [
                              selectedProject.videoUrl ? selectedProject.videoUrl : selectedProject.image,
                              ...selectedProject.secondaryImages
                            ];
                            const currentIndex = selectedProject.activeImage
                              ? allImages.indexOf(selectedProject.activeImage)
                              : 0;
                            const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
                            setSelectedProject({
                              ...selectedProject,
                              activeImage: prevIndex === 0 && selectedProject.videoUrl ? null : allImages[prevIndex]
                            });
                          }}
                          className="rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-[#2E5A27] shadow-lg"
                        >
                          <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            const allImages = [
                              selectedProject.videoUrl ? selectedProject.videoUrl : selectedProject.image,
                              ...selectedProject.secondaryImages
                            ];
                            const currentIndex = selectedProject.activeImage
                              ? allImages.indexOf(selectedProject.activeImage)
                              : 0;
                            const nextIndex = (currentIndex + 1) % allImages.length;
                            setSelectedProject({
                              ...selectedProject,
                              activeImage: nextIndex === 0 && selectedProject.videoUrl ? null : allImages[nextIndex]
                            });
                          }}
                          className="rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-[#2E5A27] shadow-lg"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </Button>
                      </div>
                    )}
                  </motion.div>

                  {/* Thumbnails */}
                  {(selectedProject.secondaryImages.length > 0 || selectedProject.videoUrl) && (
                    <motion.div
                      className="grid grid-cols-4 gap-3"
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedProject.videoUrl && (
                        <motion.div
                          className={`aspect-square rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-all ${
                            !selectedProject.activeImage ? 'ring-2 ring-[#D4A017]' : ''
                          }`}
                          whileHover={{ y: -3 }}
                          onClick={() => setSelectedProject({ ...selectedProject, activeImage: null })}
                        >
                          <img
                            src={selectedProject.image}
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      )}
                      {selectedProject.secondaryImages.map((img, i) => (
                        <motion.div
                          key={i}
                          className={`aspect-square rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-all ${
                            selectedProject.activeImage === img ? 'ring-2 ring-[#D4A017]' : ''
                          }`}
                          whileHover={{ y: -3 }}
                          onClick={() => setSelectedProject({ ...selectedProject, activeImage: img })}
                        >
                          <img
                            src={img}
                            alt={`Détail ${i + 1} - ${selectedProject.title}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="inline-block px-4 py-1.5 bg-[#D4A017]/20 text-[#D4A017] font-medium rounded-full text-sm uppercase tracking-wide">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{selectedProject.fullDescription}</p>
                  </motion.div>

                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1.5 bg-[#2E5A27]/10 text-[#2E5A27] rounded-full text-sm"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {selectedProject.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        className="bg-gray-50 p-4 rounded-lg"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <p className="text-xl font-semibold text-[#2E5A27]">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {selectedProject.links.map((link, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Button
                          asChild
                          variant={link.type === 'website' ? 'default' : 'outline'}
                          className="gap-2 px-5 py-2.5 rounded-lg text-sm"
                        >
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.type === 'website' ? (
                              <>
                                <Download className="h-4 w-4" />
                                Télécharger la brochure
                              </>
                            ) : (
                              <>
                                <Github className="h-4 w-4" />
                                GitHub
                              </>
                            )}
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectHeroCarousel3D;