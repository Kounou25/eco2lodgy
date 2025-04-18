import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const TrainingDepartmentSection = () => {
  const missions = [
    {
      icon: <BookOpen className="w-8 h-8 text-[#556331]" />,
      title: "Vulgarisation Technique",
      description: "Simplification des concepts complexes pour sensibiliser les communautés locales à l'innovation Eco2lody.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#556331]" />,
      title: "Formation Pédagogique",
      description: "Programmes adaptés pour former artisans et techniciens à des techniques applicables sur le terrain.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#556331]" />,
      title: "Transfert de Compétences",
      description: "Enracinement durable du savoir-faire nigérien via des formations collaboratives avec l'équipe R&D.",
    },
  ];

  const stats = [
    {
      icon: <BookOpen className="w-10 h-10 text-[#556331]" />,
      value: "500+",
      label: "Personnes Formées",
      description: "Artisans et techniciens",
    },
    {
      icon: <Users className="w-10 h-10 text-[#556331]" />,
      value: "10",
      label: "Programmes Développés",
      description: "Ateliers pédagogiques",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#556331]" />,
      value: "5",
      label: "Partenariats Éducatifs",
      description: "Collaborations locales",
    },
  ];

  const projects = [
    {
      title: "Ateliers de Vulgarisation",
      description: "Sessions pour expliquer les innovations Eco2lody aux communautés locales.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Formation des Artisans",
      description: "Programmes pratiques pour enseigner des techniques constructives durables.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Amina Bello",
      role: "Directrice Formation",
      description: "Experte en vulgarisation technique, avec 15 ans d'expérience en pédagogie.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop",
    },
    {
      name: "Prof. Ibrahim Kane",
      role: "Responsable Pédagogie",
      description: "Spécialiste de la formation pratique pour artisans locaux.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Dr. Fatouma Diop",
      role: "Chef de Projets",
      description: "Coordonne les programmes de transfert de compétences avec l'équipe R&D.",
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
      
      {/* Hero Section - Formateurs */}
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
            Formation & Transfert de Savoir-Faire
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Vulgariser les innovations Eco2lody et former les artisans pour un développement durable local.
          </p>
          <Button
            className="bg-[#be9838] hover:bg-[#be9838]/90 text-[#556331] font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
            aria-label="Découvrir nos programmes"
          >
            Explorer nos formations
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
              DÉPARTEMENT FORMATEURS
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold font-display text-[#556331] mb-6"
              variants={fadeIn}
            >
              Former pour Innover
            </motion.h2>
            <motion.p 
              className="text-lg text-[#556331]/80 max-w-3xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              Notre équipe de formateurs vulgarise les concepts techniques et transmet des compétences durables aux artisans locaux.
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
              Prêt à Apprendre et Innover ?
            </motion.h3>
            <motion.p 
              className="text-white/80 mb-8 max-w-2xl mx-auto text-lg"
              variants={fadeIn}
            >
              Rejoignez nos programmes de formation pour maîtriser les techniques durables d'Eco2lody.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button
                className="bg-[#be9838] hover:bg-[#be9838]/90 text-[#556331] font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
                aria-label="Contacter le département Formateurs"
              >
                Participer à une formation
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

export default TrainingDepartmentSection;