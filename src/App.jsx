
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="/techniques" element={<TechnicalDepartmentSection />} />
        <Route path="/urbanisme" element={<UrbanPlanningDepartmentSection />} />
        <Route path="/finances" element={<EconomicFinancialSection />} />
        <Route path="/numeriques" element={<DigitalDepartmentSection />} />
        <Route path="/formations" element={<TrainingDepartmentSection />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="/r&d" element={<ResearchDevelopmentSection />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
