import { useState, useEffect } from 'react';
import { 
  Briefcase, Handshake, Users, FileText, 
  Plus, Edit, Trash2, Image as ImageIcon, 
  Link as LinkIcon, ChevronDown, Search,
  ArrowLeft, ArrowRight, Loader2,
  AlertCircle, CheckCircle
} from 'lucide-react';

export default function AdminDashboard() {
  // États pour la navigation et l'UI
  const [activeTab, setActiveTab] = useState('partners');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // États pour les données
  const [formData, setFormData] = useState({
    partners: { 
      id: '', 
      name: '', 
      description: '', 
      logo_url: '', 
      website_url: '' 
    },
    members: { 
      id: '', 
      name: '', 
      role: '', 
      departement: '', 
      photo_url: '', 
      description: '' 
    },
    posts: { 
      id: '', 
      title: '', 
      content: '', 
      thumbnail_url: '', 
      author: '' 
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [partners, setPartners] = useState([]);
  const [members, setMembers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Configuration des API
  const API_ENDPOINTS = {
    partners: 'https://alphatek.fr:3008/api/partners/',
    members: 'https://alphatek.fr:3008/api/members/',
    posts: 'https://alphatek.fr:3008/api/posts/'
  };

  // Récupération des données initiales
  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      setError(null);
      
      try {
        const [partnersRes, membersRes, postsRes] = await Promise.all([
          fetch(API_ENDPOINTS.partners),
          fetch(API_ENDPOINTS.members),
          fetch(API_ENDPOINTS.posts)
        ]);

        const partnersData = await partnersRes.json();
        const membersData = await membersRes.json();
        const postsData = await postsRes.json();

        setPartners(partnersData.partners || []);
        setMembers(membersData.members || []);
        setPosts(postsData.posts || []);
      } catch (err) {
        console.error('Erreur API:', err);
        setError('Erreur de chargement des données');
        setPartners([]);
        setMembers([]);
        setPosts([]);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  // Filtrage et pagination
  const filteredItems = {
    partners: (Array.isArray(partners) ? partners : []).filter(partner =>
      partner?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    members: (Array.isArray(members) ? members : []).filter(member =>
      member?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member?.departement?.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    posts: (Array.isArray(posts) ? posts : []).filter(post =>
      post?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post?.author?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }[activeTab];

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Gestion des formulaires
  const handleInputChange = (e, entity) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [entity]: { ...prev[entity], [name]: value }
    }));
  };

  const handleFileChange = (e, entity, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          [entity]: { ...prev[entity], [field]: reader.result }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = (entity) => {
    setFormData(prev => ({
      ...prev,
      [entity]: Object.fromEntries(
        Object.keys(prev[entity]).map(key => [key, key === 'id' ? '' : ''])
      )
    }));
    setIsEditing(false);
  };

  const handleEdit = (item, entity) => {
    setFormData(prev => ({
      ...prev,
      [entity]: item
    }));
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Opérations CRUD
  const handleSubmit = async (e, entity) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const method = isEditing ? 'PUT' : 'POST';
      const url = isEditing 
        ? `${API_ENDPOINTS[entity]}${formData[entity].id}`
        : API_ENDPOINTS[entity];

      // Préparation des données selon l'entité
      let requestData;
      if (entity === 'partners') {
        requestData = {
          name: formData.partners.name,
          description: formData.partners.description,
          website_url: formData.partners.website_url,
          logo_url: formData.partners.logo_url
        };
      } else if (entity === 'members') {
        requestData = {
          name: formData.members.name,
          role: formData.members.role,
          departement: formData.members.departement,
          photo_url: formData.members.photo_url,
          description: formData.members.description
        };
      } else if (entity === 'posts') {
        requestData = {
          title: formData.posts.title,
          content: formData.posts.content,
          thumbnail_url: formData.posts.thumbnail_url,
          author: formData.posts.author
        };
      }

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) throw new Error('Erreur de sauvegarde');

      const data = await response.json();

      // Mise à jour du state
      const updateState = {
        partners: setPartners,
        members: setMembers,
        posts: setPosts
      }[entity];

      updateState(prev => 
        isEditing 
          ? prev.map(item => item.id === data.id ? data : item)
          : [...prev, data]
      );

      setSuccessMessage(
        `${entity === 'members' ? 'Membre' : 
         entity === 'posts' ? 'Article' : 
         'Partenaire'} ${isEditing ? 'mis à jour' : 'ajouté'} avec succès`
      );
      setTimeout(() => setSuccessMessage(null), 3000);
      resetForm(entity);
    } catch (err) {
      console.error('Erreur:', err);
      setError(`Échec de l'opération: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id, entity) => {
    if (!window.confirm('Confirmer la suppression ?')) return;

    try {
      const response = await fetch(`${API_ENDPOINTS[entity]}${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Erreur de suppression');

      // Mise à jour du state
      const updateState = {
        partners: setPartners,
        members: setMembers,
        posts: setPosts
      }[entity];
      
      updateState(prev => prev.filter(item => item.id !== id));
      
      // Ajustement pagination
      if (currentPage > 1 && currentItems.length === 1) {
        setCurrentPage(currentPage - 1);
      }

      setSuccessMessage('Suppression réussie');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      console.error('Erreur:', err);
      setError('Échec de la suppression');
    }
  };

  // Composants d'affichage
  const renderForm = (entity, fields) => {
    const titles = {
      partners: 'Partenaire',
      members: 'Membre',
      posts: 'Article'
    };

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            {isEditing ? 'Modifier' : 'Ajouter'} {titles[entity]}
          </h3>
        </div>
        
        <form onSubmit={(e) => handleSubmit(e, entity)} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.map(field => (
              <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 capitalize">
                  {field.label || field.name}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                
                {field.type === 'select' ? (
                  <select
                    name={field.name}
                    value={formData[entity][field.name] || ''}
                    onChange={(e) => handleInputChange(e, entity)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                    required={field.required}
                  >
                    <option value="">Sélectionner...</option>
                    {field.options?.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : field.type === 'file' ? (
                  <div className="space-y-2">
                    <label className="flex flex-col items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50/50 hover:border-blue-200 transition-all">
                      <div className="flex flex-col items-center">
                        {formData[entity][field.name] ? (
                          <>
                            <img 
                              src={
                                typeof formData[entity][field.name] === 'string' && formData[entity][field.name].startsWith('/uploads')
                                  ? `https://alphatek.fr:3008${formData[entity][field.name]}`
                                  : formData[entity][field.name]
                              } 
                              alt="Preview" 
                              className="h-16 w-16 object-contain mb-2 rounded"
                            />
                            <span className="text-sm text-blue-600 font-medium">Changer</span>
                          </>
                        ) : (
                          <>
                            <div className="p-3 bg-blue-100 rounded-full mb-2">
                              <ImageIcon className="text-blue-600" size={20} />
                            </div>
                            <span className="text-sm text-gray-600 font-medium">Téléverser</span>
                            <span className="text-xs text-gray-500 mt-1">PNG, JPG (max. 2MB)</span>
                          </>
                        )}
                      </div>
                      <input
                        type="file"
                        name={field.name}
                        onChange={(e) => handleFileChange(e, entity, field.name)}
                        className="hidden"
                        accept="image/*"
                        required={!isEditing && field.required}
                      />
                    </label>
                  </div>
                ) : field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    value={formData[entity][field.name] || ''}
                    onChange={(e) => handleInputChange(e, entity)}
                    rows={5}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                    required={field.required}
                  />
                ) : (
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    value={formData[entity][field.name] || ''}
                    onChange={(e) => handleInputChange(e, entity)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
            {isEditing && (
              <button
                type="button"
                onClick={() => resetForm(entity)}
                className="px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center ${isLoading ? 'opacity-75' : ''}`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={18} />
                  En cours...
                </>
              ) : isEditing ? (
                'Mettre à jour'
              ) : (
                <>
                  <Plus className="mr-2" size={18} />
                  Ajouter
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    );
  };

  const renderList = (items, entity, columns) => {
    const titles = {
      partners: 'Partenaires',
      members: 'Membres',
      posts: 'Articles'
    };

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-800">{titles[entity]}</h3>
          
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 w-full md:w-64 transition-all"
            />
          </div>
        </div>
        
        <div className="p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto h-24 w-24 text-gray-400">
                <FileText className="w-full h-full opacity-50" />
              </div>
              <h4 className="mt-4 text-sm font-medium text-gray-700">Aucun élément trouvé</h4>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm ? 'Essayez une autre recherche' : `Commencez par ajouter un ${entity === 'members' ? 'membre' : entity === 'posts' ? 'article' : 'partenaire'}`}
              </p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {columns.map(col => (
                        <th key={col.key} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {col.label}
                        </th>
                      ))}
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentItems.map(item => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        {columns.map(col => (
                          <td key={col.key} className="px-6 py-4 whitespace-nowrap">
                            {col.key.endsWith('_url') || col.key === 'photo_url' || col.key === 'thumbnail_url' ? (
                              item[col.key] ? (
                                <img 
                                  src={`https://alphatek.fr:3008${item[col.key]}`} 
                                  alt={col.label} 
                                  className="h-10 w-10 rounded-full object-cover"
                                />
                              ) : (
                                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                  <ImageIcon size={16} className="text-gray-400" />
                                </div>
                              )
                            ) : col.key === 'website_url' ? (
                              <a 
                                href={item.website_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                {item.website_url}
                              </a>
                            ) : (
                              <div className={`text-sm ${col.key === 'title' || col.key === 'name' ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
                                {item[col.key]}
                              </div>
                            )}
                          </td>
                        ))}
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-2">
                          <button
                            onClick={() => handleEdit(item, entity)}
                            className="text-blue-600 hover:text-blue-800 p-1.5 rounded-md hover:bg-blue-50 transition-colors"
                            title="Modifier"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id, entity)}
                            className="text-red-600 hover:text-red-800 p-1.5 rounded-md hover:bg-red-50 transition-colors"
                            title="Supprimer"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    Affichage de <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> à{' '}
                    <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredItems.length)}</span> sur{' '}
                    <span className="font-medium">{filteredItems.length}</span> résultats
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                      disabled={currentPage === 1}
                      className="p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 rounded-md ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'border border-gray-300 hover:bg-gray-50'} transition-colors`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                    <button
                      onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 flex items-center">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-lg mr-3">AT</span>
            <span>Administration Alphatek</span>
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-medium text-blue-800">AD</span>
              </div>
              <span className="hidden md:inline text-sm font-medium">Admin</span>
              <ChevronDown className="text-gray-500" size={16} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {['partners', 'members', 'posts'].map((tab) => {
              const icons = {
                partners: <Handshake className="inline mr-2" size={16} />,
                members: <Users className="inline mr-2" size={16} />,
                posts: <FileText className="inline mr-2" size={16} />
              };
              const labels = {
                partners: 'Partenaires',
                members: 'Équipe',
                posts: 'Articles'
              };
              
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSearchTerm('');
                    setCurrentPage(1);
                  }}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {icons[tab]}
                  {labels[tab]}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Messages d'état */}
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
              <div className="text-sm text-red-700">{error}</div>
            </div>
          </div>
        )}

        {successMessage && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <div className="text-sm text-green-700">{successMessage}</div>
            </div>
          </div>
        )}

        {/* Contenu principal */}
        {isFetching ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="animate-spin h-12 w-12 text-blue-500" />
            <span className="ml-3 text-gray-600">Chargement des données...</span>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <AlertCircle className="mx-auto h-12 w-12 text-red-500" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">Erreur de chargement</h3>
            <p className="mt-1 text-sm text-gray-500">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Réessayer
            </button>
          </div>
        ) : (
          <>
            {activeTab === 'partners' && (
              <>
                {renderForm('partners', [
                  { name: 'name', label: 'nom', type: 'text', required: true },
                  { name: 'description', type: 'textarea' },
                  { name: 'logo_url', label: 'logo', type: 'file' },
                  { name: 'website_url', label: 'site web', type: 'url', required: true }
                ])}
                {renderList(partners, 'partners', [
                  { key: 'name', label: 'Nom' },
                  { key: 'website_url', label: 'Site web' },
                  { key: 'logo_url', label: 'Logo' }
                ])}
              </>
            )}

            {activeTab === 'members' && (
              <>
                {renderForm('members', [
                  { name: 'name', label: 'nom', type: 'text', required: true },
                  { name: 'role', label: 'poste', type: 'text', required: true },
                  { name: 'departement', label: 'département', type: 'text', required: true },
                  { name: 'photo_url', label: 'photo', type: 'file' },
                  { name: 'description', type: 'textarea', required: true }
                ])}
                {renderList(members, 'members', [
                  { key: 'name', label: 'Nom' },
                  { key: 'role', label: 'Poste' },
                  { key: 'departement', label: 'Département' },
                  { key: 'photo_url', label: 'Photo' }
                ])}
              </>
            )}

            {activeTab === 'posts' && (
              <>
                {renderForm('posts', [
                  { name: 'title', label: 'titre', type: 'text', required: true },
                  { name: 'content', label: 'contenu', type: 'textarea', required: true },
                  { name: 'thumbnail_url', label: 'bannière', type: 'file' },
                  { name: 'author', label: 'auteur', type: 'text', required: true }
                ])}
                {renderList(posts, 'posts', [
                  { key: 'title', label: 'Titre' },
                  { key: 'author', label: 'Auteur' },
                  { key: 'thumbnail_url', label: 'Bannière' }
                ])}
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}