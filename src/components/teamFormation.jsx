import React, { useState, useEffect } from 'react';

const TeamFormation = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('Tous');
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('https://alphatek.fr:3008/api/members/');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des membres');
        }
        const data = await response.json();
        // Adaptation des données au format attendu par le composant
        const formattedMembers = data.members.map(member => ({
          name: member.name.trim(), // Suppression des retours à la ligne ou espaces inutiles
          role: member.role,
          department: member.departement.charAt(0).toUpperCase() + member.departement.slice(1), // Capitalisation du département
          description: member.description,
          image: member.photo_url.startsWith('http') 
            ? member.photo_url 
            : `https://alphatek.fr:3008${member.photo_url}` // Ajout du domaine si l'URL est relative
        }));
        setTeamMembers(formattedMembers);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const departments = ['Tous', ...new Set(teamMembers.map((member) => member.department))];

  const filteredMembers = selectedDepartment === 'Tous'
    ? teamMembers
    : teamMembers.filter((member) => member.department === selectedDepartment);

  if (loading) {
    return (
      <section className="py-16 bg-[#F5F5F5]" id="team">
        <div className="container mx-auto px-4">
          <p className="text-center">Chargement des membres...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-[#F5F5F5]" id="team">
        <div className="container mx-auto px-4">
          <p className="text-center text-red-600">Erreur : {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#F5F5F5]" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#2E5A27]/10 text-[#2E5A27] text-sm rounded-full">
            NOTRE ÉQUIPE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 font-display text-[#2E5A27]">
            L’Équipe Eco2lodgy
          </h2>
          <p className="text-foreground/70 mt-2 max-w-2xl mx-auto">
            Rencontrez nos experts dédiés à un Niger durable, organisés par département.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => setSelectedDepartment(department)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedDepartment === department
                  ? 'bg-[#2E5A27] text-white'
                  : 'bg-gray-100 text-[#2E5A27] hover:bg-[#2E5A27]/20'
              }`}
            >
              {department}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="relative h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-white/80">{member.role}</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-foreground/70">{member.description}</p>
                <p className="text-xs text-[#D4A017] mt-2 font-medium">{member.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamFormation;