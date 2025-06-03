import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const ServiceCard = ({ icon, title, description, href, index }) => {
  return (
    <div 
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border border-white/20 overflow-hidden"
      style={{ 
        animationDelay: `${index * 200}ms`,
        animation: 'slideUp 0.8s ease-out forwards'
      }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E5A27]/5 to-[#D4A017]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Decorative element */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <Sparkles className="w-5 h-5 text-[#D4A017] animate-spin-slow" />
      </div>
      
      <div className="relative z-10">
        {/* Icon container with improved styling */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E5A27]/10 to-[#2E5A27]/20 flex items-center justify-center text-[#2E5A27] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm animate-fade-in" style={{ animationDelay: `${index * 200 + 100}ms` }}>
          <div className="transform group-hover:rotate-12 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        {/* Title with better typography */}
        <h3 className="text-xl font-bold mb-4 text-[#2E5A27] group-hover:text-[#2E5A27]/90 transition-colors duration-300 leading-tight animate-fade-in" style={{ animationDelay: `${index * 200 + 200}ms` }}>
          {title}
        </h3>
        
        {/* Description with improved readability */}
        <p className="text-gray-600 mb-6 text-balance leading-relaxed text-sm animate-fade-in" style={{ animationDelay: `${index * 200 + 300}ms` }}>
          {description}
        </p>
        
        {/* Enhanced CTA link */}
        <a 
          href={href} 
          className="inline-flex items-center text-[#D4A017] font-semibold hover:text-[#D4A017]/80 group/link transition-all duration-300 animate-slide-in" 
          style={{ animationDelay: `${index * 200 + 400}ms` }}
        >
          <span className="border-b-2 border-transparent group-hover/link:border-[#D4A017]/50 transition-all duration-300">
            En savoir plus
          </span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-2 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      title: "Technique (Ingénierie & Construction)",
      description: "Conception et mise en œuvre de bâtiments résilients aux inondations et à la chaleur, utilisant des matériaux locaux comme la voûte nubienne, avec expertise en calcul de structure.",
      href: "/services/techniques",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>
      ),
      title: "Urbanisme",
      description: "Planification architecturale bioclimatique et aménagement territorial pour des quartiers durables, intégrant espaces verts et infrastructures adaptées au Niger.",
      href: "/services/urbanisme",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      title: "Recherche & Développement (R&D)",
      description: "Innovation en matériaux locaux (argile, latérite) et techniques de construction durables pour des logements abordables et climatiquement adaptés.",
      href: "/services/r&d",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659l-.879-.659M15 9H9m6 0a3 3 0 01-3 3m3-3a3 3 0 00-3-3m-3 6h6" />
        </svg>
      ),
      title: "Économie/Financier",
      description: "Modèles économiques viables pour des projets immobiliers abordables, optimisant les coûts tout en soutenant le développement local.",
      href: "/services/finances",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      title: "Informatique",
      description: "Développement d'outils numériques pour la gestion de projets, l'intégration de données cadastraux et la coordination des équipes au Niger.",
      href: "/services/numeriques",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M12 3v2.25m-8.25 3h16.5M3.75 11.25h16.5M3.75 14.25h16.5" />
        </svg>
      ),
      title: "Formation",
      description: "Transfert de compétences aux artisans locaux pour des constructions durables, renforçant l'autonomie des communautés nigériennes.",
      href: "/services/formations",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-10px) rotate(15deg) scale(1.05); }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .floating-bg {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spinSlow 10s linear infinite;
        }
      `}</style>
      
      <section className="py-24 relative overflow-hidden" id="services">
        {/* Enhanced background with subtle patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017]/8 via-[#D4A017]/12 to-[#D4A017]/8"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(46, 90, 39, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(212, 160, 23, 0.1) 0%, transparent 50%)`
        }}></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#2E5A27]/5 floating-bg"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#D4A017]/5 floating-bg" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced header section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-[#2E5A27]/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#D4A017]" />
              <span className="text-sm font-semibold text-[#2E5A27] uppercase tracking-wide">Nos Expertises</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2E5A27] leading-tight animate-fade-in" style={{ animationDelay: '200ms' }}>
              Nos Services
              <span className="block text-3xl md:text-4xl text-[#D4A017] font-light mt-2">
                d'Excellence
              </span>
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="h-1 w-12 bg-[#2E5A27] rounded-full"></div>
              <div className="w-3 h-3 rounded-full bg-[#D4A017]"></div>
              <div className="h-1 w-12 bg-[#2E5A27] rounded-full"></div>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
              Une expertise pluridisciplinaire pour des solutions de logement durables et adaptées aux défis du Niger.
            </p>
          </div>

          {/* Enhanced grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                index={index}
              />
            ))}
          </div>

          {/* Enhanced CTA section (uncomment to use) */}
          {/* <div className="text-center mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20 shadow-lg animate-fade-in" style={{ animationDelay: '600ms' }}>
              <h3 className="text-2xl font-bold text-[#2E5A27] mb-4">
                Prêt à transformer vos projets ?
              </h3>
              <p className="text-gray-600 mb-6">
                Découvrez comment nos solutions peuvent répondre à vos besoins spécifiques.
              </p>
              <Button className="bg-gradient-to-r from-[#2E5A27] to-[#2E5A27]/90 hover:from-[#2E5A27]/90 hover:to-[#2E5A27]/80 text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#2E5A27] hover:to-[#D4A017]/70">
                Explorer nos solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ServiceSection;