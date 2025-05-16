import React from 'react';

interface SuggestionCardProps {
  title: string;
  description: string;
  icon: string; // Placeholder for an icon, e.g., emoji or SVG path
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="text-4xl mb-4 text-center text-blue-500">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-sm text-center">{description}</p>
    </div>
  );
};

const ConcreteSuggestionsSection: React.FC = () => {
  const suggestions = [
    {
      title: "Respiration Guidée",
      description: "Prenez 5 minutes pour une séance de respiration profonde. Inspirez lentement, retenez, puis expirez. Répétez.",
      icon: "🌬️",
    },
    {
      title: "Pause Créative",
      description: "Accordez-vous un moment pour dessiner, écrire, écouter de la musique ou toute activité qui stimule votre créativité.",
      icon: "🎨",
    },
    {
      title: "Micro-Déconnexion",
      description: "Éloignez-vous de vos écrans pendant 10-15 minutes. Levez-vous, étirez-vous, regardez par la fenêtre.",
      icon: "🔌",
    },
    {
      title: "Journaling Express",
      description: "Notez rapidement 3 choses pour lesquelles vous êtes reconnaissant(e) aujourd\'hui ou une pensée positive.",
      icon: "📓",
    },
  ];

  return (
    <section id="suggestions" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Suggestions Concrètes pour Aller Mieux</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Voici quelques actions simples que vous pouvez intégrer à votre quotidien pour améliorer votre bien-être mental.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {suggestions.map((suggestion) => (
            <SuggestionCard key={suggestion.title} {...suggestion} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConcreteSuggestionsSection;

