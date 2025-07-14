import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign, Target, ArrowRight } from 'lucide-react';

const CaseStudiesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      client: "TechCorp SaaS",
      industry: "Logiciel B2B",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      challenge: "Augmenter les conversions et réduire le coût d'acquisition client",
      solution: "Stratégie SEO IA + Growth Hacking + Publicités Meta optimisées",
      results: [
        { icon: TrendingUp, metric: "+450%", label: "Trafic organique" },
        { icon: Users, metric: "+280%", label: "Leads qualifiés" },
        { icon: DollarSign, metric: "-65%", label: "Coût par acquisition" },
        { icon: Target, metric: "+320%", label: "Taux de conversion" }
      ]
    },
    {
      client: "EcoMode",
      industry: "E-commerce Fashion",
      image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800",
      challenge: "Pénétrer le marché français et augmenter les ventes en ligne",
      solution: "Campagnes Meta Ads IA + Copywriting persuasif + Analytics prédictive",
      results: [
        { icon: DollarSign, metric: "+890%", label: "Chiffre d'affaires" },
        { icon: Users, metric: "+560%", label: "Nouveaux clients" },
        { icon: Target, metric: "+180%", label: "ROAS moyen" },
        { icon: TrendingUp, metric: "+340%", label: "Engagement social" }
      ]
    },
    {
      client: "FinanceAI",
      industry: "Fintech",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
      challenge: "Établir la confiance et générer des inscriptions qualifiées",
      solution: "SEO technique + Content marketing IA + Automation marketing",
      results: [
        { icon: Users, metric: "+670%", label: "Inscriptions" },
        { icon: TrendingUp, metric: "+420%", label: "Sessions organiques" },
        { icon: Target, metric: "+250%", label: "Taux d'activation" },
        { icon: DollarSign, metric: "+510%", label: "Valeur client" }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Études de Cas
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez comment nous avons transformé les challenges de nos clients 
            en succès extraordinaires grâce à l'intelligence artificielle.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">{study.client}</h3>
                          <p className="text-cyan-400 font-medium">{study.industry}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-magenta-400 mb-2">Challenge</h4>
                          <p className="text-gray-400">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-magenta-400 mb-2">Solution</h4>
                          <p className="text-gray-400">{study.solution}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-lg p-4 border border-cyan-500/20">
                              <result.icon className="w-6 h-6 text-cyan-400 mb-2" />
                              <div className="text-2xl font-bold text-white mb-1">{result.metric}</div>
                              <div className="text-sm text-gray-400">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="relative">
                        <img
                          src={study.image}
                          alt={study.client}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-full flex items-center justify-center hover:from-cyan-500/40 hover:to-magenta-500/40 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-cyan-400" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-full flex items-center justify-center hover:from-cyan-500/40 hover:to-magenta-500/40 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-cyan-400" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Aller à l'étude de cas ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-cyan-400 to-magenta-400'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/etudes-de-cas"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 font-medium hover:from-cyan-500/30 hover:to-magenta-500/30 transition-all duration-300"
            >
              Voir toutes nos études de cas
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;