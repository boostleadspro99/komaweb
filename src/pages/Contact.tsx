import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Send, CheckCircle, Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { useToast } from '../components/ui/ToastContainer';
import OptimizedImage from '../components/ui/OptimizedImage';

const Contact: React.FC = () => {
  const { showSuccess, showError } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const response = await fetch('https://getform.io/f/bpjpozgb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        showSuccess('Message envoyé avec succès ! Notre équipe vous contactera dans les 24h.');
        setFormData({ name: '', email: '', company: '', budget: '', service: '', message: '' });
      } else {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error('Erreur:', error);
      showError('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
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
                          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-all duration-300 ${
                            errors.name 
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                              : 'border-gray-700 focus:border-cyan-500 focus:ring-cyan-500'
                          }`}
                          placeholder="Votre nom"
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                            {errors.name}
                          </p>
                        )}
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
                          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-all duration-300 ${
                            errors.email 
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                              : 'border-gray-700 focus:border-cyan-500 focus:ring-cyan-500'
                          }`}
                          placeholder="votre@email.com"
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                            {errors.email}
                          </p>
                        )}
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
                        className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-all duration-300 resize-none ${
                          errors.message 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-gray-700 focus:border-cyan-500 focus:ring-cyan-500'
                        }`}
                        placeholder="Parlez-nous de vos objectifs, défis actuels, et comment nous pouvons vous aider à atteindre vos ambitions..."
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    
                    {/* Champ anti-spam invisible */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} />
                    
                    {/* Affichage des erreurs de soumission */}
                    {errors.submit && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 text-sm" role="alert">
                          {errors.submit}
                        </p>
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <span className="flex items-center justify-center">
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                        {!isSubmitting && (
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        )}
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