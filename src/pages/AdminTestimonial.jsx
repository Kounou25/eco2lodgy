import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Edit, Trash, Eye, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { debounce } from 'lodash';

export default function TestimonialsAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [testimonials, setTestimonials] = useState([]);
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    job_title: '',
    city: '',
    testimonial: '',
    profile_image_url: '',
    formation_id: '',
  });
  const [editTestimonial, setEditTestimonial] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Fetch testimonials and formations
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch testimonials
        const testimonialsResponse = await fetch('https://alphatek.fr:3008/api/testimonials/', {
          headers: { 'Content-Type': 'application/json' },
        });
        if (!testimonialsResponse.ok) {
          throw new Error(`Erreur HTTP ${testimonialsResponse.status}: ${testimonialsResponse.statusText}`);
        }
        const testimonialsData = await testimonialsResponse.json();
        if (!Array.isArray(testimonialsData)) {
          throw new Error('Réponse API invalide : les données ne sont pas un tableau.');
        }
        setTestimonials(testimonialsData);

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

  // Get initials from name
  const getInitials = (name) => {
    if (!name) return '';
    const names = name.trim().split(' ');
    return names.length > 1
      ? `${names[0][0]}${names[names.length - 1][0]}`
      : names[0].slice(0, 2);
  };

  // Handle add testimonial
  const handleAddTestimonial = async () => {
    try {
      setIsAdding(true);
      const response = await fetch('https://alphatek.fr:3008/api/testimonials/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTestimonial),
      });
      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
      }
      const addedTestimonial = await response.json();
      setTestimonials([...testimonials, addedTestimonial]);
      setIsAddModalOpen(false);
      setNewTestimonial({
        name: '',
        job_title: '',
        city: '',
        testimonial: '',
        profile_image_url: '',
        formation_id: '',
      });
      toast({
        title: 'Succès',
        description: 'Témoignage ajouté avec succès.',
      });
    } catch (err) {
      toast({
        title: 'Erreur',
        description: err.message || 'Impossible d’ajouter le témoignage.',
        variant: 'destructive',
      });
    } finally {
      setIsAdding(false);
    }
  };

  // Handle edit testimonial
  const handleEditTestimonial = async () => {
    try {
      setIsAdding(true);
      const response = await fetch(`https://alphatek.fr:3008/api/testimonials/${editTestimonial.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editTestimonial),
      });
      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
      }
      const updatedTestimonial = await response.json();
      setTestimonials(testimonials.map(t => t.id === updatedTestimonial.id ? updatedTestimonial : t));
      setIsEditModalOpen(false);
      setEditTestimonial(null);
      toast({
        title: 'Succès',
        description: 'Témoignage modifié avec succès.',
      });
    } catch (err) {
      toast({
        title: 'Erreur',
        description: err.message || 'Impossible de modifier le témoignage.',
        variant: 'destructive',
      });
    } finally {
      setIsAdding(false);
    }
  };

  // Handle delete testimonial
  const handleDeleteTestimonial = async (id) => {
    try {
      setDeletingId(id);
      const response = await fetch(`https://alphatek.fr:3008/api/testimonials/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
      }
      setTestimonials(testimonials.filter(t => t.id !== id));
      toast({
        title: 'Succès',
        description: 'Témoignage supprimé avec succès.',
      });
    } catch (err) {
      toast({
        title: 'Erreur',
        description: err.message || 'Impossible de supprimer le témoignage.',
        variant: 'destructive',
      });
    } finally {
      setDeletingId(null);
    }
  };

  // Open edit modal
  const openEditModal = (testimonial) => {
    setEditTestimonial(testimonial);
    setIsEditModalOpen(true);
  };

  // Filter testimonials
  const filteredTestimonials = useMemo(() => {
    return testimonials.filter(testimonial =>
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.formation_title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [testimonials, searchTerm]);

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden p-2 sm:p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#2E5A27] border-solid mx-auto mb-4"></div>
          <p className="text-lg font-semibold">Chargement des témoignages...</p>
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
              Gestion des Témoignages
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base mt-1">
              Gérez tous les témoignages des formations
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full sm:w-auto"
              onClick={() => setIsAddModalOpen(true)}
              aria-label="Ajouter un nouveau témoignage"
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
              placeholder="Rechercher par nom, poste, ville ou formation..."
              value={searchTerm}
              onChange={(e) => debouncedSetSearchTerm(e.target.value)}
              className="pl-10 w-full"
              aria-label="Rechercher des témoignages"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:gap-4">
        {filteredTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="w-full shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex items-center gap-3">
                    {testimonial.profile_image_url ? (
                      <img
                        src={testimonial.profile_image_url}
                        alt={`Photo de profil de ${testimonial.name}`}
                        className="w-10 h-10 rounded-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : (
                      <div
                        className="w-10 h-10 rounded-full bg-[#2E5A27] text-white flex items-center justify-center text-sm font-medium"
                        aria-label={`Initiales de ${testimonial.name}`}
                      >
                        {getInitials(testimonial.name)}
                      </div>
                    )}
                    <div
                      className="w-10 h-10 rounded-full bg-[#2E5A27] text-white flex items-center justify-center text-sm font-medium hidden"
                      aria-label={`Initiales de ${testimonial.name}`}
                    >
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg truncate">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-sm space-y-1">
                        <div className="truncate">{testimonial.job_title}</div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.city}
                        </div>
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <Badge 
                  variant="outline" 
                  className="bg-gray-100 text-gray-800 border-gray-200 whitespace-nowrap flex-shrink-0 text-xs"
                >
                  {testimonial.formation_title}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-2 min-w-0 flex-1">
                  <p className="text-sm text-muted-foreground">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Ajouté le: {new Date(testimonial.created_at).toLocaleDateString('fr-FR')}
                  </div>
                </div>
                
                <div className="flex gap-2 flex-shrink-0">
                  {/* <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full sm:w-auto"
                    onClick={() => navigate(`/new-dashboard/testimonials-admin/${testimonial.id}`)}
                    aria-label={`Voir les détails du témoignage de ${testimonial.name}`}
                  >
                    <Eye className="h-4 w-4 mr-1 sm:mr-2" aria-hidden="true" />
                    <span className="text-sm">Voir</span>
                  </Button> */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full sm:w-auto"
                    onClick={() => openEditModal(testimonial)}
                    aria-label={`Modifier le témoignage de ${testimonial.name}`}
                  >
                    <Edit className="h-4 w-4 mr-1 sm:mr-2" aria-hidden="true" />
                    <span className="text-sm">Modifier</span>
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="w-full sm:w-auto"
                    onClick={() => handleDeleteTestimonial(testimonial.id)}
                    disabled={deletingId === testimonial.id}
                    aria-label={`Supprimer le témoignage de ${testimonial.name}`}
                  >
                    {deletingId === testimonial.id ? (
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

      {filteredTestimonials.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-muted-foreground text-sm sm:text-base">
            Aucun témoignage trouvé pour "{searchTerm}"
          </p>
        </div>
      )}

      {/* Add Testimonial Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ajouter un Témoignage</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="add-name" className="text-right">Nom</Label>
              <Input
                id="add-name"
                value={newTestimonial.name}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="add-job_title" className="text-right">Poste</Label>
              <Input
                id="add-job_title"
                value={newTestimonial.job_title}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, job_title: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="add-city" className="text-right">Ville</Label>
              <Input
                id="add-city"
                value={newTestimonial.city}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, city: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="add-testimonial" className="text-right">Témoignage</Label>
              <Input
                id="add-testimonial"
                value={newTestimonial.testimonial}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, testimonial: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="add-profile_image_url" className="text-right">URL Image</Label>
              <Input
                id="add-profile_image_url"
                value={newTestimonial.profile_image_url}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, profile_image_url: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="add-formation_id" className="text-right">Formation</Label>
              <Select
                value={newTestimonial.formation_id}
                onValueChange={(value) => setNewTestimonial({ ...newTestimonial, formation_id: value })}
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
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddModalOpen(false)} disabled={isAdding}>
              Annuler
            </Button>
            <Button 
              onClick={handleAddTestimonial} 
              disabled={isAdding || !newTestimonial.name || !newTestimonial.formation_id}
            >
              {isAdding ? (
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white border-solid mr-2"></div>
              ) : null}
              Ajouter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Testimonial Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Modifier un Témoignage</DialogTitle>
          </DialogHeader>
          {editTestimonial && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">Nom</Label>
                <Input
                  id="edit-name"
                  value={editTestimonial.name}
                  onChange={(e) => setEditTestimonial({ ...editTestimonial, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-job_title" className="text-right">Poste</Label>
                <Input
                  id="edit-job_title"
                  value={editTestimonial.job_title}
                  onChange={(e) => setEditTestimonial({ ...editTestimonial, job_title: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-city" className="text-right">Ville</Label>
                <Input
                  id="edit-city"
                  value={editTestimonial.city}
                  onChange={(e) => setEditTestimonial({ ...editTestimonial, city: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-testimonial" className="text-right">Témoignage</Label>
                <Input
                  id="edit-testimonial"
                  value={editTestimonial.testimonial}
                  onChange={(e) => setEditTestimonial({ ...editTestimonial, testimonial: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-profile_image_url" className="text-right">URL Image</Label>
                <Input
                  id="edit-profile_image_url"
                  value={editTestimonial.profile_image_url}
                  onChange={(e) => setEditTestimonial({ ...editTestimonial, profile_image_url: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-formation_id" className="text-right">Formation</Label>
                <Select
                  value={editTestimonial.formation_id}
                  onValueChange={(value) => setEditTestimonial({ ...editTestimonial, formation_id: value })}
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
              onClick={handleEditTestimonial} 
              disabled={isAdding || !editTestimonial?.name || !editTestimonial?.formation_id}
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