import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, DollarSign, Building2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SpecialTeamSection from '../components/memberTeam';

const EconomicFinancialSection = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const missions = [
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analyse du Marché Immobilier",
      description: "Étude approfondie du marché nigérien pour identifier les opportunités et optimiser les projets.",
      color: "from-[#be9838] to-[#d4b152]"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Optimisation des Coûts",
      description: "Collaboration avec les équipes techniques et urbanistes pour équilibrer qualité et budget.",
      color: "from-[#556331] to-[#6a7a4a]"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Montages Financiers",
      description: "Structures de financement innovantes pour rendre les projets accessibles et rentables.",
      color: "from-[#8a9e5b] to-[#a3b775]"
    },
  ];

  const stats = [
    {
      icon: <BarChart className="w-10 h-10" />,
      value: "12+",
      label: "Projets Analysés",
      description: "Études de marché réalisées",
      delay: 0.1
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      value: "6",
      label: "Financements Structurés",
      description: "Solutions financières déployées",
      delay: 0.3
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      value: "10",
      label: "Partenariats Financiers",
      description: "Collaborations avec institutions",
      delay: 0.5
    },
  ];

  const projects = [
    {
      title: "Optimisation Immobilière",
      description: "Modèles économiques pour des constructions à coûts réduits au Niger.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
      tags: ["Immobilier", "Optimisation", "Coûts"]
    },
    {
      title: "Financement Local",
      description: "Structures de financement pour des projets immobiliers accessibles aux populations.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
      tags: ["Financement", "Accessibilité", "Local"]
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Amina Bello",
      role: "Directrice Économie",
      description: "Experte en analyse du marché immobilier nigérien, avec 15 ans d’expérience.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop",
    },
    {
      name: "Prof. Ibrahim Kane",
      role: "Responsable Financement",
      description: "Spécialiste des montages financiers pour projets locaux.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Dr. Fatouma Diop",
      role: "Chef de Projets",
      description: "Coordonne les collaborations pour optimiser coûts et qualité.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    },
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
          backgroundImage: `url('https://images.unsplash.com/photo-1560523159-4a9692d222ef?q=80&w=2070&auto=format&fit=crop')`,
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
              ÉCONOMIE & FINANCEMENT
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Financer <br className="md:hidden"/> <span className="text-[#be9838]">l’avenir</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Analyse du marché immobilier et solutions financières pour des projets accessibles et durables au Niger.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#team">
              <Button
                className="bg-[#be9838] hover:bg-[#be9838]/90 text-white font-semibold px-8 py-6 rounded-full transition-all hover:scale-105 text-lg shadow-lg hover:shadow-xl group"
                aria-label="Découvrir nos solutions"
              >
                 Rencontrer l'équipe
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
           
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
              DÉPARTEMENT ÉCONOMIE & FINANCIER
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold font-display text-[#556331] mb-8 leading-tight"
              variants={fadeIn}
            >
              Financer le <span className="text-[#be9838]">développement</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              Notre équipe analyse le marché immobilier nigérien et élabore des financements pour des projets rentables et accessibles.
            </motion.p>
          </motion.section>

          {/* Missions Section */}
          <motion.section
            id="mission"
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
                NOS PILIERS
              </motion.span>
              <motion.h3 
                className="text-3xl md:text-5xl font-bold text-[#556331] mb-6"
                variants={fadeIn}
              >
                Solutions <span className="relative whitespace-nowrap">
                  financières
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

          
                <div id='team'><SpecialTeamSection department="Economie" />
                </div>
          

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
                Prêt à <span className="text-[#be9838]">financer</span> <br className="hidden md:block" />votre projet ?
              </motion.h3>
              <motion.p 
                className="text-white/80 mb-12 max-w-2xl mx-auto text-xl"
                variants={fadeIn}
              >
                Collaborons pour structurer des financements innovants et optimiser vos projets immobiliers.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeIn}
              >

                <a href="/#contact">
                <Button
                  className="bg-[#be9838] hover:bg-[#be9838]/90 text-white font-semibold px-10 py-7 rounded-full transition-all hover:scale-105 text-lg shadow-xl hover:shadow-2xl group"
                  aria-label="Contacter le département Économie/Financier"
                >
                  Proposer un partenariat
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                </a>
                
                <a href="/#posts">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 font-semibold px-10 py-7 rounded-full transition-all hover:scale-105 text-lg shadow-xl hover:shadow-2xl group"
                  aria-label="Voir nos solutions"
                >
                  Voir nos publications
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

export default EconomicFinancialSection;