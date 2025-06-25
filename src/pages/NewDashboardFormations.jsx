
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Eye, Edit, Users, Calendar, MapPin } from "lucide-react"

export default function NewDashboardFormations() {
  const formations = [
    {
      id: 1,
      title: "Construction Durable",
      description: "Techniques modernes de construction écologique",
      level: "Intermédiaire",
      participants: 15,
      maxParticipants: 20,
      startDate: "2024-04-15",
      location: "Niamey",
      price: "150,000 FCFA"
    },
    {
      id: 2,
      title: "Agriculture Numérique",
      description: "Technologies digitales pour l'agriculture moderne",
      level: "Débutant",
      participants: 8,
      maxParticipants: 15,
      startDate: "2024-05-01",
      location: "Tillabéri",
      price: "120,000 FCFA"
    },
    {
      id: 3,
      title: "Énergies Renouvelables",
      description: "Installation et maintenance des systèmes solaires",
      level: "Avancé",
      participants: 12,
      maxParticipants: 12,
      startDate: "2024-04-20",
      location: "Dosso",
      price: "200,000 FCFA"
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case "Débutant": return "bg-green-100 text-green-800"
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800"
      case "Avancé": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight truncate">Formations</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Gérez toutes vos formations et sessions
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle formation
        </Button>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {formations.map((formation) => (
          <Card key={formation.id} className="hover:shadow-lg transition-shadow min-w-0">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-base sm:text-lg truncate">{formation.title}</CardTitle>
                  <CardDescription className="mt-1 text-sm line-clamp-2">
                    {formation.description}
                  </CardDescription>
                </div>
                <Badge className={`${getLevelColor(formation.level)} whitespace-nowrap flex-shrink-0 text-xs`}>
                  {formation.level}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{formation.participants}/{formation.maxParticipants} participants</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{new Date(formation.startDate).toLocaleDateString('fr-FR')}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{formation.location}</span>
                </div>
                
                <div className="text-base sm:text-lg font-semibold text-blue-600 truncate">
                  {formation.price}
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(formation.participants / formation.maxParticipants) * 100}%` }}
                  />
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 min-w-0">
                    <Eye className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">Voir</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 min-w-0">
                    <Edit className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">Modifier</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
