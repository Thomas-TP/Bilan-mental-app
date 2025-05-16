import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional: for an icon element
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      {icon && <div className="text-blue-500 mb-4 text-3xl">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const SolutionSection: React.FC = () => {
  const features = [
    { 
      title: "Questionnaire Quotidien", 
      description: "Un questionnaire de 5 minutes, ludique et adaptatif pour évaluer votre état mental.",
      // icon: <IconQuestion /> // Placeholder for an actual icon component
    },
    {
      title: "Analyse de Données Passives",
      description: "Intégration de données comme le sommeil, l'activité physique, et le temps d'écran.",
      // icon: <IconData />
    },
    {
      title: "IA Coach Personnalisé",
      description: "Une IA qui détecte les évolutions de votre état mental (stress, fatigue, charge cognitive).",
      // icon: <IconBrain />
    },
    {
      title: "Tableau de Bord Intuitif",
      description: "Un score de bien-être clair et des indicateurs-clés pour suivre vos progrès.",
      // icon: <IconDashboard />
    },
    {
      title: "Suggestions Concrètes",
      description: "Des actions ciblées : respiration guidée, pause créative, micro-déconnexion, journaling.",
      // icon: <IconBulb />
    },
    {
      title: "Accès aux Professionnels",
      description: "Option de contact avec des psychologues partenaires certifiés pour un soutien approfondi.",
      // icon: <IconUsers />
    },
  ];

  return (
    <section id="solution" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-slide-in-up">
            Notre Solution Innovante : La Clé de Votre Bien-être
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto animate-slide-in-up delay-200">
            Bilan Mental Express vous offre une panoplie d'outils pour comprendre et améliorer activement votre santé mentale au quotidien.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`animate-fade-in-up delay-${index * 150 + 400}`}>
              <FeatureCard title={feature.title} description={feature.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
