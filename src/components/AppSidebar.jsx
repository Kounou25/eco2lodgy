
import { 
  Calendar, 
  Home, 
  Users, 
  Settings, 
  FileText, 
  GraduationCap,
  Building,
  Mail,
  BarChart3
} from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Accueil",
    url: "/new-dashboard",
    icon: Home,
  },
  {
    title: "Projets",
    url: "/new-dashboard/projects",
    icon: FileText,
  },
  {
    title: "Formations",
    url: "/new-dashboard/formations",
    icon: GraduationCap,
  },
  {
    title: "Équipe",
    url: "/new-dashboard/team",
    icon: Users,
  },
  {
    title: "Partenaires",
    url: "/new-dashboard/partners",
    icon: Building,
  },
  {
    title: "Statistiques",
    url: "/new-dashboard/analytics",
    icon: BarChart3,
  },
]

const settingsItems = [
  {
    title: "Paramètres",
    url: "/new-dashboard/settings",
    icon: Settings,
  },
  {
    title: "Messages",
    url: "/new-dashboard/messages",
    icon: Mail,
  },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
            AT
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">ALPHATEK</span>
            <span className="text-xs text-muted-foreground">Dashboard</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation principale</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Outils</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <div className="flex items-center gap-2 px-1 py-1.5">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-800">U</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Utilisateur</span>
                  <span className="text-xs text-muted-foreground">user@alphatek.fr</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
