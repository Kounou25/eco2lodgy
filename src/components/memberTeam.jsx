import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const SpecialTeamSection = ({ department }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('https://alphatek.fr:3008/api/members/');
        const data = await response.json();
        const formatted = data.members
          .filter(m => department ? m.departement.toLowerCase() === department.toLowerCase() : true)
          .map(m => ({
            id: m.id,
            name: m.name,
            role: m.role,
            description: m.description,
            image: `https://alphatek.fr:3008${m.photo_url}`,
            social: m.social || { linkedin: '#', twitter: '#' },
          }));
        setTeamMembers(formatted);
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des membres.');
        setLoading(false);
      }
    };
    fetchMembers();
  }, [department]);

  if (loading) return <div className="py-20 text-center text-gray-600">Chargement...</div>;
  if (error) return <div className="py-20 text-center text-red-500">{error}</div>;

  return (
    <section className="relative py-28 px-6 sm:px-12 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          L'équipe <span className="text-primary">qui fait la différence</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Rencontrez nos experts passionnés qui donnent vie à nos projets.
        </motion.p>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <AnimatePresence>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group bg-gradient-to-tr from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-primary/50 shadow-md"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-primary/20 transition" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-4">
                  {member.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#0a66c2] dark:text-gray-300 dark:hover:text-white"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#1da1f2] dark:text-gray-300 dark:hover:text-white"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SpecialTeamSection;
