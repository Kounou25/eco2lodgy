
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
  Eye,
  UserCheck,
  Clock,
  CheckCircle
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

  // Nouvelles statistiques pour les formations
  const formationStats = [
    {
      title: "Formations en cours",
      value: "8",
      icon: Clock,
      color: "text-blue-600",
      bg: "bg-blue-100",
      trend: "+2 ce mois"
    },
    {
      title: "Formations terminées",
      value: "24",
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-100",
      trend: "+12 cette année"
    },
    {
      title: "Total inscrits",
      value: "156",
      icon: UserCheck,
      color: "text-purple-600",
      bg: "bg-purple-100",
      trend: "+18 cette semaine"
    },
    {
      title: "Taux de réussite",
      value: "94%",
      icon: TrendingUp,
      color: "text-orange-600",
      bg: "bg-orange-100",
      trend: "+5% vs dernier mois"
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
    <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight truncate">Dashboard</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Bienvenue sur votre tableau de bord ALPHATEK
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Nouveau projet
        </Button>
      </div>

      {/* Stats Cards Générales */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="min-w-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium truncate">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bg} flex-shrink-0`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="inline mr-1 h-3 w-3 flex-shrink-0" />
                <span className="truncate">+20.1% par rapport au mois dernier</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistiques spécifiques aux formations */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Statistiques Formations</h2>
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {formationStats.map((stat) => (
            <Card key={stat.title} className="min-w-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium truncate">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bg} flex-shrink-0`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${stat.color} flex items-center`}>
                  <TrendingUp className="inline mr-1 h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{stat.trend}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
        {/* Recent Activities */}
        <Card className="lg:col-span-4 min-w-0">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Activités récentes</CardTitle>
            <CardDescription className="text-sm">
              Dernières actions sur la plateforme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 rounded-lg border p-3 min-w-0">
                  <div className="flex-1 space-y-1 min-w-0">
                    <p className="text-sm font-medium leading-none truncate">
                      {activity.title}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      {activity.description}
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="lg:col-span-3 min-w-0">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Actions rapides</CardTitle>
            <CardDescription className="text-sm">
              Raccourcis vers les actions courantes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
              <span className="truncate">Créer un projet</span>
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <GraduationCap className="mr-2 h-4 w-4 flex-shrink-0" />
              <span className="truncate">Ajouter une formation</span>
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4 flex-shrink-0" />
              <span className="truncate">Inviter un membre</span>
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
              <span className="truncate">Planifier un événement</span>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card className="min-w-0">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Événements à venir</CardTitle>
          <CardDescription className="text-sm">
            Prochaines formations et réunions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center space-x-3 sm:space-x-4 rounded-lg border p-3 sm:p-4 min-w-0">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base truncate">Formation Construction</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">25 Mars 2024</p>
                <Badge variant="secondary" className="text-xs">15 participants</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 rounded-lg border p-3 sm:p-4 min-w-0">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base truncate">Réunion équipe R&D</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">28 Mars 2024</p>
                <Badge variant="secondary" className="text-xs">8 participants</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 rounded-lg border p-3 sm:p-4 min-w-0">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base truncate">Présentation partenaires</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">30 Mars 2024</p>
                <Badge variant="secondary" className="text-xs">12 participants</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
