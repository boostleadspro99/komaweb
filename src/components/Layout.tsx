import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        tabIndex={0}
      >
        Aller au contenu principal
      </a>
      
      <ParticleBackground />
      <Header />
      <main id="main-content" className="relative z-10" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;