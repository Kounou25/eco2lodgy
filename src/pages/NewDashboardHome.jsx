
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  FileText, 
  GraduationCap, 
  Building, 
  TrendingUp, 
  Calendar,
  Plus,
  Eye
} from "lucide-react"

export default function NewDashboardHome() {
  const stats = [
    {
      title: "Projets actifs",
      value: "12",
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      title: "Formations en cours",
      value: "8",
      icon: GraduationCap,
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      title: "Membres équipe",
      value: "24",
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      title: "Partenaires",
      value: "15",
      icon: Building,
      color: "text-orange-600",
      bg: "bg-orange-100"
    }
  ]

  const recentActivities = [
    {
      type: "project",
      title: "Nouveau projet d'infrastructure",
      description: "Ajouté par Ahmed Moussa",
      time: "Il y a 2 heures"
    },
    {
      type: "formation",
      title: "Formation Construction Durable",
      description: "15 nouveaux inscrits",
      time: "Il y a 4 heures"
    },
    {
      type: "team",
      title: "Nouveau membre ajouté",
      description: "Fatima Abdoul rejoint l'équipe R&D",
      time: "Il y a 1 jour"
    }
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Bienvenue sur votre tableau de bord ALPHATEK
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouveau projet
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline mr-1 h-3 w-3" />
                +20.1% par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activities */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Activités récentes</CardTitle>
            <CardDescription>
              Dernières actions sur la plateforme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 rounded-lg border p-3">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Actions rapides</CardTitle>
            <CardDescription>
              Raccourcis vers les actions courantes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Créer un projet
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <GraduationCap className="mr-2 h-4 w-4" />
              Ajouter une formation
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Inviter un membre
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Planifier un événement
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Événements à venir</CardTitle>
          <CardDescription>
            Prochaines formations et réunions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center space-x-4 rounded-lg border p-4">
              <Calendar className="h-8 w-8 text-blue-600" />
              <div className="flex-1">
                <h3 className="font-semibold">Formation Construction</h3>
                <p className="text-sm text-muted-foreground">25 Mars 2024</p>
                <Badge variant="secondary">15 participants</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4 rounded-lg border p-4">
              <Calendar className="h-8 w-8 text-green-600" />
              <div className="flex-1">
                <h3 className="font-semibold">Réunion équipe R&D</h3>
                <p className="text-sm text-muted-foreground">28 Mars 2024</p>
                <Badge variant="secondary">8 participants</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4 rounded-lg border p-4">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div className="flex-1">
                <h3 className="font-semibold">Présentation partenaires</h3>
                <p className="text-sm text-muted-foreground">30 Mars 2024</p>
                <Badge variant="secondary">12 participants</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
