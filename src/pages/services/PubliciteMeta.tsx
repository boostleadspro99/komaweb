import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Target, CheckCircle, ArrowRight, Users, BarChart3, Zap, Clock, Star, MessageSquare, TrendingUp } from 'lucide-react';

const PubliciteMeta: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: "Ciblage Précis",
      description: "Audiences ultra-ciblées avec IA prédictive pour maximiser les conversions"
    },
    {
      icon: BarChart3,
      title: "Optimisation Continue",
      description: "Algorithmes d'apprentissage automatique pour améliorer les performances"
    },
    {
      icon: Zap,
      title: "ROI Maximisé",
      description: "Stratégies d'enchères intelligentes pour réduire les coûts d'acquisition"
    },
    {
      icon: TrendingUp,
      title: "Scaling Intelligent",
      description: "Montée en puissance progressive basée sur les données de performance"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Audit & Stratégie",
      description: "Analyse de votre marché, concurrence et définition des objectifs"
    },
    {
      step: "02",
      title: "Création des Campagnes",
      description: "Setup des campagnes, audiences et créatifs optimisés"
    },
    {
      step: "03",
      title: "Lancement & Tests",
      description: "Déploiement progressif avec A/B testing des éléments clés"
    },
    {
      step: "04",
      title: "Optimisation IA",
      description: "Amélioration continue avec algorithmes d'apprentissage automatique"
    }
  ];

  const faqs = [
    {
      question: "Quel budget minimum recommandez-vous pour débuter ?",
      answer: "Nous recommandons un budget minimum de 1 000€/mois pour les campagnes Meta Ads, permettant de collecter suffisamment de données pour l'optimisation IA et obtenir des résultats significatifs."
    },
    {
      question: "Combien de temps avant de voir les premiers résultats ?",
      answer: "Les premiers résultats sont visibles dès les premières semaines, mais l'optimisation complète avec notre IA prend généralement 4-6 semaines pour atteindre les performances optimales."
    },
    {
      question: "Gérez-vous Facebook et Instagram simultanément ?",
      answer: "Oui, nous gérons l'ensemble de l'écosystème Meta (Facebook, Instagram, Messenger) avec des stratégies cross-platform optimisées pour chaque audience."
    },
    {
      question: "Comment mesurez-vous le retour sur investissement ?",
      answer: "Nous utilisons un tracking avancé multi-touch avec attribution personnalisée, tableaux de bord en temps réel et rapports détaillés sur le ROAS, CPA et LTV."
    }
  ];

  const testimonials = [
    {
      name: "Marie Leroy",
      role: "E-commerce Manager, FashionTrend",
      content: "Nos ventes ont explosé ! +340% de ROAS en 3 mois grâce aux campagnes Meta optimisées par IA de NeuroFlow.",
      rating: 5
    },
    {
      name: "Thomas Bernard",
      role: "Fondateur, FitnessPro",
      content: "L'équipe a transformé notre approche publicitaire. Le ciblage IA nous permet d'atteindre exactement les bonnes personnes au bon moment.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Publicité Meta Ads (Facebook/Instagram) avec IA | NeuroFlow"
        description="Campagnes publicitaires Meta Ads optimisées par IA : ciblage précis, créatifs performants, ROI maximisé. Expertise Facebook et Instagram Ads."
        url="https://neuroflow.ai/services/publicite-meta"
        canonical="https://neuroflow.ai/services/publicite-meta"
        keywords="publicité Meta Ads, Facebook Ads, Instagram Ads, campagnes publicitaires, ROI, ciblage IA"
      />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full border border-cyan-500/30 mb-6">
            <Target className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm text-gray-300">Publicité Meta Ads</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Publicité Meta Ads
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Maximisez votre ROI avec nos campagnes publicitaires Meta (Facebook/Instagram) optimisées par intelligence artificielle. 
            Ciblage précis, créatifs performants et scaling intelligent.
          </p>
          
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Lancer mes campagnes
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
                Pourquoi Nos Campagnes Meta Ads ?
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
                Notre Processus de Campagne
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
              Prêt à Exploser Vos Ventes ?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Lancez vos campagnes Meta Ads optimisées par IA et multipliez votre chiffre d'affaires
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
            >
              Demander un devis
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

export default PubliciteMeta;