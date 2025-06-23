
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
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center">
                <BreadcrumbItem className="hidden md:block">
                  {index === breadcrumbs.length - 1 ? (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={crumb.href}>
                      {crumb.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator className="hidden md:block" />
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div className="ml-auto flex items-center gap-2 px-4">
        <Button variant="ghost" size="icon">
          <Search className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
