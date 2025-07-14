import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Mail, CheckCircle, ArrowRight, Users, BarChart3, Zap, Clock, Star, MessageSquare, Send } from 'lucide-react';

const EmailMarketing: React.FC = () => {
  const benefits = [
    {
      icon: Mail,
      title: "Automatisation IA",
      description: "Séquences d'emails intelligentes qui s'adaptent au comportement utilisateur"
    },
    {
      icon: Users,
      title: "Segmentation Avancée",
      description: "Ciblage précis basé sur les données comportementales et démographiques"
    },
    {
      icon: BarChart3,
      title: "Analytics Poussées",
      description: "Tracking détaillé des performances avec insights actionnables"
    },
    {
      icon: Zap,
      title: "Optimisation Continue",
      description: "A/B testing automatisé pour maximiser les taux d'ouverture et de clic"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Stratégie & Setup",
      description: "Définition de la stratégie, configuration des outils et intégrations"
    },
    {
      step: "02",
      title: "Création de Contenu",
      description: "Design des templates et rédaction des séquences d'emails"
    },
    {
      step: "03",
      title: "Automatisation",
      description: "Mise en place des workflows et triggers comportementaux"
    },
    {
      step: "04",
      title: "Optimisation",
      description: "Analyse des performances et amélioration continue des campagnes"
    }
  ];

  const faqs = [
    {
      question: "Quels types de campagnes email proposez-vous ?",
      answer: "Nous créons des newsletters, séquences de bienvenue, campagnes de nurturing, emails transactionnels, campagnes de réactivation, et workflows d'abandon de panier pour l'e-commerce."
    },
    {
      question: "Comment mesurez-vous le succès des campagnes ?",
      answer: "Nous suivons les métriques clés : taux d'ouverture, de clic, de conversion, désabonnements, et ROI. Nos rapports incluent des insights actionnables pour l'optimisation continue."
    },
    {
      question: "Gérez-vous la conformité RGPD ?",
      answer: "Absolument ! Nous nous assurons que toutes les campagnes respectent le RGPD : opt-in explicite, gestion des désabonnements, et protection des données personnelles."
    },
    {
      question: "Intégrez-vous avec les CRM existants ?",
      answer: "Oui, nous intégrons avec la plupart des CRM (HubSpot, Salesforce, Pipedrive) et plateformes e-commerce pour une synchronisation parfaite des données client."
    }
  ];

  const testimonials = [
    {
      name: "Amélie Rousseau",
      role: "Marketing Manager, FashionTrend",
      content: "Nos campagnes email génèrent maintenant 35% de notre CA ! L'automatisation IA de NeuroFlow a révolutionné notre approche marketing.",
      rating: 5
    },
    {
      name: "Marc Lefebvre",
      role: "CEO, TechSolutions",
      content: "Taux d'ouverture passé de 18% à 42% en 3 mois. L'équipe maîtrise parfaitement la segmentation et la personnalisation avancée.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Email Marketing & Automatisation IA | NeuroFlow"
        description="Email marketing professionnel avec automatisation IA : newsletters, séquences, nurturing. Maximisez vos conversions avec des campagnes personnalisées et optimisées."
        url="https://neuroflow.ai/services/email-marketing"
        canonical="https://neuroflow.ai/services/email-marketing"
        keywords="email marketing, automatisation email, newsletter, nurturing, segmentation, campagnes email"
      />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full border border-cyan-500/30 mb-6">
            <Mail className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm text-gray-300">Email Marketing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Email Marketing
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformez vos contacts en clients fidèles avec des campagnes email intelligentes. 
            Automatisation IA, personnalisation avancée et optimisation continue pour maximiser votre ROI.
          </p>
          
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Lancer mes campagnes email
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
                Pourquoi l'Email Marketing IA ?
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
                Notre Processus Email Marketing
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
              Prêt à Booster Vos Conversions ?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Transformez vos emails en machine à vendre avec notre expertise en automatisation IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
            >
              Demander une stratégie email
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Send className="mr-2 w-4 h-4" />
              Voir nos templates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketing;