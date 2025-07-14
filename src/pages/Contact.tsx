import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Send, CheckCircle, Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', budget: '', service: '', message: '' });
      }, 4000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const services = [
    'SEO Intelligence Artificielle',
    'Publicité Meta Ads', 
    'Growth Hacking',
    'Copywriting IA',
    'Analytics Prédictive',
    'Automatisation Marketing',
    'Audit complet',
    'Autre'
  ];

  const budgetRanges = [
    'Moins de 5 000€',
    '5 000€ - 15 000€',
    '15 000€ - 50 000€',
    'Plus de 50 000€'
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Contact NeuroFlow - Démarrez Votre Projet Marketing IA"
        description="Contactez nos experts en marketing IA. Audit gratuit, devis personnalisé et accompagnement sur-mesure. Réponse sous 24h garantie."
        url="https://neuroflow.ai/contact"
        canonical="https://neuroflow.ai/contact"
        keywords="contact agence marketing, audit gratuit, devis marketing digital, consultation IA"
      />
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Contactez-Nous
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Prêt à révolutionner votre marketing ? Parlons de votre projet et découvrons 
            comment l'intelligence artificielle peut propulser votre croissance.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Parlons de votre projet</h2>
              <p className="text-gray-400 leading-relaxed">
                Notre équipe d'experts IA est là pour transformer vos défis en opportunités de croissance. 
                Contactez-nous pour un audit gratuit de votre stratégie marketing.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-400">contact@neuroflow.ai</p>
                  <p className="text-gray-400">Réponse sous 2h en moyenne</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Téléphone</h3>
                  <p className="text-gray-400">+33 1 23 45 67 89</p>
                  <p className="text-gray-400">Lun-Ven 9h-18h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Adresse</h3>
                  <p className="text-gray-400">42 Avenue des Champs-Élysées</p>
                  <p className="text-gray-400">75008 Paris, France</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Horaires</h3>
                  <p className="text-gray-400">Lundi - Vendredi: 9h - 18h</p>
                  <p className="text-gray-400">Support 24/7 pour clients actifs</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-lg p-6 border border-cyan-500/20">
              <MessageSquare className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">Audit Gratuit</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Recevez une analyse gratuite de votre stratégie marketing actuelle 
                avec nos recommandations IA personnalisées.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 p-8">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Démarrons votre projet</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                          placeholder="Votre nom"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                          Email professionnel *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-gray-300">
                          Entreprise
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium text-gray-300">
                          Budget mensuel
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                        >
                          <option value="">Sélectionner un budget</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-gray-300">
                        Service d'intérêt
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                      >
                        <option value="">Sélectionner un service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Décrivez votre projet *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
                        placeholder="Parlez-nous de vos objectifs, défis actuels, et comment nous pouvons vous aider à atteindre vos ambitions..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="group w-full py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                      <span className="flex items-center justify-center">
                        Envoyer ma demande
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>

                    <p className="text-sm text-gray-400 text-center">
                      En soumettant ce formulaire, vous acceptez notre politique de confidentialité. 
                      Nous nous engageons à répondre sous 24h.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">Message envoyé avec succès !</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Merci pour votre intérêt pour NeuroFlow. Notre équipe d'experts IA va analyser votre demande 
                    et vous contactera dans les prochaines heures avec une proposition personnalisée.
                  </p>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-lg p-6 border border-cyan-500/30">
                    <h4 className="font-semibold text-cyan-400 mb-2">Prochaines étapes :</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Analyse de votre demande par notre équipe</li>
                      <li>• Audit gratuit de votre stratégie actuelle</li>
                      <li>• Proposition personnalisée sous 24h</li>
                    </ul>
                  </div>
                  <div className="mt-8 animate-pulse">
                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 rounded mx-auto"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;