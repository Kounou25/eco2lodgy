
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import ProjectSection from '../components/ProjectSection';
import AboutSection from '../components/AboutSection';
import TestimonialSection from '../components/TestimonialSection';
import CtaSection from '../components/CtaSection';
import ContactSection from '../components/ContactSection';
import Eco2BoxSection from '../components/Eco2BoxSection';
import PresentationSection from '../components/PresentationSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ServiceSection />
        <Eco2BoxSection />
        <AboutSection />
        <ProjectSection />
        <PresentationSection />
        <TestimonialSection />
        <CtaSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
