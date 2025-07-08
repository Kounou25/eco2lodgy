import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download, Eye, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export default function InscriptionsAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [inscriptions, setInscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Récupération des inscriptions depuis l'API
  useEffect(() => {
    const fetchInscriptions = async () => {
      try {
        setLoading(true);
        console.log('Fetching inscriptions from API...');
        const response = await fetch('https://alphatek.fr:3008/api/registrations/', {
          headers: {
            'Content-Type': 'application/json',
            // Ajouter un en-tête d'authentification si nécessaire
            // 'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Inscriptions reçues:', data);
        setInscriptions(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        console.error('Erreur lors de la récupération des inscriptions:', err);
        setError(err.message);
        setLoading(false);
        toast({
          title: 'Erreur',
          description: err.message || 'Impossible de charger les inscriptions.',
          variant: 'destructive',
        });
      }
    };

    fetchInscriptions();
  }, [toast]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredInscriptions = inscriptions.filter(inscription =>
    `${inscription.first_name} ${inscription.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inscription.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inscription.formation_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Affichage pendant le chargement
  if (loading) {
    return (
      <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden p-2 sm:p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#2E5A27] border-solid mx-auto mb-4"></div>
          <p className="text-lg font-semibold">Chargement des inscriptions...</p>
        </div>
      </div>
    );
  }

  // Affichage en cas d'erreur
  if (error) {
    return (
      <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden p-2 sm:p-4">
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
    <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden p-2 sm:p-4">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              Gestion des Inscriptions
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base mt-1">
              Gérez toutes les inscriptions aux formations
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Exporter
            </Button>
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filtrer
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Rechercher par nom, email ou formation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:gap-4">
        {filteredInscriptions.map((inscription) => (
          <Card key={inscription.registration_id} className="w-full">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="min-w-0 flex-1 space-y-1">
                  <CardTitle className="text-base sm:text-lg truncate">
                    {inscription.first_name} {inscription.last_name}
                  </CardTitle>
                  <CardDescription className="text-sm space-y-1">
                    <div className="truncate">{inscription.email}</div>
                    <div className="text-xs text-muted-foreground">
                      {inscription.phone}
                    </div>
                  </CardDescription>
                </div>
                <Badge 
                  variant="outline" 
                  className={`${getStatusColor(inscription.status)} whitespace-nowrap flex-shrink-0 text-xs`}
                >
                  {inscription.status === 'pending' ? 'En attente' : 
                   inscription.status === 'confirmed' ? 'Confirmé' : 
                   inscription.status === 'cancelled' ? 'Annulé' : inscription.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-2 min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground truncate">
                      Formation: {inscription.formation_title}
                    </span>
                    <span className="text-xs sm:text-sm whitespace-nowrap">
                      Inscrit le: {new Date(inscription.registration_date).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-2 flex-shrink-0">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full sm:w-auto"
                    onClick={() => navigate(`/new-dashboard/inscriptions-admin/${inscription.registration_id}`)}
                  >
                    <Eye className="h-4 w-4 mr-1 sm:mr-2" />
                    <span className="text-sm">Voir détails</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredInscriptions.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-muted-foreground text-sm sm:text-base">
            Aucune inscription trouvée pour "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
}