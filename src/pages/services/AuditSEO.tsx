import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Search, CheckCircle, ArrowRight, Users, Target, BarChart3, Clock, Star, MessageSquare } from 'lucide-react';

const AuditSEO: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: "Analyse Complète",
      description: "Audit technique, sémantique et concurrentiel de votre site web"
    },
    {
      icon: BarChart3,
      title: "Recommandations Précises",
      description: "Plan d'action détaillé avec priorités et impact estimé"
    },
    {
      icon: Search,
      title: "Optimisation IA",
      description: "Utilisation d'algorithmes avancés pour identifier les opportunités"
    },
    {
      icon: Users,
      title: "Rapport Détaillé",
      description: "Document complet avec métriques et axes d'amélioration"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Analyse Technique",
      description: "Crawl complet du site, vitesse, structure, erreurs techniques"
    },
    {
      step: "02",
      title: "Audit Sémantique",
      description: "Analyse des mots-clés, contenu, optimisation on-page"
    },
    {
      step: "03",
      title: "Étude Concurrentielle",
      description: "Benchmarking et analyse des stratégies concurrentes"
    },
    {
      step: "04",
      title: "Plan d'Action",
      description: "Recommandations priorisées avec roadmap de mise en œuvre"
    }
  ];

  const faqs = [
    {
      question: "Combien de temps dure un audit SEO complet ?",
      answer: "Un audit SEO complet prend généralement entre 5 à 10 jours ouvrés selon la taille de votre site. Nous analysons chaque aspect technique et sémantique pour vous fournir un rapport détaillé."
    },
    {
      question: "Que contient exactement le rapport d'audit ?",
      answer: "Le rapport inclut l'analyse technique (vitesse, crawl, erreurs), l'audit sémantique (mots-clés, contenu), l'étude concurrentielle, et un plan d'action priorisé avec estimations d'impact."
    },
    {
      question: "L'audit inclut-il des recommandations pour le référencement local ?",
      answer: "Oui, si votre activité a une dimension locale, nous incluons une analyse complète de votre présence locale (Google My Business, citations, avis clients)."
    },
    {
      question: "Proposez-vous un suivi après l'audit ?",
      answer: "Absolument ! Nous proposons un accompagnement pour la mise en œuvre des recommandations et un suivi mensuel des performances SEO."
    }
  ];

  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Directrice Marketing, TechStart",
      content: "L'audit SEO de NeuroFlow a révélé des opportunités que nous n'avions jamais identifiées. +180% de trafic organique en 6 mois !",
      rating: 5
    },
    {
      name: "Pierre Dubois",
      role: "CEO, EcoShop",
      content: "Rapport très détaillé et recommandations concrètes. L'équipe nous a accompagnés dans la mise en œuvre avec des résultats exceptionnels.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Audit SEO Complet - Analyse Technique et Sémantique | NeuroFlow"
        description="Audit SEO professionnel avec IA : analyse technique, sémantique et concurrentielle. Rapport détaillé et plan d'action pour améliorer votre référencement naturel."
        url="https://neuroflow.ai/services/audit-seo"
        canonical="https://neuroflow.ai/services/audit-seo"
        keywords="audit SEO, analyse technique SEO, audit référencement, optimisation SEO, analyse concurrentielle"
      />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full border border-cyan-500/30 mb-6">
            <Search className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm text-gray-300">Audit SEO Professionnel</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Audit SEO Complet
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez le potentiel caché de votre site web avec notre audit SEO alimenté par l'intelligence artificielle. 
            Analyse technique, sémantique et concurrentielle pour maximiser votre visibilité.
          </p>
          
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Demander un audit gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                Pourquoi Choisir Notre Audit SEO ?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                Notre Processus d'Audit
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/30 to-transparent transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                Questions Fréquentes
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                Témoignages Clients
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <MessageSquare className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Prêt à Booster Votre SEO ?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Obtenez un audit SEO complet et découvrez comment améliorer votre référencement naturel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Clock className="mr-2 w-4 h-4" />
              Réserver un appel
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuditSEO;