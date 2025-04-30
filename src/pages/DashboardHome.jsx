// src/pages/DashboardHome.jsx
import { Users, FileText, Calendar, Mail, Clock, AlertCircle, CheckCircle } from 'lucide-react';

export default function DashboardHome() {
  // Données de démonstration - à remplacer par vos données réelles
  const stats = [
    { title: "Projets actifs", value: "24", icon: FileText, trend: "+3 cette semaine", trendColor: "text-green-500" },
    { title: "Membres d'équipe", value: "18", icon: Users, trend: "Équipe complète", trendColor: "text-blue-500" },
    { title: "Événements à venir", value: "7", icon: Calendar, trend: "2 aujourd'hui", trendColor: "text-purple-500" },
    { title: "Messages non lus", value: "5", icon: Mail, trend: "À traiter", trendColor: "text-orange-500" }
  ];

  const recentActivities = [
    { id: 1, type: "projet", action: "Nouveau projet créé", project: "Site vitrine", time: "Il y a 2 heures", icon: FileText, color: "text-blue-500" },
    { id: 2, type: "équipe", action: "Nouveau membre", project: "Marie Dupont", time: "Il y a 1 jour", icon: Users, color: "text-green-500" },
    { id: 3, type: "partenaire", action: "Partenaire ajouté", project: "Tech Solutions", time: "Il y a 2 jours", icon: Users, color: "text-purple-500" },
    { id: 4, type: "article", action: "Article publié", project: "Nouvelles technologies", time: "Il y a 3 jours", icon: FileText, color: "text-orange-500" }
  ];

  const urgentTasks = [
    { id: 1, task: "Valider le devis client", deadline: "Aujourd'hui", status: "en retard", icon: AlertCircle, color: "text-red-500" },
    { id: 2, task: "Envoyer les fichiers au client", deadline: "Demain", status: "à faire", icon: Clock, color: "text-yellow-500" },
    { id: 3, task: "Réunion d'équipe", deadline: "Dans 2 jours", status: "planifié", icon: CheckCircle, color: "text-green-500" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tableau de bord</h1>
        <div className="text-sm text-gray-500">Dernière mise à jour : {new Date().toLocaleDateString()}</div>
      </div>

      {/* Cartes de statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <stat.icon size={20} />
              </div>
            </div>
            <p className={`text-xs ${stat.trendColor} mt-2`}>{stat.trend}</p>
          </div>
        ))}
      </div>

      {/* Grille principale */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activités récentes */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Activités récentes</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">Voir tout</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`mt-1 p-2 rounded-full ${activity.color.replace('text', 'bg')} bg-opacity-20 ${activity.color}`}>
                  <activity.icon size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.project} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tâches urgentes */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Tâches urgentes</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">Voir tout</button>
          </div>
          <div className="space-y-4">
            {urgentTasks.map((task) => (
              <div key={task.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center space-x-2">
                  <task.icon className={`${task.color}`} size={16} />
                  <p className="font-medium">{task.task}</p>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-500">Échéance: {task.deadline}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    task.status === "en retard" ? "bg-red-100 text-red-800" :
                    task.status === "à faire" ? "bg-yellow-100 text-yellow-800" :
                    "bg-green-100 text-green-800"
                  }`}>
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projets récents */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Projets récents</h2>
          <button className="text-sm text-blue-600 hover:text-blue-800">Voir tout</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((project) => (
            <div key={project} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-100 rounded-md mb-3 flex items-center justify-center text-gray-400">
                Image du projet
              </div>
              <h3 className="font-medium">Projet Alpha {project}</h3>
              <p className="text-sm text-gray-500 mt-1">Développement d'une nouvelle application</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">En cours</span>
                <span className="text-xs text-gray-500">15/0{project+5}/2023</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}