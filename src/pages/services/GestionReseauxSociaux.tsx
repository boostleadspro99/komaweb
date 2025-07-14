import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Share2, CheckCircle, ArrowRight, Users, BarChart3, Camera, Clock, Star, MessageSquare, Heart } from 'lucide-react';

const GestionReseauxSociaux: React.FC = () => {
  const benefits = [
    {
      icon: Share2,
      title: "Stratégie Multi-Plateforme",
      description: "Présence cohérente sur Facebook, Instagram, LinkedIn, TikTok et Twitter"
    },
    {
      icon: Camera,
      title: "Contenu Créatif",
      description: "Création de visuels, vidéos et contenus engageants adaptés à chaque réseau"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Gestion proactive de votre communauté et interaction avec vos followers"
    },
    {
      icon: BarChart3,
      title: "Analytics Avancées",
      description: "Suivi des performances et insights pour optimiser votre stratégie sociale"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Audit & Stratégie",
      description: "Analyse de votre présence actuelle et définition de la stratégie sociale"
    },
    {
      step: "02",
      title: "Création de Contenu",
      description: "Production de visuels, vidéos et textes adaptés à chaque plateforme"
    },
    {
      step: "03",
      title: "Publication & Engagement",
      description: "Planification des posts et gestion des interactions communautaires"
    },
    {
      step: "04",
      title: "Analyse & Optimisation",
      description: "Suivi des KPIs et ajustement de la stratégie pour maximiser l'engagement"
    }
  ];

  const faqs = [
    {
      question: "Sur quels réseaux sociaux intervenez-vous ?",
      answer: "Nous gérons Facebook, Instagram, LinkedIn, TikTok, Twitter, YouTube et Pinterest. Nous sélectionnons les plateformes les plus pertinentes selon votre secteur et votre audience cible."
    },
    {
      question: "Créez-vous le contenu visuel et vidéo ?",
      answer: "Oui, notre équipe créative produit tous les visuels, vidéos, stories et contenus adaptés à chaque réseau social. Nous respectons votre charte graphique et votre ton de communication."
    },
    {
      question: "Comment gérez-vous les commentaires et messages privés ?",
      answer: "Nous assurons une modération proactive 7j/7 avec réponses dans les 2h en moyenne. Nous gérons les commentaires positifs/négatifs selon votre ligne éditoriale et escaladons si nécessaire."
    },
    {
      question: "Proposez-vous de la publicité sur les réseaux sociaux ?",
      answer: "Absolument ! Nous créons et gérons vos campagnes publicitaires sociales (Facebook Ads, Instagram Ads, LinkedIn Ads) en complément de la gestion organique pour maximiser votre portée."
    }
  ];

  const testimonials = [
    {
      name: "Camille Moreau",
      role: "Fondatrice, EcoBeauty",
      content: "Notre communauté Instagram a explosé ! +280% de followers en 6 mois et un engagement authentique. L'équipe NeuroFlow comprend parfaitement notre univers.",
      rating: 5
    },
    {
      name: "Julien Petit",
      role: "Directeur Marketing, SportTech",
      content: "Gestion impeccable de nos réseaux B2B. LinkedIn génère maintenant 40% de nos leads qualifiés grâce à leur stratégie de contenu expert.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Gestion des Réseaux Sociaux & Community Management | NeuroFlow"
        description="Gestion professionnelle de vos réseaux sociaux : stratégie, création de contenu, community management. Boostez votre présence sur Facebook, Instagram, LinkedIn."
        url="https://neuroflow.ai/services/gestion-reseaux-sociaux"
        canonical="https://neuroflow.ai/services/gestion-reseaux-sociaux"
        keywords="gestion réseaux sociaux, community management, Facebook, Instagram, LinkedIn, contenu social, engagement"
      />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full border border-cyan-500/30 mb-6">
            <Share2 className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm text-gray-300">Gestion Réseaux Sociaux</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Gestion des Réseaux Sociaux
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Développez votre présence sociale et engagez votre communauté avec notre expertise en community management. 
            Stratégie, création de contenu et gestion complète de vos réseaux sociaux.
          </p>
          
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Booster ma présence sociale
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
                Pourquoi Confier Vos Réseaux Sociaux ?
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
                Notre Processus de Gestion
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
              Prêt à Engager Votre Communauté ?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Développez votre présence sociale et créez une communauté engagée autour de votre marque
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
            >
              Demander une stratégie sociale
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Heart className="mr-2 w-4 h-4" />
              Voir nos créations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GestionReseauxSociaux;