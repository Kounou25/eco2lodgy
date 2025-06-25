
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Bell, Search } from "lucide-react"
import { useLocation } from "react-router-dom"

export function Header() {
  const location = useLocation()
  
  const getBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean)
    
    if (pathSegments.length <= 1) {
      return [{ label: "Accueil", href: "/new-dashboard" }]
    }
    
    const breadcrumbs = [
      { label: "Accueil", href: "/new-dashboard" }
    ]
    
    if (pathSegments[1]) {
      const pageNames = {
        'projects': 'Projets',
        'formations': 'Formations',
        'formations-admin': 'Admin Formations',
        'inscriptions-admin': 'Inscriptions',
        'team': 'Équipe',
        'partners': 'Partenaires',
        'analytics': 'Statistiques',
        'settings': 'Paramètres',
        'messages': 'Messages'
      }
      
      breadcrumbs.push({
        label: pageNames[pathSegments[1]] || pathSegments[1],
        href: location.pathname
      })
    }
    
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <header className="flex h-14 sm:h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
      <div className="flex items-center gap-2 px-2 sm:px-4 min-w-0 flex-1">
        <SidebarTrigger className="-ml-1 flex-shrink-0" />
        <Separator orientation="vertical" className="mr-2 h-4 hidden sm:block" />
        <Breadcrumb className="min-w-0 flex-1">
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center min-w-0">
                <BreadcrumbItem className="hidden md:block min-w-0">
                  {index === breadcrumbs.length - 1 ? (
                    <BreadcrumbPage className="truncate">{crumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={crumb.href} className="truncate">
                      {crumb.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator className="hidden md:block flex-shrink-0" />
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 flex-shrink-0">
        <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
          <Search className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
          <Bell className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
