// src/pages/TeamPage.jsx
import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Jean Dupont",
      position: "Développeur Front-end",
      department: "dev",
      description: "Spécialiste React et Vue.js",
      image: "https://via.placeholder.com/150"
    },
    // Plus de membres...
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);
  const [memberForm, setMemberForm] = useState({
    name: '',
    position: '',
    department: 'dev',
    description: '',
    image: ''
  });

  // Fonctions similaires à celles de ProjectsPage pour gérer le CRUD
  // ...

  return (
    <div className="space-y-6">
      {/* Structure similaire à ProjectsPage */}
      {/* Formulaire spécifique aux membres d'équipe */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            {/* ... en-tête du modal ... */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    value={memberForm.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Poste</label>
                  <input
                    type="text"
                    name="position"
                    value={memberForm.position}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Département</label>
                  <select
                    name="department"
                    value={memberForm.department}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="dev">Développement</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="management">Management</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    value={memberForm.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows="3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {memberForm.image && (
                    <img src={memberForm.image} alt="Preview" className="mt-2 h-20 object-contain" />
                  )}
                </div>
              </div>
              {/* ... boutons de soumission ... */}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;