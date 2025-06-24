
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
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
  Video
} from "lucide-react"
import { useForm } from "react-hook-form"

export default function NewDashboardFormationsAdmin() {
  const [formations, setFormations] = useState([
    {
      id: 1,
      title: "Construction Durable",
      description: "Techniques modernes de construction écologique",
      category: "Construction",
      level: "Intermédiaire",
      duration: "5 jours",
      price: 150000,
      currency: "FCFA",
      maxParticipants: 20,
      currentParticipants: 15,
      startDate: "2024-04-15",
      endDate: "2024-04-20",
      location: "Niamey",
      instructor: "Dr. Amadou Diallo",
      instructorBio: "Expert en construction durable avec 15 ans d'expérience",
      coverImage: "/images/construction-durable.jpg",
      introVideo: "https://youtube.com/watch?v=example",
      objectives: [
        "Maîtriser les techniques de construction écologique",
        "Comprendre les matériaux durables",
        "Appliquer les normes environnementales"
      ],
      program: [
        { day: 1, title: "Introduction à la construction durable", content: "Concepts de base et enjeux environnementaux" },
        { day: 2, title: "Matériaux écologiques", content: "Sélection et utilisation des matériaux durables" },
        { day: 3, title: "Techniques de construction", content: "Méthodes de construction respectueuses de l'environnement" }
      ],
      detailedProgram: [
        { day: 1, title: "Introduction détaillée", description: "Concepts fondamentaux et impact environnemental" },
        { day: 2, title: "Matériaux durables", description: "Analyse approfondie des matériaux écologiques" }
      ],
      prerequisites: [
        "Connaissance de base en construction",
        "Expérience professionnelle recommandée"
      ],
      certificationType: "Certificat professionnel",
      isActive: true,
      tags: ["construction", "écologie", "durable"]
    }
  ])

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingFormation, setEditingFormation] = useState(null)

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      level: "Débutant",
      duration: "",
      price: 0,
      currency: "FCFA",
      maxParticipants: 20,
      startDate: "",
      endDate: "",
      location: "",
      instructor: "",
      instructorBio: "",
      coverImage: "",
      introVideo: "",
      objectives: [""],
      program: [{ day: 1, title: "", content: "" }],
      detailedProgram: [{ day: 1, title: "", description: "" }],
      prerequisites: [""],
      certificationType: "",
      isActive: true,
      tags: [""]
    }
  })

  const openForm = (formation = null) => {
    if (formation) {
      setEditingFormation(formation)
      form.reset({
        ...formation,
        objectives: Array.isArray(formation.objectives) && formation.objectives.length ? formation.objectives : [""],
        program: Array.isArray(formation.program) && formation.program.length ? formation.program : [{ day: 1, title: "", content: "" }],
        detailedProgram: Array.isArray(formation.detailedProgram) && formation.detailedProgram.length ? formation.detailedProgram : [{ day: 1, title: "", description: "" }],
        prerequisites: Array.isArray(formation.prerequisites) && formation.prerequisites.length ? formation.prerequisites : [""],
        tags: Array.isArray(formation.tags) && formation.tags.length ? formation.tags : [""]
      })
    } else {
      setEditingFormation(null)
      form.reset({
        title: "",
        description: "",
        category: "",
        level: "Débutant",
        duration: "",
        price: 0,
        currency: "FCFA",
        maxParticipants: 20,
        startDate: "",
        endDate: "",
        location: "",
        instructor: "",
        instructorBio: "",
        coverImage: "",
        introVideo: "",
        objectives: [""],
        program: [{ day: 1, title: "", content: "" }],
        detailedProgram: [{ day: 1, title: "", description: "" }],
        prerequisites: [""],
        certificationType: "",
        isActive: true,
        tags: [""]
      })
    }
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
    setEditingFormation(null)
    form.reset()
  }

  const onSubmit = (data) => {
    if (editingFormation) {
      setFormations(formations.map(f => 
        f.id === editingFormation.id 
          ? { ...data, id: editingFormation.id, currentParticipants: editingFormation.currentParticipants }
          : f
      ))
    } else {
      setFormations([...formations, { 
        ...data, 
        id: Date.now(), 
        currentParticipants: 0 
      }])
    }
    closeForm()
  }

  const deleteFormation = (id) => {
    setFormations(formations.filter(f => f.id !== id))
  }

  const addArrayItem = (fieldName) => {
    const currentValues = form.getValues(fieldName)
    form.setValue(fieldName, [...currentValues, 
      fieldName === 'program' ? { day: currentValues.length + 1, title: "", content: "" } : 
      fieldName === 'detailedProgram' ? { day: currentValues.length + 1, title: "", description: "" } : 
      ""
    ])
  }

  const removeArrayItem = (fieldName, index) => {
    const currentValues = form.getValues(fieldName)
    form.setValue(fieldName, currentValues.filter((_, i) => i !== index))
  }

  const getLevelColor = (level) => {
    switch (level) {
      case "Débutant": return "bg-green-100 text-green-800"
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800"
      case "Avancé": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
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
                    <CardTitle className="text-xl">{formation.title}</CardTitle>
                    <Badge className={getLevelColor(formation.level)}>
                      {formation.level}
                    </Badge>
                    {!formation.isActive && (
                      <Badge variant="secondary">Inactive</Badge>
                    )}
                  </div>
                  <CardDescription className="mb-3">
                    {formation.description}
                  </CardDescription>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(formation.startDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{formation.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{formation.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{formation.price.toLocaleString()} {formation.currency}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{formation.currentParticipants}/{formation.maxParticipants}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{formation.instructor}</span>
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
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Catégorie *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="description"
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
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Niveau</FormLabel>
                            <FormControl>
                              <select {...field} className="w-full p-2 border rounded-md">
                                <option value="Débutant">Débutant</option>
                                <option value="Intermédiaire">Intermédiaire</option>
                                <option value="Avancé">Avancé</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Durée</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="ex: 5 jours" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="certificationType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type de certification</FormLabel>
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
                        name="startDate"
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
                        name="endDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date de fin</FormLabel>
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
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Prix *</FormLabel>
                            <FormControl>
                              <Input {...field} type="number" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="currency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Devise</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="maxParticipants"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Participants max</FormLabel>
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
                        name="instructorBio"
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
                        name="coverImage"
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
                        name="introVideo"
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
                          render={({ field }) => (
                            <FormItem className="col-span-1">
                              <FormLabel>Jour</FormLabel>
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
                          render={({ field }) => (
                            <FormItem className="col-span-2">
                              <FormLabel>Titre</FormLabel>
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
                          render={({ field }) => (
                            <FormItem className="col-span-2">
                              <FormLabel>Description</FormLabel>
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
                        onClick={() => addArrayItem('detailedProgram')}
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Ajouter
                      </Button>
                    </div>
                    
                    {form.watch('detailedProgram').map((_, index) => (
                      <div key={index} className="grid grid-cols-6 gap-2">
                        <FormField
                          control={form.control}
                          name={`detailedProgram.${index}.day`}
                          render={({ field }) => (
                            <FormItem className="col-span-1">
                              <FormLabel>Jour</FormLabel>
                              <FormControl>
                                <Input {...field} type="number" placeholder="Jour" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`detailedProgram.${index}.title`}
                          render={({ field }) => (
                            <FormItem className="col-span-2">
                              <FormLabel>Titre</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Titre du programme détaillé" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`detailedProgram.${index}.description`}
                          render={({ field }) => (
                            <FormItem className="col-span-2">
                              <FormLabel>Description</FormLabel>
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
                          onClick={() => removeArrayItem('detailedProgram', index)}
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
                      name="isActive"
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
                    <Button type="submit" className="flex-1">
                      <Save className="mr-2 h-4 w-4" />
                      {editingFormation ? 'Mettre à jour' : 'Créer'}
                    </Button>
                    <Button type="button" variant="outline" onClick={closeForm}>
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
  )
}
