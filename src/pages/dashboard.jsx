import { useState, useEffect } from 'react';
import { 
  Briefcase, Handshake, Users, FileText, 
  Plus, Edit, Trash2, Image as ImageIcon, 
  ChevronDown, Search, ArrowLeft, ArrowRight, 
  Loader2, AlertCircle, CheckCircle, X, GraduationCap
} from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  // États
  const [activeTab, setActiveTab] = useState('projects');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    projects: { title: '', description: '', projectType: '', images: [], existingImages: [] },
    partners: { name: '', description: '', website: '', image_file: null },
    members: { name: '', role: '', departement: '', description: '', image_file: null },
    posts: { title: '', content: '', author: '', image_file: null },
    formations: { 
      title: '', 
      description: '', 
      category: '', 
      duration: '', 
      participants: '', 
      location: '', 
      price: '', 
      level: '', 
      startDate: '', 
      endDate: '', 
      instructor: '', 
      instructorBio: '', 
      videoUrl: '',
      objectives: [''],
      program: [{ day: '', title: '', content: '' }],
      prerequisites: [''],
      included: [''],
      image_file: null 
    },
    users: { username: '', email: '', password: '' }
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    projects: [],
    partners: [],
    members: [],
    posts: [],
    formations: [],
    users: []
  });
  const [userData, setUserData] = useState(null);
  const [status, setStatus] = useState({
    isFetching: true,
    error: null,
    success: null
  });

  // Navigation
  const navigate = useNavigate();

  // Vérification de l'utilisateur dans localStorage
  useEffect(() => {
    const userString = localStorage.getItem('user');
    console.log('Valeur brute de localStorage.user:', userString);
    console.log('Type de userString:', typeof userString);

    if (!userString) {
      console.warn('Aucune donnée utilisateur trouvée dans localStorage');
      navigate('/login');
      return;
    }

    try {
      const user = JSON.parse(userString);
      console.log('Données utilisateur parsées:', user);
      if (!user?.username || !user?.id) {
        console.warn('Données utilisateur invalides ou manquantes:', user);
        navigate('/login');
      } else {
        setUserData(user);
      }
    } catch (error) {
      console.error('Erreur lors du parsing de localStorage.user:', error);
      console.log('Contenu problématique:', userString);
      localStorage.removeItem('user');
      navigate('/login');
    }
  }, [navigate]);

  // Endpoints API
  const API_ENDPOINTS = {
    projects: 'https://alphatek.fr:3008/api/projects/project/',
    partners: 'https://alphatek.fr:3008/api/partners/partners/',
    members: 'https://alphatek.fr:3008/api/members/member/',
    posts: 'https://alphatek.fr:3008/api/posts/post/',
    formations: 'https://alphatek.fr:3008/api/formations/',
    users: 'https://alphatek.fr:3008/api/users/users'
  };

  // Options pour les listes déroulantes
  const DROPDOWN_OPTIONS = {
    projectType: ['Développement', 'Recherche', 'Innovation', 'Infrastructure'],
    departement: ['Recherches', 'Technique', 'R&D', 'Economie', 'Numerique', 'Formation'],
    role: ['Développeur', 'Chercheur', 'Ingenieur', 'Analyste', 'Consultant'],
    formationCategory: ['construction', 'environnement', 'agriculture', 'energie', 'numerique', 'autre'],
    formationLevel: ['Débutant', 'Intermédiaire', 'Avancé'],
    formationLocation: ['Niamey', 'Tillabéri', 'Dosso', 'Maradi', 'Zinder', 'Agadez', 'Tahoua', 'Diffa']
  };

  // Récupération des données initiales
  useEffect(() => {
    if (!userData?.id) {
      console.log('Aucun userData.id, attente de l\'authentification...');
      return;
    }

    const fetchData = async () => {
      setStatus({ isFetching: true, error: null, success: null });
      try {
        const responses = await Promise.all(
          Object.entries(API_ENDPOINTS).map(async ([key, url]) => {
            console.log(`Envoi de la requête GET à: ${url}`);
            const response = await fetch(url, {
              headers: {
                'Authorization': `Bearer ${userData.token || ''}`,
                'Content-Type': 'application/json'
              }
            });
            console.log(`Réponse reçue pour ${key}:`, {
              status: response.status,
              statusText: response.statusText
            });

            if (!response.ok) {
              const errorData = await response.json().catch(() => ({}));
              throw new Error(`Erreur lors de la récupération des ${key}: ${errorData.message || response.statusText}`);
            }

            const data = await response.json();
            console.log(`Données reçues pour ${key}:`, data);
            return { key, data };
          })
        );

        // Mise à jour des données
        const newData = {};
        responses.forEach(({ key, data }) => {
          newData[key] = Array.isArray(data) ? data : data[key] || [];
        });

        setData({
          projects: newData.projects || [],
          partners: newData.partners || [],
          members: newData.members || [],
          posts: newData.posts || [],
          formations: newData.formations || [],
          users: newData.users || []
        });
        setUsers(newData.users || []);
        setStatus({ isFetching: false, error: null, success: 'Données chargées avec succès' });
      } catch (err) {
        console.error('Erreur lors de la récupération des données:', err);
        setStatus({ 
          isFetching: false, 
          error: err.message || 'Erreur lors du chargement des données', 
          success: null 
        });
      }
    };

    fetchData();
  }, [userData]);

  // Filtrage et pagination
  const getFilteredItems = () => {
    const items = data[activeTab] || [];
    return items.filter(item => 
      Object.values(item).some(
        val => typeof val === 'string' && 
        val.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const filteredItems = getFilteredItems();
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Gestion des listes dynamiques pour formations
  const addToArray = (entity, field, defaultValue = '') => {
    setFormData(prev => ({
      ...prev,
      [entity]: {
        ...prev[entity],
        [field]: [...prev[entity][field], typeof defaultValue === 'object' ? defaultValue : defaultValue]
      }
    }));
  };

  const removeFromArray = (entity, field, index) => {
    setFormData(prev => ({
      ...prev,
      [entity]: {
        ...prev[entity],
        [field]: prev[entity][field].filter((_, i) => i !== index)
      }
    }));
  };

  const updateArrayItem = (entity, field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [entity]: {
        ...prev[entity],
        [field]: prev[entity][field].map((item, i) => i === index ? value : item)
      }
    }));
  };

  // Gestion des formulaires
  const handleInputChange = (e, entity) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [entity]: { ...prev[entity], [name]: value }
    }));
  };

  const handleFileChange = (e, entity) => {
    if (entity === 'projects') {
      const files = Array.from(e.target.files);
      const newImages = files.map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      
      console.log('Fichiers sélectionnés pour projects:', newImages);
      setFormData(prev => ({
        ...prev,
        [entity]: { 
          ...prev[entity], 
          images: [...prev[entity].images, ...newImages]
        }
      }));
    } else {
      const file = e.target.files[0];
      if (file && file instanceof File) {
        console.log('Fichier sélectionné pour', entity, ':', file);
        setFormData(prev => ({
          ...prev,
          [entity]: { 
            ...prev[entity], 
            image_file: file,
            image_preview: URL.createObjectURL(file) 
          }
        }));
      } else {
        console.log('Aucun fichier valide sélectionné pour', entity);
      }
    }
  };

  const resetForm = (entity) => {
    const defaultFormData = {
      projects: { title: '', description: '', projectType: '', images: [], existingImages: [] },
      partners: { name: '', description: '', website: '', image_file: null },
      members: { name: '', role: '', departement: '', description: '', image_file: null },
      posts: { title: '', content: '', author: '', image_file: null },
      formations: { 
        title: '', 
        description: '', 
        category: '', 
        duration: '', 
        participants: '', 
        location: '', 
        price: '', 
        level: '', 
        startDate: '', 
        endDate: '', 
        instructor: '', 
        instructorBio: '', 
        videoUrl: '',
        objectives: [''],
        program: [{ day: '', title: '', content: '' }],
        prerequisites: [''],
        included: [''],
        image_file: null 
      },
      users: { username: '', email: '', password: '' }
    };
    
    setFormData(prev => ({
      ...prev,
      [entity]: defaultFormData[entity]
    }));
    setIsEditing(false);
    setEditingId(null);
  };

  const handleSubmit = async (e, entity) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ ...status, error: null, success: null });

    try {
      const formDataToSend = new FormData();
      const entityData = formData[entity];

      // Ajout des champs texte
      Object.entries(entityData).forEach(([key, value]) => {
        if (key === 'images' || key === 'image_preview' || key === 'image_file' || key === 'existingImages') return;
        if (key === 'objectives' || key === 'program' || key === 'prerequisites' || key === 'included') {
          formDataToSend.append(key, JSON.stringify(value));
        } else if (value) {
          formDataToSend.append(key, value);
        }
      });

      // Gestion des fichiers pour projects, partners, members, posts, formations
      if (entity === 'projects') {
        console.log('Images pour projects:', entityData.images);
        console.log('Images existantes:', entityData.existingImages);
        
        entityData.images.forEach((image, index) => {
          if (image.file instanceof File) {
            formDataToSend.append('images', image.file);
          }
        });

        if (isEditing && entityData.existingImages?.length > 0 && entityData.images.length === 0) {
          formDataToSend.append('existingImages', JSON.stringify(entityData.existingImages));
        }
      } else if (entity !== 'users' && entityData.image_file && entityData.image_file instanceof File) {
        console.log('Fichier pour', entity, ':', entityData.image_file);
        formDataToSend.append('image', entityData.image_file);
      }

      // Loguer le contenu de FormData
      console.log('Contenu de FormData pour', entity, ':');
      for (let [key, value] of formDataToSend.entries()) {
        console.log(`FormData - ${key}:`, value);
      }

      // Ajout de l'ID utilisateur
      if (userData?.id) {
        formDataToSend.append('user_id', userData.id);
      } else {
        throw new Error('ID utilisateur manquant');
      }

      // Utiliser l'endpoint correct pour users
      const url = entity === 'users' 
        ? (isEditing ? `https://alphatek.fr:3008/api/users/user/${editingId}` : 'https://alphatek.fr:3008/api/users/')
        : (isEditing ? `${API_ENDPOINTS[entity]}${editingId}` : API_ENDPOINTS[entity]);

      console.log('Requête envoyée:', { method: isEditing ? 'PUT' : 'POST', url });

      const response = await fetch(url, {
        method: isEditing ? 'PUT' : 'POST',
        body: formDataToSend,
        headers: {
          'Authorization': `Bearer ${userData.token || ''}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Erreur serveur:', errorData);
        throw new Error(errorData.message || `Erreur serveur: ${response.status}`);
      }

      // Rafraîchir les données
      const updatedData = await response.json();
      
      setData(prev => ({
        ...prev,
        [entity]: Array.isArray(updatedData) ? updatedData : updatedData[entity] || prev[entity]
      }));

      setStatus({ 
        ...status, 
        success: `${entity} ${isEditing ? 'modifié' : 'ajouté'} avec succès` 
      });
      resetForm(entity);
    } catch (err) {
      console.error('Erreur dans handleSubmit:', err);
      setStatus({ ...status, error: err.message || 'Erreur lors de la soumission' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (item, entity) => {
    console.log('Appel de handleEdit pour:', { entity, item });
    try {
      if (!item || !item.id) {
        console.error('Item invalide ou ID manquant:', item);
        setStatus({ ...status, error: 'Erreur: Données de l\'élément invalides' });
        return;
      }

      setIsEditing(true);
      setEditingId(item.id);

      if (entity === 'formations') {
        setFormData(prev => ({
          ...prev,
          [entity]: {
            title: item.title || '',
            description: item.description || '',
            category: item.category || '',
            duration: item.duration || '',
            participants: item.participants || '',
            location: item.location || '',
            price: item.price || '',
            level: item.level || '',
            startDate: item.startDate || item.start_date || '',
            endDate: item.endDate || item.end_date || '',
            instructor: item.instructor || '',
            instructorBio: item.instructorBio || item.instructor_bio || '',
            videoUrl: item.videoUrl || item.video_url || '',
            objectives: Array.isArray(item.objectives) ? item.objectives : [''],
            program: Array.isArray(item.program) ? item.program : [{ day: '', title: '', content: '' }],
            prerequisites: Array.isArray(item.prerequisites) ? item.prerequisites : [''],
            included: Array.isArray(item.included) ? item.included : [''],
            image_file: null,
            image_preview: item.image_url ? `https://alphatek.fr:3008${item.image_url}` : null
          }
        }));
      } else if (entity === 'users') {
        setFormData(prev => ({
          ...prev,
          [entity]: {
            username: item.username || '',
            email: item.email || '',
            password: ''
          }
        }));
      } else {
        let images = [];
        let existingImages = [];

        if (entity === 'projects') {
          try {
            if (item.image_url && typeof item.image_url === 'string' && item.image_url.trim() !== '') {
              const parsedImages = JSON.parse(item.image_url);
              if (Array.isArray(parsedImages)) {
                images = parsedImages.map(url => ({
                  file: null,
                  preview: url.startsWith('http') ? url : `https://alphatek.fr:3008${url}`
                }));
                existingImages = parsedImages;
              } else {
                console.warn('item.image_url n\'est pas un tableau:', parsedImages);
              }
            } else {
              console.warn('item.image_url est manquant, vide ou invalide:', item.image_url);
            }
          } catch (error) {
            console.error('Erreur lors du parsing de item.image_url:', error);
            images = [];
            existingImages = [];
          }
        }

        setFormData(prev => ({
          ...prev,
          [entity]: {
            title: item.title || '',
            description: item.description || '',
            projectType: item.project_type || item.projectType || '',
            ...(entity === 'projects' 
              ? { images, existingImages } 
              : {
                  name: item.name || '',
                  website: item.website || '',
                  role: item.role || '',
                  departement: item.departement || item.department || '',
                  author: item.author || '',
                  content: item.content || '',
                  image_file: null,
                  image_preview: item.image_url || item.photo_url || item.thumbnail_url || item.logo_url
                    ? (item.image_url || item.photo_url || item.thumbnail_url || item.logo_url).startsWith('http')
                      ? (item.image_url || item.photo_url || item.thumbnail_url || item.logo_url)
                      : `https://alphatek.fr:3008${item.image_url || item.photo_url || item.thumbnail_url || item.logo_url}`
                    : null
                }
            )
          }
        }));
      }
    } catch (error) {
      console.error('Erreur dans handleEdit:', error);
      setStatus({ ...status, error: 'Erreur lors du chargement des données pour modification' });
    }
  };

  const handleDelete = async (id, entity) => {
    if (!window.confirm('Confirmer la suppression ?')) return;

    try {
      const deleteUrl = entity === 'users' 
        ? `https://alphatek.fr:3008/api/users/user/${id}` 
        : `${API_ENDPOINTS[entity]}${id}`;
      
      const response = await fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${userData?.token || ''}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Échec de la suppression');
      }

      // Rafraîchir les données
      const refreshedData = await fetch(API_ENDPOINTS[entity], {
        headers: {
          'Authorization': `Bearer ${userData?.token || ''}`
        }
      });
      if (!refreshedData.ok) {
        throw new Error('Erreur lors du rafraîchissement des données');
      }
      const updatedData = await refreshedData.json();
      
      setData(prev => ({
        ...prev,
        [entity]: Array.isArray(updatedData) ? updatedData : updatedData[entity] || prev[entity]
      }));

      setStatus({ ...status, success: 'Suppression réussie' });
      
      if (currentPage > 1 && currentItems.length === 1) {
        setCurrentPage(prev => prev - 1);
      }
    } catch (err) {
      console.error('Erreur lors de la suppression:', err);
      setStatus({ ...status, error: err.message || 'Erreur lors de la suppression' });
    }
  };

  // Configuration des formulaires
  const FORM_CONFIG = {
    projects: [
      { name: 'title', label: 'Titre', type: 'text', required: true },
      { name: 'description', type: 'textarea', required: true },
      { 
        name: 'projectType', 
        label: 'Type de projet', 
        type: 'select', 
        options: DROPDOWN_OPTIONS.projectType 
      },
      { name: 'images', label: 'Images', type: 'multiple-file', required: !isEditing }
    ],
    partners: [
      { name: 'name', label: 'Nom', type: 'text', required: true },
      { name: 'description', type: 'textarea' },
      { name: 'website', label: 'Site web', type: 'url' },
      { name: 'image', label: 'Logo', type: 'file', required: !isEditing }
    ],
    members: [
      { name: 'name', label: 'Nom', type: 'text', required: true },
      { 
        name: 'role', 
        label: 'Rôle', 
        type: 'select', 
        options: DROPDOWN_OPTIONS.role, 
        required: true 
      },
      { 
        name: 'departement', 
        label: 'Département', 
        type: 'select', 
        options: DROPDOWN_OPTIONS.departement 
      },
      { name: 'description', type: 'textarea' },
      { name: 'image', label: 'Photo', type: 'file', required: !isEditing }
    ],
    posts: [
      { name: 'title', label: 'Titre', type: 'text', required: true },
      { name: 'content', label: 'Contenu', type: 'textarea', required: true },
      { 
        name: 'author', 
        label: 'Auteur', 
        type: 'select', 
        options: users.map(user => ({ value: user.username, label: user.username })), 
        required: true 
      },
      { name: 'image', label: 'Image', type: 'file', required: !isEditing }
    ],
    formations: [
      { name: 'title', label: 'Titre', type: 'text', required: true },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
      { 
        name: 'category', 
        label: 'Catégorie', 
        type: 'select', 
        options: DROPDOWN_OPTIONS.formationCategory,
        required: true
      },
      { name: 'duration', label: 'Durée', type: 'text', required: true },
      { name: 'participants', label: 'Participants max', type: 'text', required: true },
      { 
        name: 'location', 
        label: 'Lieu', 
        type: 'select', 
        options: DROPDOWN_OPTIONS.formationLocation,
        required: true
      },
      { name: 'price', label: 'Prix', type: 'text', required: true },
      { 
        name: 'level', 
        label: 'Niveau', 
        type: 'select', 
        options: DROPDOWN_OPTIONS.formationLevel,
        required: true
      },
      { name: 'startDate', label: 'Date de début', type: 'date', required: true },
      { name: 'endDate', label: 'Date de fin', type: 'date', required: true },
      { name: 'instructor', label: 'Formateur', type: 'text', required: true },
      { name: 'instructorBio', label: 'Bio du formateur', type: 'textarea', required: true },
      { name: 'videoUrl', label: 'URL Vidéo', type: 'url' },
      { name: 'image', label: 'Image de couverture', type: 'file', required: !isEditing },
      { name: 'objectives', label: 'Objectifs', type: 'array' },
      { name: 'program', label: 'Programme', type: 'program-array' },
      { name: 'prerequisites', label: 'Prérequis', type: 'array' },
      { name: 'included', label: 'Inclus', type: 'array' }
    ],
    users: [
      { name: 'username', label: 'Nom d\'utilisateur', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'password', label: 'Mot de passe', type: 'password', required: !isEditing }
    ]
  };

  const LABELS = {
    projects: { singular: 'Projet', plural: 'Projets' },
    partners: { singular: 'Partenaire', plural: 'Partenaires' },
    members: { singular: 'Membre', plural: 'Membres' },
    posts: { singular: 'Article', plural: 'Articles' },
    formations: { singular: 'Formation', plural: 'Formations' },
    users: { singular: 'Utilisateur', plural: 'Utilisateurs' }
  };

  // Composant Form
  const renderForm = (entity) => {
    const fields = FORM_CONFIG[entity];
    const { singular } = LABELS[entity];
    const entityData = formData[entity] || {};

    if (!entityData) {
      console.error(`Erreur: formData[${entity}] est indéfini`);
      return (
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
            <div className="text-sm text-red-700">
              Erreur: Données du formulaire non disponibles
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-lg shadow border border-gray-200 mb-6">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            {isEditing ? 'Modifier' : 'Ajouter'} {singular}
          </h3>
        </div>
        
        <form onSubmit={(e) => handleSubmit(e, entity)} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.map(field => (
              <div key={field.name} className={
                field.type === 'textarea' || field.type === 'array' || field.type === 'program-array' 
                  ? 'md:col-span-2' : ''
              }>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {field.label || field.name}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                
                {field.type === 'array' && (
                  <div className="space-y-2">
                    {entityData[field.name]?.map((item, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={item || ''}
                          onChange={(e) => updateArrayItem(entity, field.name, index, e.target.value)}
                          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
                          placeholder={`${field.label} ${index + 1}`}
                        />
                        <button
                          type="button"
                          onClick={() => removeFromArray(entity, field.name, index)}
                          className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addToArray(entity, field.name, '')}
                      className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                    >
                      <Plus size={16} />
                      Ajouter {field.label?.toLowerCase()}
                    </button>
                  </div>
                )}
                
                {field.type === 'program-array' && (
                  <div className="space-y-4">
                    {entityData[field.name]?.map((item, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-medium">Programme {index + 1}</h4>
                          <button
                            type="button"
                            onClick={() => removeFromArray(entity, field.name, index)}
                            className="text-red-600 hover:bg-red-50 p-1 rounded"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <input
                            type="text"
                            value={item.day || ''}
                            onChange={(e) => updateArrayItem(entity, field.name, index, {...item, day: e.target.value})}
                            placeholder="Jour (ex: Jour 1)"
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
                          />
                          <input
                            type="text"
                            value={item.title || ''}
                            onChange={(e) => updateArrayItem(entity, field.name, index, {...item, title: e.target.value})}
                            placeholder="Titre de la session"
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
                          />
                          <textarea
                            value={item.content || ''}
                            onChange={(e) => updateArrayItem(entity, field.name, index, {...item, content: e.target.value})}
                            placeholder="Contenu détaillé"
                            rows={2}
                            className="md:col-span-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
                          />
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addToArray(entity, field.name, { day: '', title: '', content: '' })}
                      className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                    >
                      <Plus size={16} />
                      Ajouter une session
                    </button>
                  </div>
                )}

                {field.type === 'file' || field.type === 'multiple-file' ? (
                  <div className="space-y-2">
                    <label className="flex flex-col items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition">
                      <div className="flex flex-col items-center">
                        {entity === 'projects' && entityData.images?.length > 0 ? (
                          <div className="flex flex-wrap gap-2 mb-2">
                            {entityData.images.map((img, index) => (
                              <div key={index} className="relative">
                                <img 
                                  src={img.preview} 
                                  alt={`Preview ${index}`} 
                                  className="h-24 w-24 object-cover rounded"
                                  onError={(e) => {
                                    console.error('Erreur de chargement de l\'image:', img.preview);
                                    e.target.src = '/placeholder-image.jpg';
                                  }}
                                />
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setFormData(prev => ({
                                      ...prev,
                                      [entity]: {
                                        ...prev[entity],
                                        images: prev[entity].images.filter((_, i) => i !== index)
                                      }
                                    }));
                                  }}
                                  className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1"
                                >
                                  <X className="text-white" size={12} />
                                </button>
                              </div>
                            ))}
                          </div>
                        ) : entity !== 'projects' && entityData.image_preview ? (
                          <>
                            <img 
                              src={entityData.image_preview} 
                              alt="Preview" 
                              className="h-24 w-24 object-contain mb-2 rounded"
                              onError={(e) => {
                                console.error('Erreur de chargement de l\'image:', entityData.image_preview);
                                e.target.src = '/placeholder-image.jpg';
                              }}
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
                        onChange={(e) => handleFileChange(e, entity)}
                        className="hidden"
                        accept="image/*"
                        required={field.required && (entity === 'projects' ? entityData.images?.length === 0 : !entityData.image_preview)}
                        multiple={field.type === 'multiple-file'}
                      />
                    </label>
                  </div>
                ) : field.type === 'textarea' ? (
                  field.name === 'content' && entity === 'posts' ? (
                    <ReactQuill
                      value={entityData[field.name] || ''}
                      onChange={(value) => {
                        setFormData(prev => ({
                          ...prev,
                          [entity]: { ...prev[entity], [field.name]: value }
                        }));
                      }}
                      className="w-full rounded-lg border-gray-300"
                      theme="snow"
                      modules={{
                        toolbar: [
                          [{ 'header': [1, 2, 3, false] }],
                          ['bold', 'italic', 'underline', 'strike'],
                          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                          ['link'],
                          ['clean']
                        ]
                      }}
                    />
                  ) : (
                    <textarea
                      name={field.name}
                      value={entityData[field.name] || ''}
                      onChange={(e) => handleInputChange(e, entity)}
                      rows={5}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
                      required={field.required}
                    />
                  )
                ) : field.type === 'select' ? (
                  <select
                    name={field.name}
                    value={entityData[field.name] || ''}
                    onChange={(e) => handleInputChange(e, entity)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
                    required={field.required}
                  >
                    <option value="">Sélectionner...</option>
                    {field.options.map(option => (
                      typeof option === 'string' ? (
                        <option key={option} value={option}>{option}</option>
                      ) : (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      )
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    value={entityData[field.name] || ''}
                    onChange={(e) => handleInputChange(e, entity)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
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
                className="px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Annuler
              </button>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition flex items-center ${isLoading ? 'opacity-75' : ''}`}
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

  // Composant List
  const renderList = (entity) => {
    const { plural } = LABELS[entity];
    const columns = FORM_CONFIG[entity]
      .filter(field => field.type !== 'textarea' && field.type !== 'file' && field.type !== 'multiple-file' && field.type !== 'array' && field.type !== 'program-array')
      .slice(0, 4)
      .map(field => ({
        key: field.name,
        label: field.label || field.name
      }));

    return (
      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-800">{plural}</h3>
          
          <div className="relative w-full md:w-64">
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
              className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 w-full transition"
            />
          </div>
        </div>
        
        <div className="p-6">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto h-24 w-24 text-gray-400">
                <FileText className="w-full h-full opacity-50" />
              </div>
              <h4 className="mt-4 text-sm font-medium text-gray-700">Aucun élément trouvé</h4>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm ? 'Essayez une autre recherche' : `Commencez par ajouter un ${LABELS[entity].singular.toLowerCase()}`}
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
                      <tr key={item.id} className="hover:bg-gray-50 transition">
                        {columns.map(col => (
                          <td key={col.key} className="px-6 py-4 whitespace-nowrap">
                            <div className={`text-sm ${col.key === 'title' || col.key === 'name' || col.key === 'username' ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
                              {col.key === 'startDate' || col.key === 'endDate' ? 
                                (item[col.key] ? new Date(item[col.key]).toLocaleDateString('fr-FR') : '-') : 
                                (item[col.key] || '-')
                              }
                            </div>
                          </td>
                        ))}
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-2">
                          <button
                            onClick={() => handleEdit(item, entity)}
                            className="text-blue-600 hover:text-blue-800 p-1.5 rounded-md hover:bg-blue-50 transition"
                            title="Modifier"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id, entity)}
                            className="text-red-600 hover:text-red-800 p-1.5 rounded-md hover:bg-red-50 transition"
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
                      className="p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
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
                          className={`w-10 h-10 rounded-md ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'border border-gray-300 hover:bg-gray-50'} transition`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                    <button
                      onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
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

  // Render principal
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
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-medium text-blue-800">
                  {userData?.username?.charAt(0)?.toUpperCase() || 'A'}
                </span>
              </div>
              <span className="hidden md:inline text-sm font-medium">
                {userData?.username || 'Admin'}
              </span>
              <ChevronDown className="text-gray-500" size={16} />
            </div>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = '/login';
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {Object.keys(LABELS).map((tab) => {
              const icons = {
                projects: <Briefcase className="inline mr-2" size={16} />,
                partners: <Handshake className="inline mr-2" size={16} />,
                members: <Users className="inline mr-2" size={16} />,
                posts: <FileText className="inline mr-2" size={16} />,
                formations: <GraduationCap className="inline mr-2" size={16} />,
                users: <Users className="inline mr-2" size={16} />
              };

              return (
                <button
                  key={tab}
                  onClick={() => {
                    if (tab === 'formations') {
                      navigate('/new-dashboard');
                    } else {
                      setActiveTab(tab);
                      setSearchTerm('');
                      setCurrentPage(1);
                    }
                  }}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {icons[tab]}
                  {LABELS[tab].plural}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Messages d'état */}
        {status.error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
              <div className="text-sm text-red-700">{status.error}</div>
            </div>
          </div>
        )}

        {status.success && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <div className="text-sm text-green-700">{status.success}</div>
            </div>
          </div>
        )}

        {/* Contenu */}
        {status.isFetching ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="animate-spin h-12 w-12 text-blue-500" />
            <span className="ml-3 text-gray-600">Chargement des données...</span>
          </div>
        ) : status.error ? (
          <div className="text-center py-12">
            <AlertCircle className="mx-auto h-12 w-12 text-red-500" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">Erreur de chargement</h3>
            <p className="mt-1 text-sm text-gray-500">{status.error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Réessayer
            </button>
          </div>
        ) : (
          <>
            {renderForm(activeTab)}
            {renderList(activeTab)}
          </>
        )}
      </main>
    </div>
  );
}