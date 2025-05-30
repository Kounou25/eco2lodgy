import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.5], [0.9, 0.6]);

  const researchDomains = [
    {
      icon: <FlaskConical className="w-12 h-12" />,
      title: 'Science des Matériaux',
      description: 'Caractérisation physico-chimique des matériaux locaux et analyse de leurs propriétés mécaniques.',
      color: 'from-[#be9838] to-[#d4b152]',
      methodologies: ['Analyse XRD et SEM', 'Tests de résistance', 'Études de durabilité'],
    },
    {
      icon: <Microscope className="w-12 h-12" />,
      title: 'Architecture Expérimentale',
      description: 'Développement et validation de prototypes constructifs innovants.',
      color: 'from-[#556331] to-[#6a7a4a]',
      methodologies: ['Modélisation 3D', 'Prototypage rapide', 'Tests in situ'],
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Écologie Industrielle',
      description: "Évaluation du cycle de vie et intégration des principes d'économie circulaire.",
      color: 'from-[#8a9e5b] to-[#a3b775]',
      methodologies: ['Analyses ACV', 'Optimisation des flux', 'Stratégies de valorisation'],
    },
  ];

  const researchStats = [
    { value: '15+', label: 'Bases de Données', icon: <Database className="w-10 h-10" />, delay: 0.1 },
    { value: '23', label: 'Publications', icon: <FileText className="w-10 h-10" />, delay: 0.2 },
    { value: '5', label: 'Prix Scientifiques', icon: <Award className="w-10 h-10" />, delay: 0.3 },
    { value: '8', label: 'Brevet en Cours', icon: <ShieldCheck className="w-10 h-10" />, delay: 0.4 },
  ];

  const currentProjects = [
    {
      title: 'Biocomposites à Base d\'Argile',
      description: 'Développement de matériaux composites à matrice argileuse renforcée par des fibres végétales locales.',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?q=80&w=2070&auto=format&fit=crop',
      tags: ['Science des matériaux', 'Durabilité', 'Caractérisation'],
      team: ['Dr. A. Diallo', 'Pr. B. Traoré', 'Ing. C. Keita'],
    },
    {
      title: 'Systèmes Constructifs Adaptatifs',
      description: 'Conception de techniques de construction résilientes face aux changements climatiques.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop',
      tags: ['Architecture expérimentale', 'Résilience', 'Prototypage'],
      team: ['Dr. D. Konaté', 'Ing. E. Coulibaly', 'Tech. F. Diakité'],
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

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } },
    hover: { scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)', transition: { duration: 0.3 } },
  };

  const statAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.2, duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } }),
    hover: { scale: 1.1, rotate: 2, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-[#f8f5ee] font-sans overflow-hidden" ref={ref}>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center"
        style={{ scale: scaleBg }}
      >
        <div className="absolute inset-0 bg-[#556331] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"
            style={{ y: yBg }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[#556331]/80 to-[#3a472c]/90"
            style={{ opacity: opacityOverlay }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-5 py-2 bg-[#be9838]/20 text-[#be9838] text-sm font-semibold rounded-full mb-6 tracking-widest"
          >
            <FlaskConical className="w-5 h-5 mr-2" />
            LABORATOIRE D'INNOVATION
          </motion.div>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#be9838]">Recherche</span> & <span className="block sm:inline">Découverte</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transformer les ressources locales en solutions constructives durables grâce à la science.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="bg-[#be9838] hover:bg-[#be9838]/90 text-white px-8 py-6 rounded-full text-lg font-semibold flex items-center gap-2">
              Explorer nos travaux <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-[#be9838] text-[#be9838] hover:bg-[#be9838]/10 px-8 py-6 rounded-full text-lg font-semibold flex items-center gap-2">
              Nos publications <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 15, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-10 h-10 text-[#be9838]" />
        </motion.div>
      </motion.section>

      {/* Research Domains */}
      <motion.section
        className="py-24 bg-white relative"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6 sm:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-2 bg-[#be9838]/10 text-[#be9838] text-sm font-semibold rounded-full tracking-wider">
              DOMAINES D'EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#556331] mt-4 mb-6">
              Piliers de <span className="text-[#be9838]">notre recherche</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une approche scientifique rigoureuse pour des solutions durables et innovantes.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchDomains.map((domain, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-lg"
                variants={cardAnimation}
                whileHover="hover"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${domain.color}`} />
                <div className="p-8">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${domain.color} flex items-center justify-center text-white mb-6`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {domain.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-[#556331] mb-3">{domain.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{domain.description}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="text-sm font-semibold text-[#be9838] mb-3 uppercase tracking-wider">Méthodologies</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {domain.methodologies.map((method, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-[#be9838] mr-2">•</span> {method}
                        </li>
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
        className="py-20 bg-gradient-to-b from-[#556331] to-[#3a472c] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-6 sm:px-8 text-center">
          <motion.div variants={fadeIn}>
            <span className="inline-block px-4 py-2 bg-[#be9838]/20 text-[#be9838] text-sm font-semibold rounded-full tracking-wider mb-4">
              IMPACT SCIENTIFIQUE
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Nos <span className="text-[#be9838]">réalisations</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {researchStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#be9838]/50"
                variants={statAnimation}
                custom={index}
                whileHover="hover"
              >
                <motion.div
                  className="text-[#be9838] mb-4"
                  whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5, repeat: 1 } }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Current Projects */}
      <motion.section
        className="py-24 bg-white relative"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6 sm:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-2 bg-[#be9838]/10 text-[#be9838] text-sm font-semibold rounded-full tracking-wider">
              RECHERCHES ACTIVES
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#556331] mt-4 mb-6">
              Nos <span className="text-[#be9838]">projets</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
                variants={cardAnimation}
                whileHover="hover"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#556331]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 p-6 w-full">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-[#be9838]/80 text-white text-xs font-medium rounded-full"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xs text-[#be9838] font-semibold mb-1 uppercase">Équipe</h4>
                      <div className="text-xs text-white/80">{project.team.join(', ')}</div>
                    </div>
                    <Button className="bg-[#be9838] hover:bg-[#be9838]/90 text-white px-4 py-2 rounded-full text-sm">
                      Détails
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Publications Section */}
      <motion.section
        className="py-20 bg-[#f8f5ee]"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6 sm:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-2 bg-[#be9838]/10 text-[#be9838] text-sm font-semibold rounded-full tracking-wider">
              PRODUCTION SCIENTIFIQUE
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#556331] mt-4 mb-6">
              Nos <span className="text-[#be9838]">publications</span>
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md border-l-4 border-[#be9838] hover:shadow-lg"
                variants={cardAnimation}
                whileHover="hover"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#556331] mb-1">{pub.title}</h3>
                  <div className="text-sm text-gray-500 mb-2">
                    {pub.journal} • {pub.year}
                  </div>
                  <Button variant="link" className="text-[#be9838] p-0 h-auto hover:underline">
                    Lire la publication <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                <motion.span
                  className="text-xs bg-[#be9838]/10 text-[#be9838] px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
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
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6 sm:px-8">
          <motion.div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#be9838]/10 text-[#be9838] text-sm font-semibold rounded-full tracking-wider">
              TALENTS SCIENTIFIQUES
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#556331] mt-4 mb-6">
              Notre <span className="text-[#be9838]">équipe</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une équipe pluridisciplinaire combinant expertise académique et savoir-faire technique.
            </p>
          </motion.div>
          <SpecialTeamSection department="R&D" />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-[#556331] to-[#3a472c] text-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-6 sm:px-8 text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            variants={fadeIn}
          >
            <span className="text-[#be9838]">Collaborons</span> pour l'avenir
          </motion.h2>
          <motion.p
            className="text-lg text-white/90 mb-10 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Rejoignez-nous pour développer des solutions durables et innovantes.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn}
          >
            <Button className="bg-[#be9838] hover:bg-[#be9838]/90 text-white px-10 py-6 rounded-full text-lg font-semibold flex items-center gap-2">
              Proposer un partenariat <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 rounded-full text-lg font-semibold flex items-center gap-2">
              Nous contacter <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ResearchDevelopmentSection;