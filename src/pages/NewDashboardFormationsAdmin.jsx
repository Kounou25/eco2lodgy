import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Clock,
  User,
  Target,
  BookOpen,
  CheckCircle,
  Image,
  Video,
  AlertTriangle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

export default function NewDashboardFormationsAdmin() {
  const { toast } = useToast();
  const [formations, setFormations] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingFormation, setEditingFormation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Catégories prédéfinies
  const categories = [
    "Construction",
    "Architecture",
    "Urbanisme",
    "Ingénierie",
    "Environnement",
    "Gestion de projet",
    "Formation technique",
    "Recherche & Développement",
  ];

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      level: "Débutant",
      duration: "",
      price: "",
      currency: "FCFA",
      max_participants: "",
      start_date: "",
      end_date: "",
      location: "",
      instructor: "",
      instructor_bio: "",
      cover_image: "",
      intro_video: "",
      objectives: [""],
      program: [{ day: 1, title: "", content: "" }],
      detailed_program: [{ day: 1, title: "", description: "" }],
      prerequisites: [""],
      certification_type: "",
      is_active: true,
      tags: [""],
    },
  });

  // Charger les formations depuis l'API au montage
  useEffect(() => {
    const fetchFormations = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching formations from API...');
        const response = await fetch('https://alphatek.fr:3008/api/formations', {
          headers: {
            'Content-Type': 'application/json',
            // Ajouter un en-tête d'authentification si nécessaire
            // 'Authorization': `Bearer ${yourToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Formations reçues:', data);
        setFormations(Array.isArray(data) ? data : []);
        setIsLoading(false);
      } catch (err) {
        console.error('Erreur lors de la récupération des formations:', err);
        setError(err.message);
        setIsLoading(false);
        toast({
          title: 'Erreur',
          description: err.message,
          variant: 'destructive',
        });
      }
    };

    fetchFormations();
  }, [toast]);

  const openForm = (formation = null) => {
    try {
      if (formation) {
        console.log('Editing formation:', formation);
        setEditingFormation(formation);
        form.reset({
          title: formation.title || "",
          description: formation.description || "",
          category: formation.category || "",
          level: formation.level || "Débutant",
          duration: formation.duration || "",
          price: formation.price ? String(formation.price) : "",
          currency: formation.currency || "FCFA",
          max_participants: formation.max_participants ? String(formation.max_participants) : "",
          start_date: formation.start_date ? formation.start_date.split('T')[0] : "",
          end_date: formation.end_date ? formation.end_date.split('T')[0] : "",
          location: formation.location || "",
          instructor: formation.instructor || "",
          instructor_bio: formation.instructor_bio || "",
          cover_image: formation.cover_image || "",
          intro_video: formation.intro_video || "",
          objectives: Array.isArray(formation.objectives) && formation.objectives.length ? formation.objectives : [""],
          program: Array.isArray(formation.program) && formation.program.length ? formation.program : [{ day: 1, title: "", content: "" }],
          detailed_program: Array.isArray(formation.detailed_program) && formation.detailed_program.length ? formation.detailed_program : [{ day: 1, title: "", description: "" }],
          prerequisites: Array.isArray(formation.prerequisites) && formation.prerequisites.length ? formation.prerequisites : [""],
          tags: Array.isArray(formation.tags) && formation.tags.length ? formation.tags : [""],
          is_active: formation.is_active !== undefined ? formation.is_active : true,
        });
      } else {
        setEditingFormation(null);
        form.reset({
          title: "",
          description: "",
          category: "",
          level: "Débutant",
          duration: "",
          price: "",
          currency: "FCFA",
          max_participants: "",
          start_date: "",
          end_date: "",
          location: "",
          instructor: "",
          instructor_bio: "",
          cover_image: "",
          intro_video: "",
          objectives: [""],
          program: [{ day: 1, title: "", content: "" }],
          detailed_program: [{ day: 1, title: "", description: "" }],
          prerequisites: [""],
          certification_type: "",
          is_active: true,
          tags: [""],
        });
      }
      setIsFormOpen(true);
    } catch (err) {
      console.error('Erreur lors de l\'ouverture du formulaire:', err);
      toast({
        title: 'Erreur',
        description: 'Impossible d\'ouvrir le formulaire.',
        variant: 'destructive',
      });
    }
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingFormation(null);
    form.reset();
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      console.log('Données soumises:', data);
      // Filtrer les champs vides et formater les données
      const filteredData = {
        ...data,
        price: parseFloat(data.price) || 0,
        max_participants: parseInt(data.max_participants) || 0,
        objectives: data.objectives.filter(item => item.trim() !== ''),
        prerequisites: data.prerequisites.filter(item => item.trim() !== ''),
        tags: data.tags.filter(item => item.trim() !== ''),
        program: data.program.map(item => ({
          day: parseInt(item.day) || 1,
          title: item.title || "",
          content: item.content || "",
        })).filter(item => item.title && item.content),
        detailed_program: data.detailed_program.map(item => ({
          day: parseInt(item.day) || 1,
          title: item.title || "",
          description: item.description || "",
        })).filter(item => item.title && item.description),
      };

      const url = editingFormation 
        ? `https://alphatek.fr:3008/api/formations/${editingFormation.id}`
        : 'https://alphatek.fr:3008/api/formations';
      const method = editingFormation ? 'PUT' : 'POST';

      console.log(`Envoi de la requête ${method} à ${url}`);
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          // Ajouter un en-tête d'authentification si nécessaire
          // 'Authorization': `Bearer ${yourToken}`,
        },
        body: JSON.stringify(filteredData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Erreur HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Réponse de l\'API:', result);

      if (editingFormation) {
        setFormations(formations.map(f => 
          f.id === editingFormation.id ? { ...result, currentParticipants: f.currentParticipants || 0 } : f
        ));
        toast({
          title: 'Succès',
          description: 'Formation mise à jour avec succès.',
        });
      } else {
        setFormations([...formations, { ...result, currentParticipants: 0 }]);
        toast({
          title: 'Succès',
          description: 'Formation créée avec succès.',
        });
      }

      closeForm();
    } catch (err) {
      console.error('Erreur lors de la soumission:', err);
      toast({
        title: 'Erreur',
        description: err.message || 'Une erreur est survenue lors de la soumission.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteFormation = async (id) => {
    try {
      console.log(`Suppression de la formation ${id}`);
      const response = await fetch(`https://alphatek.fr:3008/api/formations/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Ajouter un en-tête d'authentification si nécessaire
          // 'Authorization': `Bearer ${yourToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Erreur HTTP ${response.status}: ${response.statusText}`);
      }

      setFormations(formations.filter(f => f.id !== id));
      toast({
        title: 'Succès',
        description: 'Formation supprimée avec succès.',
      });
    } catch (err) {
      console.error('Erreur lors de la suppression:', err);
      toast({
        title: 'Erreur',
        description: err.message || 'Une erreur est survenue lors de la suppression.',
        variant: 'destructive',
      });
    }
  };

  const addArrayItem = (fieldName) => {
    const currentValues = form.getValues(fieldName);
    form.setValue(fieldName, [...currentValues, 
      fieldName === 'program' ? { day: currentValues.length + 1, title: "", content: "" } : 
      fieldName === 'detailed_program' ? { day: currentValues.length + 1, title: "", description: "" } : 
      ""
    ]);
  };

  const removeArrayItem = (fieldName, index) => {
    const currentValues = form.getValues(fieldName);
    form.setValue(fieldName, currentValues.filter((_, i) => i !== index));
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Débutant": return "bg-green-100 text-green-800";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800";
      case "Avancé": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Affichage pendant le chargement
  if (isLoading) {
    return (
      <div className="flex flex-1 flex-col gap-6 p-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#2E5A27] border-solid mx-auto mb-4"></div>
          <p className="text-lg font-semibold">Chargement des formations...</p>
        </div>
      </div>
    );
  }

  // Affichage en cas d'erreur
  if (error) {
    return (
      <div className="flex flex-1 flex-col gap-6 p-6">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">{error}</h1>
          <Button onClick={() => window.location.reload()}>
            Réessayer
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestion des Formations</h1>
          <p className="text-muted-foreground">
            Administrez toutes vos formations et leurs détails
          </p>
        </div>
        <Button onClick={() => openForm()}>
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle Formation
        </Button>
      </div>

      {/* Liste des formations */}
      <div className="grid gap-4">
        {formations.map((formation) => (
          <Card key={formation.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-xl">{formation.title || 'Sans titre'}</CardTitle>
                    <Badge className={getLevelColor(formation.level)}>
                      {formation.level || 'Non spécifié'}
                    </Badge>
                    {!formation.is_active && (
                      <Badge variant="secondary">Inactive</Badge>
                    )}
                  </div>
                  <CardDescription className="mb-3">
                    {formation.description || 'Aucune description'}
                  </CardDescription>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formation.start_date ? new Date(formation.start_date).toLocaleDateString('fr-FR') : 'Non spécifié'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{formation.duration || 'Non spécifié'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{formation.location || 'Non spécifié'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{formation.price ? `${formation.price.toLocaleString()} ${formation.currency || ''}` : 'Non spécifié'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{formation.currentParticipants || 0}/{formation.max_participants || 'Non spécifié'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{formation.instructor || 'Non spécifié'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => openForm(formation)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => deleteFormation(formation.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Formulaire modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {editingFormation ? 'Modifier la Formation' : 'Nouvelle Formation'}
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={closeForm}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Informations de base */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Informations générales
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="title"
                        rules={{ required: "Le titre est requis" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Titre *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="category"
                        rules={{ required: "La catégorie est requise" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Catégorie *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionner une catégorie" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {categories.map((category) => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="description"
                      rules={{ required: "La description est requise" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description *</FormLabel>
                          <FormControl>
                            <Textarea {...field} rows={3} />
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="level"
                          rules={{ required: "Le niveau est requis" }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Niveau *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Débutant">Débutant</SelectItem>
                                  <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
                                  <SelectItem value="Avancé">Avancé</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="duration"
                          rules={{ required: "La durée est requise" }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Durée *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="ex: 5 jours" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="certification_type"
                          rules={{ required: "Le type de certification est requis" }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Type de certification *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="ex: Certificat professionnel" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Dates et lieu */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Planification
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="start_date"
                          rules={{ required: "La date de début est requise" }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date de début *</FormLabel>
                              <FormControl>
                                <Input {...field} type="date" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="end_date"
                          rules={{ required: "La date de fin est requise" }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date de fin *</FormLabel>
                              <FormControl>
                                <Input {...field} type="date" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="location"
                          rules={{ required: "Le lieu est requis" }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Lieu *</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Prix et participants */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Tarifs et participants
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="price"
                          rules={{ 
                            required: "Le prix est requis",
                            min: { value: 0, message: "Le prix ne peut pas être négatif" },
                          }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Prix *</FormLabel>
                              <FormControl>
                                <Input {...field} type="number" step="0.01" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="currency"
                          rules={{ required: "La devise est requise" }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Devise *</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="max_participants"
                          rules={{ 
                            required: "Le nombre maximum de participants est requis",
                            min: { value: 1, message: "Doit être supérieur à 0" },
                          }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Participants max *</FormLabel>
                              <FormControl>
                                <Input {...field} type="number" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Formateur */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Formateur
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="instructor"
                          rules={{ required: "Le nom du formateur est requis" }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nom du formateur *</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="instructor_bio"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Bio du formateur</FormLabel>
                              <FormControl>
                                <Textarea {...field} rows={3} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Médias */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Image className="h-5 w-5" />
                        Médias
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="cover_image"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Image de couverture (URL)</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="https://..." />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="intro_video"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Vidéo d'introduction (URL)</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="https://youtube.com/..." />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Objectifs */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Objectifs
                        </h3>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm"
                          onClick={() => addArrayItem('objectives')}
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Ajouter
                        </Button>
                      </div>
                      
                      {form.watch('objectives').map((_, index) => (
                        <div key={index} className="flex gap-2">
                          <FormField
                            control={form.control}
                            name={`objectives.${index}`}
                            rules={{ required: "L'objectif est requis" }}
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormControl>
                                  <Input {...field} placeholder="Objectif de formation" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm"
                            onClick={() => removeArrayItem('objectives', index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    {/* Programme */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          Programme
                        </h3>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm"
                          onClick={() => addArrayItem('program')}
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Ajouter
                        </Button>
                      </div>
                      
                      {form.watch('program').map((_, index) => (
                        <div key={index} className="grid grid-cols-6 gap-2">
                          <FormField
                            control={form.control}
                            name={`program.${index}.day`}
                            rules={{ 
                              required: "Le jour est requis",
                              min: { value: 1, message: "Doit être supérieur à 0" },
                            }}
                            render={({ field }) => (
                              <FormItem className="col-span-1">
                                <FormLabel>Jour *</FormLabel>
                                <FormControl>
                                  <Input {...field} type="number" placeholder="Jour" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`program.${index}.title`}
                            rules={{ required: "Le titre est requis" }}
                            render={({ field }) => (
                              <FormItem className="col-span-2">
                                <FormLabel>Titre *</FormLabel>
                                <FormControl>
                                  <Input {...field} placeholder="Titre du programme" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`program.${index}.content`}
                            rules={{ required: "La description est requise" }}
                            render={({ field }) => (
                              <FormItem className="col-span-2">
                                <FormLabel>Description *</FormLabel>
                                <FormControl>
                                  <Textarea {...field} placeholder="Description du programme" rows={3} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm"
                            className="mt-6"
                            onClick={() => removeArrayItem('program', index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    {/* Programme détaillé */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          Programme détaillé
                        </h3>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm"
                          onClick={() => addArrayItem('detailed_program')}
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Ajouter
                        </Button>
                      </div>
                      
                      {form.watch('detailed_program').map((_, index) => (
                        <div key={index} className="grid grid-cols-6 gap-2">
                          <FormField
                            control={form.control}
                            name={`detailed_program.${index}.day`}
                            rules={{ 
                              required: "Le jour est requis",
                              min: { value: 1, message: "Doit être supérieur à 0" },
                            }}
                            render={({ field }) => (
                              <FormItem className="col-span-1">
                                <FormLabel>Jour *</FormLabel>
                                <FormControl>
                                  <Input {...field} type="number" placeholder="Jour" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`detailed_program.${index}.title`}
                            rules={{ required: "Le titre est requis" }}
                            render={({ field }) => (
                              <FormItem className="col-span-2">
                                <FormLabel>Titre *</FormLabel>
                                <FormControl>
                                  <Input {...field} placeholder="Titre du programme détaillé" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`detailed_program.${index}.description`}
                            rules={{ required: "La description est requise" }}
                            render={({ field }) => (
                              <FormItem className="col-span-2">
                                <FormLabel>Description *</FormLabel>
                                <FormControl>
                                  <Textarea {...field} placeholder="Description détaillée du programme" rows={4} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm"
                            className="mt-6"
                            onClick={() => removeArrayItem('detailed_program', index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    {/* Prérequis */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" />
                          Prérequis
                        </h3>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm"
                          onClick={() => addArrayItem('prerequisites')}
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Ajouter
                        </Button>
                      </div>
                      
                      {form.watch('prerequisites').map((_, index) => (
                        <div key={index} className="flex gap-2">
                          <FormField
                            control={form.control}
                            name={`prerequisites.${index}`}
                            rules={{ required: "Le prérequis est requis" }}
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormControl>
                                  <Input {...field} placeholder="Prérequis" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm"
                            onClick={() => removeArrayItem('prerequisites', index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Tags</h3>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm"
                          onClick={() => addArrayItem('tags')}
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Ajouter
                        </Button>
                      </div>
                      
                      {form.watch('tags').map((_, index) => (
                        <div key={index} className="flex gap-2">
                          <FormField
                            control={form.control}
                            name={`tags.${index}`}
                            rules={{ required: "Le tag est requis" }}
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormControl>
                                  <Input {...field} placeholder="Tag" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm"
                            onClick={() => removeArrayItem('tags', index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    {/* État */}
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="is_active"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel>Formation active</FormLabel>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Boutons */}
                    <div className="flex gap-4 pt-6">
                      <Button type="submit" className="flex-1" disabled={isSubmitting}>
                        <Save className="mr-2 h-4 w-4" />
                        {isSubmitting ? 'Enregistrement...' : (editingFormation ? 'Mettre à jour' : 'Créer')}
                      </Button>
                      <Button type="button" variant="outline" onClick={closeForm} disabled={isSubmitting}>
                        Annuler
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
}