import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { MapPin, CheckCircle, ArrowRight, Star, Users, TrendingUp, Clock, MessageSquare, Navigation } from 'lucide-react';

const ReferencementLocal: React.FC = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Visibilité Locale",
      description: "Apparaissez en première position dans les recherches géolocalisées"
    },
    {
      icon: Star,
      title: "Gestion des Avis",
      description: "Optimisation et gestion proactive de votre réputation en ligne"
    },
    {
      icon: Users,
      title: "Trafic Qualifié",
      description: "Attirez des clients locaux prêts à acheter près de chez eux"
    },
    {
      icon: TrendingUp,
      title: "ROI Immédiat",
      description: "Résultats rapides avec impact direct sur votre chiffre d'affaires local"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Audit Local",
      description: "Analyse de votre présence locale actuelle et de la concurrence"
    },
    {
      step: "02",
      title: "Optimisation GMB",
      description: "Configuration et optimisation complète de Google My Business"
    },
    {
      step: "03",
      title: "Citations Locales",
      description: "Création et harmonisation des citations dans les annuaires"
    },
    {
      step: "04",
      title: "Suivi & Amélioration",
      description: "Monitoring des performances et optimisation continue"
    }
  ];

  const faqs = [
    {
      question: "Qu'est-ce que le référencement local exactement ?",
      answer: "Le référencement local optimise votre visibilité dans les recherches géolocalisées (ex: 'restaurant Paris 15ème'). Il inclut Google My Business, les avis clients, les citations locales et l'optimisation géographique de votre site."
    },
    {
      question: "Combien de temps pour voir les premiers résultats ?",
      answer: "Les premiers résultats apparaissent généralement sous 2-4 semaines pour Google My Business, et 2-3 mois pour un positionnement optimal dans les recherches locales."
    },
    {
      question: "Gérez-vous les avis clients négatifs ?",
      answer: "Oui, nous avons une stratégie complète de gestion de réputation : réponses professionnelles aux avis négatifs, incitation aux avis positifs, et monitoring continu de votre e-réputation."
    },
    {
      question: "Le référencement local fonctionne-t-il pour tous les secteurs ?",
      answer: "Le référencement local est particulièrement efficace pour les commerces de proximité, services à domicile, restaurants, professions libérales, et toute activité avec une clientèle géographiquement ciblée."
    }
  ];

  const testimonials = [
    {
      name: "Pierre Dubois",
      role: "Propriétaire, Restaurant Le Gourmet",
      content: "Incroyable ! Nous sommes passés de la 2ème page à la 1ère position locale. +60% de réservations en 3 mois grâce à NeuroFlow.",
      rating: 5
    },
    {
      name: "Sarah Martinez",
      role: "Directrice, Salon BeautyPro",
      content: "L'optimisation Google My Business a transformé notre visibilité. Nous recevons maintenant 3x plus d'appels de nouveaux clients locaux.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Référencement Local & Google My Business | NeuroFlow"
        description="Référencement local professionnel : optimisation Google My Business, gestion des avis, citations locales. Dominez les recherches géolocalisées de votre secteur."
        url="https://neuroflow.ai/services/referencement-local"
        canonical="https://neuroflow.ai/services/referencement-local"
        keywords="référencement local, Google My Business, SEO local, avis clients, citations locales, visibilité géographique"
      />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full border border-cyan-500/30 mb-6">
            <MapPin className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm text-gray-300">Référencement Local</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Référencement Local
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dominez les recherches locales et attirez plus de clients dans votre zone géographique. 
            Optimisation Google My Business, gestion des avis et stratégie de visibilité locale complète.
          </p>
          
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Booster ma visibilité locale
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
                Pourquoi le Référencement Local ?
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
                Notre Processus d'Optimisation
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
              Prêt à Dominer Votre Marché Local ?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Attirez plus de clients locaux et développez votre activité dans votre zone géographique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
            >
              Demander un audit local
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Navigation className="mr-2 w-4 h-4" />
              Voir nos résultats
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferencementLocal;