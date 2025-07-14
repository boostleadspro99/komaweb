import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Code, CheckCircle, ArrowRight, Smartphone, Zap, Shield, Clock, Star, MessageSquare, Palette } from 'lucide-react';

const CreationSiteWeb: React.FC = () => {
  const benefits = [
    {
      icon: Code,
      title: "Design Moderne",
      description: "Interfaces utilisateur élégantes et expérience utilisateur optimisée"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Parfaitement adapté à tous les appareils et tailles d'écran"
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Sites ultra-rapides avec optimisation SEO intégrée"
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Protection avancée contre les menaces et sauvegardes automatiques"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Analyse & Conception",
      description: "Étude de vos besoins, wireframes et maquettes personnalisées"
    },
    {
      step: "02",
      title: "Développement",
      description: "Codage avec technologies modernes et optimisations performance"
    },
    {
      step: "03",
      title: "Tests & Validation",
      description: "Tests multi-navigateurs, responsive et validation utilisateur"
    },
    {
      step: "04",
      title: "Mise en Ligne",
      description: "Déploiement, formation et accompagnement post-lancement"
    }
  ];

  const faqs = [
    {
      question: "Combien de temps faut-il pour créer un site web ?",
      answer: "Le délai varie selon la complexité : 2-3 semaines pour un site vitrine, 4-8 semaines pour un e-commerce. Nous vous fournissons un planning détaillé dès le début du projet."
    },
    {
      question: "Le site sera-t-il optimisé pour le référencement ?",
      answer: "Absolument ! Tous nos sites incluent une optimisation SEO complète : structure technique, vitesse, métadonnées, et intégration avec nos outils d'analyse IA."
    },
    {
      question: "Proposez-vous la maintenance après la livraison ?",
      answer: "Oui, nous proposons des contrats de maintenance incluant mises à jour, sauvegardes, monitoring de sécurité et support technique prioritaire."
    },
    {
      question: "Puis-je modifier le contenu moi-même après la livraison ?",
      answer: "Bien sûr ! Nous utilisons des CMS intuitifs et fournissons une formation complète pour que vous puissiez gérer votre contenu en autonomie."
    }
  ];

  const testimonials = [
    {
      name: "Julie Moreau",
      role: "Directrice, BeautyLux",
      content: "Site magnifique et ultra-performant ! Nos conversions ont augmenté de 250% depuis le lancement. L'équipe NeuroFlow est exceptionnelle.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "CEO, TechInnovate",
      content: "Professionnalisme et expertise technique au top. Notre nouveau site reflète parfaitement notre image de marque et convertit excellemment.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Création de Site Web Professionnel & Moderne | NeuroFlow"
        description="Création de sites web sur-mesure : design moderne, responsive, optimisé SEO. Développement professionnel avec technologies avancées et performance optimale."
        url="https://neuroflow.ai/services/creation-site-web"
        canonical="https://neuroflow.ai/services/creation-site-web"
        keywords="création site web, développement web, site responsive, design moderne, optimisation SEO"
      />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full border border-cyan-500/30 mb-6">
            <Code className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm text-gray-300">Création de Site Web</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Création de Site Web
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Donnez vie à votre vision avec un site web sur-mesure. Design moderne, performance optimale 
            et expérience utilisateur exceptionnelle pour convertir vos visiteurs en clients.
          </p>
          
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Créer mon site web
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
                Pourquoi Choisir Nos Sites Web ?
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
                Notre Processus de Création
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
              Prêt à Créer Votre Site Web ?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Transformez votre vision en réalité avec un site web professionnel qui convertit
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
              <Palette className="mr-2 w-4 h-4" />
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreationSiteWeb;