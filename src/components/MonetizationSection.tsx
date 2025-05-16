import React from 'react';

interface PlanCardProps {
  title: string;
  price?: string;
  features: string[];
  actionText: string;
  actionLink?: string;
  isPopular?: boolean;
  delay: number;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, price, features, actionText, actionLink = '#', isPopular, delay }) => {
  return (
    <div className={`border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-${delay} ${isPopular ? 'border-blue-500 border-2 relative' : 'border-gray-200'}`}>
      {isPopular && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">POPULAIRE</span>}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{title}</h3>
      {price && <p className="text-4xl font-bold text-center mb-6 text-blue-600">{price}</p>}
      <ul className="space-y-2 mb-6 text-sm text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            {feature}
          </li>
        ))}
      </ul>
      <a href={actionLink} className={`w-full block text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 ${isPopular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
        {actionText}
      </a>
    </div>
  );
};

const MonetizationSection: React.FC = () => {
  const plans = [
    {
      title: "Freemium",
      features: [
        "Accès au questionnaire quotidien de base",
        "Tableau de bord simplifié",
        "Suggestions génériques",
      ],
      actionText: "S'inscrire Gratuitement",
      delay: 200
    },
    {
      title: "Premium",
      price: "9.99€/mois", // Example price
      features: [
        "Toutes les fonctionnalités Freemium",
        "Statistiques avancées et historiques détaillés",
        "IA Coach avec recommandations personnalisées",
        "Accès prioritaire aux nouveaux contenus",
      ],
      actionText: "Découvrir Premium",
      isPopular: true,
      delay: 400
    },
    {
      title: "Offre Entreprise",
      features: [
        "Tableaux de bord anonymisés pour RH et QVT",
        "Accompagnement personnalisé pour vos équipes",
        "Ateliers et formations sur le bien-être mental",
        "Tarification sur mesure",
      ],
      actionText: "Nous Contacter",
      delay: 600
    },
    {
      title: "Marketplace Bien-être",
      features: [
        "Contenus exclusifs (méditations, articles)",
        "Séances audio guidées par des experts",
        "Accompagnement thérapeutique optionnel",
        "Bientôt disponible !",
      ],
      actionText: "Être Informé(e)",
      delay: 800
    },
  ];

  return (
    <section id="monetization" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-slide-in-left">
            Choisissez l'Accompagnement Qui Vous Convient
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto animate-slide-in-right delay-200">
            Découvrez nos différentes formules pensées pour s'adapter à vos besoins et à ceux de votre organisation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonetizationSection;
