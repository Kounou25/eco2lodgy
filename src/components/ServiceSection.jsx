import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon, title, description, href, index }) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-border"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-[#2E5A27]/10 flex items-center justify-center text-[#2E5A27] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-[#2E5A27]">{title}</h3>
      <p className="text-foreground/80 mb-4 text-balance">{description}</p>
      {/* <a 
        href={href} 
        className="inline-flex items-center text-[#D4A017] font-medium hover:underline group"
      >
        En savoir plus
        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a> */}
    </div>
  );
};

const ServiceSection = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      title: "Technique (Ingénierie & Construction)",
      description: "Conception et mise en œuvre de bâtiments résilients aux inondations et à la chaleur, utilisant des matériaux locaux comme la voûte nubienne, avec expertise en calcul de structure.",
      href: "/services/technique",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>
      ),
      title: "Urbanisme",
      description: "Planification architecturale bioclimatique et aménagement territorial pour des quartiers durables, intégrant espaces verts et infrastructures adaptées au Niger.",
      href: "/services/urbanisme",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      title: "Recherche & Développement (R&D)",
      description: "Innovation en matériaux locaux (argile, latérite) et techniques de construction durables pour des logements abordables et climatiqement adaptés.",
      href: "/services/rd",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659l-.879-.659M15 9H9m6 0a3 3 0 01-3 3m3-3a3 3 0 00-3-3m-3 6h6" />
        </svg>
      ),
      title: "Économie/Financier",
      description: "Modèles économiques viables pour des projets immobiliers abordables, optimisant les coûts tout en soutenant le développement local.",
      href: "/services/economie",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      title: "Informatique",
      description: "Développement d’outils numériques pour la gestion de projets, l’intégration de données cadastraux et la coordination des équipes au Niger.",
      href: "/services/informatique",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 9.373 7.372-7.432-.727zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
        </svg>
      ),
      title: "Infographie",
      description: "Visualisations 3D et rendus pour présenter les projets de logements durables et faciliter la communication avec les partenaires locaux.",
      href: "/services/infographie",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M12 3v2.25m-8.25 3h16.5M3.75 11.25h16.5M3.75 14.25h16.5" />
        </svg>
      ),
      title: "Formation",
      description: "Transfert de compétences aux artisans locaux pour des constructions durables, renforçant l’autonomie des communautés nigériennes.",
      href: "/services/formation",
    },
  ];

  return (
    <section className="py-20 bg-[#D4A017]/10" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-[#2E5A27]">Nos Départements</h2>
          <div className="h-1 w-20 bg-[#2E5A27] mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            Une expertise pluridisciplinaire pour des solutions de logement durables et adaptées aux défis du Niger.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div className="text-center mt-12">
          <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/80 text-white transition-colors">
            Explorer nos solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;