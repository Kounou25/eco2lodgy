
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"
import { Header } from "./DashboardHeader"
import { useEffect } from "react"

export function NewDashboardLayout({ children }) {
  // Scroll to top when component mounts or route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1 min-w-0">
          <Header />
          <div className="flex flex-1 flex-col min-h-0">
            <div className="flex-1 overflow-auto">
              <div className="p-4 sm:p-6">
                {children}
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
