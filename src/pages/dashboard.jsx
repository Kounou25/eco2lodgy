import { useState } from 'react';
import { 
  Briefcase, Handshake, Users, FileText, 
  Plus, Edit, Trash2, Image as ImageIcon, 
  Link as LinkIcon, ChevronDown, Search,
  ArrowLeft, ArrowRight, Loader2
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('projects');
  const [formData, setFormData] = useState({
    projects: { id: '', title: '', description: '', image: '', type: '' },
    partners: { id: '', name: '', description: '', logo: '', website: '' },
    team: { id: '', name: '', position: '', department: '', image: '', bio: '' },
    posts: { id: '', title: '', content: '', banner: '', author: '' }
  });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Données exemple plus réalistes
  const [projects, setProjects] = useState([
    { id: '1', title: 'Site Vitrine', description: 'Création d\'un site vitrine responsive', image: '', type: 'Site Web' },
    { id: '2', title: 'App Mobile', description: 'Développement d\'une application iOS/Android', image: '', type: 'Application Mobile' }
  ]);

  const [partners, setPartners] = useState([
    { id: '1', name: 'TechSolutions', description: 'Partenaire technologique', logo: '', website: 'https://techsolutions.com' }
  ]);

  const [team, setTeam] = useState([
    { id: '1', name: 'Jean Dupont', position: 'Développeur Frontend', department: 'Développement', image: '', bio: 'Spécialiste React' }
  ]);

  const [posts, setPosts] = useState([
    { id: '1', title: 'Nouveautés 2023', content: 'Découvrez nos nouvelles offres', banner: '', author: 'Admin' }
  ]);

  const projectTypes = ['Site Web', 'Application Mobile', 'Design', 'Marketing'];
  const departments = ['Développement', 'Design', 'Marketing', 'RH'];

  // Filtrage et pagination
  const filteredItems = {
    projects: projects.filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.type.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    partners: partners.filter(partner =>
      partner.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    team: team.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.department.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    posts: posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }[activeTab];

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleInputChange = (e, entity) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [entity]: {
        ...prev[entity],
        [name]: value
      }
    }));
  };

  const handleFileChange = (e, entity, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          [entity]: {
            ...prev[entity],
            [field]: reader.result
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e, entity) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simuler une requête API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const data = formData[entity];
    
    if (isEditing) {
      // Mise à jour
      const updateFunc = {
        projects: setProjects,
        partners: setPartners,
        team: setTeam,
        posts: setPosts
      }[entity];
      
      updateFunc(prev => prev.map(item => item.id === data.id ? data : item));
    } else {
      // Ajout
      const newItem = { ...data, id: Date.now().toString() };
      const addFunc = {
        projects: setProjects,
        partners: setPartners,
        team: setTeam,
        posts: setPosts
      }[entity];
      
      addFunc(prev => [...prev, newItem]);
    }
    
    // Réinitialiser
    resetForm(entity);
    setIsLoading(false);
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

  const handleDelete = (id, entity) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cet élément ?');
    if (confirmDelete) {
      const deleteFunc = {
        projects: setProjects,
        partners: setPartners,
        team: setTeam,
        posts: setPosts
      }[entity];
      
      deleteFunc(prev => prev.filter(item => item.id !== id));
      if (currentPage > 1 && currentItems.length === 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const renderForm = (entity, fields) => {
    const titles = {
      projects: 'Projet',
      partners: 'Partenaire',
      team: 'Membre',
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
              <div key={field.name} className={`${field.type === 'textarea' ? 'md:col-span-2' : ''}`}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 capitalize">
                  {field.label || field.name}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                
                {field.type === 'select' ? (
                  <select
                    name={field.name}
                    value={formData[entity][field.name]}
                    onChange={(e) => handleInputChange(e, entity)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                    required
                  >
                    <option value="">Sélectionner...</option>
                    {field.options.map(option => (
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
                              src={formData[entity][field.name]} 
                              alt="Preview" 
                              className="h-16 w-16 object-contain mb-2 rounded"
                            />
                            <span className="text-sm text-blue-600 font-medium">Changer l'image</span>
                          </>
                        ) : (
                          <>
                            <div className="p-3 bg-blue-100 rounded-full mb-2">
                              <ImageIcon className="text-blue-600" size={20} />
                            </div>
                            <span className="text-sm text-gray-600 font-medium">Cliquer pour téléverser</span>
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
                    value={formData[entity][field.name]}
                    onChange={(e) => handleInputChange(e, entity)}
                    rows={5}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                    required
                  />
                ) : (
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    value={formData[entity][field.name]}
                    onChange={(e) => handleInputChange(e, entity)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                    required
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
      projects: 'Projets',
      partners: 'Partenaires',
      team: 'Membres d\'équipe',
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
                {searchTerm ? 'Essayez une autre recherche' : `Commencez par ajouter un ${entity === 'team' ? 'membre' : entity === 'posts' ? 'article' : entity}`}
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
                            {col.key === 'image' || col.key === 'logo' || col.key === 'banner' ? (
                              item[col.key] ? (
                                <img src={item[col.key]} alt="" className="h-10 w-10 rounded-full object-cover" />
                              ) : (
                                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                  <ImageIcon size={16} className="text-gray-400" />
                                </div>
                              )
                            ) : (
                              <div className="text-sm text-gray-900">
                                {col.render ? col.render(item) : (
                                  <div className={`${col.key === 'title' || col.key === 'name' ? 'font-medium' : ''}`}>
                                    {item[col.key]}
                                  </div>
                                )}
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
            <span>Administration Eco2lodgy</span>
          </h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <span className="sr-only">Notifications</span>
              <div className="relative">
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">3</span>
                </div>
              </div>
            </button>
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
            <button
              onClick={() => {
                setActiveTab('projects');
                setSearchTerm('');
                setCurrentPage(1);
              }}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'projects' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              <Briefcase className="inline mr-2" size={16} />
              Projets
            </button>
            <button
              onClick={() => {
                setActiveTab('partners');
                setSearchTerm('');
                setCurrentPage(1);
              }}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'partners' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              <Handshake className="inline mr-2" size={16} />
              Partenaires
            </button>
            <button
              onClick={() => {
                setActiveTab('team');
                setSearchTerm('');
                setCurrentPage(1);
              }}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'team' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              <Users className="inline mr-2" size={16} />
              Équipe
            </button>
            <button
              onClick={() => {
                setActiveTab('posts');
                setSearchTerm('');
                setCurrentPage(1);
              }}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'posts' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              <FileText className="inline mr-2" size={16} />
              Articles
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'projects' && (
          <>
            {renderForm('projects', [
              { name: 'title', label: 'titre', type: 'text', required: true },
              { name: 'description', type: 'textarea', required: true },
              { name: 'image', label: 'image', type: 'file', required: true },
              { name: 'type', type: 'select', options: projectTypes, required: true }
            ])}
            {renderList(projects, 'projects', [
              { key: 'title', label: 'Titre' },
              { key: 'type', label: 'Type' },
              { key: 'image', label: 'Image' }
            ])}
          </>
        )}

        {activeTab === 'partners' && (
          <>
            {renderForm('partners', [
              { name: 'name', label: 'nom', type: 'text', required: true },
              { name: 'description', type: 'textarea', required: true },
              { name: 'logo', type: 'file', required: true },
              { name: 'website', label: 'lien site web', type: 'url', required: true }
            ])}
            {renderList(partners, 'partners', [
              { key: 'name', label: 'Nom' },
              { key: 'website', label: 'Site web', render: item => (
                <a href={item.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {item.website}
                </a>
              )},
              { key: 'logo', label: 'Logo' }
            ])}
          </>
        )}

        {activeTab === 'team' && (
          <>
            {renderForm('team', [
              { name: 'name', label: 'nom', type: 'text', required: true },
              { name: 'position', label: 'poste', type: 'text', required: true },
              { name: 'department', label: 'département', type: 'select', options: departments, required: true },
              { name: 'image', type: 'file', required: true },
              { name: 'bio', label: 'description', type: 'textarea', required: true }
            ])}
            {renderList(team, 'team', [
              { key: 'name', label: 'Nom' },
              { key: 'position', label: 'Poste' },
              { key: 'department', label: 'Département' },
              { key: 'image', label: 'Photo' }
            ])}
          </>
        )}

        {activeTab === 'posts' && (
          <>
            {renderForm('posts', [
              { name: 'title', label: 'titre', type: 'text', required: true },
              { name: 'content', label: 'contenu', type: 'textarea', required: true },
              { name: 'banner', type: 'file', required: true },
              { name: 'author', label: 'auteur', type: 'text', required: true }
            ])}
            {renderList(posts, 'posts', [
              { key: 'title', label: 'Titre' },
              { key: 'author', label: 'Auteur' },
              { key: 'banner', label: 'Bannière' }
            ])}
          </>
        )}
      </main>
    </div>
  );
}