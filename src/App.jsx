import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ScrollToTopProvider } from "./components/ScrollToTopProvider";
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
import { NewDashboardLayout } from './components/NewDashboardLayout';
import NewDashboardHome from './pages/NewDashboardHome';
import NewDashboardProjects from './pages/NewDashboardProjects';
import NewDashboardFormations from './pages/NewDashboardFormations';
import NewDashboardFormationsAdmin from './pages/NewDashboardFormationsAdmin';
import InscriptionsAdmin from "./pages/inscriptionAdmin";
import GalleryAdmin from "./pages/AdminGallery";
import InscriptionDetail from "./pages/InscriptionDetail";
import TestimonialsAdmin from "./pages/AdminTestimonial";
import RequireAuth from "./components/requireAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ScrollToTopProvider>
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
          {/* Route de blog */}
          <Route path="/blog">
            <Route path=":id" element={<BlogPost />} />
          </Route>

          {/* Route admin */}
<Route path="/admin" element={
  <RequireAuth>
    <AdminDashboard />
  </RequireAuth>
} />

{/* Routes du dashboard principal - protégées */}
<Route path="/dashboard" element={
  <RequireAuth>
    <DashboardLayout />
  </RequireAuth>
}>
  <Route index element={<DashboardHome />} />
  <Route path="projects" element={<ProjectsPage />} />
  <Route path="team" element={<TeamPage />} />
  <Route path="posts" element={<PostsPage />} />
  <Route path="partners" element={<PartnersPage />} />
</Route>

{/* Routes du nouveau dashboard séparé - protégées */}
<Route path="/new-dashboard" element={
  <RequireAuth>
    <NewDashboardLayout><NewDashboardHome /></NewDashboardLayout>
  </RequireAuth>
} />
<Route path="/new-dashboard/projects" element={
  <RequireAuth>
    <NewDashboardLayout><NewDashboardProjects /></NewDashboardLayout>
  </RequireAuth>
} />
<Route path="/new-dashboard/formations" element={
  <RequireAuth>
    <NewDashboardLayout><NewDashboardFormations /></NewDashboardLayout>
  </RequireAuth>
} />
<Route path="/new-dashboard/formations-admin" element={
  <RequireAuth>
    <NewDashboardLayout><NewDashboardFormationsAdmin /></NewDashboardLayout>
  </RequireAuth>
} />
<Route path="/new-dashboard/inscriptions-admin" element={
  <RequireAuth>
    <NewDashboardLayout><InscriptionsAdmin /></NewDashboardLayout>
  </RequireAuth>
} />
<Route path="/new-dashboard/inscriptions-admin/:id" element={
  <RequireAuth>
    <NewDashboardLayout><InscriptionDetail /></NewDashboardLayout>
  </RequireAuth>
} />
<Route path="/new-dashboard/gallery" element={
  <RequireAuth>
    <NewDashboardLayout><GalleryAdmin /></NewDashboardLayout>
  </RequireAuth>
} />
<Route path="/new-dashboard/testimonials" element={
  <RequireAuth>
    <NewDashboardLayout><TestimonialsAdmin /></NewDashboardLayout>
  </RequireAuth>
} />

          {/* Route 404 - doit être la dernière */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTopProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
