
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function InscriptionsAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const inscriptions = [
    {
      id: 1,
      nom: "Amadou Diallo",
      email: "amadou.diallo@email.com",
      formation: "Développement Web",
      dateInscription: "2024-01-15",
      statut: "En attente",
      telephone: "+227 96 12 34 56"
    },
    {
      id: 2,
      nom: "Fatima Ibrahim",
      email: "fatima.ibrahim@email.com",
      formation: "Data Science",
      dateInscription: "2024-01-14",
      statut: "Accepté",
      telephone: "+227 97 23 45 67"
    },
    {
      id: 3,
      nom: "Moussa Oumarou",
      email: "moussa.oumarou@email.com",
      formation: "Cybersécurité",
      dateInscription: "2024-01-13",
      statut: "Refusé",
      telephone: "+227 98 34 56 78"
    }
  ];

  const getStatusColor = (statut) => {
    switch (statut) {
      case "En attente": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Accepté": return "bg-green-100 text-green-800 border-green-200";
      case "Refusé": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const filteredInscriptions = inscriptions.filter(inscription =>
    inscription.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inscription.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inscription.formation.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <Card key={inscription.id} className="w-full">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="min-w-0 flex-1 space-y-1">
                  <CardTitle className="text-base sm:text-lg truncate">
                    {inscription.nom}
                  </CardTitle>
                  <CardDescription className="text-sm space-y-1">
                    <div className="truncate">{inscription.email}</div>
                    <div className="text-xs text-muted-foreground">
                      {inscription.telephone}
                    </div>
                  </CardDescription>
                </div>
                <Badge 
                  variant="outline" 
                  className={`${getStatusColor(inscription.statut)} whitespace-nowrap flex-shrink-0 text-xs`}
                >
                  {inscription.statut}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-2 min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground truncate">
                      Formation: {inscription.formation}
                    </span>
                    <span className="text-xs sm:text-sm whitespace-nowrap">
                      Inscrit le: {new Date(inscription.dateInscription).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-2 flex-shrink-0">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full sm:w-auto"
                    onClick={() => navigate(`/new-dashboard/inscriptions-admin/${inscription.id}`)}
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
