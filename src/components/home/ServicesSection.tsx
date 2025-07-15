import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Target, TrendingUp, PenTool, BarChart3, Zap, ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'seo-ia',
      icon: Search,
      title: "SEO Intelligence Artificielle",
      description: "Optimisation SEO avec analyse prédictive et automatisation des contenus pour dominer les SERP.",
      features: ["Analyse sémantique IA", "Prédiction de tendances", "Automatisation du contenu"]
    },
    {
      id: 'meta-ads',
      icon: Target,
      title: "Publicité Meta Ads",
      description: "Campagnes publicitaires hyper-ciblées avec optimisation en temps réel par intelligence artificielle.",
      features: ["Ciblage prédictif", "Optimisation automatique", "Créatifs génératifs"]
    },
    {
      id: 'growth-hacking',
      icon: TrendingUp,
      title: "Growth Hacking",
      description: "Stratégies de croissance explosives basées sur l'analyse de données et l'expérimentation IA.",
      features: ["Funnels optimisés", "A/B testing IA", "Viral loops"]
    },
    {
      id: 'copywriting',
      icon: PenTool,
      title: "Copywriting IA",
      description: "Création de contenus persuasifs avec assistance IA pour maximiser les conversions.",
      features: ["Génération de copies", "Optimisation persuasive", "Tests psychologiques"]
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: "Analytics Prédictive",
      description: "Tableaux de bord intelligents avec prédictions de performance et recommandations automatiques.",
      features: ["Prédictions ROI", "Recommandations IA", "Reporting automatisé"]
    },
    {
      id: 'automation',
      icon: Zap,
      title: "Automatisation Marketing",
      description: "Workflows marketing intelligents pour maximiser l'efficacité et réduire les coûts opérationnels.",
      features: ["Email automation", "Lead scoring IA", "Personnalisation dynamique"]
    }
  ];

  return (
    <section className="section-spacing container-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Nos Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Une suite complète de services marketing alimentés par l'intelligence artificielle 
            pour propulser votre croissance vers de nouveaux sommets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-spacing">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className="group relative card-padding bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-magenta-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 content-spacing">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-magenta-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-magenta-400 transition-colors duration-300 text-sm font-medium"
                  >
                    En savoir plus
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;