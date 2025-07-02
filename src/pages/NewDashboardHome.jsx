
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  TrendingUp, 
  Calendar,
  Plus,
  UserCheck,
  Clock,
  CheckCircle,
  Users
} from "lucide-react"

export default function NewDashboardHome() {
  // Statistiques spécifiques aux formations
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

  const recentFormationActivities = [
    {
      type: "formation",
      title: "Formation Construction Durable",
      description: "15 nouveaux inscrits",
      time: "Il y a 2 heures"
    },
    {
      type: "formation",
      title: "Formation Agriculture Numérique",
      description: "Session terminée avec succès",
      time: "Il y a 4 heures"
    },
    {
      type: "formation",
      title: "Formation Énergies Renouvelables",
      description: "Places complètes - liste d'attente ouverte",
      time: "Il y a 1 jour"
    },
    {
      type: "formation",
      title: "Formation Gestion de Projets",
      description: "Nouvelle formation ajoutée",
      time: "Il y a 2 jours"
    }
  ]

  const upcomingFormations = [
    {
      title: "Construction Durable",
      date: "25 Mars 2024",
      participants: 15,
      status: "En cours d'inscription"
    },
    {
      title: "Agriculture Numérique",
      date: "28 Mars 2024",
      participants: 8,
      status: "Places disponibles"
    },
    {
      title: "Énergies Renouvelables",
      date: "30 Mars 2024",
      participants: 12,
      status: "Complet"
    }
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight truncate">Dashboard Formations</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Gérez vos formations et suivez les performances
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle formation
        </Button>
      </div>

      {/* Statistiques formations */}
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

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
        {/* Activités récentes formations */}
        <Card className="lg:col-span-4 min-w-0">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Activités récentes - Formations</CardTitle>
            <CardDescription className="text-sm">
              Dernières actions sur les formations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {recentFormationActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 rounded-lg border p-3 min-w-0">
                  <div className="p-2 rounded-lg bg-blue-100 flex-shrink-0">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                  </div>
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

        {/* Actions rapides formations */}
        <Card className="lg:col-span-3 min-w-0">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Actions rapides</CardTitle>
            <CardDescription className="text-sm">
              Gestion des formations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <GraduationCap className="mr-2 h-4 w-4 flex-shrink-0" />
              <span className="truncate">Créer une formation</span>
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4 flex-shrink-0" />
              <span className="truncate">Gérer les inscriptions</span>
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
              <span className="truncate">Planifier une session</span>
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0" />
              <span className="truncate">Voir les résultats</span>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Prochaines formations */}
      <Card className="min-w-0">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Prochaines formations</CardTitle>
          <CardDescription className="text-sm">
            Formations à venir et leur statut
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {upcomingFormations.map((formation, index) => (
              <div key={index} className="flex items-center space-x-3 sm:space-x-4 rounded-lg border p-3 sm:p-4 min-w-0">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base truncate">{formation.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{formation.date}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">{formation.participants} participants</Badge>
                    <Badge 
                      variant={formation.status === "Complet" ? "destructive" : "default"} 
                      className="text-xs"
                    >
                      {formation.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
