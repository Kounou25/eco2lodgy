import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, DollarSign, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const EconomicFinancialSection = () => {
  const missions = [
    {
      icon: <BarChart className="w-8 h-8 text-[#556331]" />,
      title: "Analyse du Marché Immobilier",
      description: "Étude approfondie du marché nigérien pour identifier les opportunités et optimiser les projets.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#556331]" />,
      title: "Optimisation des Coûts",
      description: "Collaboration avec les équipes techniques et urbanistes pour équilibrer qualité et budget.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#556331]" />,
      title: "Montages Financiers",
      description: "Structures de financement innovantes pour rendre les projets accessibles et rentables.",
    },
  ];

  const stats = [
    {
      icon: <BarChart className="w-10 h-10 text-[#556331]" />,
      value: "12+",
      label: "Projets Analysés",
      description: "Études de marché réalisées",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-[#556331]" />,
      value: "6",
      label: "Financements Structurés",
      description: "Solutions financières déployées",
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#556331]" />,
      value: "10",
      label: "Partenariats Financiers",
      description: "Collaborations avec institutions",
    },
  ];

  const projects = [
    {
      title: "Optimisation Immobilière",
      description: "Modèles économiques pour des constructions à coûts réduits au Niger.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Financement Local",
      description: "Structures de financement pour des projets immobiliers accessibles aux populations.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
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
      
      {/* Hero Section - Économie/Financier */}
      <motion.section 
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560523159-4a9692d222ef?q=80&w=2070&auto=format&fit=crop')`,
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
            Économie & Financement Innovant
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Analyse du marché immobilier et solutions financières pour des projets accessibles et durables au Niger.
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
              DÉPARTEMENT ÉCONOMIE & FINANCIER
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold font-display text-[#556331] mb-6"
              variants={fadeIn}
            >
              Financer le Développement Local
            </motion.h2>
            <motion.p 
              className="text-lg text-[#556331]/80 max-w-3xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              Notre équipe analyse le marché immobilier nigérien et élabore des financements pour des projets rentables et accessibles.
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
              Financer Votre Projet ?
            </motion.h3>
            <motion.p 
              className="text-white/80 mb-8 max-w-2xl mx-auto text-lg"
              variants={fadeIn}
            >
              Collaborons pour structurer des financements innovants et optimiser vos projets immobiliers.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button
                className="bg-[#be9838] hover:bg-[#be9838]/90 text-[#556331] font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
                aria-label="Contacter le département Économie/Financier"
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

export default EconomicFinancialSection;