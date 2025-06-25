
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
    title: "Admin Formations",
    url: "/new-dashboard/formations-admin",
    icon: Settings,
  },
  {
    title: "Inscriptions",
    url: "/new-dashboard/inscriptions-admin",
    icon: Settings,
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
    <Sidebar variant="inset" className="border-r bg-white">
      <SidebarHeader className="p-2 sm:p-4 bg-white">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold flex-shrink-0">
            AT
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-sm font-semibold truncate">ALPHATEK</span>
            <span className="text-xs text-muted-foreground truncate">Dashboard</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-2 bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs sm:text-sm px-2">Navigation principale</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    className="w-full h-10 px-3 data-[active=true]:bg-blue-100 data-[active=true]:text-blue-900"
                  >
                    <Link to={item.url} className="flex items-center gap-3 min-w-0">
                      <item.icon className="flex-shrink-0 h-4 w-4" />
                      <span className="truncate text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs sm:text-sm px-2">Outils</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    className="w-full h-10 px-3 data-[active=true]:bg-blue-100 data-[active=true]:text-blue-900"
                  >
                    <Link to={item.url} className="flex items-center gap-3 min-w-0">
                      <item.icon className="flex-shrink-0 h-4 w-4" />
                      <span className="truncate text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-2 bg-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full h-12 px-3">
              <div className="flex items-center gap-3 min-w-0 w-full">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-blue-800">U</span>
                </div>
                <div className="flex flex-col min-w-0 flex-1 text-left">
                  <span className="text-sm font-medium truncate">Utilisateur</span>
                  <span className="text-xs text-muted-foreground truncate">user@alphatek.fr</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
