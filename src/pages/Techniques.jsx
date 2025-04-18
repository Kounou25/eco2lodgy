import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Building2, ShieldCheck, Leaf, Recycle, Home, Ruler, HardHat, DraftingCompass, Map, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const TechnicalDepartmentSection = () => {
  const missions = [
    {
      icon: <Wrench className="w-8 h-8 text-[#556331]" />,
      title: "Conception Innovante",
      description: "Développement de solutions d'ingénierie adaptées aux défis climatiques du Niger, comme les inondations et les températures extrêmes.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#556331]" />,
      title: "Construction Durable",
      description: "Utilisation de matériaux locaux (terre crue, pierre, fibres végétales) pour des bâtiments écologiques et résilients.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#556331]" />,
      title: "Qualité & Sécurité",
      description: "Respect des normes de construction internationales avec un accent sur la sécurité et la durabilité.",
    },
  ];

  const stats = [
    {
      icon: <Home className="w-10 h-10 text-[#556331]" />,
      value: "750+",
      label: "Logements Construits",
      description: "Habitats durables pour les communautés nigériennes",
    },
    {
      icon: <Leaf className="w-10 h-10 text-[#556331]" />,
      value: "90%",
      label: "Matériaux Locaux",
      description: "Réduction de l'empreinte carbone",
    },
    {
      icon: <Recycle className="w-10 h-10 text-[#556331]" />,
      value: "200T",
      label: "Matériaux Recyclés",
      description: "Utilisation de ressources revalorisées",
    },
  ];

  const projects = [
    {
      title: "Village Résilient de Zinder",
      description: "Construction de 50 logements utilisant des briques de terre compressée, résistants aux inondations.",
      image: "https://images.unsplash.com/photo-1593952873517-1c7bd65eadaf?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "École Écologique de Niamey",
      description: "Bâtiment scolaire conçu avec des matériaux locaux et une ventilation naturelle pour un confort thermique.",
      image: "https://images.unsplash.com/photo-1593952873517-1c7bd65eadaf?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  const teamMembers = [
    {
      name: "Aminata Souley",
      role: "Ingénieure en Chef",
      description: "Spécialiste en construction durable avec 15 ans d'expérience dans l'ingénierie écologique.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2000&auto=format&fit=crop",
    },
    {
      name: "Moussa Diallo",
      role: "Architecte Principal",
      description: "Expert en conception de bâtiments résilients adaptés au climat nigérien.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
    },
    {
      name: "Fatima Oumar",
      role: "Responsable Qualité",
      description: "Garante des normes de sécurité et de durabilité sur tous les chantiers.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  // Nouvelle section Travaux Publics
  const publicWorks = [
    {
      icon: <DraftingCompass className="w-8 h-8 text-[#556331]" />,
      title: "Géomètres-experts",
      description: "Fournissent les relevés précis qui constituent la base informationnelle de tous les projets, établissent les limites de propriété et alimentent le travail des autres experts techniques et de l'équipe numérique.",
    },
    {
      icon: <HardHat className="w-8 h-8 text-[#556331]" />,
      title: "Ingénieurs en structure",
      description: "Experts en calculs et dimensionnement qui définissent les caractéristiques structurelles des bâtiments, travaillant avec les spécialistes du bâtiment et l'équipe R&D pour garantir solidité et innovation.",
      subItems: [
        {
          icon: <Cpu className="w-6 h-6 text-[#556331]" />,
          title: "Experts VRD",
          description: "Conçoivent et intègrent les réseaux (eau, assainissement, électricité) essentiels à la viabilisation des sites, en s'appuyant sur les données topographiques et en coordination avec les autres spécialistes.",
        },
        {
          icon: <Ruler className="w-6 h-6 text-[#556331]" />,
          title: "Experts en calculs",
          description: "Transforment les calculs théoriques en solutions constructives concrètes, assurant la mise en œuvre sur le terrain en coordination avec ingénieurs et experts VRD, tout en respectant la vision architecturale.",
        }
      ]
    }
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
      
      {/* Hero Section */}
      <motion.section 
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5nZW5pZXJpZXxlbnwwfHwwfHx8MA%3D%3D')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[#556331]/60"></div>
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white leading-tight">
            Construisons un avenir durable ensemble
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Eco2lodgy transforme les défis climatiques du Niger en opportunités grâce à des solutions d'ingénierie innovantes et écologiques.
          </p>
          <Button
            className="bg-[#be9838] hover:bg-[#be9838]/90 text-[#556331] font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
            aria-label="Découvrir nos projets"
          >
            Découvrir nos projets
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-[#be9838]/20 to-[#E8F0E3] py-16">
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
              DÉPARTEMENT TECHNIQUE
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold font-display text-[#556331] mb-6"
              variants={fadeIn}
            >
              Ingénierie & Construction Durables
            </motion.h2>
            <motion.p 
              className="text-lg text-[#556331]/80 max-w-3xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              Notre département conçoit et construit des habitats résilients, écologiques et parfaitement adaptés au contexte nigérien.
            </motion.p>
          </motion.section>

          {/* Public Works Section */}
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
              <span className="text-[#556331] bg-[#be9838] px-3 py-1 rounded-md">Travaux Publics</span> & Expertise
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              {publicWorks.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  variants={fadeInItem}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-[#556331]/10 p-3 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-[#556331]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[#556331]/80 mb-4 pl-16">
                    {item.description}
                  </p>
                  
                  {item.subItems && (
                    <div className="mt-6 space-y-4 pl-8 border-l-2 border-[#be9838]/30">
                      {item.subItems.map((subItem, subIndex) => (
                        <div key={subIndex} className="flex items-start">
                          <div className="bg-[#556331]/10 p-2 rounded-full mr-3 mt-1">
                            {subItem.icon}
                          </div>
                          <div>
                            <h5 className="font-medium text-[#556331]">{subItem.title}</h5>
                            <p className="text-sm text-[#556331]/70">{subItem.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
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
              Nos <span className="text-[#556331] bg-[#be9838] px-3 py-1 rounded-md">Missions</span>
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:border-[#be9838]/50"
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
              Notre <span className="text-[#556331] bg-[#be9838] px-3 py-1 rounded-md">Impact</span>
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
              Rencontrez notre <span className="text-[#556331] bg-[#be9838] px-3 py-1 rounded-md">Équipe</span>
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
              Prêt à Construire l'Avenir Avec Nous ?
            </motion.h3>
            <motion.p 
              className="text-white/80 mb-8 max-w-2xl mx-auto text-lg"
              variants={fadeIn}
            >
              Rejoignez-nous pour développer des solutions d'habitat durable et résilient au Niger.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button
                className="bg-[#be9838] hover:bg-[#be9838]/90 text-[#556331] font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
                aria-label="Contacter le département Technique"
              >
                Nous Contacter
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

export default TechnicalDepartmentSection;