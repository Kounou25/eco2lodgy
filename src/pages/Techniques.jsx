import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Building2, ShieldCheck, Leaf, Recycle, Home, Ruler, HardHat, DraftingCompass, Cpu, CircuitBoard, CpuIcon, Binary, Network } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SpecialTeamSection from '../components/memberTeam';

const TechnicalDepartmentSection = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const missions = [
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "Conception Innovante",
      description: "Développement de solutions d'ingénierie adaptées aux défis climatiques du Niger, comme les inondations et les températures extrêmes.",
      color: "from-[#be9838] to-[#d4b152]"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Construction Connectée",
      description: "Utilisation de matériaux intelligents et locaux pour des bâtiments écologiques et résilients.",
      color: "from-[#556331] to-[#6a7a4a]"
    },
    {
      icon: <Binary className="w-8 h-8" />,
      title: "Qualité Algorithmique",
      description: "Respect des normes de construction internationales .",
      color: "from-[#8a9e5b] to-[#a3b775]"
    },
  ];

  const stats = [
    {
      icon: <Home className="w-10 h-10" />,
      value: "750+",
      label: "Logements Construits",
      description: "Habitats durables pour les communautés nigériennes",
      delay: 0.1
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      value: "90%",
      label: "Matériaux Locaux",
      description: "Réduction de l'empreinte carbone",
      delay: 0.3
    },
    {
      icon: <Recycle className="w-10 h-10" />,
      value: "200T",
      label: "Matériaux Recyclés",
      description: "Utilisation de ressources revalorisées",
      delay: 0.5
    },
  ];

  const projects = [
    {
      title: "Village Résilient de Zinder",
      description: "Construction de 50 logements utilisant des briques de terre compressée, résistants aux inondations.",
      image: "https://images.unsplash.com/photo-1593952873517-1c7bd65eadaf?q=80&w=2000&auto=format&fit=crop",
      tags: ["Résilience", "Terre crue", "Communauté"]
    },
    {
      title: "École Écologique de Niamey",
      description: "Bâtiment scolaire conçu avec des matériaux locaux et une ventilation naturelle pour un confort thermique.",
      image: "https://images.unsplash.com/photo-1593952873517-1c7bd65eadaf?q=80&w=2000&auto=format&fit=crop",
      tags: ["Éducation", "Écologie", "Confort"]
    },
  ];

  const teamMembers = [
    {
      name: "Aminata Souley",
      role: "Ingénieure en Chef",
      description: "Spécialiste en construction durable avec 15 ans d'expérience dans l'ingénierie écologique.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2000&auto=format&fit=crop",
    },
    {
      name: "Moussa Diallo",
      role: "Architecte Principal",
      description: "Expert en conception de bâtiments résilients adaptés au climat nigérien.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
    },
    {
      name: "Fatima Oumar",
      role: "Responsable Qualité",
      description: "Garante des normes de sécurité et de durabilité sur tous les chantiers.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  const publicWorks = [
    {
      icon: <DraftingCompass className="w-8 h-8" />,
      title: "Géomètres-experts",
      description: "Fournissent les relevés précis qui constituent la base informationnelle de tous les projets, établissent les limites de propriété et alimentent le travail des autres experts techniques et de l'équipe numérique.",
      color: "from-[#be9838] to-[#d4b152]"
    },
    {
      icon: <CpuIcon className="w-8 h-8" />,
      title: "Ingénieurs en structure",
      description: "Experts en calculs et dimensionnement qui définissent les caractéristiques structurelles des bâtiments, travaillant avec les spécialistes du bâtiment et l'équipe R&D pour garantir solidité et innovation.",
      color: "from-[#556331] to-[#6a7a4a]",
      subItems: [
        {
          icon: <CircuitBoard className="w-6 h-6" />,
          title: "Experts VRD",
          description: "Conçoivent et intègrent les réseaux intelligents (eau, assainissement, électricité) essentiels à la viabilisation des sites.",
        },
        {
          icon: <Ruler className="w-6 h-6" />,
          title: "Experts en calculs",
          description: "Transforment les calculs théoriques en solutions constructives concrètes grâce à des algorithmes avancés.",
        }
      ]
    }
  ];

  // Animations futuristes
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
        staggerChildren: 0.2,
        delayChildren: 0.4
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
      y: -15,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const statItem = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7
      }
    }),
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const floatingGrid = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.3,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const gridItem = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 0.3, scale: 1 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-hidden" ref={ref}>
      <Navbar />
      
      {/* Hero Section - Futuristic Parallax */}
      <motion.section 
        className="relative h-screen max-h-[1000px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/images/2k.jpg')`,
          y: yBg
        }}
      >
        {/* Floating grid background */}
        <motion.div 
          className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-1 pointer-events-none"
          variants={floatingGrid}
          initial="hidden"
          animate="visible"
        >
          {Array.from({ length: 72 }).map((_, i) => (
            <motion.div 
              key={i} 
              className="bg-white/10 border border-white/5 rounded-sm"
              variants={gridItem}
            />
          ))}
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#556331]/90 via-[#556331]/70 to-[#556331]/90"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6 tracking-wider border border-white/20 flex items-center justify-center gap-2">
              <CircuitBoard className="w-4 h-4" />
              INGÉNIERIE FUTURISTE
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-[#be9838]">Ingénierie</span> & Construction <br className="md:hidden"/> <span className="text-white">de demain</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Eco2lodgy fusionne technologie avancée et écologie pour créer des solutions de construction révolutionnaires au Niger.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#team">
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 font-semibold px-8 py-6 rounded-full transition-all hover:scale-105 text-lg shadow-lg hover:shadow-xl group"
                aria-label="Rencontrer l'équipe"
              >
                Explorer nos technologies
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Animated circuit lines */}
        <motion.svg 
          className="absolute bottom-0 left-0 w-full h-20 text-[#be9838]/30"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <path 
            d="M0,50 Q360,100 720,50 Q1080,0 1440,50" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none"
            strokeDasharray="10 5"
          />
        </motion.svg>
      </motion.section>

      {/* Main Content */}
      <main className="flex-grow bg-white relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Department Introduction - Futuristic */}
          <motion.section
            className="text-center mb-28 relative"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-[#be9838]/10 rounded-full blur-3xl -z-10"></div>
            
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-[#be9838]/10 text-[#be9838] text-sm font-medium rounded-full mb-8 tracking-wider border border-[#be9838]/20"
              variants={fadeIn}
            >
              <Cpu className="w-4 h-4 mr-2" />
              DÉPARTEMENT TECHNIQUE
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold font-display text-[#556331] mb-8 leading-tight"
              variants={fadeIn}
            >
              <span className="relative">
                Ingénierie <span className="text-[#be9838]">3.0</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[#be9838]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </span>
              <br className="hidden md:block" /> 
              Construire avec intelligence
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              Notre département utilise les dernières technologies pour concevoir des habitats résilients, intelligents et parfaitement adaptés au contexte nigérien.
            </motion.p>
          </motion.section>

          {/* Public Works Section - Futuristic */}
          <motion.section
            className="mb-32 relative"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute -top-32 right-0 w-64 h-64 bg-[#556331]/10 rounded-full blur-3xl -z-10"></div>
            
            <motion.div className="text-center mb-20" variants={fadeIn}>
              <motion.span 
                className="inline-flex items-center text-[#be9838] font-medium mb-4 tracking-wider"
                variants={fadeIn}
              >
                <CircuitBoard className="w-4 h-4 mr-2" />
                NOTRE EXPERTISE TECHNIQUE
              </motion.span>
              <motion.h3 
                className="text-3xl md:text-5xl font-bold text-[#556331] mb-6"
                variants={fadeIn}
              >
                Solutions <span className="relative whitespace-nowrap">
                  high-tech
                  <svg className="absolute left-0 bottom-0 w-full h-3 -z-10" viewBox="0 0 200 20">
                    <path 
                      d="M0 10 Q 100 20 200 10" 
                      stroke="#be9838" 
                      strokeWidth="12" 
                      strokeLinecap="round"
                      fill="none"
                      strokeOpacity="0.2"
                    />
                  </svg>
                </span>
              </motion.h3>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              {publicWorks.map((item, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${item.color} p-0.5 rounded-2xl shadow-xl relative overflow-hidden`}
                  variants={cardAnimation}
                  whileHover="hover"
                >
                  <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                  <div className="bg-white/95 backdrop-blur-sm h-full p-8 rounded-2xl relative z-10">
                    <div className={`bg-gradient-to-br ${item.color} p-3 rounded-xl inline-flex mb-6 text-white`}>
                      {item.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-[#556331] mb-4">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {item.subItems && (
                      <div className="mt-6 space-y-4 pl-8 border-l-2 border-[#be9838]/30">
                        {item.subItems.map((subItem, subIndex) => (
                          <div key={subIndex} className="flex items-start">
                            <div className="bg-[#556331]/10 p-2 rounded-full mr-3 mt-1">
                              {subItem.icon}
                            </div>
                            <div>
                              <h5 className="font-medium text-[#556331]">{subItem.title}</h5>
                              <p className="text-sm text-gray-600">{subItem.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Missions Section - Futuristic */}
          <motion.section
            className="mb-32 relative"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute -bottom-20 left-0 w-64 h-64 bg-[#be9838]/10 rounded-full blur-3xl -z-10"></div>
            
            <motion.div className="text-center mb-20" variants={fadeIn}>
              <motion.span 
                className="inline-flex items-center text-[#be9838] font-medium mb-4 tracking-wider"
                variants={fadeIn}
              >
                <Binary className="w-4 h-4 mr-2" />
                NOTRE PROCESSUS INNOVANT
              </motion.span>
              <motion.h3 
                className="text-3xl md:text-5xl font-bold text-[#556331] mb-6"
                variants={fadeIn}
              >
                Méthodologie <span className="relative whitespace-nowrap">
                  technologique
                  <svg className="absolute left-0 bottom-0 w-full h-3 -z-10" viewBox="0 0 200 20">
                    <path 
                      d="M0 10 Q 100 20 200 10" 
                      stroke="#be9838" 
                      strokeWidth="12" 
                      strokeLinecap="round"
                      fill="none"
                      strokeOpacity="0.2"
                    />
                  </svg>
                </span>
              </motion.h3>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${mission.color} p-0.5 rounded-2xl shadow-xl relative overflow-hidden`}
                  variants={cardAnimation}
                  whileHover="hover"
                >
                  <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                  <div className="bg-white/95 backdrop-blur-sm h-full p-8 rounded-2xl relative z-10">
                    <div className={`bg-gradient-to-br ${mission.color} p-3 rounded-xl inline-flex mb-6 text-white`}>
                      {mission.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-[#556331] mb-4">
                      {mission.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {mission.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Stats Section - Futuristic
          <motion.section
            className="mb-32 py-20 px-8 bg-[#556331] rounded-3xl relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="absolute inset-0 opacity-5 bg-[url('https://assets.website-files.com/5f8f6d…/5f9088a…_noise.png')]"></div>
            <div className="relative z-10">
              <motion.div className="text-center mb-20" variants={fadeIn}>
                <motion.span 
                  className="inline-flex items-center text-[#be9838] font-medium mb-4 tracking-wider"
                  variants={fadeIn}
                >
                  <Cpu className="w-4 h-4 mr-2" />
                  NOTRE IMPACT NUMÉRIQUE
                </motion.span>
                <motion.h3 
                  className="text-3xl md:text-5xl font-bold text-white mb-6"
                  variants={fadeIn}
                >
                  Chiffres <span className="text-[#be9838]">clés</span>
                </motion.h3>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-8"
                variants={staggerContainer}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all relative overflow-hidden"
                    variants={statItem}
                    custom={stat.delay}
                    whileHover="hover"
                  >
                    <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="bg-[#be9838]/20 p-4 rounded-xl text-[#be9838]">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="mb-3">
                        <span className="text-5xl font-bold text-white">{stat.value}</span>
                        <span className="block text-xl font-semibold text-white mt-3">{stat.label}</span>
                      </div>
                      <p className="text-white/70">{stat.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section> */}

          {/* Team Section */}
          <div id='team'><SpecialTeamSection department="Technique" /></div>

          {/* CTA Section - Futuristic */}
          <motion.section
            className="mt-32 bg-gradient-to-r from-[#556331] to-[#3a472c] rounded-3xl overflow-hidden relative"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="absolute inset-0 opacity-5 bg-[url('https://assets.website-files.com/5f8f6d…/5f9088a…_noise.png')]"></div>
            <div className="relative z-10 py-20 px-8 md:px-16 text-center">
              <motion.h3 
                className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight"
                variants={fadeIn}
              >
                Prêt pour la <span className="text-[#be9838]">construction</span> <br className="hidden md:block" />du futur ?
              </motion.h3>
              <motion.p 
                className="text-white/80 mb-12 max-w-2xl mx-auto text-xl"
                variants={fadeIn}
              >
                Rejoignez notre réseau de partenaires technologiques pour développer des solutions d'habitat intelligent et durable au Niger.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeIn}
              >
                <a href="/#contact">
                  <Button
                    className="bg-[#be9838] hover:bg-[#be9838]/90 text-white font-semibold px-10 py-7 rounded-full transition-all hover:scale-105 text-lg shadow-xl hover:shadow-2xl group"
                    aria-label="Contacter le département Technique"
                  >
                    Nous contacter
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                
                <a href="/#posts">
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10 font-semibold px-10 py-7 rounded-full transition-all hover:scale-105 text-lg shadow-xl hover:shadow-2xl group"
                    aria-label="Voir nos réalisations"
                  >
                    Voir nos technologies
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TechnicalDepartmentSection;