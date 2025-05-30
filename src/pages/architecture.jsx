import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Compass, Building2, Leaf, Award, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Architecture = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.5], [0.85, 0.6]);

  const services = [
    {
      icon: <Compass className="w-12 h-12" />,
      title: 'Conception Architecturale',
      description: 'Création de designs innovants et esthétiques adaptés aux besoins des clients.',
      details: ['Plans personnalisés', 'Visualisations 3D', 'Conception contextuelle', 'Intégration culturelle'],
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Aménagement Urbain',
      description: 'Planification d’espaces urbains fonctionnels et harmonieux pour les communautés.',
      details: ['Masterplans', 'Espaces publics', 'Mobilité urbaine', 'Consultation communautaire'],
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Architecture Durable',
      description: 'Conception de bâtiments éco-responsables avec un impact environnemental réduit.',
      details: ['Matériaux locaux', 'Efficacité énergétique', 'Certifications BREEAM', 'Ventilation naturelle'],
    },
  ];

  const achievements = [
    { value: '50+', label: 'Projets Conçus', icon: <Compass className="w-10 h-10" />, delay: 0.1 },
    { value: '10+', label: 'Prix d’Architecture', icon: <Award className="w-10 h-10" />, delay: 0.2 },
    { value: '20+', label: 'Projets Durables', icon: <Leaf className="w-10 h-10" />, delay: 0.3 },
    { value: '12+', label: 'Ans d’Expertise', icon: <Building2 className="w-10 h-10" />, delay: 0.4 },
  ];

  const projects = [
    {
      title: 'Résidence Éco-Harmonie',
      description: 'Complexe résidentiel avec design bioclimatique.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Place Publique Niamey',
      description: 'Espace urbain pour les interactions communautaires.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    },
    {
      title: 'Centre Culturel Zinder',
      description: 'Bâtiment culturel avec motifs traditionnels.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop',
    },
    {
      title: 'Tour Éco-Moderne',
      description: 'Immeuble durable avec façade végétalisée.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    },
  ];

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
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const statAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' } }),
    hover: { scale: 1.1, transition: { duration: 0.3 } },
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
            <Compass className="w-5 h-5 mr-2" />
            ARCHITECTURE INNOVANTE
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Façonner l’<span className="text-[#be9838]">espace</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            Nous concevons des espaces inspirants et durables, alliant esthétique, fonctionnalité et respect de l’environnement.
          </motion.p>
          <motion.div variants={fadeIn} transition={{ delay: 0.6 }}>
            <Button className="bg-[#be9838] hover:bg-[#be9838]/90 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto">
              Nos créations <ArrowRight className="h-5 w-5" />
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
              Architecture <span className="text-[#be9838]">inspirée</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre département d’architecture se consacre à créer des espaces qui enrichissent la vie des communautés. Avec plus de 12 ans d’expertise, nous combinons innovation, durabilité et sensibilité culturelle pour concevoir des projets uniques.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div className="md:w-1/2" variants={fadeIn}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Projet architectural"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
            <motion.div className="md:w-1/2 space-y-4" variants={fadeIn}>
              <h3 className="text-2xl font-semibold text-[#556331]">Notre approche</h3>
              <p className="text-gray-600">
                Nous intégrons des principes de design durable et des éléments culturels locaux dans chaque projet. De la conceptualisation à la réalisation, nous collaborons avec les clients et les communautés pour créer des espaces fonctionnels et esthétiques.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="text-[#be9838] mr-2">•</span> Designs centrés sur l’humain</li>
                <li className="flex items-center"><span className="text-[#be9838] mr-2">•</span> Respect du patrimoine local</li>
                <li className="flex items-center"><span className="text-[#be9838] mr-2">•</span> Innovation durable</li>
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
              Ce que nous <span className="text-[#be9838]">créons</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos services architecturaux englobent la conception, la planification urbaine et les solutions durables pour des projets visionnaires.
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

      {/* Image Gallery Projects Section */}
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
              NOS ŒUVRES
            </span>
            <h2 className="text-4xl font-bold text-[#556331] mt-4 mb-6">
              Galerie de <span className="text-[#be9838]">projets</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explorez nos créations architecturales à travers une galerie visuelle de nos projets les plus marquants.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg group"
                variants={cardAnimation}
                whileHover="hover"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a472c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-white/90">{project.description}</p>
                  <Button
                    className="mt-2 bg-[#be9838] hover:bg-[#be9838]/90 text-white px-4 py-1 rounded-full text-sm w-fit"
                  >
                    Voir détails
                  </Button>
                </div>
              </motion.div>
            ))}
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
            <span className="text-[#be9838]">Imaginons</span> l’avenir
          </motion.h2>
          <motion.p className="text-lg mb-8 max-w-2xl mx-auto" variants={fadeIn}>
            Collaborez avec nous pour donner vie à vos visions architecturales avec créativité et durabilité.
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

export default Architecture;