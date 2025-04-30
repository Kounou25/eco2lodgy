// src/pages/PartnersPage.jsx
import { useState } from 'react';
import { Plus, Edit, Trash2, ExternalLink } from 'lucide-react';

const PartnersPage = () => {
  const [partners, setPartners] = useState([
    {
      id: 1,
      name: "Tech Solutions",
      description: "Entreprise spécialisée dans les solutions IT",
      logo: "https://via.placeholder.com/150",
      website: "https://techsolutions.example.com"
    },
    // Plus de partenaires...
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPartner, setCurrentPartner] = useState(null);
  const [partnerForm, setPartnerForm] = useState({
    name: '',
    description: '',
    logo: '',
    website: ''
  });

  // Fonctions similaires pour gérer le CRUD
  // ...

  return (
    <div className="space-y-6">
      {/* Structure similaire */}
      {/* Formulaire spécifique aux partenaires */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            {/* ... en-tête du modal ... */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom du partenaire</label>
                  <input
                    type="text"
                    name="name"
                    value={partnerForm.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    value={partnerForm.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows="3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {partnerForm.logo && (
                    <img src={partnerForm.logo} alt="Preview" className="mt-2 h-20 object-contain" />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Site web</label>
                  <input
                    type="url"
                    name="website"
                    value={partnerForm.website}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="https://example.com"
                  />
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

export default PartnersPage;