import React, { useState } from 'react';

const TeamSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('Tous');

  const teamMembers = [
    {
      name: "Aminata Diallo",
      role: "Architecte en Chef",
      department: "Architecture",
      description: "Spécialiste en conception durable et résiliente face au climat.",
      image: "https://plus.unsplash.com/premium_photo-1707155466034-d061c751ba63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x300?text=Aminata",
    },
    {
      name: "Ibrahim Sani",
      role: "Ingénieur Énergéticien",
      department: "Énergie",
      description: "Expert en solutions énergétiques écologiques et locales.",
      image: "https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?ga=GA1.1.1850963107.1741607734&semt=ais_hybrid&w=740",
    },
    {
      name: "Fatima Oumarou",
      role: "Responsable Numérique",
      department: "Numérique",
      description: "Développe des outils digitaux pour une gestion optimisée.",
      image: "https://img.freepik.com/free-photo/young-woman-holding-tablet-work_23-2149116576.jpg?ga=GA1.1.1850963107.1741607734&semt=ais_hybrid&w=740",
    },
    {
      name: "Moussa Traoré",
      role: "Coordinateur Communautaire",
      department: "Communauté",
      description: "Lien avec les communautés pour des projets inclusifs.",
      image: "https://img.freepik.com/free-photo/serious-executive-sitting-his-office_1098-1380.jpg?ga=GA1.1.1850963107.1741607734&semt=ais_hybrid&w=740",
    },
  ];

  // Liste unique des départements + "Tous"
  const departments = ['Tous', ...new Set(teamMembers.map((member) => member.department))];

  // Filtrer les membres selon le département sélectionné
  const filteredMembers = selectedDepartment === 'Tous'
    ? teamMembers
    : teamMembers.filter((member) => member.department === selectedDepartment);

  return (
    <section className="py-16 bg-[#F5F5F5]" id="team">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#2E5A27]/10 text-[#2E5A27] text-sm rounded-full">
            NOTRE ÉQUIPE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 font-display text-[#2E5A27]">
            Les Visages Derrière Eco2lodgy
          </h2>
          <p className="text-foreground/70 mt-2 max-w-2xl mx-auto">
            Découvrez notre équipe par département, unie pour un habitat durable au Niger.
          </p>
        </div>

        {/* Filtre par département */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => setSelectedDepartment(department)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedDepartment === department
                  ? 'bg-[#2E5A27] text-white'
                  : 'bg-gray-100 text-[#2E5A27] hover:bg-[#2E5A27]/10'
              }`}
            >
              {department}
            </button>
          ))}
        </div>

        {/* Grille des membres */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-white/80">{member.role}</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-foreground/70">{member.description}</p>
                <p className="text-xs text-[#2E5A27] mt-2">{member.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;