
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
import Architecture from "./pages/architecture";
import Construction from "./pages/construction";
import EconomicFinancialSection from "./pages/finances";
import ResearchDevelopmentSection from "./pages/recherches";
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import RealEstatePromotionServices from "./pages/gestionImmo";
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import AdminDashboard from "./pages/dashboard";
import PostsPage from './pages/PostsPage';
import EngineeringConsulting from "./pages/Ingenierie&consulting";
import PartnersPage from './pages/PartnersPage';
import LoginPage from "./pages/login";
import BlogPost from "./pages/blogPost";
import FormationsPage from "./pages/FormationsPage";
import FormationDetail from "./pages/FormationDetail";
import InscriptionFormation from "./pages/InscriptionFormation";
import ConfirmationInscription from "./pages/ConfirmationInscription";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        {/* Page d'accueil publique */}
        <Route path="/" element={<Index />} />
        <Route path="index" element={<Index />} />

        {/* Routes des formations */}
        <Route path="/formations" element={<FormationsPage />} />
        <Route path="/formations/:id" element={<FormationDetail />} />
        <Route path="/formations/:id/inscription" element={<InscriptionFormation />} />
        <Route path="/formations/:id/confirmation" element={<ConfirmationInscription />} />
        
        {/* Routes des services */}
        <Route path="/services">
          <Route path="techniques" element={<TechnicalDepartmentSection />} />
          <Route path="urbanisme" element={<UrbanPlanningDepartmentSection />} />
          <Route path="finances" element={<EconomicFinancialSection />} />
          <Route path="numeriques" element={<DigitalDepartmentSection />} />
          <Route path="formations" element={<TrainingDepartmentSection />} />
          <Route path="recherches" element={<ResearchDevelopmentSection />} />
          <Route path="gestionImmo" element={<RealEstatePromotionServices />} />
          <Route path="ingenierie&consulting" element={<EngineeringConsulting />} />
          <Route path="construction" element={<Construction />} />
          <Route path="architecture" element={<Architecture />} />
        </Route>

        {/* Route de login */}
        <Route path="/login" element={<LoginPage />} />
        {/* Route admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        {/* Route de blog */}
        <Route path="/blog">
          <Route path=":id" element={<BlogPost />} />
        </Route>

        {/* Routes du dashboard - protégées */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="partners" element={<PartnersPage />} />
        </Route>

        {/* Route 404 - doit être la dernière */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
