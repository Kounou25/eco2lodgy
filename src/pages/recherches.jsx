import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, FlaskConical, Microscope, Leaf, Database, FileText, Award, ShieldCheck, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SpecialTeamSection from '../components/memberTeam';

const ResearchDevelopmentSection = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scaleBg = useSpring(useTransform(scrollYProgress, [0, 1], [1.1, 1.2]), { stiffness: 100, damping: 20 });
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.5], [0.9, 0.6]);

  const researchDomains = [
    {
      icon: <FlaskConical className="w-12 h-12" />,
      title: 'Science des Matériaux',
      description: 'Caractérisation physico-chimique des matériaux locaux et analyse de leurs propriétés mécaniques.',
      color: 'from-[#8BC34A] to-[#FFC107]',
      methodologies: ['Analyse XRD et SEM', 'Tests de résistance', 'Études de durabilité'],
    },
    {
      icon: <Microscope className="w-12 h-12" />,
      title: 'Architecture Expérimentale',
      description: 'Développement et validation de prototypes constructifs innovants.',
      color: 'from-[#FFC107] to-[#8BC34A]',
      methodologies: ['Modélisation 3D', 'Prototypage rapide', 'Tests in situ'],
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Écologie Industrielle',
      description: "Évaluation du cycle de vie et intégration des principes d'économie circulaire.",
      color: 'from-[#8BC34A] to-[#FFC107]',
      methodologies: ['Analyses ACV', 'Optimisation des flux', 'Stratégies de valorisation'],
    },
  ];

  const researchStats = [
    { value: 15, label: 'Bases de Données', icon: <Database className="w-10 h-10" />, delay: 0.1 },
    { value: 23, label: 'Publications', icon: <FileText className="w-10 h-10" />, delay: 0.2 },
    { value: 5, label: 'Prix Scientifiques', icon: <Award className="w-10 h-10" />, delay: 0.3 },
    { value: 8, label: 'Brevet en Cours', icon: <ShieldCheck className="w-10 h-10" />, delay: 0.4 },
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?q=80&w=2070&auto=format&fit=crop',
      alt: 'Recherche sur les biocomposites',
      caption: 'Développement de biocomposites à base d’argile',
    },
    {
      src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop',
      alt: 'Prototype de construction adaptative',
      caption: 'Test de systèmes constructifs résilients',
    },
    {
      src: 'https://images.unsplash.com/photo-1628863553570-4e7f4453e3e5?q=80&w=2070&auto=format&fit=crop',
      alt: 'Matériaux durables en laboratoire',
      caption: 'Analyse de matériaux écologiques locaux',
    },
    {
      src: 'https://images.unsplash.com/photo-1532186786931-6c0b7f8b3660?q=80&w=2070&auto=format&fit=crop',
      alt: 'Évaluation écologique en cours',
      caption: 'Étude d’impact pour l’écologie industrielle',
    },
  ];

  const publications = [
    {
      title: 'Caractérisation des argiles locales pour la construction',
      journal: 'Journal of Building Materials',
      year: 2023,
      link: '#',
    },
    {
      title: 'Durabilité des biocomposites terre-fibre en climat tropical',
      journal: 'Sustainable Construction Reviews',
      year: 2022,
      link: '#',
    },
  ];

  const [statCounts, setStatCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const timers = researchStats.map((stat, index) =>
      setInterval(() => {
        setStatCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(newCounts[index] + Math.ceil(stat.value / 50), stat.value);
          }
          return newCounts;
        });
      }, 50)
    );
    return () => timers.forEach(clearInterval);
  }, [researchStats]);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeInOut', type: 'spring', stiffness: 100 } },
    hover: { scale: 1.05, boxShadow: '0 0 20px rgba(139,195,74,0.5)', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const statAnimation = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeInOut', type: 'spring', stiffness: 120 },
    }),
    hover: { scale: 1.1, boxShadow: '0 0 15px rgba(255,193,7,0.5)', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const imageAnimation = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeInOut', type: 'spring', stiffness: 80 } },
    hover: { scale: 1.1, transition: { duration: 0.4, ease: 'easeOut', type: 'tween' } },
  };

  const buttonPulse = {
    hover: { scale: 1.05, boxShadow: '0 0 20px rgba(139,195,74,0.7)', transition: { duration: 0.3, ease: 'easeInOut' } },
    tap: { scale: 0.95, transition: { duration: 0.2, ease: 'easeInOut' } },
  };

  return (
    <div className="min-h-screen bg-[#355E3B] font-sans overflow-hidden" ref={ref}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
          
          .futuristic-overlay::before {
            content: '';
            position: absolute;
            inset: 0;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M50 0 L93 25 L93 75 L50 100 L7 75 L7 25 Z" fill="none" stroke="rgba(139,195,74,0.2)" stroke-width="1"/></svg>') repeat;
            opacity: 0.3;
            animation: drift 20s linear infinite;
          }
          
          .futuristic-overlay::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(transparent, rgba(139,195,74,0.1) 50%, transparent);
            animation: scan 4s linear infinite;
          }
          
          @keyframes drift {
            0% { background-position: 0 0; }
            100% { background-position: 100px 100px; }
          }
          
          @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          
          .ticker-flicker {
            animation: flicker 0.1s ease-in-out infinite alternate;
          }
          
          @keyframes flicker {
            0% { opacity: 0.8; }
            100% { opacity: 1; }
          }
          
          .circuit-bg {
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M10 10 H90 M10 50 H90 M10 90 H90 M50 10 V90" stroke="rgba(139,195,74,0.1)" stroke-width="1"/></svg>') repeat;
            animation: circuit-flow 15s linear infinite;
          }
          
          @keyframes circuit-flow {
            0% { background-position: 0 0; }
            100% { background-position: 100px 100px; }
          }
          
          .hud-overlay::before {
            content: 'ANALYSING...';
            position: absolute;
            top: 10px;
            left: 10px;
            color: rgba(139,195,74,0.7);
            font-family: 'Orbitron', sans-serif;
            font-size: 0.75rem;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .hud-overlay:hover::before {
            opacity: 1;
          }
        `}
      </style>
      <Navbar />

      {/* Hero Section */}
      <motion.section className="relative h-[110vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden futuristic-overlay">
          <motion.img
            src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop"
            alt="Laboratoire de science des matériaux"
            className="w-full h-full object-cover"
            style={{ y: yBg }}
            animate={{ scale: [1.1, 1.15, 1.1], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[#355E3B]/70 to-[#4A704D]/80"
            style={{ opacity: opacityOverlay }}
            animate={{ boxShadow: 'inset 0 0 100px rgba(139,195,74,0.3)' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="inline-flex items-center px-5 py-2 bg-[#8BC34A]/10 text-[#8BC34A] text-sm font-semibold rounded-full mb-6 tracking-widest font-orbitron"
            transition={{ delay: 0.2 }}
          >
            <FlaskConical className="w-5 h-5 mr-2" />
            LABORATOIRE D'INNOVATION
          </motion.div>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight font-orbitron"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <span className="text-[#8BC34A]">Recherche</span> & <span className="block sm:inline text-[#FFC107]">Découverte</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            Transformer les ressources locales en solutions constructives durables grâce à la science avancée.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
          >
            {/* <motion.div variants={fadeIn} transition={{ delay: 0.8 }}>
              <Button
                className="bg-[#8BC34A] hover:bg-[#8BC34A]/80 text-black px-8 py-6 rounded-full text-lg font-semibold flex items-center gap-2 font-orbitron"
                whileHover="hover"
                whileTap="tap"
                variants={buttonPulse}
                animate={{ boxShadow: ['0 0 10px rgba(139,195,74,0.5)', '0 0 20px rgba(139,195,74,0.8)', '0 0 10px rgba(139,195,74,0.5)'], transition: { duration: 1.5, repeat: Infinity } }}
              >
                Explorer nos travaux <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div> */}
            {/* <motion.div variants={fadeIn} transition={{ delay: 1.0 }}>
              <Button
                variant="outline"
                className="border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107]/10 px-8 py-6 rounded-full text-lg font-semibold flex items-center gap-2 font-orbitron"
                whileHover="hover"
                whileTap="tap"
                variants={buttonPulse}
                animate={{ boxShadow: ['0 0 10px rgba(255,193,7,0.5)', '0 0 20px rgba(255,193,7,0.8)', '0 0 10px rgba(255,193,7,0.5)'], transition: { duration: 1.5, repeat: Infinity, delay: 0.2 } }}
              >
                Nos publications <ArrowRight className="h-5 w-5" />
              </Button> */}
            {/* </motion.div> */}
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 15, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-10 h-10 text-[#8BC34A]" />
        </motion.div>
      </motion.section>

      {/* Research Domains */}
      <motion.section
        className="py-24 bg-[#355E3B] relative"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6 sm:px-8">
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <span className="inline-block px-4 py-2 bg-[#8BC34A]/10 text-[#8BC34A] text-sm font-semibold rounded-full tracking-wider font-orbitron">
              DOMAINES D'EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6 font-orbitron">
              Piliers de <span className="text-[#FFC107]">notre recherche</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Une approche scientifique de pointe pour des solutions durables et innovantes.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchDomains.map((domain, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden bg-[#4A704D]/50 backdrop-blur-md border border-[#8BC34A]/20"
                variants={cardAnimation}
                whileHover="hover"
                whileInView="visible"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${domain.color}`} />
                <div className="p-8">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${domain.color} flex items-center justify-center text-white mb-6`}
                    whileHover={{ rotate: [0, 360], scale: 1.2, boxShadow: '0 0 15px rgba(139,195,74,0.5)', transition: { duration: 0.5, ease: 'easeInOut' } }}
                  >
                    {domain.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-3 font-orbitron">{domain.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{domain.description}</p>
                  <div className="border-t border-[#8BC34A]/20 pt-4">
                    <h4 className="text-sm font-semibold text-[#8BC34A] mb-3 uppercase tracking-wider font-orbitron">Méthodologies</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {domain.methodologies.map((method, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeInOut' }}
                        >
                          <span className="text-[#FFC107] mr-2">•</span> {method}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Research Impact */}
      <motion.section
        className="py-20 bg-gradient-to-b from-[#355E3B] to-[#4A704D] relative overflow-hidden circuit-bg"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6 sm:px-8 text-center">
          <motion.div variants={fadeIn}>
            <span className="inline-block px-4 py-2 bg-[#8BC34A]/10 text-[#8BC34A] text-sm font-semibold rounded-full tracking-wider mb-4 font-orbitron">
              IMPACT SCIENTIFIQUE
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-orbitron">
              Nos <span className="text-[#FFC107]">réalisations</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {researchStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#4A704D]/50 backdrop-blur-md p-6 rounded-xl border border-[#8BC34A]/20"
                variants={statAnimation}
                custom={index}
                whileHover="hover"
              >
                <motion.div
                  className="text-[#8BC34A] mb-4"
                  whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0], boxShadow: '0 0 15px rgba(139,195,74,0.5)', transition: { duration: 0.5 } }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-4xl font-bold text-white mb-2 ticker-flicker font-orbitron"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut', delay: index * 0.2 }}
                >
                  {statCounts[index]}+
                </motion.div>
                <div className="text-lg text-gray-400 font-orbitron">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="py-24 bg-[#355E3B] relative"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6 sm:px-8">
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <span className="inline-block px-4 py-2 bg-[#8BC34A]/10 text-[#8BC34A] text-sm font-semibold rounded-full tracking-wider font-orbitron">
              NOS RECHERCHES
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6 font-orbitron">
              Découvrez nos <span className="text-[#FFC107]">projets</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Une sélection de nos travaux de recherche en science des matériaux, architecture expérimentale et écologie industrielle.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden border border-[#8BC34A]/20 hud-overlay"
                variants={imageAnimation}
                whileHover="hover"
                whileInView="visible"
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.15, transition: { duration: 0.4, ease: 'easeOut', type: 'tween' } }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#355E3B]/80 to-transparent flex items-end"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
                >
                  <p className="text-white text-sm font-semibold p-4 font-orbitron">{image.caption}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Publications Section */}
      <motion.section
        className="py-20 bg-[#355E3B]"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6 sm:px-8">
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <span className="inline-block px-4 py-2 bg-[#8BC34A]/10 text-[#8BC34A] text-sm font-semibold rounded-full tracking-wider font-orbitron">
              PRODUCTION SCIENTIFIQUE
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6 font-orbitron">
              Nos <span className="text-[#FFC107]">publications</span>
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-[#4A704D]/50 backdrop-blur-md p-6 rounded-xl border border-[#8BC34A]/20"
                variants={cardAnimation}
                whileHover="hover"
                whileInView="visible"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1 font-orbitron">{pub.title}</h3>
                  <div className="text-sm text-gray-400 mb-2">
                    {pub.journal} • {pub.year}
                  </div>
                  <Button
                    variant="link"
                    className="text-[#8BC34A] p-0 h-auto hover:underline font-orbitron"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Lire la publication <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                <motion.span
                  className="text-xs bg-[#8BC34A]/10 text-[#8BC34A] px-3 py-1 rounded-full font-orbitron"
                  whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(139,195,74,0.5)' }}
                >
                  DOI: 10.1000/xyz{index + 1}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-24 bg-[#355E3B]"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6 sm:px-8">
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <span className="inline-block px-4 py-2 bg-[#8BC34A]/10 text-[#8BC34A] text-sm font-semibold rounded-full tracking-wider font-orbitron">
              TALENTS SCIENTIFIQUES
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6 font-orbitron">
              Notre <span className="text-[#FFC107]">équipe</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Une équipe pluridisciplinaire combinant expertise académique et savoir-faire technique.
            </p>
          </motion.div>
          <SpecialTeamSection department="R&D" />
        </div>
      </motion.section>

      {/* CTA Section
      <motion.section
        className="py-20 bg-gradient-to-r from-[#355E3B] to-[#4A704D] relative overflow-hidden circuit-bg"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6 sm:px-8 text-center">
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-orbitron" variants={fadeIn}>
            <span className="text-[#8BC34A]">Collaborons</span> pour l'avenir
          </motion.h2>
          <motion.p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto" variants={fadeIn}>
            Rejoignez-nous pour développer des solutions durables et innovantes.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerContainer}>
            <motion.div variants={fadeIn}>
              <Button
                className="bg-[#8BC34A] hover:bg-[#8BC34A]/80 text-black px-10 py-6 rounded-full text-lg font-semibold flex items-center gap-2 font-orbitron"
                whileHover="hover"
                whileTap="tap"
                variants={buttonPulse}
                animate={{ boxShadow: ['0 0 10px rgba(139,195,74,0.5)', '0 0 20px rgba(139,195,74,0.8)', '0 0 10px rgba(139,195,74,0.5)'], transition: { duration: 1.5, repeat: Infinity } }}
              >
                Proposer un partenariat <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Button
                variant="outline"
                className="border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107]/10 px-10 py-6 rounded-full text-lg font-semibold flex items-center gap-2 font-orbitron"
                whileHover="hover"
                whileTap="tap"
                variants={buttonPulse}
                animate={{ boxShadow: ['0 0 10px rgba(255,193,7,0.5)', '0 0 20px rgba(255,193,7,0.8)', '0 0 10px rgba(255,193,7,0.5)'], transition: { duration: 1.5, repeat: Infinity, delay: 0.2 } }}
              >
                Nous contacter <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section> */}

      <Footer />
    </div>
  );
};

export default ResearchDevelopmentSection;