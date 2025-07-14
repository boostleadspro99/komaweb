import React, { useState } from 'react';
import SEO from '../components/SEO';
import { TrendingUp, Users, DollarSign, Target, Eye, Clock, ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', 'E-commerce', 'SaaS', 'Fintech', 'Education'];

  const caseStudies = [
    {
      id: 1,
      title: "TechCorp SaaS",
      category: "SaaS",
      industry: "Logiciel B2B",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "6 mois",
      challenge: "Augmenter les conversions et réduire le coût d'acquisition client dans un marché concurrentiel",
      solution: "Implémentation d'une stratégie SEO IA complète avec Growth Hacking et optimisation des publicités Meta Ads",
      results: [
        { icon: TrendingUp, metric: "+450%", label: "Trafic organique", color: "text-green-400" },
        { icon: Users, metric: "+280%", label: "Leads qualifiés", color: "text-blue-400" },
        { icon: DollarSign, metric: "-65%", label: "Coût par acquisition", color: "text-green-400" },
        { icon: Target, metric: "+320%", label: "Taux de conversion", color: "text-purple-400" }
      ],
      testimonial: {
        text: "NeuroFlow a transformé notre approche marketing. Les résultats dépassent toutes nos attentes.",
        author: "Marie Dubois",
        role: "CMO, TechCorp"
      }
    },
    {
      id: 2,
      title: "EcoMode Fashion",
      category: "E-commerce",
      industry: "Mode Durable",
      image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "4 mois",
      challenge: "Pénétrer le marché français et construire une communauté engagée autour de la mode durable",
      solution: "Campagnes Meta Ads ciblées avec copywriting IA et stratégie de contenu communautaire",
      results: [
        { icon: DollarSign, metric: "+890%", label: "Chiffre d'affaires", color: "text-green-400" },
        { icon: Users, metric: "+560%", label: "Nouveaux clients", color: "text-blue-400" },
        { icon: Target, metric: "+180%", label: "ROAS moyen", color: "text-purple-400" },
        { icon: TrendingUp, metric: "+340%", label: "Engagement social", color: "text-cyan-400" }
      ],
      testimonial: {
        text: "L'expertise IA de NeuroFlow nous a permis de scaler rapidement tout en préservant notre message.",
        author: "Jules Martin",
        role: "Fondateur, EcoMode"
      }
    },
    {
      id: 3,
      title: "FinanceAI Startup",
      category: "Fintech",
      industry: "Services Financiers",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "8 mois",
      challenge: "Établir la confiance dans un secteur réglementé et générer des inscriptions qualifiées",
      solution: "SEO technique avancé, content marketing IA et automation marketing personnalisée",
      results: [
        { icon: Users, metric: "+670%", label: "Inscriptions qualifiées", color: "text-blue-400" },
        { icon: TrendingUp, metric: "+420%", label: "Sessions organiques", color: "text-green-400" },
        { icon: Target, metric: "+250%", label: "Taux d'activation", color: "text-purple-400" },
        { icon: DollarSign, metric: "+510%", label: "Valeur client", color: "text-cyan-400" }
      ],
      testimonial: {
        text: "Grâce à NeuroFlow, nous avons construit une machine de croissance prédictible et scalable.",
        author: "Sophie Chen",
        role: "CEO, FinanceAI"
      }
    },
    {
      id: 4,
      title: "EduTech Platform",
      category: "Education",
      industry: "Formation en ligne",
      image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "5 mois",
      challenge: "Augmenter les inscriptions aux cours en ligne dans un marché saturé",
      solution: "Funnel d'acquisition multi-étapes avec lead nurturing IA et optimisation de conversion",
      results: [
        { icon: Users, metric: "+380%", label: "Inscriptions cours", color: "text-blue-400" },
        { icon: DollarSign, metric: "+290%", label: "Revenus récurrents", color: "text-green-400" },
        { icon: Target, metric: "+150%", label: "Completion rate", color: "text-purple-400" },
        { icon: TrendingUp, metric: "+220%", label: "Engagement utilisateurs", color: "text-cyan-400" }
      ],
      testimonial: {
        text: "L'approche data-driven de NeuroFlow a révolutionné notre acquisition d'étudiants.",
        author: "Alex Rivera",
        role: "Head of Growth, EduTech"
      }
    }
  ];

  const filteredCaseStudies = selectedCategory === 'Tous' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="pt-20">
      <SEO 
        title="Études de Cas - Succès Clients NeuroFlow"
        description="Découvrez nos success stories : +450% de trafic, +890% de CA, -65% de coût d'acquisition. Résultats concrets de nos stratégies marketing IA."
        url="https://neuroflow.ai/etudes-de-cas"
        canonical="https://neuroflow.ai/etudes-de-cas"
        keywords="études de cas marketing, ROI marketing digital, résultats IA, success stories, croissance entreprise"
      />
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Études de Cas
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Découvrez comment nous avons transformé les défis de nos clients en succès extraordinaires 
            grâce à l'intelligence artificielle et nos stratégies innovantes.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-magenta-500 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:text-cyan-400 border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {filteredCaseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-96 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-400">
                        {study.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 right-6 flex items-center text-white">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{study.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {study.title}
                    </h2>
                    <p className="text-cyan-400 font-medium mb-4">{study.industry}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-magenta-400 mb-2">Challenge</h3>
                      <p className="text-gray-400 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-magenta-400 mb-2">Solution</h3>
                      <p className="text-gray-400 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg p-4 border border-gray-800">
                        <result.icon className={`w-6 h-6 mb-2 ${result.color}`} />
                        <div className={`text-2xl font-bold mb-1 ${result.color}`}>
                          {result.metric}
                        </div>
                        <div className="text-sm text-gray-400">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-lg p-6 border border-cyan-500/20">
                    <div className="mb-4">
                      <Eye className="w-5 h-5 text-cyan-400 mb-2" />
                      <p className="text-gray-300 italic leading-relaxed">
                        "{study.testimonial.text}"
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white">{study.testimonial.author}</div>
                        <div className="text-sm text-gray-400">{study.testimonial.role}</div>
                      </div>
                      <button className="flex items-center text-cyan-400 hover:text-magenta-400 transition-colors">
                        <span className="text-sm mr-2">Voir le détail</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Prêt à Écrire Votre Success Story ?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Rejoignez nos clients qui ont révolutionné leur croissance avec l'IA
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
            Discuter de votre projet
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;