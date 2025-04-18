import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Map, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const DigitalDepartmentSection = () => {
  const missions = [
    {
      icon: <Code className="w-8 h-8 text-[#556331]" />,
      title: "Outils Numériques",
      description: "Développement d'applications pour la gestion de projets et l'intégration des systèmes.",
    },
    {
      icon: <Map className="w-8 h-8 text-[#556331]" />,
      title: "Cartographie SIG",
      description: "Création de systèmes de cartographie intelligente pour la visualisation des projets.",
    },
    {
      icon: <Database className="w-8 h-8 text-[#556331]" />,
      title: "Bases Cadastrales",
      description: "Numérisation des données foncières pour faciliter la gestion et la prise de décision.",
    },
  ];

  const stats = [
    {
      icon: <Code className="w-10 h-10 text-[#556331]" />,
      value: "8+",
      label: "Outils Développés",
      description: "Solutions numériques déployées",
    },
    {
      icon: <Map className="w-10 h-10 text-[#556331]" />,
      value: "15",
      label: "Projets SIG",
      description: "Cartographies réalisées",
    },
    {
      icon: <Database className="w-10 h-10 text-[#556331]" />,
      value: "10",
      label: "Bases de Données",
      description: "Systèmes cadastrales créés",
    },
  ];

  const projects = [
    {
      title: "Cartographie Intelligente",
      description: "Systèmes SIG pour visualiser et gérer les projets urbains et fonciers.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
    {
      title: "Base de Données Foncière",
      description: "Numérisation des données cadastrales pour une gestion efficace des terrains.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Amina Bello",
      role: "Directrice Numérique",
      description: "Experte en développement d'outils numériques, avec 15 ans d'expérience en informatique.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop",
    },
    {
      name: "Prof. Ibrahim Kane",
      role: "Responsable SIG",
      description: "Spécialiste des systèmes d'information géographique pour l'urbanisme.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Dr. Fatouma Diop",
      role: "Chef de Projets",
      description: "Coordonne l'intégration des bases de données avec les équipes interdisciplinaires.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    },
  ];

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section - Numérique */}
      <motion.section 
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[#556331]/70"></div>
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white leading-tight">
            Solutions Numériques Innovantes
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Développer des outils numériques et des systèmes SIG pour optimiser la gestion des projets Eco2lody.
          </p>
          <Button
            className="bg-[#be9838] hover:bg-[#be9838]/90 text-[#556331] font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
            aria-label="Découvrir nos projets"
          >
            Explorer nos solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-[#be9838]/20 to-[#E0ECE7] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Department Introduction */}
          <motion.section
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span 
              className="inline-block px-5 py-2 bg-[#556331]/10 text-[#556331] text-sm font-medium rounded-full mb-4"
              variants={fadeIn}
            >
              DÉPARTEMENT NUMÉRIQUE
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold font-display text-[#556331] mb-6"
              variants={fadeIn}
            >
              Numérisation pour le Développement
            </motion.h2>
            <motion.p 
              className="text-lg text-[#556331]/80 max-w-3xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              Notre équipe développe des outils numériques et des systèmes SIG pour une gestion précise et collaborative des projets.
            </motion.p>
          </motion.section>

          {/* Missions Section */}
          <motion.section
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-semibold text-[#556331] text-center mb-12"
              variants={fadeIn}
            >
              Nos <span className="text-[#556331] bg-[#be9838] px-3 py-1 rounded-md">Piliers</span>
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:border-[#be9838]/50"
                  variants={fadeInItem}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-[#556331]/10 p-4 rounded-full">
                      {mission.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-[#556331] mb-3 text-center">
                    {mission.title}
                  </h4>
                  <p className="text-[#556331]/80 text-center">
                    {mission.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-semibold text-[#556331] text-center mb-12"
              variants={fadeIn}
            >
              Résultats <span className="text-[#556331] bg-[#be9838] px-3 py-1 rounded-md">Concrets</span>
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all hover:border-[#be9838]/50"
                  variants={fadeInItem}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#556331]/10 p-3 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-[#556331]">{stat.value}</span>
                    <span className="block text-lg font-medium text-[#556331] mt-2">{stat.label}</span>
                  </div>
                  <p className="text-sm text-[#556331]/70">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-semibold text-[#556331] text-center mb-12"
              variants={fadeIn}
            >
              Projets <span className="text-[#556331] bg-[#be9838] px-3 py-1 rounded-md">Phares</span>
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-xl overflow-hidden shadow-xl h-80"
                  variants={fadeInItem}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#556331]/80 via-[#556331]/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-white/90">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-semibold text-[#556331] text-center mb-12"
              variants={fadeIn}
            >
              Notre <span className="text-[#556331] bg-[#be9838] px-3 py-1 rounded-md">Équipe</span>
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all group"
                  variants={fadeInItem}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#556331]/10 group-hover:border-[#be9838]/30 transition-all"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-[#556331] mb-1">{member.name}</h4>
                  <p className="text-sm text-[#556331]/80 mb-3 font-medium">{member.role}</p>
                  <p className="text-[#556331]/70 text-sm">{member.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="bg-[#556331] rounded-2xl p-12 text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              variants={fadeIn}
            >
              Prêt à Numériser Vos Projets ?
            </motion.h3>
            <motion.p 
              className="text-white/80 mb-8 max-w-2xl mx-auto text-lg"
              variants={fadeIn}
            >
              Collaborons pour développer des solutions numériques et SIG adaptées à vos besoins.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button
                className="bg-[#be9838] hover:bg-[#be9838]/90 text-[#556331] font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
                aria-label="Contacter le département Numérique"
              >
                Proposer un partenariat
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalDepartmentSection;