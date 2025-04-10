import React, { useState } from 'react';

const TeamSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('Tous');

  const teamMembers = [
    {
      name: "Youssoufou Mahaman",
      role: "Coordinateur Général",
      department: "Technique",
      description: "Supervise les projets d’ingénierie et construction durable au Niger (Page 18).",
      image: "https://img.freepik.com/free-photo/serious-executive-sitting-his-office_1098-1380.jpg?ga=GA1.1.1850963107.1741607734&semt=ais_hybrid&w=740",
    },
    {
      name: "Aminata Souley",
      role: "Architecte Urbaniste",
      department: "Urbanisme",
      description: "Conçoit des plans bioclimatiques pour des quartiers résilients (Page 12).",
      image: "https://plus.unsplash.com/premium_photo-1707155466034-d061c751ba63?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Ibrahim Issoufou",
      role: "Chercheur R&D",
      department: "R&D",
      description: "Développe des matériaux écologiques comme la terre stabilisée (Page 13).",
      image: "https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?ga=GA1.1.1850963107.1741607734&semt=ais_hybrid&w=740",
    },
    {
      name: "Fatima Zara",
      role: "Analyste Financière",
      department: "Économie",
      description: "Optimise les modèles économiques pour des logements abordables (Page 14).",
      image: "https://img.freepik.com/free-photo/young-woman-holding-tablet-work_23-2149116576.jpg?ga=GA1.1.1850963107.1741607734&semt=ais_hybrid&w=740",
    },
    {
      name: "Moussa Adamou",
      role: "Spécialiste Numérique",
      department: "Numérique",
      description: "Gère les levés LiDAR et systèmes SIG pour le cadastre (Page 15).",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Hadiza Saley",
      role: "Formatrice",
      department: "Formation",
      description: "Transfère des compétences aux artisans locaux (Page 16).",
      image: "https://images.unsplash.com/photo-1573496359142-b8d877993ecb?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const departments = ['Tous', ...new Set(teamMembers.map((member) => member.department))];

  const filteredMembers = selectedDepartment === 'Tous'
    ? teamMembers
    : teamMembers.filter((member) => member.department === selectedDepartment);

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

export default TeamSection;