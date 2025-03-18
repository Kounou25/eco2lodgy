
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route"
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-eco-beige/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-9xl font-bold text-eco-green mb-6 font-display">404</h1>
            <h2 className="text-3xl font-semibold mb-4 font-display">Page non trouvée</h2>
            <p className="text-foreground/80 mb-8">
              Désolé, la page que vous recherchez semble avoir disparu ou n'existe pas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => navigate(-1)}
                variant="outline" 
                className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
              <Button 
                onClick={() => navigate('/')}
                className="bg-eco-green hover:bg-eco-light text-white transition-colors"
              >
                <Home className="mr-2 h-4 w-4" />
                Accueil
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
