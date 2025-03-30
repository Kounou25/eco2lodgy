import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: "Architecture", link: "/services/architecture" },
    { name: "Promotion Immobilière", link: "/services/promotion" },
    { name: "Ingénierie Civile", link: "/services/ingenierie" },
    { name: "Infographie", link: "/services/infographie" },
    { name: "Développement Web", link: "/services/developpement-web" },
    { name: "Applications Mobiles", link: "/services/applications-mobiles" },
  ];
  
  const quickLinks = [
    { name: "Accueil", link: "/" },
    { name: "À Propos", link: "/a-propos" },
    { name: "Projets", link: "/projets" },
    { name: "Contact", link: "/contact" },
    { name: "Carrières", link: "/carrieres" },
    { name: "FAQ", link: "/faq" },
  ];

  return (
    <footer className="bg-[#2E5A27]/95 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/images/logo-white.svg" alt="Eco2lodgy" className="h-10 w-auto" />
              <span className="font-display font-bold text-2xl text-white">Eco2lodgy</span>
            </div>
            <p className="text-white/80 mb-6">
              Une agence innovante proposant des solutions complètes en architecture, 
              ingénierie civile et développement numérique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A017]/20 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A017]/20 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A017]/20 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A017]/20 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-display">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.link} 
                    className="text-white/80 hover:text-[#D4A017] transition-colors inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-display">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link} 
                    className="text-white/80 hover:text-[#D4A017] transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-display">Restez Informé</h3>
            <p className="text-white/80 mb-4">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et offres.
            </p>
            <form className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="w-full px-4 py-3 rounded-l-lg text-foreground outline-none"
                />
                <Button className="bg-[#D4A017] hover:bg-white hover:text-[#2E5A27] rounded-l-none transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </form>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/70" />
                <span className="text-white/80">+227 89 64 61 22</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/70" />
                <span className="text-white/80">contact@eco2lodgy.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/70 mt-1 flex-shrink-0" />
                <span className="text-white/80">Quarier Zak, Niamey-Niger</span>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-white/20 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 mb-4 md:mb-0">
            © {currentYear} Eco2lodgy. Tous droits réservés.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-[#D4A017] transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-white/70 hover:text-[#D4A017] transition-colors">Conditions d'utilisation</a>
            <a href="#" className="text-white/70 hover:text-[#D4A017] transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;