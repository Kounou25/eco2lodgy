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
      <a 
        href={href} 
        className="inline-flex items-center text-[#D4A017] font-medium hover:underline group"
      >
        En savoir plus
        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

const ServiceSection = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: "Architecture",
      description: "Conception architecturale innovante et durable pour tous types de projets résidentiels et commerciaux.",
      href: "/services/architecture"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>
      ),
      title: "Promotion Immobilière",
      description: "Développement de projets immobiliers de qualité, de la conception à la livraison, avec une approche responsable.",
      href: "/services/promotion"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      title: "Ingénierie Civile",
      description: "Services d'ingénierie complets pour assurer la solidité, la sécurité et la durabilité de vos projets de construction.",
      href: "/services/ingenierie"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      title: "Infographie",
      description: "Visualisations 3D, rendus photoréalistes et animations pour donner vie à vos projets avant leur construction.",
      href: "/services/infographie"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      title: "Développement Web",
      description: "Création de sites web sur mesure, applications mobiles et solutions numériques adaptées à votre activité.",
      href: "/services/developpement-web"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles innovantes et intuitives pour iOS et Android adaptées à vos besoins.",
      href: "/services/applications-mobiles"
    },
  ];

  return (
    <section className="py-20 bg-[#D4A017]/10" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-[#2E5A27]">Nos Services</h2>
          <div className="h-1 w-20 bg-[#2E5A27] mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            Une approche multidisciplinaire pour répondre à tous vos besoins en architecture et solutions numériques.
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
            Tous nos services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;