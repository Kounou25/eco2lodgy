import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SpecialTeamSection = ({ department }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Fetch team members
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://alphatek.fr:3008/api/members/');
        if (!response.ok) {
          throw new Error('Failed to fetch members');
        }
        const data = await response.json();
        
        // Map API data to component format and filter by department
        const formattedMembers = data.members
          .filter(member => department ? member.departement.toLowerCase() === department.toLowerCase() : true)
          .map(member => ({
            id: member.id,
            name: member.name.trim(),
            role: member.role,
            description: member.description,
            image: `https://alphatek.fr:3008${member.photo_url}`
          }));
        
        setTeamMembers(formattedMembers);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMembers();
  }, [department]);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  }

  return (
    <motion.section
      className="mb-32"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="text-center mb-20" variants={fadeIn}>
        <motion.span 
          className="inline-block text-[#be9838] font-medium mb-4 tracking-wider"
          variants={fadeIn}
        >
          NOTRE ÉQUIPE
        </motion.span>
        <motion.h3 
          className="text-3xl md:text-5xl font-bold text-[#556331] mb-6"
          variants={fadeIn}
        >
          Rencontrez nos <span className="text-[#be9838]">experts</span>
        </motion.h3>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        variants={staggerContainer}
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-gradient-to-br from-[#556331] to-[#3a472c] p-0.5 rounded-2xl shadow-xl"
            variants={cardAnimation}
            whileHover="hover"
          >
            <div className="bg-white h-full p-6 rounded-2xl text-center">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#556331]/10"
                />
              </div>
              <h4 className="text-xl font-semibold text-[#556331] mb-1">{member.name}</h4>
              <p className="text-sm text-[#556331]/80 mb-3 font-medium">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SpecialTeamSection;