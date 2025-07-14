import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-black/90 border-t border-cyan-500/20 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                NeuroFlow
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Agence de marketing digital spécialisée en intelligence artificielle. 
              Nous transformons vos données en croissance exponentielle.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg flex items-center justify-center hover:from-cyan-500/40 hover:to-magenta-500/40 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-cyan-400 group-hover:text-magenta-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Navigation</h3>
            <ul className="space-y-2">
              {['Accueil', 'À propos', 'Services', 'Études de cas', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={index === 0 ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-').replace('à-propos', 'a-propos').replace('études-de-cas', 'etudes-de-cas')}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    aria-label={`Aller à la page ${item}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Services</h3>
            <ul className="space-y-2">
              {['SEO IA', 'Publicité Meta', 'Growth Hacking', 'Copywriting', 'Analytics IA'].map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    aria-label={`En savoir plus sur ${service}`}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-magenta-400" />
                <a 
                  href="mailto:contact@neuroflow.ai"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label="Envoyer un email à NeuroFlow"
                >
                  contact@neuroflow.ai
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-magenta-400" />
                <a 
                  href="tel:+33123456789"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label="Appeler NeuroFlow"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-magenta-400" />
                <span className="text-gray-400">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} NeuroFlow. Tous droits réservés. 
            <Link to="/mentions-legales" className="text-cyan-400 hover:text-magenta-400 transition-colors ml-2">
              Mentions légales
            </Link>
            <span className="mx-2">•</span>
            <Link to="/politique-confidentialite" className="text-cyan-400 hover:text-magenta-400 transition-colors">
              Politique de confidentialité
            </Link>
            <span className="text-cyan-400 ml-2">Powered by AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;