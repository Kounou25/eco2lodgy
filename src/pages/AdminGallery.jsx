import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Edit, Trash, Eye, AlertTriangle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { debounce } from 'lodash';

export default function GalleryAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newImages, setNewImages] = useState([{ image_url: '', caption: '', formation_id: '' }]);
  const [editImage, setEditImage] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Fetch images and formations
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch images
        const imagesResponse = await fetch('https://alphatek.fr:3008/api/gallery/', {
          headers: { 'Content-Type': 'application/json' },
        });
        if (!imagesResponse.ok) {
          throw new Error(`Erreur HTTP ${imagesResponse.status}: ${imagesResponse.statusText}`);
        }
        const imagesData = await imagesResponse.json();
        if (!Array.isArray(imagesData)) {
          throw new Error('Réponse API invalide : les données ne sont pas un tableau.');
        }
        setImages(imagesData);

        // Fetch formations
        const formationsResponse = await fetch('https://alphatek.fr:3008/api/formations', {
          headers: { 'Content-Type': 'application/json' },
        });
        if (!formationsResponse.ok) {
          throw new Error(`Erreur HTTP ${formationsResponse.status}: ${formationsResponse.statusText}`);
        }
        const formationsData = await formationsResponse.json();
        if (!Array.isArray(formationsData)) {
          throw new Error('Réponse API invalide pour les formations : les données ne sont pas un tableau.');
        }
        setFormations(formationsData);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        toast({
          title: 'Erreur',
          description: err.message || 'Impossible de charger les données.',
          variant: 'destructive',
        });
      }
    };

    fetchData();
  }, [toast]);

  // Debounced search
  const debouncedSetSearchTerm = debounce(setSearchTerm, 300);

  // Handle add images
  const handleAddImages = async () => {
    try {
      setIsAdding(true);
      const validImages = newImages.filter(img => img.image_url && img.caption && img.formation_id);
      if (validImages.length === 0) {
        throw new Error('Aucune image valide à ajouter.');
      }
      const response = await fetch('https://alphatek.fr:3008/api/gallery/multiple', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ images: validImages }),
      });
      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
      }
      const addedImages = await response.json();
      setImages([...images, ...addedImages]);
      setIsAddModalOpen(false);
      setNewImages([{ image_url: '', caption: '', formation_id: '' }]);
      toast({
        title: 'Succès',
        description: 'Images ajoutées avec succès.',
      });
    } catch (err) {
      toast({
        title: 'Erreur',
        description: err.message || 'Impossible d’ajouter les images.',
        variant: 'destructive',
      });
    } finally {
      setIsAdding(false);
    }
  };

  // Handle edit image
  const handleEditImage = async () => {
    try {
      setIsAdding(true);
      const response = await fetch(`https://alphatek.fr:3008/api/gallery/${editImage.image_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image_url: editImage.image_url,
          caption: editImage.caption,
          formation_id: editImage.formation_id,
        }),
      });
      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
      }
      const updatedImage = await response.json();
      setImages(images.map(img => img.image_id === updatedImage.image_id ? updatedImage : img));
      setIsEditModalOpen(false);
      setEditImage(null);
      toast({
        title: 'Succès',
        description: 'Image modifiée avec succès.',
      });
    } catch (err) {
      toast({
        title: 'Erreur',
        description: err.message || 'Impossible de modifier l’image.',
        variant: 'destructive',
      });
    } finally {
      setIsAdding(false);
    }
  };

  // Handle delete image
  const handleDeleteImage = async (id) => {
    try {
      setDeletingId(id);
      const response = await fetch(`https://alphatek.fr:3008/api/gallery/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
      }
      setImages(images.filter(img => img.image_id !== id));
      toast({
        title: 'Succès',
        description: 'Image supprimée avec succès.',
      });
    } catch (err) {
      toast({
        title: 'Erreur',
        description: err.message || 'Impossible de supprimer l’image.',
        variant: 'destructive',
      });
    } finally {
      setDeletingId(null);
    }
  };

  // Add new image input
  const addImageInput = () => {
    setNewImages([...newImages, { image_url: '', caption: '', formation_id: '' }]);
  };

  // Remove image input
  const removeImageInput = (index) => {
    setNewImages(newImages.filter((_, i) => i !== index));
  };

  // Update image input
  const updateImageInput = (index, field, value) => {
    const updatedImages = [...newImages];
    updatedImages[index] = { ...updatedImages[index], [field]: value };
    setNewImages(updatedImages);
  };

  // Filter images
  const filteredImages = useMemo(() => {
    return images.filter(image =>
      image.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [images, searchTerm]);

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden p-2 sm:p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#2E5A27] border-solid mx-auto mb-4"></div>
          <p className="text-lg font-semibold">Chargement des images...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden p-2 sm:p-4">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">{error}</h1>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => window.location.reload()}>
              Réessayer
            </Button>
            <Button variant="link" as="a" href="mailto:support@alphatek.fr">
              Contacter le support
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden p-2 sm:p-4">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              Gestion de la Galerie
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base mt-1">
              Gérez les images des formations
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full sm:w-auto"
              onClick={() => setIsAddModalOpen(true)}
              aria-label="Ajouter de nouvelles images"
            >
              <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
              Ajouter
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" aria-hidden="true" />
            <Input
              placeholder="Rechercher par légende ou formation..."
              value={searchTerm}
              onChange={(e) => debouncedSetSearchTerm(e.target.value)}
              className="pl-10 w-full"
              aria-label="Rechercher des images"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredImages.map((image) => (
          <Card key={image.image_id} className="w-full shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="min-w-0 flex-1 space-y-1">
                  <img
                    src={image.image_url}
                    alt={image.caption}
                    className="w-full h-40 object-cover rounded-md"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
                  />
                  <CardTitle className="text-base sm:text-lg truncate">
                    {image.caption}
                  </CardTitle>
                  <CardDescription className="text-sm space-y-1">
                    <div className="text-xs text-muted-foreground">
                      Ajouté le: {new Date(image.created_at).toLocaleDateString('fr-FR')}
                    </div>
                  </CardDescription>
                </div>
                <Badge 
                  variant="outline" 
                  className="bg-gray-100 text-gray-800 border-gray-200 whitespace-nowrap flex-shrink-0 text-xs"
                >
                  {image.title}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-2 min-w-0 flex-1">
                  <div className="text-sm text-muted-foreground">
                    Formation: {image.title}
                  </div>
                </div>
                
                <div className="flex gap-2 flex-shrink-0">
                  {/* <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full sm:w-auto"
                    onClick={() => navigate(`/new-dashboard/gallery-admin/${image.image_id}`)}
                    aria-label={`Voir les détails de l’image ${image.caption}`}
                  >
                    <Eye className="h-4 w-4 mr-1 sm:mr-2" aria-hidden="true" />
                    <span className="text-sm">Voir</span>
                  </Button> */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full sm:w-auto"
                    onClick={() => setEditImage(image)}
                    aria-label={`Modifier l’image ${image.caption}`}
                  >
                    <Edit className="h-4 w-4 mr-1 sm:mr-2" aria-hidden="true" />
                    <span className="text-sm">Modifier</span>
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="w-full sm:w-auto"
                    onClick={() => handleDeleteImage(image.image_id)}
                    disabled={deletingId === image.image_id}
                    aria-label={`Supprimer l’image ${image.caption}`}
                  >
                    {deletingId === image.image_id ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white border-solid mr-1 sm:mr-2"></div>
                    ) : (
                      <Trash className="h-4 w-4 mr-1 sm:mr-2" aria-hidden="true" />
                    )}
                    <span className="text-sm">Supprimer</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-muted-foreground text-sm sm:text-base">
            Aucune image trouvée pour "{searchTerm}"
          </p>
        </div>
      )}

      {/* Add Images Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Ajouter des Images</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto">
            {newImages.map((img, index) => (
              <div key={index} className="grid gap-4 border-b pb-4 relative">
                {newImages.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-0 right-0"
                    onClick={() => removeImageInput(index)}
                    aria-label={`Supprimer l’entrée d’image ${index + 1}`}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={`add-image_url-${index}`} className="text-right">URL Image</Label>
                  <Input
                    id={`add-image_url-${index}`}
                    value={img.image_url}
                    onChange={(e) => updateImageInput(index, 'image_url', e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={`add-caption-${index}`} className="text-right">Légende</Label>
                  <Input
                    id={`add-caption-${index}`}
                    value={img.caption}
                    onChange={(e) => updateImageInput(index, 'caption', e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={`add-formation_id-${index}`} className="text-right">Formation</Label>
                  <Select
                    value={img.formation_id}
                    onValueChange={(value) => updateImageInput(index, 'formation_id', value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Sélectionner une formation" />
                    </SelectTrigger>
                    <SelectContent>
                      {formations.map(formation => (
                        <SelectItem key={formation.id} value={formation.id}>
                          {formation.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
            <Button variant="outline" onClick={addImageInput} className="mt-2">
              <Plus className="h-4 w-4 mr-2" /> Ajouter une autre image
            </Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddModalOpen(false)} disabled={isAdding}>
              Annuler
            </Button>
            <Button 
              onClick={handleAddImages} 
              disabled={isAdding || !newImages.some(img => img.image_url && img.caption && img.formation_id)}
            >
              {isAdding ? (
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white border-solid mr-2"></div>
              ) : null}
              Ajouter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Image Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Modifier une Image</DialogTitle>
          </DialogHeader>
          {editImage && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-image_url" className="text-right">URL Image</Label>
                <Input
                  id="edit-image_url"
                  value={editImage.image_url}
                  onChange={(e) => setEditImage({ ...editImage, image_url: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-caption" className="text-right">Légende</Label>
                <Input
                  id="edit-caption"
                  value={editImage.caption}
                  onChange={(e) => setEditImage({ ...editImage, caption: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-formation_id" className="text-right">Formation</Label>
                <Select
                  value={editImage.formation_id}
                  onValueChange={(value) => setEditImage({ ...editImage, formation_id: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Sélectionner une formation" />
                  </SelectTrigger>
                  <SelectContent>
                    {formations.map(formation => (
                      <SelectItem key={formation.id} value={formation.id}>
                        {formation.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)} disabled={isAdding}>
              Annuler
            </Button>
            <Button 
              onClick={handleEditImage} 
              disabled={isAdding || !editImage?.image_url || !editImage?.caption || !editImage?.formation_id}
            >
              {isAdding ? (
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white border-solid mr-2"></div>
              ) : null}
              Modifier
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}