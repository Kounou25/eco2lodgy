// src/pages/PostsPage.jsx
import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';

const PostsPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Introduction à React",
      content: "React est une bibliothèque JavaScript pour construire des interfaces utilisateur...",
      banner: "https://via.placeholder.com/800x400",
      author: "Jean Dupont"
    },
    // Plus d'articles...
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [postForm, setPostForm] = useState({
    title: '',
    content: '',
    banner: '',
    author: ''
  });

  // Fonctions similaires pour gérer le CRUD
  // ...

  return (
    <div className="space-y-6">
      {/* Structure similaire */}
      {/* Formulaire spécifique aux articles */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
            {/* ... en-tête du modal ... */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                  <input
                    type="text"
                    name="title"
                    value={postForm.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contenu</label>
                  <textarea
                    name="content"
                    value={postForm.content}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows="8"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bannière</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {postForm.banner && (
                    <img src={postForm.banner} alt="Preview" className="mt-2 h-32 object-contain" />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Auteur</label>
                  <input
                    type="text"
                    name="author"
                    value={postForm.author}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
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

export default PostsPage;