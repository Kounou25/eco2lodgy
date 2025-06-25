
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Mail, Phone, Calendar, GraduationCap, MapPin, Briefcase, Heart, AlertTriangle } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

export default function InscriptionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock data - remplacez par des vraies données
  const inscription = {
    id: parseInt(id),
    // Informations personnelles
    firstName: "Amadou",
    lastName: "Diallo",
    email: "amadou.diallo@email.com",
    phone: "+227 96 12 34 56",
    address: "Quartier Lamordé, Niamey",
    city: "Niamey",
    
    // Informations formation
    formation: "Développement Web",
    dateInscription: "2024-01-15",
    statut: "En attente",
    
    // Informations professionnelles
    profession: "Développeur Junior",
    experience: "2 ans d'expérience en HTML/CSS, quelques projets personnels en JavaScript. J'ai travaillé sur des sites web statiques et je souhaite maintenant me perfectionner avec des frameworks modernes.",
    motivation: "Je souhaite me spécialiser dans le développement web moderne et apprendre React.js pour évoluer dans ma carrière. Cette formation me permettra d'acquérir les compétences nécessaires pour travailler sur des projets plus complexes et répondre aux besoins actuels du marché.",
    
    // Informations complémentaires
    dietaryRestrictions: "Aucune allergie particulière",
    accommodationNeeded: true,
    transportNeeded: false,
    emergencyContact: "Fatima Diallo",
    emergencyPhone: "+227 97 11 22 33",
    acceptTerms: true,
    acceptNewsletter: true
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Informations personnelles */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <User className="h-5 w-5" />
              Informations personnelles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Prénom</label>
              <p className="text-sm sm:text-base font-medium">{inscription.firstName}</p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Nom</label>
              <p className="text-sm sm:text-base font-medium">{inscription.lastName}</p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Email</label>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-sm sm:text-base break-all">{inscription.email}</p>
              </div>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Téléphone</label>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-sm sm:text-base">{inscription.phone}</p>
              </div>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Adresse</label>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base">{inscription.address}</p>
              </div>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Ville</label>
              <p className="text-sm sm:text-base">{inscription.city}</p>
            </div>
          </CardContent>
        </Card>

        {/* Informations formation et statut */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <GraduationCap className="h-5 w-5" />
              Formation et statut
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Formation</label>
              <p className="text-sm sm:text-base font-medium">{inscription.formation}</p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Date d'inscription</label>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-sm sm:text-base">
                  {new Date(inscription.dateInscription).toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Statut</label>
              <Badge 
                variant="outline" 
                className={`${getStatusColor(inscription.statut)} text-xs sm:text-sm`}
              >
                {inscription.statut}
              </Badge>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Conditions acceptées</label>
              <p className="text-sm sm:text-base text-green-600">
                {inscription.acceptTerms ? "✓ Conditions générales acceptées" : "✗ Conditions non acceptées"}
              </p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Newsletter</label>
              <p className="text-sm sm:text-base">
                {inscription.acceptNewsletter ? "✓ Abonné aux actualités" : "✗ Non abonné"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Informations professionnelles */}
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Briefcase className="h-5 w-5" />
              Informations professionnelles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Profession</label>
              <p className="text-sm sm:text-base">{inscription.profession}</p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Expérience</label>
              <p className="text-sm sm:text-base leading-relaxed">{inscription.experience}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Motivation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Heart className="h-5 w-5" />
            Motivation
          </CardTitle>
          <CardDescription>Raison de la candidature</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm sm:text-base leading-relaxed">{inscription.motivation}</p>
        </CardContent>
      </Card>

      {/* Informations complémentaires */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <AlertTriangle className="h-5 w-5" />
              Besoins spéciaux
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Restrictions alimentaires</label>
              <p className="text-sm sm:text-base">{inscription.dietaryRestrictions}</p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Hébergement</label>
              <p className="text-sm sm:text-base">
                {inscription.accommodationNeeded ? "✓ Hébergement nécessaire" : "✗ Hébergement non nécessaire"}
              </p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Transport</label>
              <p className="text-sm sm:text-base">
                {inscription.transportNeeded ? "✓ Aide au transport nécessaire" : "✗ Transport autonome"}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Phone className="h-5 w-5" />
              Contact d'urgence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Nom du contact</label>
              <p className="text-sm sm:text-base font-medium">{inscription.emergencyContact}</p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Téléphone d'urgence</label>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-sm sm:text-base">{inscription.emergencyPhone}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
