
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Eye, Edit, Trash2 } from "lucide-react"

export default function NewDashboardProjects() {
  const projects = [
    {
      id: 1,
      title: "Infrastructure Urbaine Niamey",
      description: "Développement d'infrastructures modernes pour la ville de Niamey",
      status: "En cours",
      progress: 65,
      team: 8,
      deadline: "2024-06-15"
    },
    {
      id: 2,
      title: "Énergie Solaire Rurale",
      description: "Installation de panneaux solaires dans les zones rurales",
      status: "Planifié",
      progress: 25,
      team: 5,
      deadline: "2024-08-30"
    },
    {
      id: 3,
      title: "Agriculture Intelligente",
      description: "Système d'irrigation automatisé pour l'agriculture",
      status: "Terminé",
      progress: 100,
      team: 12,
      deadline: "2024-02-20"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "En cours": return "bg-blue-100 text-blue-800"
      case "Planifié": return "bg-yellow-100 text-yellow-800"
      case "Terminé": return "bg-green-100 text-green-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projets</h1>
          <p className="text-muted-foreground">
            Gérez tous vos projets en cours et à venir
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouveau projet
        </Button>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {project.description}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Équipe: {project.team} membres</span>
                    <span>Échéance: {new Date(project.deadline).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Progression: {project.progress}%
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
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
