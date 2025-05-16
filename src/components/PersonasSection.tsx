import React from 'react';

interface PersonaCardProps {
  name: string;
  description: string;
  image?: string; // Optional: for an image URL or path
  delay: number;
}

const PersonaCard: React.FC<PersonaCardProps> = ({ name, description, image, delay }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-${delay}`}>
      {image && <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"/>}
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{name}</h3>
      <p className="text-gray-600 text-sm text-center">{description}</p>
    </div>
  );
};

const PersonasSection: React.FC = () => {
  const personas = [
    {
      name: "Jeunes Actifs & Télétravailleurs",
      description: "Conciliez vie pro et perso avec sérénité grâce à un suivi mental adapté à votre rythme.",
      // image: "/path/to/jeune-actif.jpg" // Placeholder
      delay: 200
    },
    {
      name: "Étudiants Stressés",
      description: "Gérez la pression des examens et la charge de travail avec des outils pour rester concentré et apaisé.",
      // image: "/path/to/etudiant.jpg"
      delay: 400
    },
    {
      name: "Cadres & Dirigeants",
      description: "Prévenez la surcharge cognitive et maintenez votre performance en prenant soin de votre équilibre mental.",
      // image: "/path/to/cadre.jpg"
      delay: 600
    },
    {
      name: "Personnes en Transition",
      description: "Traversez les périodes de changement (reconversion, burn-out latent) avec un soutien quotidien.",
      // image: "/path/to/transition.jpg"
      delay: 800
    },
  ];

  return (
    <section id="personas" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-slide-in-left">
            Conçu Pour Vous Aider à Prospérer
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto animate-slide-in-right delay-200">
            Bilan Mental Express s'adresse à toute personne souhaitant améliorer son bien-être mental, et plus particulièrement à ceux qui font face à des défis spécifiques.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona) => (
            <PersonaCard key={persona.name} name={persona.name} description={persona.description} delay={persona.delay} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
