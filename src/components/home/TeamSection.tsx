import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & AI Strategist",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Experte en IA avec 10+ ans d'expérience chez Google et Meta.",
      social: { linkedin: "#", twitter: "#", email: "sarah@neuroflow.ai" }
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Data Scientist",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Architecte de solutions IA et expert en machine learning prédictif.",
      social: { linkedin: "#", twitter: "#", email: "marcus@neuroflow.ai" }
    },
    {
      name: "Emma Thompson",
      role: "Growth Hacker Lead",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Spécialiste en acquisition et optimisation de conversion basée sur les données.",
      social: { linkedin: "#", twitter: "#", email: "emma@neuroflow.ai" }
    },
    {
      name: "Alex Kim",
      role: "Creative AI Director",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Pionnier de la création publicitaire assistée par intelligence artificielle.",
      social: { linkedin: "#", twitter: "#", email: "alex@neuroflow.ai" }
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Notre Équipe
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des experts passionnés par l'intelligence artificielle et le marketing digital, 
            unis pour révolutionner votre croissance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-magenta-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 p-6">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-magenta-400 text-sm font-medium mb-3">
                  {member.role}
                </p>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                
                <div className="flex space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg flex items-center justify-center hover:from-cyan-500/40 hover:to-magenta-500/40 transition-all duration-300 group/social"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400 group-hover/social:text-magenta-400 transition-colors" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg flex items-center justify-center hover:from-cyan-500/40 hover:to-magenta-500/40 transition-all duration-300 group/social"
                  >
                    <Twitter className="w-4 h-4 text-cyan-400 group-hover/social:text-magenta-400 transition-colors" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg flex items-center justify-center hover:from-cyan-500/40 hover:to-magenta-500/40 transition-all duration-300 group/social"
                  >
                    <Mail className="w-4 h-4 text-cyan-400 group-hover/social:text-magenta-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;