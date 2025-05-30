import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, HardHat, Building2, Leaf, ShieldCheck, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Construction = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.5], [0.85, 0.6]);

  const services = [
    {
      icon: <HardHat className="w-12 h-12" />,
      title: 'Construction de Bâtiments',
      description: 'Réalisation de projets résidentiels, commerciaux et industriels avec une précision inégalée.',
      details: ['Bâtiments résidentiels', 'Centres commerciaux', 'Infrastructures industrielles', 'Finition de haute qualité'],
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Gestion de Chantier',
      description: 'Coordination efficace des projets pour respecter les délais et les budgets.',
      details: ['Planification des travaux', 'Supervision sur site', 'Gestion des ressources', 'Sécurité des chantiers'],
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Construction Durable',
      description: 'Intégration de pratiques écologiques pour des bâtiments respectueux de l’environnement.',
      details: ['Matériaux recyclés', 'Efficacité énergétique', 'Certifications HQE', 'Gestion des déchets'],
    },
  ];

  const achievements = [
    { value: '100+', label: 'Chantiers Terminés', icon: <HardHat className="w-10 h-10" />, delay: 0.1 },
    { value: '25+', label: 'Projets Durables', icon: <Leaf className="w-10 h-10" />, delay: 0.2 },
    { value: '15+', label: 'Ans d’Expérience', icon: <ShieldCheck className="w-10 h-10" />, delay: 0.3 },
    { value: '500+', label: 'Collaborateurs', icon: <Building2 className="w-10 h-10" />, delay: 0.4 },
  ];

  const projects = [
    {
      title: 'Complexe Résidentiel Éco-Soleil',
      description: 'Construction d’un ensemble de 150 logements durables avec des technologies éco-énergétiques.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      highlights: ['Panneaux solaires', 'Isolation thermique avancée', 'Jardins communautaires'],
    },
    {
      title: 'Centre Commercial Horizon',
      description: 'Un centre commercial moderne avec des espaces modulables et une conception durable.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop',
      highlights: ['Certification HQE', 'Espaces verts intégrés', 'Parking souterrain'],
    },
    {
      title: 'Pont de l’Unité',
      description: 'Construction d’un pont robuste pour améliorer la connectivité urbaine.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop',
      highlights: ['Béton haute performance', 'Résistance sismique', 'Conception durable'],
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.03, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)', transition: { duration: 0.3 } },
  };

  const statAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' } }),
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const carouselAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-[#f8f5ee] font-sans" ref={ref}>
      <Navbar />

      {/* Hero Section */}
      <motion.section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#556331]">
          <motion.div
            className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"
            style={{ y: yBg }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[#556331]/80 to-[#3a472c]/95"
            style={{ opacity: opacityOverlay }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="inline-flex items-center px-5 py-2 bg-[#be9838]/20 text-[#be9838] text-sm font-semibold rounded-full mb-6 tracking-wider"
          >
            <HardHat className="w-5 h-5 mr-2" />
            CONSTRUCTION EXCELLENCE
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Construire l’<span className="text-[#be9838]">excellence</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            Nous bâtissons des infrastructures durables et innovantes, transformant les visions en réalités solides.
          </motion.p>
          <motion.div variants={fadeIn} transition={{ delay: 0.6 }}>
            <Button className="bg-[#be9838] hover:bg-[#be9838]/90 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto">
              Nos réalisations <ArrowRight className="h-5 w-5" />
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
              NOTRE VISION
            </span>
            <h2 className="text-4xl font-bold text-[#556331] mt-4 mb-6">
              Construire pour <span className="text-[#be9838]">demain</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous sommes spécialisés dans la construction de bâtiments durables et performants, combinant expertise technique, innovation et engagement environnemental. Avec plus de 15 ans d’expérience, nous livrons des projets qui répondent aux normes les plus élevées de qualité et de sécurité.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <motion.div className="md:w-1/2" variants={fadeIn}>
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                alt="Chantier de construction"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
            <motion.div className="md:w-1/2 space-y-4" variants={fadeIn}>
              <h3 className="text-2xl font-semibold text-[#556331]">Notre engagement</h3>
              <p className="text-gray-600">
                Chaque projet est réalisé avec une attention méticuleuse aux détails, en utilisant des matériaux de qualité et des techniques modernes pour garantir durabilité et efficacité. Nous collaborons avec des partenaires locaux pour minimiser l’impact environnemental.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="text-[#be9838] mr-2">•</span> Qualité sans compromis</li>
                <li className="flex items-center"><span className="text-[#be9838] mr-2">•</span> Respect des délais et budgets</li>
                <li className="flex items-center"><span className="text-[#be9838] mr-2">•</span> Approche durable et responsable</li>
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
              NOS SERVICES
            </span>
            <h2 className="text-4xl font-bold text-[#556331] mt-4 mb-6">
              Ce que nous <span className="text-[#be9838]">bâtissons</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos services de construction couvrent tous les aspects, de la conception initiale à la livraison finale, avec un focus sur la qualité et la durabilité.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6"
                variants={cardAnimation}
                whileHover="hover"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#be9838]/10 text-[#be9838] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#556331] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-[#be9838] mr-2">•</span> {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Carousel Projects Section */}
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
              NOS CHANTIERS
            </span>
            <h2 className="text-4xl font-bold text-[#556331] mt-4 mb-6">
              Projets <span className="text-[#be9838]">marquants</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez nos projets de construction qui illustrent notre expertise et notre engagement envers l’excellence.
            </p>
          </motion.div>
          <div className="relative">
            <motion.div
              key={currentProjectIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={carouselAnimation}
              className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto"
            >
              <img
                src={projects[currentProjectIndex].image}
                alt={projects[currentProjectIndex].title}
                className="w-full h-96 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#556331] mb-3">{projects[currentProjectIndex].title}</h3>
                <p className="text-gray-600 text-sm mb-4">{projects[currentProjectIndex].description}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {projects[currentProjectIndex].highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-[#be9838] mr-2">•</span> {highlight}
                    </li>
                  ))}
                </ul>
                <Button className="bg-[#be9838] hover:bg-[#be9838]/90 text-white px-4 py-2 rounded-full text-sm">
                  Détails du projet
                </Button>
              </div>
            </motion.div>
            <div className="flex justify-between mt-6 max-w-4xl mx-auto">
              <Button
                variant="outline"
                className="border-[#be9838] text-[#be9838] hover:bg-[#be9838]/10 p-3 rounded-full"
                onClick={handlePrevProject}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                className="border-[#be9838] text-[#be9838] hover:bg-[#be9838]/10 p-3 rounded-full"
                onClick={handleNextProject}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentProjectIndex ? 'bg-[#be9838]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="py-20 bg-gradient-to-b from-[#556331] to-[#3a472c] text-white"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div variants={fadeIn}>
            <span className="inline-block px-4 py-2 bg-[#be9838]/20 text-[#be9838] text-sm font-semibold rounded-full tracking-wider mb-4">
              NOTRE IMPACT
            </span>
            <h2 className="text-4xl font-bold mb-6">
              Nos <span className="text-[#be9838]">réalisations</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
                variants={statAnimation}
                custom={index}
                whileHover="hover"
              >
                <div className="text-[#be9838] mb-4">{achievement.icon}</div>
                <div className="text-3xl font-bold mb-2">{achievement.value}</div>
                <div className="text-lg">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-[#556331] to-[#3a472c] text-white"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-4xl font-bold mb-6" variants={fadeIn}>
            <span className="text-[#be9838]">Construisons</span> ensemble
          </motion.h2>
          <motion.p className="text-lg mb-8 max-w-2xl mx-auto" variants={fadeIn}>
            Contactez-nous pour réaliser vos projets de construction avec expertise et durabilité.
          </motion.p>
          <motion.div className="flex justify-center gap-4" variants={fadeIn}>
            <Button className="bg-[#be9838] hover:bg-[#be9838]/90 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2">
              Nous contacter <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2">
              Demander un devis <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Construction;