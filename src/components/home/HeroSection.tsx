import React from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypewriterEffect from '../TypewriterEffect';

const HeroSection: React.FC = () => {
  const typewriterTexts = [
    "l'Intelligence Artificielle",
    "le Growth Hacking",
    "l'Optimisation SEO",
    "l'Analytics Prédictive"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm text-gray-300">Agence Marketing IA • Paris</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Révolutionnez votre marketing avec
            </span>
            <br />
            <TypewriterEffect 
              texts={typewriterTexts}
              className="bg-gradient-to-r from-cyan-400 via-magenta-400 to-red-400 bg-clip-text text-transparent"
            />
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nous transformons vos données en croissance exponentielle grâce à l'intelligence artificielle 
            et aux stratégies de marketing digital les plus avancées.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
          >
            <span className="relative z-10 flex items-center">
              Démarrer un projet
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-magenta-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link 
            to="/services"
            className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 inline-flex items-center"
          >
            <Play className="mr-2 w-4 h-4" />
            Découvrir nos services
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Projets réalisés" },
            { number: "250%", label: "ROI moyen" },
            { number: "50+", label: "Clients satisfaits" },
            { number: "24/7", label: "Support IA" }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;