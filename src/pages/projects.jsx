
import React, { useRef, useState, useEffect } from 'react';
import { Map, Trees, Droplets, Zap, CircuitBoard, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectsListSection = () => {
  const ref = useRef();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  // Map project types to icons and colors
  const projectTypeConfig = {
    Développement: {
      icon: <CircuitBoard className="w-8 h-8" />,
      color: "from-[#be9838] to-[#d4b152]",
      gradient: "from-[#be9838]/10 via-[#be9838]/5 to-transparent"
    },
    Infrastructure: {
      icon: <Map className="w-8 h-8" />,
      color: "from-[#556331] to-[#6a7a4a]",
      gradient: "from-[#556331]/10 via-[#556331]/5 to-transparent"
    },
    Innovation: {
      icon: <Zap className="w-8 h-8" />,
      color: "from-[#8a9e5b] to-[#a3b775]",
      gradient: "from-[#8a9e5b]/10 via-[#8a9e5b]/5 to-transparent"
    },
    Recherche: {
      icon: <Droplets className="w-8 h-8" />,
      color: "from-[#be9838] to-[#d4b152]",
      gradient: "from-[#be9838]/10 via-[#be9838]/5 to-transparent"
    }
  };

  // Fetch projects from the API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://alphatek.fr:3008/api/projects/project');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        
        // Process projects to handle image_url
        const processedProjects = data.projects.map(project => {
          let images = [];
          try {
            if (typeof project.image_url === 'string') {
              if (project.image_url.startsWith('[') || project.image_url.startsWith('{')) {
                const parsed = JSON.parse(project.image_url);
                images = Array.isArray(parsed) ? parsed : [parsed];
              } else {
                images = [project.image_url];
              }
            }
          } catch (e) {
            console.error('Error parsing image_url:', e);
            images = ['https://via.placeholder.com/600x400'];
          }

          images = images.map(image => 
            image.startsWith('http') ? image : `https://alphatek.fr:3008${image}`
          );

          return {
            ...project,
            images,
            ...projectTypeConfig[project.project_type] || projectTypeConfig.Développement
          };
        });

        setCurrentImageIndices(processedProjects.reduce((acc, project) => ({
          ...acc,
          [project.id]: 0
        }), {}));

        setProjects(processedProjects);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Handle image navigation
  const nextImage = (projectId, imageCount) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % imageCount
    }));
  };

  const prevImage = (projectId, imageCount) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + imageCount) % imageCount
    }));
  };

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    },
    hover: {
      y: -20,
      scale: 1.03,
      rotateX: 5,
      boxShadow: "0 35px 80px -15px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-[#be9838] text-xl font-mono">Chargement...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-[#be9838] text-xl font-mono">Erreur : {error}</div>
      </div>
    );
  }

  return (
    
    <div className="min-h-screen flex flex-col bg-black overflow-hidden" ref={ref}>
      {/* Navbar */}
      
      <Navbar className="bg-black/80 backdrop-blur-xl border-b border-[#be9838]/20" />
    <br /><br /><br /><br /><br /><br />
      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-black via-gray-900 to-black relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24">
            <br /><br />
          {/* Projects Title - Directly under Navbar */}
          <motion.section
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="text-center" variants={fadeIn}>
              <motion.span 
                className="inline-block text-[#be9838] font-medium mb-6 tracking-wider text-lg"
                variants={fadeIn} // Fixed typo: fadeeIn → fadeIn
              ><br /><br /><br />
                <Zap className="inline w-5 h-5 mr-2" />
                NOS PROJETS
              </motion.span>
              <motion.h3 
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                variants={fadeIn}
              >
                Nos <span className="relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#be9838] to-[#d4b152]">
                  réalisations
                  <motion.svg 
                    className="absolute left-0 bottom-0 w-full h-4 -z-10"
                    viewBox="0 0 200 20"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  >
                    <motion.path 
                      d="M0 10 Q 100 20 200 10" 
                      stroke="#be9838" 
                      strokeWidth="8" 
                      strokeLinecap="round"
                      fill="none"
                      strokeOpacity="0.3"
                    />
                  </motion.svg>
                </span>
              </motion.h3>
            </motion.div>
          </motion.section>

          {/* Projects List */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative group"
                  variants={cardAnimation}
                  whileHover="hover"
                >
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-[#be9838]/20 h-full rounded-2xl shadow-2xl overflow-hidden">
                    <div className="relative h-48 bg-cover bg-center">
                      <div 
                        className="w-full h-full bg-cover bg-center transition-all duration-500"
                        style={{ backgroundImage: `url(${project.images[currentImageIndices[project.id] || 0]})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                      {project.images.length > 1 && (
                        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-2">
                          <button
                            onClick={() => prevImage(project.id, project.images.length)}
                            className="bg-black/50 p-2 rounded-full text-white hover:bg-[#be9838]/50 transition-colors"
                            aria-label="Image précédente"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => nextImage(project.id, project.images.length)}
                            className="bg-black/50 p-2 rounded-full text-white hover:bg-[#be9838]/50 transition-colors"
                            aria-label="Image suivante"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="p-8">
                      <div className={`bg-gradient-to-br ${project.color} p-4 rounded-xl inline-flex mb-6 text-white shadow-xl`}>
                        {project.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">
                        {project.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex items-center text-[#be9838] text-sm font-mono">
                        <div className="w-2 h-2 bg-[#be9838] rounded-full mr-2 animate-pulse" />
                        PROJET ACTIF
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <Footer className="bg-black/80 backdrop-blur-xl border-t border-[#be9838]/20" />
    </div>
  );
};

export default ProjectsListSection;
