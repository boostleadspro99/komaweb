import React from 'react';
import SEO from '../components/SEO';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import TeamSection from '../components/home/TeamSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import ContactSection from '../components/home/ContactSection';

const Home: React.FC = () => {
  // Intersection observers for lazy loading sections
  const { elementRef: heroRef, isIntersecting: heroVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { elementRef: servicesRef, isIntersecting: servicesVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { elementRef: teamRef, isIntersecting: teamVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { elementRef: caseStudiesRef, isIntersecting: caseStudiesVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { elementRef: contactRef, isIntersecting: contactVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="relative">
      <SEO 
        title="NeuroFlow - Marketing Digital & Intelligence Artificielle | Paris"
        description="Révolutionnez votre marketing avec l'IA. Agence spécialisée en SEO intelligent, publicité optimisée et growth hacking data-driven. Démarrez votre transformation digitale."
        url="https://neuroflow.ai/"
        canonical="https://neuroflow.ai/"
      />
      
      {/* Hero Section - Always visible */}
      <div ref={heroRef}>
        <HeroSection />
      </div>
      
      {/* Services Section - Lazy loaded */}
      <div ref={servicesRef}>
        {servicesVisible && <ServicesSection />}
      </div>
      
      {/* Team Section - Lazy loaded */}
      <div ref={teamRef}>
        {teamVisible && <TeamSection />}
      </div>
      
      {/* Case Studies Section - Lazy loaded */}
      <div ref={caseStudiesRef}>
        {caseStudiesVisible && <CaseStudiesSection />}
      </div>
      
      {/* Contact Section - Lazy loaded */}
      <div ref={contactRef}>
        {contactVisible && <ContactSection />}
      </div>
    </div>
  );
};

export default Home;