import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Home, Building2, Leaf, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RealEstatePromotionServices = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.5], [0.8, 0.5]);
  const scaleBg = useSpring(useTransform(scrollYProgress, [0, 1], [1.1, 1.2]), { stiffness: 100, damping: 20 });

  // State for counting animation in Achievements
  const [achievementCounts, setAchievementCounts] = useState([0, 0, 0, 0]);

  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Promotion Immobilière',
      description: 'Stratégies de marketing sur mesure pour maximiser la visibilité et la vente de vos propriétés.',
      details: ['Campagnes publicitaires', 'Visites virtuelles', 'Marketing digital', 'Mise en valeur des biens'],
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Gestion de Propriétés',
      description: 'Services complets de gestion pour optimiser la rentabilité et l’entretien de vos actifs immobiliers.',
      details: ['Gestion locative', 'Maintenance des biens', 'Rapports financiers', 'Relations avec les locataires'],
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Conseil en Investissement',
      description: 'Accompagnement stratégique pour des investissements immobiliers rentables et durables.',
      details: ['Analyse de marché', 'Évaluation des actifs', 'Conseils fiscaux', 'Stratégies d’investissement'],
    },
  ];

  const achievements = [
    { value: 50, label: 'Projets Promus', icon: <Home className="w-10 h-10" />, delay: 0.1 },
    { value: 10, label: 'Ans d’Expertise', icon: <Star className="w-10 h-10" />, delay: 0.2 },
    { value: 5, label: 'Certifications', icon: <Leaf className="w-10 h-10" />, delay: 0.3 },
    { value: 1000, label: 'Clients Satisfaits', icon: <Building2 className="w-10 h-10" />, delay: 0.4 },
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      alt: 'Résidence moderne en promotion',
      caption: 'Campagne de promotion pour une résidence de luxe',
    },
    {
      src: 'https://images.unsplash.com/photo-1512917774080-9991f7c4c60d?q=80&w=2070&auto=format&fit=crop',
      alt: 'Bureau géré professionnellement',
      caption: 'Gestion d’espaces commerciaux modernes',
    },
    {
      src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop',
      alt: 'Villa en gestion locative',
      caption: 'Villa écologique sous gestion locative',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585153490-76fb20a0f2b4?q=80&w=2070&auto=format&fit=crop',
      alt: 'Appartement promu avec vue urbaine',
      caption: 'Promotion d’appartements avec vue panoramique',
    },
  ];

  // Counting animation for Achievements
  useEffect(() => {
    const timers = achievements.map((achievement, index) =>
      setInterval(() => {
        setAchievementCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < achievement.value) {
            newCounts[index] = Math.min(newCounts[index] + Math.ceil(achievement.value / 50), achievement.value);
          }
          return newCounts;
        });
      }, 50)
    );
    return () => timers.forEach(clearInterval);
  }, [achievements]);

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
    hover: { scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const statAnimation = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeInOut', type: 'spring', stiffness: 120 },
    }),
    hover: { scale: 1.1, rotate: 2, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const imageAnimation = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeInOut', type: 'spring', stiffness: 80 } },
    hover: { scale: 1.1, transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  const buttonPulse = {
    hover: { scale: 1.05, boxShadow: '0 0 15px rgba(190, 152, 56, 0.5)', transition: { duration: 0.3, ease: 'easeInOut' } },
    tap: { scale: 0.95, transition: { duration: 0.2, ease: 'easeInOut' } },
  };

  return (
    <div className="min-h-screen bg-[#f8f5ee] font-sans" ref={ref}>
      <Navbar />

      {/* Hero Section */}
      <motion.section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
            alt="Promotion immobilière"
            className="w-full h-full object-cover"
            style={{ y: yBg }}
            animate={{ scale: [1.1, 1.15, 1.1], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[#556331]/70 to-[#3a472c]/90"
            style={{ opacity: opacityOverlay }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="inline-flex items-center px-5 py-2 bg-[#be9838]/20 text-[#be9838] text-sm font-semibold rounded-full mb-6 tracking-wider"
            transition={{ delay: 0.2 }}
          >
            <Home className="w-5 h-5 mr-2" />
            PROMOTION & GESTION IMMOBILIÈRE
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            Valoriser votre <span className="text-[#be9838]">patrimoine</span> immobilier
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            Nous optimisons la visibilité et la rentabilité de vos propriétés grâce à des stratégies de promotion innovantes et une gestion professionnelle.
          </motion.p>
          <motion.div variants={fadeIn} transition={{ delay: 0.8 }}>
            <Button
              className="bg-[#be9838] hover:bg-[#be9838]/90 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto"
              whileHover="hover"
              whileTap="tap"
              variants={buttonPulse}
            >
              Découvrir nos services <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8 text-[#be9838]" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-12" variants={fadeIn}>
            <span className="inline-block px-4 py-2 bg-[#be9838]/10 text-[#be9838] text-sm font-semibold rounded-full tracking-wider">
              NOTRE MISSION
            </span>
            <h2 className="text-4xl font-bold text-[#556331] mt-4 mb-6">
              Excellence en <span className="text-[#be9838]">promotion</span> et gestion
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous sommes spécialisés dans la promotion et la gestion immobilière, offrant des solutions innovantes pour maximiser la valeur de vos biens tout en assurant une gestion efficace et durable.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div className="md:w-1/2" variants={fadeIn}>
              <motion.img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
                alt="Gestion immobilière"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </motion.div>
            <motion.div className="md:w-1/2 space-y-4" variants={fadeIn}>
              <h3 className="text-2xl font-semibold text-[#556331]">Notre approche</h3>
              <p className="text-gray-600">
                Nous combinons des stratégies de marketing immobilier de pointe avec une gestion rigoureuse pour optimiser la performance de vos actifs. Notre équipe travaille en étroite collaboration avec les propriétaires et les locataires pour garantir satisfaction et rentabilité.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="text-[#be9838] mr-2">•</span> Marketing ciblé et innovant</li>
                <li className="flex items-center"><span className="text-[#be9838] mr-2">•</span> Gestion proactive des propriétés</li>
                <li className="flex items-center"><span className="text-[#be9838] mr-2">•</span> Partenariats avec des experts du secteur</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 bg-[#f8f5ee]"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-12" variants={fadeIn}>
            <span className="inline-block px-4 py-2 bg-[#be9838]/10 text-[#be9838] text-sm font-semibold rounded-full tracking-wider">
              NOS EXPERTISES
            </span>
            <h2 className="text-4xl font-bold text-[#556331] mt-4 mb-6">
              Ce que nous <span className="text-[#be9838]">faisons</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos services en promotion et gestion immobilière garantissent une valorisation optimale de vos propriétés et une gestion sans faille.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6"
                variants={cardAnimation}
                whileHover="hover"
                whileInView="visible"
              >
                <motion.div
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-[#be9838]/10 text-[#be9838] mb-4"
                  whileHover={{ rotate: 360, transition: { duration: 0.5, ease: 'easeInOut' } }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-[#556331] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeInOut' }}
                    >
                      <span className="text-[#be9838] mr-2">•</span> {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    
      {/* CTA Section
      <motion.section
        className="py-20 bg-gradient-to-r from-[#556331] to-[#3a472c] text-white"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-4xl font-bold mb-6" variants={fadeIn}>
            <span className="text-[#be9838]">Collaborons</span> pour vos projets
          </motion.h2>
          <motion.p className="text-lg mb-8 max-w-2xl mx-auto" variants={fadeIn}>
            Contactez-nous pour promouvoir ou gérer vos propriétés avec expertise et professionnalisme.
          </motion.p>
          <motion.div className="flex justify-center gap-4" variants={staggerContainer}>
            <motion.div variants={fadeIn}>
              <Button
                className="bg-[#be9838] hover:bg-[#be9838]/90 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2"
                whileHover="hover"
                whileTap="tap"
                variants={buttonPulse}
                animate={{ scale: [1, 1.03, 1], transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } }}
              >
                Nous contacter <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2"
                whileHover="hover"
                whileTap="tap"
                variants={buttonPulse}
                animate={{ scale: [1, 1.03, 1], transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 } }}
              >
                Demander un devis <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section> */}

      <Footer />
    </div>
  );
};

export default RealEstatePromotionServices;