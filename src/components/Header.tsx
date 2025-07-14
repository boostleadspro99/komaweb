import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À propos' },
    { 
      path: '/services', 
      label: 'Services',
      hasDropdown: true,
      subItems: [
        { path: '/services/audit-seo', label: 'Audit SEO' },
        { path: '/services/publicite-meta', label: 'Publicité Meta' },
        { path: '/services/creation-site-web', label: 'Création de site web' },
        { path: '/services/referencement-local', label: 'Référencement local' },
        { path: '/services/email-marketing', label: 'Email marketing' },
        { path: '/services/gestion-reseaux-sociaux', label: 'Gestion des réseaux sociaux' },
        { path: '/services/strategie-digitale-personnalisee', label: 'Stratégie digitale personnalisée' }
      ]
    },
    { path: '/etudes-de-cas', label: 'Études de cas' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-lg border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <Zap className="w-8 h-8 text-cyan-400 group-hover:text-magenta-400 transition-colors" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              NeuroFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 transition-all duration-300 group flex items-center ${
                    location.pathname === item.path
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                  aria-expanded={item.hasDropdown ? servicesOpen : undefined}
                  aria-haspopup={item.hasDropdown ? 'true' : undefined}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  )}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-magenta-400 transform transition-transform duration-300 ${
                    location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className={`absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-lg border border-cyan-500/20 rounded-lg shadow-xl transition-all duration-300 ${
                    servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    <div className="py-2">
                      {item.subItems?.map((subItem) => (
                        <a
                          key={subItem.path}
                          href={subItem.path}
                          className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-200"
                          onClick={() => setServicesOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyan-400 hover:text-magenta-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 transition-colors ${
                    location.pathname === item.path
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                  }`}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;