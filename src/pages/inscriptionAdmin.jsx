import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Target, 
  Utensils, 
  Bed, 
  Bus, 
  AlertCircle, 
  CheckCircle,
  Save 
} from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function InscriptionsAdmin() {
  const [inscriptions, setInscriptions] = useState([
    {
      id: 1,
      firstName: "Aminata",
      lastName: "Diallo",
      email: "aminata.diallo@example.com",
      phone: "+227 90 12 34 56",
      address: "Rue des Écoles, Niamey",
      city: "Niamey",
      profession: "Architecte",
      experience: "5 ans dans la construction traditionnelle",
      motivation: "Intérêt pour les techniques écologiques modernes",
      dietaryRestrictions: "Sans gluten",
      accommodationNeeded: true,
      transportNeeded: false,
      emergencyContact: "Ibrahim Diallo",
      emergencyPhone: "+227 91 23 45 67",
      acceptTerms: true,
      acceptNewsletter: true,
      formationId: 1,
      formationTitle: "Techniques de Construction Écologique",
      status: "Confirmée",
      registrationDate: "2024-02-10"
    },
    {
      id: 2,
      firstName: "Moussa",
      lastName: "Issa",
      email: "moussa.issa@example.com",
      phone: "+227 92 34 56 78",
      address: "",
      city: " detainAgadez",
      profession: "Ingénieur BTP",
      experience: "3 ans dans le bâtiment",
      motivation: "Approfondir mes connaissances en durabilité",
      dietaryRestrictions: "",
      accommodationNeeded: false,
      transportNeeded: true,
      emergencyContact: "Fatima Issa",
      emergencyPhone: "+227 93 45 67 89",
      acceptTerms: true,
      acceptNewsletter: false,
      formationId: 1,
      formationTitle: "Techniques de Construction Écologique",
      status: "En attente",
      registrationDate: "2024-02-12"
    }
  ]);

  const [selectedInscription, setSelectedInscription] = useState(null);

  const form = useForm({
    defaultValues: {
      status: ""
    }
  });

  const openModal = (inscription) => {
    setSelectedInscription(inscription);
    form.reset({ status: inscription.status });
  };

  const closeModal = () => {
    setSelectedInscription(null);
    form.reset();
  };

  const handleStatusChange = (data) => {
    setInscriptions(inscriptions.map(inscription => 
      inscription.id === selectedInscription.id 
        ? { ...inscription, status: data.status }
        : inscription
    ));
    setSelectedInscription({ ...selectedInscription, status: data.status });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmée": return "bg-green-100 text-green-800";
      case "En attente": return "bg-yellow-100 text-yellow-800";
      case "Annulée": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestion des Inscriptions</h1>
          <p className="text-muted-foreground">
            Consultez et gérez les inscriptions aux formations
          </p>
        </div>
      </div>

      {/* Liste des inscriptions */}
      <div className="grid gap-4">
        {inscriptions.map((inscription) => (
          <Card key={inscription.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-xl">{`${inscription.firstName} ${inscription.lastName}`}</CardTitle>
                    <Badge className={getStatusColor(inscription.status)}>
                      {inscription.status}
                    </Badge>
                  </div>
                  <CardDescription className="mb-3">
                    Inscrit à : {inscription.formationTitle}
                  </CardDescription>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      <span>{inscription.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      <span>{inscription.phone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(inscription.registrationDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => openModal(inscription)}>
                  Détails
                </Button>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Modal des détails */}
      {selectedInscription && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Détails de l'inscription</CardTitle>
                <Button variant="ghost" size="sm" onClick={closeModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>
                Inscription de {`${selectedInscription.firstName} ${selectedInscription.lastName}`} pour {selectedInscription.formationTitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleStatusChange)}>
                  {/* Informations personnelles */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Informations personnelles
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Prénom</p>
                        <p>{selectedInscription.firstName}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Nom</p>
                        <p>{selectedInscription.lastName}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Email</p>
                        <p>{selectedInscription.email}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Téléphone</p>
                        <p>{selectedInscription.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Adresse</p>
                        <p>{selectedInscription.address || "Non fournie"}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Ville</p>
                        <p>{selectedInscription.city || "Non fournie"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Informations professionnelles */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Informations professionnelles
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Profession</p>
                        <p>{selectedInscription.profession || "Non fournie"}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Expérience</p>
                        <p>{selectedInscription.experience || "Non fournie"}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Motivation</p>
                        <p>{selectedInscription.motivation}</p>
                      </div>
                    </div>
                  </div>

                  {/* Informations complémentaires */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Informations complémentaires
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Restrictions alimentaires</p>
                        <p>{selectedInscription.dietaryRestrictions || "Aucune"}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Hébergement requis</p>
                        <p>{selectedInscription.accommodationNeeded ? "Oui" : "Non"}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Transport requis</p>
                        <p>{selectedInscription.transportNeeded ? "Oui" : "Non"}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Contact d'urgence</p>
                        <p>{selectedInscription.emergencyContact || "Non fourni"}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Téléphone d'urgence</p>
                        <p>{selectedInscription.emergencyPhone || "Non fourni"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Conditions */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Conditions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Acceptation des conditions</p>
                        <p>{selectedInscription.acceptTerms ? "Oui" : "Non"}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Inscription à la newsletter</p>
                        <p>{selectedInscription.acceptNewsletter ? "Oui" : "Non"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Informations sur la formation */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Formation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Titre de la formation</p>
                        <p>{selectedInscription.formationTitle}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Date d'inscription</p>
                        <p>{new Date(selectedInscription.registrationDate).toLocaleDateString('fr-FR')}</p>
                      </div>
                      <div>
                        <FormField
                          control={form.control}
                          name="status"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Statut</FormLabel>
                              <FormControl>
                                <select {...field} className="w-full p-2 border rounded-md">
                                  <option value="Confirmée">Confirmée</option>
                                  <option value="En attente">En attente</option>
                                  <option value="Annulée">Annulée</option>
                                </select>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Boutons */}
                  <div className="flex justify-end gap-4 pt-6">
                    <Button type="submit" className="flex-1">
                      <Save className="mr-2 h-4 w-4" />
                      Enregistrer
                    </Button>
                    <Button type="button" variant="outline" onClick={closeModal}>
                      Fermer
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