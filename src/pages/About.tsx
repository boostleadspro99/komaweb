import React from 'react';
import SEO from '../components/SEO';
import { Users, Target, Award, Zap, Brain, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="À Propos de NeuroFlow - Experts en Marketing IA"
        description="Découvrez l'équipe NeuroFlow, pionniers du marketing digital alimenté par l'IA. Notre histoire, nos valeurs et notre expertise unique en intelligence artificielle."
        url="https://neuroflow.ai/a-propos"
        canonical="https://neuroflow.ai/a-propos"
      />
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              À Propos de NeuroFlow
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Nous sommes une agence de marketing digital nouvelle génération, spécialisée dans l'intelligence artificielle 
            et les stratégies de croissance innovantes. Notre mission : transformer vos données en résultats extraordinaires.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Notre Histoire
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Fondée en 2020 par une équipe de data scientists et marketeurs visionnaires, 
                NeuroFlow est née de la conviction que l'intelligence artificielle allait révolutionner 
                le marketing digital.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Aujourd'hui, nous aidons plus de 50 entreprises à travers l'Europe à atteindre 
                des performances exceptionnelles grâce à nos algorithmes propriétaires et notre 
                expertise unique en IA appliquée au marketing.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <div className="text-gray-400 text-sm">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent mb-2">
                    4 ans
                  </div>
                  <div className="text-gray-400 text-sm">D'expertise IA</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Équipe NeuroFlow"
                className="rounded-2xl"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                Nos Valeurs
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Innovation",
                description: "Nous repoussons constamment les limites de ce qui est possible avec l'IA."
              },
              {
                icon: Target,
                title: "Performance",
                description: "Chaque stratégie est conçue pour maximiser votre retour sur investissement."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Nous travaillons en partenariat étroit avec nos clients pour leur succès."
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                Nos Réalisations
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, metric: "#1", label: "Agence IA France 2023" },
              { icon: Rocket, metric: "250%", label: "ROI moyen clients" },
              { icon: Zap, metric: "50+", label: "Clients actifs" },
              { icon: Users, metric: "15", label: "Experts en équipe" }
            ].map((achievement, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 p-6 hover:border-cyan-500/50 transition-all duration-300">
                <achievement.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent mb-2">
                  {achievement.metric}
                </div>
                <div className="text-gray-400 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;