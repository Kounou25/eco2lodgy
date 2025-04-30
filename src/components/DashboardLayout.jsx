// src/components/DashboardLayout.jsx
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileText, Handshake, 
  Mail, Bell, ChevronDown, LogOut, Menu, X 
} from 'lucide-react';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Tableau de bord" },
    { to: "/dashboard/projects", icon: FileText, label: "Projets" },
    { to: "/dashboard/team", icon: Users, label: "Équipe" },
    { to: "/dashboard/partners", icon: Handshake, label: "Partenaires" }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Overlay mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static z-30 w-64 h-full bg-blue-800 text-white transition-all duration-300 ${sidebarOpen ? 'left-0' : '-left-64'} lg:left-0`}>
        <div className="flex items-center justify-between p-4 border-b border-blue-700">
          <h1 className="text-xl font-bold">ALPHATEK</h1>
          <button 
            className="lg:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center p-3 rounded-lg hover:bg-blue-700"
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="mr-3" size={18} />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-3">
            <button 
              className="lg:hidden text-gray-500"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            {/* ... autres éléments de navbar ... */}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}