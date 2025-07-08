import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  TrendingUp, 
  Calendar,
  Clock,
  CheckCircle,
  UserCheck
} from "lucide-react"

export default function NewDashboardHome() {
  const [formationStats, setFormationStats] = useState([]);
  const [upcomingFormations, setUpcomingFormations] = useState([]);
  const [recentFormationActivities, setRecentFormationActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to format time since creation
  const formatTimeSince = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);
    const diffMs = now - created;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 24) {
      return `Il y a ${diffHours} heure${diffHours !== 1 ? 's' : ''}`;
    }
    return `Il y a ${diffDays} jour${diffDays !== 1 ? 's' : ''}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch all endpoints concurrently
        const [registrationsResponse, formationsResponse, upcomingResponse] = await Promise.all([
          fetch('https://alphatek.fr:3008/api/registrations/stats'),
          fetch('https://alphatek.fr:3008/api/formations/stats'),
          fetch('https://alphatek.fr:3008/api/formations/upcomings')
        ]);

        if (!registrationsResponse.ok || !formationsResponse.ok || !upcomingResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const registrationsData = await registrationsResponse.json();
        const formationsData = await formationsResponse.json();
        const upcomingActivitiesData = await upcomingResponse.json();

        // Map formations stats to the dashboard format
        const stats = [
          {
            title: "Formations en cours",
            value: formationsData.ongoing_formations,
            icon: Clock,
            color: "text-blue-600",
            bg: "bg-blue-100",
            trend: formationsData.ongoing_formations > 0 ? `+${formationsData.ongoing_formations} en cours` : "Aucune en cours"
          },
          {
            title: "Formations terminées",
            value: formationsData.completed_formations,
            icon: CheckCircle,
            color: "text-green-600",
            bg: "bg-green-100",
            trend: formationsData.completed_formations > 0 ? `+${formationsData.completed_formations} terminées` : "Aucune terminée"
          },
          {
            title: "Total inscrits",
            value: registrationsData.reduce((sum, item) => sum + parseInt(item.total_registrations), 0).toString(),
            icon: UserCheck,
            color: "text-purple-600",
            bg: "bg-purple-100",
            trend: registrationsData.some(item => parseInt(item.total_registrations) > 0) ? "Nouvelles inscriptions" : "Aucune inscription"
          },
          {
            title: "Total formations",
            value: formationsData.total_formations,
            icon: GraduationCap,
            color: "text-orange-600",
            bg: "bg-orange-100",
            trend: formationsData.total_formations > 0 ? `+${formationsData.total_formations} formations` : "Aucune formation"
          }
        ];

        // Map registrations data to upcoming formations format
        const upcomingFormationsData = registrationsData.map(item => ({
          title: item.formation_title,
          date: "À venir", // Date not provided in API, using placeholder
          participants: parseInt(item.total_registrations),
          status: parseInt(item.total_registrations) > 0 ? "En cours d'inscription" : "Places disponibles"
        }));

        // Map upcoming activities to recent activities format (limit to 5)
        const recentActivities = upcomingActivitiesData
          .slice(0, 5)
          .map(item => ({
            type: "formation",
            title: item.title,
            description: item.current_participants > 0 
              ? `${item.current_participants} inscrit${item.current_participants !== 1 ? 's' : ''}`
              : "Nouvelle formation ajoutée",
            time: formatTimeSince(item.created_at)
          }));

        setFormationStats(stats);
        setUpcomingFormations(upcomingFormationsData);
        setRecentFormationActivities(recentActivities);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des données');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-4 w-full max-w-none overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm-flex-row sm:items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight truncate">Dashboard Formations</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Gérez vos formations et suivez les performances
          </p>
        </div>
      </div>

      {/* Loading and Error States */}
      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          <span className="ml-4 text-lg text-muted-foreground">Chargement des données...</span>
        </div>
      )}
      {error && <div className="text-center text-red-600">{error}</div>}

      {/* Statistiques formations */}
      {!isLoading && !error && (
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
      )}

      {/* Activités récentes formations */}
      {!isLoading && !error && (
        <Card className="min-w-0">
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
      )}

      
    </div>
  )
}