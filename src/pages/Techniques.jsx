import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Building2, ShieldCheck, Leaf, Recycle, Home, Ruler, HardHat, DraftingCompass, Cpu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
      icon: <Wrench className="w-8 h-8" />,
      title: "Conception Innovante",
      description: "Développement de solutions d'ingénierie adaptées aux défis climatiques du Niger, comme les inondations et les températures extrêmes.",
      color: "from-[#be9838] to-[#d4b152]"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Construction Durable",
      description: "Utilisation de matériaux locaux (terre crue, pierre, fibres végétales) pour des bâtiments écologiques et résilients.",
      color: "from-[#556331] to-[#6a7a4a]"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Qualité & Sécurité",
      description: "Respect des normes de construction internationales avec un accent sur la sécurité et la durabilité.",
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
      icon: <HardHat className="w-8 h-8" />,
      title: "Ingénieurs en structure",
      description: "Experts en calculs et dimensionnement qui définissent les caractéristiques structurelles des bâtiments, travaillant avec les spécialistes du bâtiment et l'équipe R&D pour garantir solidité et innovation.",
      color: "from-[#556331] to-[#6a7a4a]",
      subItems: [
        {
          icon: <Cpu className="w-6 h-6" />,
          title: "Experts VRD",
          description: "Conçoivent et intègrent les réseaux (eau, assainissement, électricité) essentiels à la viabilisation des sites, en s'appuyant sur les données topographiques et en coordination avec les autres spécialistes.",
        },
        {
          icon: <Ruler className="w-6 h-6" />,
          title: "Experts en calculs",
          description: "Transforment les calculs théoriques en solutions constructives concrètes, assurant la mise en œuvre sur le terrain en coordination avec ingénieurs et experts VRD, tout en respectant la vision architecturale.",
        }
      ]
    }
  ];

  // Animations premium
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-hidden" ref={ref}>
      <Navbar />
      
      {/* Hero Section - Parallax Effect */}
      <motion.section 
        className="relative h-screen max-h-[1000px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5nZW5pZXJpZXxlbnwwfHwwfHx8MA%3D%3D')`,
          y: yBg
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#556331]/90 via-[#556331]/70 to-[#556331]/90"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6 tracking-wider border border-white/20">
              INGÉNIERIE DURABLE
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Construisons un <br className="md:hidden"/> <span className="text-[#be9838]">avenir durable</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Eco2lodgy transforme les défis climatiques du Niger en opportunités grâce à des solutions d'ingénierie innovantes et écologiques.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#projets">
              <Button
                className="bg-[#be9838] hover:bg-[#be9838]/90 text-white font-semibold px-8 py-6 rounded-full transition-all hover:scale-105 text-lg shadow-lg hover:shadow-xl group"
                aria-label="Découvrir nos projets"
              >
                Découvrir nos projets
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 font-semibold px-8 py-6 rounded-full transition-all hover:scale-105 text-lg shadow-lg hover:shadow-xl group"
              aria-label="Rencontrer l'équipe"
            >
              Rencontrer l'équipe
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <main className="flex-grow bg-white relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Department Introduction */}
          <motion.section
            className="text-center mb-28"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="inline-block px-6 py-3 bg-[#be9838]/10 text-[#be9838] text-sm font-medium rounded-full mb-8 tracking-wider border border-[#be9838]/20"
              variants={fadeIn}
            >
              DÉPARTEMENT TECHNIQUE
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold font-display text-[#556331] mb-8 leading-tight"
              variants={fadeIn}
            >
              Ingénierie <span className="text-[#be9838]">durable</span> <br className="hidden md:block" />au service du Niger
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              Notre département conçoit et construit des habitats résilients, écologiques et parfaitement adaptés au contexte nigérien.
            </motion.p>
          </motion.section>

          {/* Public Works Section */}
          <motion.section
            className="mb-32"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="text-center mb-20" variants={fadeIn}>
              <motion.span 
                className="inline-block text-[#be9838] font-medium mb-4 tracking-wider"
                variants={fadeIn}
              >
                NOTRE EXPERTISE
              </motion.span>
              <motion.h3 
                className="text-3xl md:text-5xl font-bold text-[#556331] mb-6"
                variants={fadeIn}
              >
                Travaux publics & <span className="relative whitespace-nowrap">
                  ingénierie
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
                  className={`bg-gradient-to-br ${item.color} p-0.5 rounded-2xl shadow-xl`}
                  variants={cardAnimation}
                  whileHover="hover"
                >
                  <div className="bg-white h-full p-8 rounded-2xl">
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

          {/* Missions Section */}
          <motion.section
            className="mb-32"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="text-center mb-20" variants={fadeIn}>
              <motion.span 
                className="inline-block text-[#be9838] font-medium mb-4 tracking-wider"
                variants={fadeIn}
              >
                NOTRE MÉTHODOLOGIE
              </motion.span>
              <motion.h3 
                className="text-3xl md:text-5xl font-bold text-[#556331] mb-6"
                variants={fadeIn}
              >
                Approche <span className="relative whitespace-nowrap">
                  technique
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
                  className={`bg-gradient-to-br ${mission.color} p-0.5 rounded-2xl shadow-xl`}
                  variants={cardAnimation}
                  whileHover="hover"
                >
                  <div className="bg-white h-full p-8 rounded-2xl">
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

          {/* Stats Section */}
          <motion.section
            className="mb-32 py-20 px-8 bg-[#556331] rounded-3xl relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="relative z-10">
              <motion.div className="text-center mb-20" variants={fadeIn}>
                <motion.span 
                  className="inline-block text-[#be9838] font-medium mb-4 tracking-wider"
                  variants={fadeIn}
                >
                  NOTRE IMPACT EN CHIFFRES
                </motion.span>
                <motion.h3 
                  className="text-3xl md:text-5xl font-bold text-white mb-6"
                  variants={fadeIn}
                >
                  Résultats <span className="text-[#be9838]">tangibles</span>
                </motion.h3>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-8"
                variants={staggerContainer}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all"
                    variants={statItem}
                    custom={stat.delay}
                    whileHover="hover"
                  >
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
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          
          <SpecialTeamSection department="Technique" />

         
          {/* CTA Section */}
          <motion.section
            className="mt-32 bg-gradient-to-r from-[#556331] to-[#3a472c] rounded-3xl overflow-hidden relative"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="relative z-10 py-20 px-8 md:px-16 text-center">
              <motion.h3 
                className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight"
                variants={fadeIn}
              >
                Prêt à <span className="text-[#be9838]">construire</span> <br className="hidden md:block" />l'avenir durable ?
              </motion.h3>
              <motion.p 
                className="text-white/80 mb-12 max-w-2xl mx-auto text-xl"
                variants={fadeIn}
              >
                Rejoignez notre réseau de partenaires pour développer des solutions d'habitat durable et résilient au Niger.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeIn}
              >
                <Button
                  className="bg-[#be9838] hover:bg-[#be9838]/90 text-white font-semibold px-10 py-7 rounded-full transition-all hover:scale-105 text-lg shadow-xl hover:shadow-2xl group"
                  aria-label="Contacter le département Technique"
                >
                  Nous contacter
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 font-semibold px-10 py-7 rounded-full transition-all hover:scale-105 text-lg shadow-xl hover:shadow-2xl group"
                  aria-label="Voir nos réalisations"
                >
                  Voir nos réalisations
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
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