import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Map, Trees, Droplets, Sun, LayoutGrid, LandPlot, DraftingCompass, Globe, Zap, CircuitBoard, Building2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const UrbanPlanningDepartmentSection = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const missions = [
    {
      icon: <Map className="w-8 h-8" />,
      title: "Planification Stratégique",
      description: "Conception de plans directeurs intégrant les spécificités climatiques et culturelles du Niger avec des technologies d'avant-garde.",
      color: "from-[#be9838] to-[#d4b152]",
      gradient: "from-[#be9838]/10 via-[#be9838]/5 to-transparent"
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: "Espaces Verts Intégrés",
      description: "Développement de corridors verts intelligents et d'infrastructures végétales connectées pour lutter contre les îlots de chaleur.",
      color: "from-[#556331] to-[#6a7a4a]",
      gradient: "from-[#556331]/10 via-[#556331]/5 to-transparent"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Gestion Hydraulique",
      description: "Systèmes de drainage intelligent et durable adaptés aux pluies torrentielles du Sahel avec monitoring IoT.",
      color: "from-[#8a9e5b] to-[#a3b775]",
      gradient: "from-[#8a9e5b]/10 via-[#8a9e5b]/5 to-transparent"
    },
  ];

  const stats = [
    {
      icon: <LandPlot className="w-10 h-10" />,
      value: "25+",
      label: "Plans Directeurs",
      description: "De villes et communes nigériennes",
      delay: 0.1
    },
    {
      icon: <Sun className="w-10 h-10" />,
      value: "40%",
      label: "Réduction Chaleur",
      description: "Grâce à nos aménagements bioclimatiques",
      delay: 0.3
    },
    {
      icon: <LayoutGrid className="w-10 h-10" />,
      value: "120ha",
      label: "Espaces Aménagés",
      description: "Dont 30% d'espaces verts en moyenne",
      delay: 0.5
    },
  ];

  const creativeTeam = [
    {
      number: "01",
      icon: <DraftingCompass className="w-8 h-8" />,
      title: "Architectes",
      description: "Concepteurs de logements bioclimatiques intelligents qui concilient esthétique futuriste, fonctionnalité et efficacité énergétique.",
      color: "from-[#be9838] to-[#d4b152]",
      bgPattern: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)"
    },
    {
      number: "02",
      icon: <Trees className="w-8 h-8" />,
      title: "Paysagistes",
      description: "Créent des écosystèmes urbains connectés qui intègrent nature et technologie pour un confort thermique optimal et une qualité de vie supérieure.",
      color: "from-[#556331] to-[#6a7a4a]",
      bgPattern: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)"
    },
    {
      number: "03",
      icon: <Globe className="w-8 h-8" />,
      title: "Aménageurs territoriaux",
      description: "Orchestrent la transformation urbaine à grande échelle avec des solutions intelligentes et durables pour des villes résilientes du futur.",
      color: "from-[#8a9e5b] to-[#a3b775]",
      bgPattern: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"
    },
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

  const floatingElements = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black overflow-hidden" ref={ref}>
      {/* Navigation futuriste */}
      <Navbar
        className="bg-black/80 backdrop-blur-xl border-b border-[#be9838]/20" ></Navbar>
      
      {/* Hero Section - Futuriste avec animation zoom */}
      <motion.section 
        className="relative h-screen max-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ y: yBg }}
      >
        {/* Image de fond avec animation zoom */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Overlay futuriste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#556331]/60 to-black/80"></div>
        
        {/* Grille futuriste */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(190, 152, 56, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(190, 152, 56, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Éléments flottants */}
        <motion.div 
          className="absolute top-20 left-20 w-2 h-2 bg-[#be9838] rounded-full"
          variants={floatingElements}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 right-32 w-3 h-3 bg-[#556331] rounded-full"
          variants={floatingElements}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-40 left-40 w-4 h-4 bg-[#8a9e5b] rounded-full"
          variants={floatingElements}
          animate="animate"
          transition={{ delay: 4 }}
        />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block px-8 py-3 bg-gradient-to-r from-[#be9838]/20 to-[#556331]/20 backdrop-blur-xl text-[#be9838] text-sm font-medium rounded-full mb-8 tracking-wider border border-[#be9838]/30 shadow-2xl">
              <Zap className="inline w-4 h-4 mr-2" />
              URBANISME & ARCHITECTURE FUTURISTE
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Villes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#be9838] to-[#d4b152]">intelligentes</span> <br className="md:hidden"/> du futur
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Architecture bioclimatique connectée et aménagement territorial intelligent pour des écosystèmes urbains durables et résilients.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            {/* <Button
              className="bg-gradient-to-r from-[#be9838] to-[#d4b152] hover:from-[#d4b152] hover:to-[#be9838] text-black font-bold px-10 py-7 rounded-full transition-all hover:scale-105 text-lg shadow-2xl hover:shadow-[#be9838]/25 group border-2 border-[#be9838]/30"
              aria-label="Explorer nos projets"
            >
              <CircuitBoard className="mr-3 h-5 w-5" />
              Explorer nos projets
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button> */}
            
            {/* <Button
              variant="outline"
              className="bg-white/5 backdrop-blur-xl border-[#be9838]/50 text-white hover:bg-[#be9838]/10 font-bold px-10 py-7 rounded-full transition-all hover:scale-105 text-lg shadow-2xl group"
              aria-label="Rencontrer l'équipe"
            >
              <Building2 className="mr-3 h-5 w-5" />
              Rencontrer l'équipe
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button> */}
          </motion.div>
        </div>

        {/* Indicateur de scroll futuriste */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-[#be9838] rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-[#be9838] rounded-full mt-2"
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-black via-gray-900 to-black relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Department Introduction */}
          <motion.section
            className="text-center mb-32"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#be9838]/10 to-[#556331]/10 backdrop-blur-xl text-[#be9838] text-sm font-medium rounded-2xl mb-10 tracking-wider border border-[#be9838]/20 shadow-2xl"
              variants={fadeIn}
            >
              <CircuitBoard className="inline w-4 h-4 mr-2" />
              DÉPARTEMENT D'URBANISME & ARCHITECTURE
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold font-display text-white mb-8 leading-tight"
              variants={fadeIn}
            >
              Écosystèmes urbains <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#be9838] via-[#d4b152] to-[#be9838]">
                intelligents
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              Une équipe pluridisciplinaire qui révolutionne l'habitat urbain au Niger grâce à des solutions bioclimatiques connectées et des espaces verts intelligents adaptés au contexte local.
            </motion.p>
          </motion.section>

          {/* Creative Team Section - Futuriste */}
          <motion.section
            className="mb-32"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="text-center mb-20" variants={fadeIn}>
              <motion.span 
                className="inline-block text-[#be9838] font-medium mb-6 tracking-wider text-lg"
                variants={fadeIn}
              >
                <Zap className="inline w-5 h-5 mr-2" />
                NOTRE ÉQUIPE CONNECTÉE
              </motion.span>
              <motion.h3 
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                variants={fadeIn}
              >
                Expertise <span className="relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#be9838] to-[#d4b152]">
                  créative
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
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {creativeTeam.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={cardAnimation}
                  whileHover="hover"
                >
                  {/* Fond géométrique futuriste */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500`}
                    style={{ clipPath: item.bgPattern }}
                  />
                  
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-[#be9838]/20 h-full p-8 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Grille de fond */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="h-full w-full" style={{
                        backgroundImage: `
                          linear-gradient(rgba(190, 152, 56, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(190, 152, 56, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                      }}></div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start mb-6">
                        <span className="text-3xl font-bold text-[#be9838] mr-4 font-mono">{item.number}</span>
                        <div className={`bg-gradient-to-br ${item.color} p-4 rounded-xl inline-flex text-white shadow-lg`}>
                          {item.icon}
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Ligne décorative */}
                      <motion.div 
                        className={`mt-6 h-1 bg-gradient-to-r ${item.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Missions Section - Design futuriste */}
          <motion.section
            className="mb-32"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="text-center mb-20" variants={fadeIn}>
              <motion.span 
                className="inline-block text-[#be9838] font-medium mb-6 tracking-wider text-lg"
                variants={fadeIn}
              >
                <CircuitBoard className="inline w-5 h-5 mr-2" />
                MÉTHODOLOGIE AVANCÉE
              </motion.span>
              <motion.h3 
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                variants={fadeIn}
              >
                Approche <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#be9838] to-[#d4b152]">
                  urbaine intelligente
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
                  className="relative group"
                  variants={cardAnimation}
                  whileHover="hover"
                >
                  {/* Effet holographique */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${mission.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-[#be9838]/20 h-full p-8 rounded-2xl shadow-2xl">
                    <div className={`bg-gradient-to-br ${mission.color} p-4 rounded-xl inline-flex mb-6 text-white shadow-xl`}>
                      {mission.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {mission.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {mission.description}
                    </p>

                    {/* Indicateur de progression futuriste */}
                    <div className="flex items-center text-[#be9838] text-sm font-mono">
                      <div className="w-2 h-2 bg-[#be9838] rounded-full mr-2 animate-pulse" />
                      TECHNOLOGIE ACTIVE
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Stats Section - Version cyber */}
          

          {/* CTA Section - Cyber style */}
          <motion.section
            className="mt-32 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl overflow-hidden relative border border-[#be9838]/30"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Effets cyber */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#be9838]/10 via-transparent to-[#556331]/10" />
              <motion.div 
                className="absolute inset-0 opacity-20"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, rgba(190, 152, 56, 0.1) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(190, 152, 56, 0.1) 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, rgba(190, 152, 56, 0.1) 75%),
                    linear-gradient(-45deg, transparent 75%, rgba(190, 152, 56, 0.1) 75%)
                  `,
                  backgroundSize: '60px 60px',
                  backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
                }}
              />
            </div>
            
            <div className="relative z-10 py-20 px-8 md:px-16 text-center">
              <motion.h3 
                className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight"
                variants={fadeIn}
              >
                Prêt à <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#be9838] to-[#d4b152]">construire</span> <br className="hidden md:block" />
                l'avenir urbain ?
              </motion.h3>
              <motion.p 
                className="text-white/80 mb-12 max-w-2xl mx-auto text-xl"
                variants={fadeIn}
              >
                Collaborons pour concevoir des écosystèmes urbains intelligents et résilients, parfaitement adaptés au contexte nigérien du futur.
              </motion.p>
              {/* <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                variants={fadeIn}
              >
                <Button
                  className="bg-gradient-to-r from-[#be9838] to-[#d4b152] hover:from-[#d4b152] hover:to-[#be9838] text-black font-bold px-12 py-7 rounded-full transition-all hover:scale-105 text-lg shadow-2xl hover:shadow-[#be9838]/25 group border-2 border-[#be9838]/30"
                  aria-label="Contacter le département Urbanisme"
                >
                  <Zap className="mr-3 h-5 w-5" />
                  Démarrer un projet
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button
                  variant="outline"
                  className="bg-white/5 backdrop-blur-xl border-[#be9838]/50 text-white hover:bg-[#be9838]/10 font-bold px-12 py-7 rounded-full transition-all hover:scale-105 text-lg shadow-2xl group"
                  aria-label="Voir nos réalisations"
                >
                  <Building2 className="mr-3 h-5 w-5" />
                  Nos réalisations
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div> */}
            </div>
          </motion.section>
        </div>
      </main>

      {/* Footer futuriste */}
      <Footer className="bg-black/80 backdrop-blur-xl border-t border-[#be9838]/20" />

      {/* Navbar futuriste */}
      
    </div>
  );
};

export default UrbanPlanningDepartmentSection;