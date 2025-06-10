import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, X, Download, ChevronRight, Play, Pause, TrendingUp, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectHeroCarousel3D = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const progressIntervalRef = useRef(null);

  useEffect(() => {
    console.log("Loading Eco2lodgy projects...");
    const eco2lodgyProjects = [
      {
        id: 1,
        title: "Cadastre Numérisé pour le Niger",
        project_type: "foncier",
        description: "Digitalisation foncière innovante débutant à Niamey, extensible à l'échelle nationale.",
        full_description: "Ce projet pilote dans le quartier Aéroport de Niamey établit un standard de digitalisation foncière pour le Niger, avec un potentiel d'expansion régionale. Il offre un ROI de 118.8% dès la première année et des revenus récurrents de 136.4 M CFA.",
        image_url: "https://www.cityandyou.com/blog/wp-content/uploads/2020/06/Cadastre-990x558.jpg",
        secondary_image1: "https://geomindsafrica.com/wp-content/uploads/2023/08/2_Cadastre-et-Foncier-1024x707.jpg",
        secondary_image2: "https://www.surfaceparcelle.com/media/blogImages/01_cadastre_cover.jpg",
        secondary_image3: null,
        technologies: ["Digitalisation foncière", "Technologie géospatiale", "Systèmes d'information"],
        links: [{ type: "website", url: "/brochure/cadastre-numerise.pdf" }],
        stats: [
          { label: "Investissement", value: "1.60 G CFA" },
          { label: "ROI Année 1", value: "118.8%" },
          { label: "Profit Année 1", value: "1.14 G CFA" },
        ],
        financials: [
          { year: 1, revenue: "1.14 G CFA", profit: "1.14 G CFA", roi: "118.8%" },
          { year: 2, revenue: "136.4 M CFA", profit: "136.4 M CFA", roi: "14.2%" },
        ],
        location: "Niamey, Niger",
        duration: "2024-2026"
      },
      {
        id: 2,
        title: "Développement Immobilier Premium",
        project_type: "immobilier",
        description: "Logements haut de gamme pour la diaspora et la classe moyenne-supérieure.",
        full_description: "Ce projet répond à la demande croissante de logements de qualité au Niger, ciblant la diaspora, les expatriés et les entreprises. Il offre un rendement locatif de 10-14% et des plus-values de 35-50%.",
        image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        secondary_image1: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        secondary_image2: "https://images.unsplash.com/photo-1600585152915-18cffe6b0060?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        secondary_image3: null,
        technologies: ["Construction durable", "Matériaux biosourcés", "Architecture moderne"],
        links: [{ type: "website", url: "/images/brochure.pdf" }],
        stats: [
          { label: "Investissement", value: "500 M CFA" },
          { label: "ROI Année 4", value: "27%" },
          { label: "Rendement", value: "10-14%" },
        ],
        financials: [
          { year: 1, revenue: "179.7 M CFA", profit: "-51.8 M CFA", roi: "-6%" },
          { year: 2, revenue: "320 M CFA", profit: "62.3 M CFA", roi: "80%" },
          { year: 3, revenue: "409 “‘M CFA", profit: "80 M CFA", roi: "24.6%" },
          { year: 4, revenue: "449.9 M CFA", profit: "68.2 M CFA", roi: "27%" },
        ],
        location: "Niamey, Niger",
        duration: "2024-2028"
      },
      {
        id: 3,
        title: "Construction Innovants et Écologiques",
        project_type: "construction",
        description: "Production de briques en terre compressée pour une construction durable.",
        full_description: "Premier laboratoire industriel de matériaux écologiques au Niger, ce projet utilise des briques en terre compressée (BTC) et des matériaux biosourcés, offrant un ROI de 90% en année 5.",
        image_url: "/images/2a.jpg",
        secondary_image1: "/images/2b.jpg",
        secondary_image2: "/images/2c.jpg",
        secondary_image3: "/images/2d.jpg",
        secondary_image4: "/images/2e.jpg",
        secondary_image5: "/images/2f.jpg",
        secondary_image6: "/images/2g.jpg",
        secondary_image7: "/images/2h.jpg",
        secondary_image8: "/images/2i.jpg",
        secondary_image9: "/images/2j.jpg",
        secondary_image10: "/images/2k.jpg",
        technologies: ["Briques en terre compressée", "Matériaux biosourcés", "R&D écologique"],
        links: [{ type: "website", url: "/images/brochure.pdf" }],
        stats: [
          { label: "Investissement", value: "200 M CFA" },
          { label: "ROI Année 5", value: "90%" },
          { label: "Revenus Année 1", value: "28.2 M CFA" },
        ],
        financials: [
          { year:3, revenue: "28.2 M CFA", profit: "28.2 M CFA", roi: "14.1%" },
          { year: 5, revenue: "N/A", profit: "N/A", roi: "90%" },
        ],
        location: "Niger",
        duration: "2024-2029"
      },
      {
        id: 4,
        title: "Projet Solaire Niger",
        project_type: "énergie",
        description: "Énergie solaire compétitive exploitant l'ensoleillement exceptionnel du Niger.",
        full_description: "Avec un ensoleillement de 2200-2600 kWh/m²/an, ce projet répond à la faible électrification (15%) du Niger, offrant un TRI de 49.2% en année 5 et un potentiel de valorisation x3-x5.",
        image_url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        secondary_image1: "https://cdn.prod.website-files.com/63ca74be7d71b6c128d7ac1e/63e2609b2f23e9ecf60b6fd2_installation-de-panneaux-solaires-sur-un-terrain-non-constructible-2240x1496%20(1).jpeg",
        secondary_image2: "https://www.colibri.solar/wp-content/uploads/2021/04/Ce-quil-faut-savoir-sur-les-champs-solaires-1.jpg",
        secondary_image3: "https://www.boralex.com/sites/default/files/styles/project_technical_image/public/2024-10/13.jpg.webp?itok=70A2LpN8",
        technologies: ["Panneaux solaires", "Stockage d'énergie", "Réseau intelligent"],
        links: [{ type: "website", url: "/images/brochure.pdf" }],
        stats: [
          { label: "Investissement", value: "300 M CFA" },
          { label: "ROI Année 5", value: "49.2%" },
          { label: "Revenus Année 5", value: "295 M CFA" },
        ],
        financials: [
          { year: 1, revenue: "85.3 M CFA", profit: "21 M CFA", roi: "7%" },
          { year: 2, revenue: "120 M CFA", profit: "42 M CFA", roi: "14%" },
          { year: 3, revenue: "179.7 M CFA", profit: "72.1 M CFA", roi: "24%" },
          { year: 4, revenue: "240 M CFA", profit: "108.2 M CFA", roi: "36%" },
          { year: 5, revenue: "295 M CFA", profit: "147.6 M CFA", roi: "49.2%" },
        ],
        location: "Niger",
        duration: "2024-2029"
      },
      {
        id: 5,
        title: "Agriculture Intensive Irriguée",
        project_type: "agriculture",
        description: "Périmètre irrigué moderne pour une agriculture à haut rendement.",
        full_description: "Ce projet développe un périmètre irrigué de 5 hectares (extensible à 40) avec des technologies modernes, offrant des rendements trois fois supérieurs aux méthodes traditionnelles et un TRI de 35.8% sur 5 ans.",
        image_url: "https://www.agrimaroc.ma/wp-content/uploads/BAD-pr%C3%AAt-88-millions-dollars-Maroc.jpg",
        secondary_image1: "https://burkina24.com/wp-content/uploads/2025/03/cf9b2108-db19-4485-b1a4-f7d91c458b92-1024x682.jpeg",
        secondary_image2: "https://img.20mn.fr/xcwtrhQvRCyYsaERsfpoxyk/1444x920_vue-aerienne-d-un-systeme-d-irrigation-d-un-champs-d-un-champs-de-ble-dans-l-est-de-la-france-le-26-juin-2023",
        secondary_image3: "https://novagric.com/wp-content/uploads/Novagric-Project-desert-13.jpg",
        technologies: ["Irrigation moderne", "Agriculture intensive", "Ressources hydriques"],
        links: [{ type: "website", url: "/images/brochure.pdf" }],
        stats: [
          { label: "Investissement", value: "147.6 M CFA" },
          { label: "ROI Année 5", value: "56.7%" },
          { label: "Surface", value: "5 hectares" },
        ],
        financials: [
          { year: 1, revenue: "19.7 M CFA", profit: "11.8 M CFA", roi: "8%" },
          { year: 2, revenue: "162 M CFA", profit: "42 M CFA", roi: "28%" },
          { year: 3, revenue: "209.9 M CFA", profit: "57.7 M CFA", roi: "38.7%" },
          { year: 4, revenue: "244.7 M CFA", profit: "72.1 M CFA", roi: "48%" },
          { year: 5, revenue: "280 M CFA", profit: "85.3 M CFA", roi: "56.7%" },
        ],
        location: "Niger",
        duration: "2024-2029"
      },
    ];

    const formattedProjects = eco2lodgyProjects.map((project) => ({
      id: project.id,
      title: project.title,
      category: project.project_type.charAt(0).toUpperCase() + project.project_type.slice(1),
      description: project.description,
      fullDescription: project.full_description,
      image: project.image_url,
      secondaryImages: [
        project.secondary_image1,
        project.secondary_image2,
        project.secondary_image3,
      ].filter((img) => img !== null && img !== project.image_url),
      technologies: project.technologies,
      links: project.links,
      stats: project.stats,
      financials: project.financials,
      location: project.location,
      duration: project.duration
    }));

    console.log("Projects set:", formattedProjects);
    setProjects(formattedProjects);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (projects.length > 1 && !isHovered && isPlaying) {
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
            return 0;
          }
          return prev + 100 / (5000 / 100);
        });
      }, 100);
      return () => clearInterval(progressIntervalRef.current);
    }
  }, [projects, isHovered, activeIndex, isPlaying]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setProgress(0);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setProgress(0);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setActiveTab('overview');
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Foncier': '#2E7D32',
      'Immobilier': '#2E7D32',
      'Construction': '#2E7D32',
      'Énergie': '#2E7D32',
      'Agriculture': '#2E7D32'
    };
    return colors[category] || 'gray-500';
  };

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-slate-900 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center p-6 sm:p-8 md:p-12 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#FBC02D] border-t-transparent rounded-full animate-spin mx-auto mb-4 sm:mb-6"></div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Chargement...</h3>
          <p className="text-sm sm:text-base text-[#FBC02D]">Préparation des projets Eco2lodgy</p>
        </motion.div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center p-6 sm:p-8 md:p-12 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl max-w-md border border-white/20 w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-400 mb-4">Erreur</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6">{error}</p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
          >
            Réessayer
          </Button>
        </motion.div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-slate-900 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center p-6 sm:p-8 md:p-12 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl max-w-md border border-white/20 w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Aucun projet</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6">Revenez bientôt pour découvrir nos initiatives !</p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-[#FBC02D] hover:bg-[#F9A825] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
          >
            Actualiser
          </Button>
        </motion.div>
      </section>
    );
  }

  if (!projects[activeIndex]) {
    return null;
  }

  return (
    <section className="min-h-screen bg-slate-900 py-8 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-[#FBC02D]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#2E7D32]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-[#FBC02D]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-[#2E7D32] to-[#FBC02D] bg-clip-text text-transparent">
            Nos Projets
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
            Construisons ensemble une Afrique durable et prospère
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[activeIndex].id}
              className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20 overflow-hidden"
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -15 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12">
                <div className="lg:w-1/2 relative group">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={projects[activeIndex].image}
                      alt={projects[activeIndex].title}
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className={`absolute top-2 sm:top-4 left-2 sm:left-4 px-3 sm:px-4 py-1 sm:py-2 bg-[${getCategoryColor(projects[activeIndex].category)}] rounded-full shadow-lg`}>
                      <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">
                        {projects[activeIndex].category}
                      </span>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:w-1/2 space-y-4 sm:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                      {projects[activeIndex].title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                      {projects[activeIndex].description}
                    </p>
                  </motion.div>

                  <motion.div 
                    className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                      <MapPin className="h-3 sm:h-4 w-3 sm:w-4 text-[#FBC02D]" />
                      <span className="text-white text-xs sm:text-sm">{projects[activeIndex].location}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                      <Calendar className="h-3 sm:h-4 w-3 sm:w-4 text-[#FBC02D]" />
                      <span className="text-white text-xs sm:text-sm">{projects[activeIndex].duration}</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {projects[activeIndex].technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1 sm:py-2 bg-[#2E7D32]/20 text-[#FBC02D] rounded-full text-xs sm:text-sm font-medium border border-[#2E7D32]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {projects[activeIndex].stats.map((stat, i) => (
                      <div key={i} className="text-center p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center justify-center mb-2">
                          <TrendingUp className="h-4 sm:h-5 w-4 sm:w-5 text-[#FBC02D] mr-2" />
                          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">{stat.value}</p>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</p>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button
                      onClick={() => openProjectModal(projects[activeIndex])}
                      className="bg-gradient-to-r from-[#2E7D32] to-[#FBC02D] hover:from-[#276D2A] hover:to-[#F9A825] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Découvrir le projet <ChevronRight className="h-4 sm:h-5 w-4 sm:w-5" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg p-3 sm:p-4 rounded-full shadow-lg hover:bg-white/20 text-white transition-all duration-300 border border-white/20 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 sm:h-6 w-5 sm:w-6" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg p-3 sm:p-4 rounded-full shadow-lg hover:bg-white/20 text-white transition-all duration-300 border border-white/20 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6" />
          </motion.button>
        </div>

        <div className="mt-8 sm:mt-12 max-w-full sm:max-w-xl md:max-w-2xl mx-auto">
          <div className="h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden mb-4 sm:mb-6 backdrop-blur-lg border border-white/20">
            <motion.div
              className="h-full bg-[#2E7D32] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex gap-2 sm:gap-3">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-[#2E7D32] shadow-lg' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={togglePlayPause}
              className="bg-white/10 backdrop-blur-lg p-2 sm:p-3 rounded-full shadow-lg hover:bg-white/20 text-white transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <Pause className="h-4 sm:h-5 w-4 sm:w-5" /> : <Play className="h-4 sm:h-5 w-4 sm:w-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-3xl w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20"
              initial={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="sticky top-0 bg-white/10 backdrop-blur-lg p-4 sm:p-6 border-b border-white/20 z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`px-3 sm:px-4 py-1 sm:py-2 bg-[${getCategoryColor(selectedProject.category)}] rounded-full shadow-lg`}>
                      <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">
                        {selectedProject.category}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                  </div>
                  <motion.button
                    onClick={closeProjectModal}
                    className="p-2 sm:p-3 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500/30 transition-all duration-300 border border-red-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="h-5 sm:h-6 w-5 sm:w-6" />
                  </motion.button>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                  {[
                    { id: 'overview', label: 'Aperçu' },
                    { id: 'financials', label: 'Finances' },
                    { id: 'images', label: 'Galerie' }
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-[#2E7D32] text-white shadow-lg'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tab.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 sm:space-y-8"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Description du projet</h3>
                          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                            {selectedProject.fullDescription}
                          </p>
                          
                          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                            <div className="flex items-center gap-3 bg-white/5 p-3 sm:p-4 rounded-xl">
                              <MapPin className="h-4 sm:h-5 w-4 sm:w-5 text-[#FBC02D]" />
                              <div>
                                <p className="text-xs sm:text-sm text-gray-400">Localisation</p>
                                <p className="text-white font-medium text-sm sm:text-base">{selectedProject.location}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 p-3 sm:p-4 rounded-xl">
                              <Calendar className="h-4 sm:h-5 w-4 sm:w-5 text-[#FBC02D]" />
                              <div>
                                <p className="text-xs sm:text-sm text-gray-400">Durée</p>
                                <p className="text-white font-medium text-sm sm:text-base">{selectedProject.duration}</p>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4 sm:mb-6">
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Technologies utilisées</h4>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                              {selectedProject.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 sm:px-4 py-1 sm:py-2 bg-[#2E7D32]/20 text-[#FBC02D] rounded-full text-xs sm:text-sm font-medium border border-[#2E7D32]/30"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Statistiques clés</h3>
                          <div className="grid gap-3 sm:gap-4">
                            {selectedProject.stats.map((stat, i) => (
                              <motion.div
                                key={i}
                                className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-xs sm:text-sm text-gray-400 mb-1">{stat.label}</p>
                                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                                  </div>
                                  <TrendingUp className="h-6 sm:h-8 w-6 sm:w-8 text-[#FBC02D]" />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {selectedProject.links?.length > 0 && (
                        <motion.div
                          className="text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Button
                            asChild
                            className="bg-gradient-to-r from-[#2E7D32] to-[#FBC02D] hover:from-[#276D2A] hover:to-[#F9A825] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 mx-auto"
                          >
                            <a href={selectedProject.links[0].url} target="_blank" rel="noopener noreferrer">
                              <Download className="h-4 sm:h-5 w-4 sm:w-5" />
                              Télécharger la brochure
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === 'financials' && (
                    <motion.div
                      key="financials"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 sm:space-y-8"
                    >
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
                        Données Financières
                      </h3>
                      {selectedProject.financials?.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                          {selectedProject.financials.map((fin, i) => (
                            <motion.div
                              key={i}
                              className="bg-white/10 p-4 sm:p-6 rounded-2xl shadow-lg border border-white/20"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              whileHover={{ scale: 1.05, y: -5 }}
                            >
                              <div className="text-center mb-3 sm:mb-4">
                                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                                  <span className="text-white font-bold text-base sm:text-xl">A{fin.year}</span>
                                </div>
                                <h4 className="text-base sm:text-lg font-semibold text-white">Année {fin.year}</h4>
                              </div>
                              
                              <div className="space-y-2 sm:space-y-3">
                                <div className="bg-white/5 p-2 sm:p-3 rounded-lg">
                                  <p className="text-xs sm:text-sm text-gray-400">Revenus</p>
                                  <p className="text-[#FBC02D] font-bold text-lg sm:text-xl">{fin.revenue !== "N/A" ? fin.revenue : "Non disponible"}</p>
                                </div>
                                <div className="bg-white/5 p-2 sm:p-3 rounded-lg">
                                  <p className="text-xs sm:text-sm text-gray-400">Profit</p>
                                  <p className="text-[#FBC02D] font-bold text-lg sm:text-xl">{fin.profit !== "N/A" ? fin.profit : "Non disponible"}</p>
                                </div>
                                <div className="bg-white/5 p-2 sm:p-3 rounded-lg">
                                  <p className="text-xs sm:text-sm text-gray-400">ROI</p>
                                  <p className="text-[#FBC02D] font-bold text-lg sm:text-xl">{fin.roi}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 sm:py-12">
                          <div className="w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"></div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-400">Aucune donnée financière disponible pour le moment.</p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === 'images' && (
                    <motion.div
                      key="images"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 sm:space-y-8"
                    >
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
                        Galerie du projet
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <motion.div
                          className="relative group overflow-hidden rounded-2xl"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                              <p className="text-white font-semibold text-sm sm:text-base">Image principale</p>
                            </div>
                          </div>
                        </motion.div>
                        
                        {selectedProject.secondaryImages.map((img, i) => (
                          <motion.div
                            key={i}
                            className="relative group overflow-hidden rounded-2xl"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                          >
                            <img
                              src={img}
                              alt={`Détail ${i + 1}`}
                              className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                                <p className="text-white font-semibold text-sm sm:text-base">Détail {i + 1}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {selectedProject.secondaryImages.length === 0 && (
                        <div className="text-center py-8 sm:py-12">
                          <div className="w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"></div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-400">Plus d'images seront bientôt disponibles.</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectHeroCarousel3D;