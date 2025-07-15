import React, { useState } from 'react';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';
import { useToast } from '../ui/ToastContainer';

const ContactSection: React.FC = () => {
  const { showSuccess, showError } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      showSuccess('Message envoyé avec succès ! Nous vous répondrons sous 24h.');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Prêt à Révolutionner Votre Marketing ?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discutons de votre projet et découvrons comment l'intelligence artificielle 
            peut propulser votre croissance vers de nouveaux sommets.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 p-8">
          {!isSubmitted ? (
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
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Décrivez votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-all duration-300 resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-gray-700 focus:border-cyan-500 focus:ring-cyan-500'
                  }`}
                  placeholder="Parlez-nous de vos objectifs, défis et ambitions..."
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="flex items-center justify-center">
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  {!isSubmitting && (
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </span>
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
              <p className="text-gray-400 mb-6">
                Merci pour votre intérêt. Notre équipe vous contactera dans les 24h.
              </p>
              <div className="animate-pulse">
                <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 rounded mx-auto"></div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full border border-cyan-500/30">
            <span className="text-gray-300 mr-2">Démarrage immédiat possible</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;