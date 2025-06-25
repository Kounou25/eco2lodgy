
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"
import { Header } from "./DashboardHeader"
import { useEffect } from "react"

export function NewDashboardLayout({ children }) {
  // Scroll to top when component mounts or children change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [children])

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <div className="flex flex-1 flex-col gap-4 p-2 sm:p-4 pt-0 overflow-hidden">
            <div className="min-h-0 flex-1">
              {children}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
