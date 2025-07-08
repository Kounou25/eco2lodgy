import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Mail, Phone, Calendar, GraduationCap, MapPin, Briefcase, Heart, AlertTriangle } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export default function InscriptionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [inscription, setInscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Récupération des détails de l'inscription depuis l'API
  useEffect(() => {
    const fetchInscription = async () => {
      try {
        setLoading(true);
        console.log(`Fetching inscription with ID: ${id}`);
        const response = await fetch(`https://alphatek.fr:3008/api/registrations/registrations/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            // Ajouter un en-tête d'authentification si nécessaire
            // 'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
          },
        });
        if (!response.ok) {
          throw new Error(response.status === 404 ? 'Inscription non trouvée' : `Erreur HTTP ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Inscription reçue:', data);
        setInscription(data);
        setLoading(false);
      } catch (err) {
        console.error('Erreur lors de la récupération de l\'inscription:', err);
        setError(err.message);
        setLoading(false);
        toast({
          title: 'Erreur',
          description: err.message || 'Impossible de charger les détails de l\'inscription.',
          variant: 'destructive',
        });
      }
    };

    fetchInscription();
  }, [id, toast]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Affichage pendant le chargement
  if (loading) {
    return (
      <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden p-2 sm:p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#2E5A27] border-solid mx-auto mb-4"></div>
          <p className="text-lg font-semibold">Chargement des détails de l'inscription...</p>
        </div>
      </div>
    );
  }

  // Affichage en cas d'erreur
  if (error || !inscription) {
    return (
      <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden p-2 sm:p-4">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">{error || 'Inscription non trouvée'}</h1>
          <Button onClick={() => navigate('/new-dashboard/inscriptions-admin')}>
            Retour aux inscriptions
          </Button>
        </div>
      </div>
    );
  }

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
              <p className="text-sm sm:text-base font-medium">{inscription.first_name}</p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Nom</label>
              <p className="text-sm sm:text-base font-medium">{inscription.last_name}</p>
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
                <p className="text-sm sm:text-base">{inscription.address || 'Non spécifié'}</p>
              </div>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Ville</label>
              <p className="text-sm sm:text-base">{inscription.city || 'Non spécifié'}</p>
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
              <p className="text-sm sm:text-base font-medium">{inscription.formation_title}</p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Date de la formation</label>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-sm sm:text-base">
                  {new Date(inscription.formation_date).toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Date d'inscription</label>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-sm sm:text-base">
                  {new Date(inscription.registration_date).toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Statut</label>
              <Badge 
                variant="outline" 
                className={`${getStatusColor(inscription.status)} text-xs sm:text-sm`}
              >
                {inscription.status === 'pending' ? 'En attente' : 
                 inscription.status === 'confirmed' ? 'Confirmé' : 
                 inscription.status === 'cancelled' ? 'Annulé' : inscription.status}
              </Badge>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Statut du paiement</label>
              <Badge 
                variant="outline" 
                className={`${getStatusColor(inscription.payment_status)} text-xs sm:text-sm`}
              >
                {inscription.payment_status === 'pending' ? 'En attente' : 
                 inscription.payment_status === 'confirmed' ? 'Payé' : 
                 inscription.payment_status === 'cancelled' ? 'Annulé' : inscription.payment_status}
              </Badge>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Conditions acceptées</label>
              <p className="text-sm sm:text-base text-green-600">
                {inscription.accept_terms ? "✓ Conditions générales acceptées" : "✗ Conditions non acceptées"}
              </p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Newsletter</label>
              <p className="text-sm sm:text-base">
                {inscription.accept_newsletter ? "✓ Abonné aux actualités" : "✗ Non abonné"}
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
              <p className="text-sm sm:text-base">{inscription.profession || 'Non spécifié'}</p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Expérience</label>
              <p className="text-sm sm:text-base leading-relaxed">{inscription.experience || 'Non spécifié'}</p>
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
          <p className="text-sm sm:text-base leading-relaxed">{inscription.motivation || 'Non spécifié'}</p>
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
              <p className="text-sm sm:text-base">{inscription.dietary_restrictions || 'Non spécifié'}</p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Hébergement</label>
              <p className="text-sm sm:text-base">
                {inscription.accommodation_needed ? "✓ Hébergement nécessaire" : "✗ Hébergement non nécessaire"}
              </p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Transport</label>
              <p className="text-sm sm:text-base">
                {inscription.transport_needed ? "✓ Aide au transport nécessaire" : "✗ Transport autonome"}
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
              <p className="text-sm sm:text-base font-medium">{inscription.emergency_contact || 'Non spécifié'}</p>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">Téléphone d'urgence</label>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-sm sm:text-base">{inscription.emergency_phone || 'Non spécifié'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}