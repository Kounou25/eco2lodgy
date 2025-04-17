import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Building2, ShieldCheck, Leaf, Recycle, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const TechnicalDepartmentSection = () => {
  const missions = [
    {
      icon: <Wrench className="w-8 h-8 text-[#1A3C34]" />,
      title: "Conception Innovante",
      description: "Développement de solutions d'ingénierie adaptées aux défis climatiques du Niger, comme les inondations et les températures extrêmes.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#1A3C34]" />,
      title: "Construction Durable",
      description: "Utilisation de matériaux locaux (terre crue, pierre, fibres végétales) pour des bâtiments écologiques et résilients.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#1A3C34]" />,
      title: "Qualité & Sécurité",
      description: "Respect des normes de construction internationales avec un accent sur la sécurité et la durabilité.",
    },
  ];

  const stats = [
    {
      icon: <Home className="w-10 h-10 text-[#1A3C34]" />,
      value: "750+",
      label: "Logements Construits",
      description: "Habitats durables pour les communautés nigériennes",
    },
    {
      icon: <Leaf className="w-10 h-10 text-[#1A3C34]" />,
      value: "90%",
      label: "Matériaux Locaux",
      description: "Réduction de l'empreinte carbone",
    },
    {
      icon: <Recycle className="w-10 h-10 text-[#1A3C34]" />,
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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#F5E6CC]/30 to-[#E8F0E3]">
      <div className="container mx-auto px-6">
        {/* Section héroïque */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 bg-[#1A3C34]/10 text-[#1A3C34] text-sm font-medium rounded-full">
            DÉPARTEMENT TECHNIQUE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 font-display text-[#1A3C34]">
            Ingénierie & Construction Durables
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
            Le département Technique d'Eco2lodgy conçoit et construit des habitats résilients, écologiques et adaptés au contexte nigérien.
          </p>
        </motion.div>

        {/* Missions */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-[#1A3C34] text-center mb-8">
            Nos Missions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                className="bg-white/90 p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex justify-center">{mission.icon}</div>
                <h4 className="text-lg font-semibold text-[#1A3C34] mb-2">{mission.title}</h4>
                <p className="text-sm text-foreground/70">{mission.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chiffres clés */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-[#1A3C34] text-center mb-8">
            Nos Réalisations en Chiffres
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/90 p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
               らせ


                viewport={{ once: true }}
              >
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="flex justify-center items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#1A3C34]">{stat.value}</span>
                  <span className="text-[#1A3C34] font-medium">{stat.label}</span>
                </div>
                <p className="text-sm text-foreground/60 mt-2">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projets phares */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-[#1A3C34] text-center mb-8">
            Projets Phares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Membres de l'équipe */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-[#1A3C34] text-center mb-8">
            Notre Équipe
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/90 p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold text-[#1A3C34]">{member.name}</h4>
                <p className="text-sm text-[#1A3C34]/80 mb-2">{member.role}</p>
                <p className="text-sm text-foreground/70">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Appel à l'action */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-[#1A3C34] mb-4">
            Prêt à Construire l'Avenir ?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
            Rejoignez-nous pour développer des solutions d'habitat durable et résilient au Niger.
          </p>
          <Button
            className="bg-[#1A3C34] hover:bg-[#1A3C34]/90 text-white transition-colors rounded-full px-6"
            aria-label="Contacter le département Technique"
          >
            Nous Contacter
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalDepartmentSection;