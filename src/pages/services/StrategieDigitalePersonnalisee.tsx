import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Brain, CheckCircle, ArrowRight, Target, BarChart3, Zap, Clock, Star, MessageSquare, Lightbulb } from 'lucide-react';

const StrategieDigitalePersonnalisee: React.FC = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Approche Sur-Mesure",
      description: "Stratégie 100% personnalisée selon vos objectifs et votre marché"
    },
    {
      icon: Target,
      title: "Vision 360°",
      description: "Analyse complète de votre écosystème digital et de vos opportunités"
    },
    {
      icon: BarChart3,
      title: "ROI Optimisé",
      description: "Allocation intelligente des budgets pour maximiser votre retour sur investissement"
    },
    {
      icon: Zap,
      title: "Innovation Continue",
      description: "Intégration des dernières technologies et tendances marketing"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Diagnostic Complet",
      description: "Audit approfondi de votre situation actuelle et analyse concurrentielle"
    },
    {
      step: "02",
      title: "Stratégie Personnalisée",
      description: "Élaboration d'une roadmap sur-mesure avec objectifs et KPIs définis"
    },
    {
      step: "03",
      title: "Mise en Œuvre",
      description: "Déploiement coordonné des actions avec suivi en temps réel"
    },
    {
      step: "04",
      title: "Optimisation Continue",
      description: "Ajustements réguliers basés sur les performances et évolutions du marché"
    }
  ];

  const faqs = [
    {
      question: "En quoi consiste exactement une stratégie digitale personnalisée ?",
      answer: "C'est une approche globale qui analyse votre entreprise, vos objectifs, votre marché et vos ressources pour créer un plan d'action digital sur-mesure. Nous intégrons tous les leviers : SEO, publicité, réseaux sociaux, email, contenu, etc."
    },
    {
      question: "Combien de temps faut-il pour élaborer la stratégie ?",
      answer: "L'élaboration complète prend généralement 3-4 semaines : 1 semaine d'audit, 2 semaines de conception stratégique, et 1 semaine de présentation et ajustements selon vos retours."
    },
    {
      question: "Accompagnez-vous la mise en œuvre ou juste la stratégie ?",
      answer: "Nous proposons les deux options : stratégie seule avec formation de vos équipes, ou accompagnement complet avec mise en œuvre par nos experts. La plupart de nos clients choisissent l'accompagnement intégral."
    },
    {
      question: "Comment mesurez-vous le succès de la stratégie ?",
      answer: "Nous définissons des KPIs précis dès le départ (trafic, conversions, CA, notoriété) avec des objectifs chiffrés et des échéances. Reporting mensuel avec recommandations d'optimisation."
    }
  ];

  const testimonials = [
    {
      name: "Isabelle Durand",
      role: "CEO, InnovTech",
      content: "La stratégie digitale de NeuroFlow a transformé notre approche marketing. +150% de leads qualifiés et une cohérence parfaite entre tous nos canaux.",
      rating: 5
    },
    {
      name: "Philippe Martin",
      role: "Directeur Marketing, GreenEnergy",
      content: "Approche très professionnelle et résultats au rendez-vous. Leur vision stratégique nous a permis de prendre une longueur d'avance sur nos concurrents.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Stratégie Digitale Personnalisée & Consulting Marketing | NeuroFlow"
        description="Stratégie digitale sur-mesure : audit complet, roadmap personnalisée, accompagnement expert. Optimisez votre présence digitale avec une approche 360° innovante."
        url="https://neuroflow.ai/services/strategie-digitale-personnalisee"
        canonical="https://neuroflow.ai/services/strategie-digitale-personnalisee"
        keywords="stratégie digitale, consulting marketing, transformation digitale, roadmap marketing, audit digital"
      />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm text-gray-300">Stratégie Digitale Personnalisée</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Stratégie Digitale Personnalisée
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformez votre vision en succès digital avec une stratégie sur-mesure. 
            Approche 360°, innovation IA et accompagnement expert pour dominer votre marché.
          </p>
          
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Créer ma stratégie digitale
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
                Pourquoi Une Stratégie Personnalisée ?
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
                Notre Processus Stratégique
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
              Prêt à Transformer Votre Digital ?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Créons ensemble la stratégie digitale qui propulsera votre entreprise vers le succès
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
            >
              Demander un diagnostic
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Lightbulb className="mr-2 w-4 h-4" />
              Réserver un appel stratégique
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategieDigitalePersonnalisee;