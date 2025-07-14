import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Search, Target, TrendingUp, PenTool, BarChart3, Zap, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'seo-ia',
      icon: Search,
      title: "SEO Intelligence Artificielle",
      description: "Optimisation SEO avec analyse prédictive et automatisation des contenus pour dominer les SERP.",
      features: [
        "Analyse sémantique avancée par IA",
        "Prédiction des tendances de recherche",
        "Génération automatique de contenu optimisé",
        "Optimisation technique en temps réel",
        "Suivi et reporting automatisé"
      ],
      price: "À partir de 2 500€/mois"
    },
    {
      id: 'meta-ads',
      icon: Target,
      title: "Publicité Meta Ads",
      description: "Campagnes publicitaires hyper-ciblées avec optimisation en temps réel par intelligence artificielle.",
      features: [
        "Ciblage prédictif basé sur l'IA",
        "Optimisation automatique des enchères",
        "Créatifs génératifs et A/B testing",
        "Audiences lookalike intelligentes",
        "ROI tracking en temps réel"
      ],
      price: "À partir de 1 800€/mois"
    },
    {
      id: 'growth-hacking',
      icon: TrendingUp,
      title: "Growth Hacking",
      description: "Stratégies de croissance explosives basées sur l'analyse de données et l'expérimentation IA.",
      features: [
        "Identification des leviers de croissance",
        "Funnels d'acquisition optimisés",
        "Expérimentation et A/B testing massif",
        "Viral loops et mécaniques virales",
        "Analytics comportementales avancées"
      ],
      price: "À partir de 3 500€/mois"
    },
    {
      id: 'copywriting',
      icon: PenTool,
      title: "Copywriting IA",
      description: "Création de contenus persuasifs avec assistance IA pour maximiser les conversions.",
      features: [
        "Génération de copies haute conversion",
        "Optimisation psychologique des messages",
        "Tests de persuasion automatisés",
        "Personnalisation de masse",
        "Adaptation multi-canaux"
      ],
      price: "À partir de 1 200€/mois"
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: "Analytics Prédictive",
      description: "Tableaux de bord intelligents avec prédictions de performance et recommandations automatiques.",
      features: [
        "Prédictions de ROI et performance",
        "Recommandations IA personnalisées",
        "Dashboards temps réel",
        "Attribution multi-touch avancée",
        "Alertes intelligentes automatiques"
      ],
      price: "À partir de 2 000€/mois"
    },
    {
      id: 'automation',
      icon: Zap,
      title: "Automatisation Marketing",
      description: "Workflows marketing intelligents pour maximiser l'efficacité et réduire les coûts opérationnels.",
      features: [
        "Email automation personnalisée",
        "Lead scoring et nurturing IA",
        "Séquences multi-canaux automatiques",
        "Personnalisation dynamique",
        "Intégrations CRM avancées"
      ],
      price: "À partir de 1 500€/mois"
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Services Marketing IA - SEO, Meta Ads, Growth Hacking"
        description="Services marketing digital alimentés par l'IA : SEO intelligent, publicité Meta Ads optimisée, growth hacking, copywriting IA et analytics prédictive."
        url="https://neuroflow.ai/services"
        canonical="https://neuroflow.ai/services"
        keywords="SEO IA, Meta Ads, growth hacking, copywriting intelligence artificielle, analytics prédictive, automatisation marketing"
      />
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Nos Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Une suite complète de services marketing alimentés par l'intelligence artificielle 
            pour propulser votre croissance vers de nouveaux sommets.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-magenta-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">À partir de</div>
                      <div className="text-lg font-semibold text-magenta-400">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 font-semibold hover:from-cyan-500/30 hover:to-magenta-500/30 transition-all duration-300">
                    <Link to="/contact" className="block w-full h-full">
                      En savoir plus
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                Notre Processus
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Une méthodologie éprouvée pour maximiser vos résultats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Analyse",
                description: "Analyse complète de vos données et identification des opportunités IA"
              },
              {
                step: "02", 
                title: "Stratégie IA",
                description: "Développement d'une stratégie personnalisée basée sur l'intelligence artificielle"
              },
              {
                step: "03",
                title: "Implémentation",
                description: "Mise en place des solutions avec suivi en temps réel"
              },
              {
                step: "04",
                title: "Optimisation",
                description: "Amélioration continue grâce aux algorithmes d'apprentissage"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                <p className="text-gray-400 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;