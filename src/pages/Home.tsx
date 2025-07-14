import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import TeamSection from '../components/home/TeamSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import ContactSection from '../components/home/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <SEO 
        title="NeuroFlow - Marketing Digital & Intelligence Artificielle | Paris"
        description="Révolutionnez votre marketing avec l'IA. Agence spécialisée en SEO intelligent, publicité optimisée et growth hacking data-driven. Démarrez votre transformation digitale."
        url="https://neuroflow.ai/"
        canonical="https://neuroflow.ai/"
      />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <CaseStudiesSection />
      <ContactSection />
    </div>
  );
};

export default Home;