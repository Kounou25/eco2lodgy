import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TechnicalDepartmentSection from "./pages/Techniques";
import UrbanPlanningDepartmentSection from "./pages/urbanisme";
import DigitalDepartmentSection from "./pages/numeriques";
import TrainingDepartmentSection from "./pages/formations";
import EconomicFinancialSection from "./pages/finances";
import ResearchDevelopmentSection from "./pages/recherches";
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import AdminDashboard from "./pages/dashboard";
import PostsPage from './pages/PostsPage';
import PartnersPage from './pages/PartnersPage';
import LoginPage from "./pages/login";
import BlogPost from "./pages/blogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        {/* Page d'accueil publique */}
        <Route path="/" element={<Index />} />
        
        {/* Routes des services */}
        <Route path="/services">
          <Route path="techniques" element={<TechnicalDepartmentSection />} />
          <Route path="urbanisme" element={<UrbanPlanningDepartmentSection />} />
          <Route path="finances" element={<EconomicFinancialSection />} />
          <Route path="numeriques" element={<DigitalDepartmentSection />} />
          <Route path="formations" element={<TrainingDepartmentSection />} />
        </Route>

        {/* Route R&D */}
        <Route path="/r&d" element={<ResearchDevelopmentSection />} />

        {/* Route de login */}
        <Route path="/login" element={<LoginPage />} />
        {/* Route admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        {/* Route de blog */}
        <Route path="/blog">
          <Route path=":id" element={<BlogPost />} />
          {/* Route de blog - page d'accueil */}
        </Route>

        {/* Routes du dashboard - publiques */}

        {/* Routes du dashboard - protégées */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} /> {/* /dashboard */}
          <Route path="projects" element={<ProjectsPage />} /> {/* /dashboard/projects */}
          <Route path="team" element={<TeamPage />} /> {/* /dashboard/team */}
          <Route path="posts" element={<PostsPage />} /> {/* /dashboard/posts */}
          <Route path="partners" element={<PartnersPage />} /> {/* /dashboard/partners */}
        </Route>

        {/* Route 404 - doit être la dernière */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;