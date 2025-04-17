import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Map, Trees, Droplets, Sun, LayoutGrid, LandPlot } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const UrbanPlanningDepartmentSection = () => {
  const missions = [
    {
      icon: <Map className="w-8 h-8 text-[#8B6F47]" />, // Brownish tone for icons
      title: "Planification Stratégique",
      description: "Conception de plans directeurs intégrant les spécificités climatiques et culturelles du Niger.",
    },
    {
      icon: <Trees className="w-8 h-8 text-[#8B6F47]" />,
      title: "Espaces Verts Intégrés",
      description: "Développement de corridors verts et d'infrastructures végétales pour lutter contre les îlots de chaleur.",
    },
    {
      icon: <Droplets className="w-8 h-8 text-[#8B6F47]" />,
      title: "Gestion Hydraulique",
      description: "Systèmes de drainage durable adaptés aux pluies torrentielles du Sahel.",
    },
  ];

  const stats = [
    {
      icon: <LandPlot className="w-10 h-10 text-[#8B6F47]" />,
      value: "25+",
      label: "Plans Directeurs",
      description: "De villes et communes nigériennes",
    },
    {
      icon: <Sun className="w-10 h-10 text-[#8B6F47]" />,
      value: "40%",
      label: "Réduction Chaleur",
      description: "Grâce à nos aménagements bioclimatiques",
    },
    {
      icon: <LayoutGrid className="w-10 h-10 text-[#8B6F47]" />,
      value: "120ha",
      label: "Espaces Aménagés",
      description: "Dont 30% d'espaces verts en moyenne",
    },
  ];

  const projects = [
    {
      title: "Éco-Quartier de Niamey",
      description: "Aménagement d'un quartier pilote avec circulation douce et jardins communautaires.",
      image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Plan Climat Agadez",
      description: "Stratégie d'adaptation urbaine aux températures extrêmes.",
      image: "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  const teamMembers = [
    {
      name: "Harouna Moussa",
      role: "Urbaniste Principal",
      description: "Spécialiste en planification territoriale avec 12 ans d'expérience au Sahel.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop",
    },
    {
      name: "Aïchatou Diallo",
      role: "Paysagiste",
      description: "Expert en intégration végétale en milieu urbain aride.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
    },
    {
      name: "Yacouba Issa",
      role: "Spécialiste Mobilité",
      description: "Conception de réseaux de transport résilients.",
      image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=1856&auto=format&fit=crop",
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
      
      {/* Hero Section - Urbanisme */}
      <motion.section 
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[#2E5E4E]/70"></div>
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white leading-tight">
            Urbanisme bioclimatique pour le Niger
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Planification architecturale et aménagement territorial pour des quartiers durables, intégrant espaces verts et infrastructures adaptées.
          </p>
          <Button
            className="bg-[#A8C686] hover:bg-[#A8C686]/90 text-[#2E5E4E] font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
            aria-label="Découvrir nos plans"
          >
            Voir nos réalisations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-[#F0F7F4] to-[#E0ECE7] py-16">
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
              className="inline-block px-5 py-2 bg-[#2E5E4E]/10 text-[#2E5E4E] text-sm font-medium rounded-full mb-4"
              variants={fadeIn}
            >
              DÉPARTEMENT D'URBANISME
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold font-display text-[#2E5E4E] mb-6"
              variants={fadeIn}
            >
              Villes Résilientes et Inclusives
            </motion.h2>
            <motion.p 
              className="text-lg text-[#2E5E4E]/80 max-w-3xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              Nous concevons des espaces urbains qui concilient modernité, traditions locales et adaptation aux changements climatiques.
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
              className="text-2xl md:text-3xl font-semibold text-[#2E5E4E] text-center mb-12"
              variants={fadeIn}
            >
              Notre <span className="text-[#A8C686] bg-[#2E5E4E] px-3 py-1 rounded-md">Approche</span>
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  variants={fadeInItem}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-[#2E5E4E]/10 p-4 rounded-full">
                      {mission.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-[#2E5E4E] mb-3 text-center">
                    {mission.title}
                  </h4>
                  <p className="text-[#2E5E4E]/80 text-center">
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
              className="text-2xl md:text-3xl font-semibold text-[#2E5E4E] text-center mb-12"
              variants={fadeIn}
            >
              Chiffres <span className="text-[#A8C686] bg-[#2E5E4E] px-3 py-1 rounded-md">Clés</span>
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all"
                  variants={fadeInItem}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#2E5E4E]/10 p-3 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-[#2E5E4E]">{stat.value}</span>
                    <span className="block text-lg font-medium text-[#2E5E4E] mt-2">{stat.label}</span>
                  </div>
                  <p className="text-sm text-[#2E5E4E]/70">{stat.description}</p>
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
              className="text-2xl md:text-3xl font-semibold text-[#2E5E4E] text-center mb-12"
              variants={fadeIn}
            >
              Études <span className="text-[#A8C686] bg-[#2E5E4E] px-3 py-1 rounded-md">Récentes</span>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E5E4E]/80 via-[#2E5E4E]/30 to-transparent"></div>
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
              className="text-2xl md:text-3xl font-semibold text-[#2E5E4E] text-center mb-12"
              variants={fadeIn}
            >
              L'Équipe <span className="text-[#A8C686] bg-[#2E5E4E] px-3 py-1 rounded-md">Urbanisme</span>
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
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#2E5E4E]/10 group-hover:border-[#2E5E4E]/30 transition-all"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-[#2E5E4E] mb-1">{member.name}</h4>
                  <p className="text-sm text-[#2E5E4E]/80 mb-3 font-medium">{member.role}</p>
                  <p className="text-[#2E5E4E]/70 text-sm">{member.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="bg-[#2E5E4E] rounded-2xl p-12 text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              variants={fadeIn}
            >
              Un Projet Urbain Durable ?
            </motion.h3>
            <motion.p 
              className="text-white/80 mb-8 max-w-2xl mx-auto text-lg"
              variants={fadeIn}
            >
              Collaborons pour concevoir des espaces de vie résilients et harmonieux.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button
                className="bg-[#A8C686] hover:bg-[#A8C686]/90 text-[#2E5E4E] font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
                aria-label="Contacter le département Urbanisme"
              >
                Planifier une consultation
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

export default UrbanPlanningDepartmentSection;