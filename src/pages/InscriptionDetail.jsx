
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Mail, Phone, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

export default function InscriptionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock data - remplacez par des vraies données
  const inscription = {
    id: parseInt(id),
    nom: "Amadou Diallo",
    email: "amadou.diallo@email.com",
    telephone: "+227 96 12 34 56",
    formation: "Développement Web",
    dateInscription: "2024-01-15",
    statut: "En attente",
    age: 25,
    niveau: "Débutant",
    experience: "2 ans d'expérience en HTML/CSS",
    motivation: "Je souhaite me spécialiser dans le développement web moderne et apprendre React.js pour évoluer dans ma carrière.",
    adresse: "Quartier Lamordé, Niamey, Niger"
  };

  const getStatusColor = (statut) => {
    switch (statut) {
      case "En attente": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Accepté": return "bg-green-100 text-green-800 border-green-200";
      case "Refusé": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden p-2 sm:p-4">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/new-dashboard/inscriptions-admin')}
            className="self-start"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              Détails de l'inscription
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base mt-1">
              Informations complètes du candidat
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Informations personnelles */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Informations personnelles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Nom complet</label>
              <p className="text-sm sm:text-base font-medium">{inscription.nom}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground">Email</label>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm sm:text-base break-all">{inscription.email}</p>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground">Téléphone</label>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm sm:text-base">{inscription.telephone}</p>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground">Âge</label>
              <p className="text-sm sm:text-base">{inscription.age} ans</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground">Adresse</label>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                <p className="text-sm sm:text-base">{inscription.adresse}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Informations formation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Formation et statut
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Formation</label>
              <p className="text-sm sm:text-base font-medium">{inscription.formation}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground">Date d'inscription</label>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm sm:text-base">
                  {new Date(inscription.dateInscription).toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground">Statut</label>
              <Badge 
                variant="outline" 
                className={`${getStatusColor(inscription.statut)} text-xs sm:text-sm`}
              >
                {inscription.statut}
              </Badge>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground">Niveau</label>
              <p className="text-sm sm:text-base">{inscription.niveau}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground">Expérience</label>
              <p className="text-sm sm:text-base">{inscription.experience}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Motivation */}
      <Card>
        <CardHeader>
          <CardTitle>Motivation</CardTitle>
          <CardDescription>Raison de la candidature</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm sm:text-base leading-relaxed">{inscription.motivation}</p>
        </CardContent>
      </Card>
    </div>
  );
}
