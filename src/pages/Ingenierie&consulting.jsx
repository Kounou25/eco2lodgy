import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Wrench, Building2, ShieldCheck, Leaf, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EngineeringConsulting = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.5], [0.8, 0.5]);

  const services = [
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Ingénierie Structurelle',
      description: 'Conception et analyse de structures robustes pour des bâtiments résidentiels et commerciaux.',
      details: ['Calculs de charges', 'Modélisation BIM', 'Optimisation structurelle', 'Conformité réglementaire'],
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Consulting en Construction',
      description: 'Accompagnement technique pour la gestion de projets de construction, de la planification à l’exécution.',
      details: ['Gestion de projet', 'Contrôle qualité', 'Planification des travaux', 'Audit technique'],
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Solutions Durables',
      description: 'Intégration de pratiques éco-responsables pour réduire l’impact environnemental des projets.',
      details: ['Matériaux écologiques', 'Efficacité énergétique', 'Certifications LEED/BREEAM', 'Conception bioclimatique'],
    },
  ];

  const achievements = [
    { value: '75+', label: 'Projets Ingénierie', icon: <Wrench className="w-10 h-10" />, delay: 0.1 },
    { value: '20+', label: 'Clients Conseillés', icon: <Building2 className="w-10 h-10" />, delay: 0.2 },
    { value: '10', label: 'Certifications Vertes', icon: <Leaf className="w-10 h-10" />, delay: 0.3 },
    { value: '15+', label: 'Ans d’Expertise', icon: <ShieldCheck className="w-10 h-10" />, delay: 0.4 },
  ];

  const projects = [
    {
      title: 'Pont Résilient de Niamey',
      description: 'Conception d’un pont durable adapté aux conditions climatiques extrêmes, utilisant des matériaux locaux.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop',
      highlights: ['Structure en béton armé', 'Résistance aux inondations', 'Matériaux locaux'],
    },
    {
      title: 'Complexe Résidentiel Zinder',
      description: 'Projet de logements durables avec intégration de solutions énergétiques et structurelles innovantes.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      highlights: ['Modélisation BIM', 'Panneaux solaires', '200 unités'],
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
    hover: { scale: 1.03, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)', transition: { duration: 0.3 } },
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
      <motion.section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#556331]">
          <motion.div
            className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"
            style={{ y: yBg }}
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
          >
            <Wrench className="w-5 h-5 mr-2" />
            INGÉNIERIE & CONSULTING
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Solutions <span className="text-[#be9838]">techniques</span> pour l’avenir
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            Nous offrons des services d’ingénierie et de consulting de pointe pour des projets immobiliers durables et performants.
          </motion.p>
          <motion.div variants={fadeIn} transition={{ delay: 0.6 }}>
            <Button className="bg-[#be9838] hover:bg-[#be9838]/90 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto">
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
              Excellence en <span className="text-[#be9838]">ingénierie</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre département d’ingénierie et consulting se consacre à fournir des solutions techniques innovantes pour des projets immobiliers durables et résilients. Avec plus de 15 ans d’expérience, nous combinons expertise technique et approche durable pour répondre aux défis modernes de la construction.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div className="md:w-1/2" variants={fadeIn}>
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
                alt="Projet d’ingénierie"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
            <motion.div className="md:w-1/2 space-y-4" variants={fadeIn}>
              <h3 className="text-2xl font-semibold text-[#556331]">Notre approche</h3>
              <p className="text-gray-600">
                Nous utilisons des technologies avancées comme la modélisation BIM, des analyses structurelles précises et des pratiques éco-responsables pour garantir la qualité et la durabilité de chaque projet. Nos équipes collaborent étroitement avec les clients pour offrir des solutions sur mesure.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="text-[#be9838] mr-2">•</span> Conception optimisée pour la durabilité</li>
                <li className="flex items-center"><span className="text-[#be9838] mr-2">•</span> Utilisation de matériaux locaux</li>
                <li className="flex items-center"><span className="text-[#be9838] mr-2">•</span> Collaboration interdisciplinaire</li>
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
              Nos <span className="text-[#be9838]">services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous offrons une gamme complète de services d’ingénierie et de consulting pour accompagner vos projets de construction et d’aménagement.
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

      {/* Featured Projects Section */}
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
              NOS PROJETS
            </span>
            <h2 className="text-4xl font-bold text-[#556331] mt-4 mb-6">
              Projets <span className="text-[#be9838]">emblématiques</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez nos projets qui illustrent notre expertise en ingénierie et consulting.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                variants={cardAnimation}
                whileHover="hover"
              >
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#556331] mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-[#be9838] mr-2">•</span> {highlight}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-4 bg-[#be9838] hover:bg-[#be9838]/90 text-white px-4 py-2 rounded-full text-sm">
                    En savoir plus
                  </Button>
                </div>
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
            <span className="text-[#be9838]">Partenariats</span> pour l’innovation
          </motion.h2>
          <motion.p className="text-lg mb-8 max-w-2xl mx-auto" variants={fadeIn}>
            Collaborez avec nous pour transformer vos idées en projets techniques d’exception.
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

export default EngineeringConsulting;