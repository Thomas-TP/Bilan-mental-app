import React from 'react';

const AICoachSection: React.FC = () => {
  return (
    <section id="ai-coach" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Votre Coach IA Personnel</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Imaginez un coach intelligent qui vous accompagne au quotidien, détecte les signaux faibles de votre état mental et vous offre un soutien proactif.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-blue-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Comment ça marche (Vision) ?</h3>
          <p className="text-gray-700 mb-4">
            Notre IA Coach (actuellement en phase de conception avancée) analysera vos réponses au bilan quotidien et, à terme, les données passives que vous choisirez de partager (sommeil, activité) pour identifier des tendances, des schémas et des évolutions de votre état de stress, de fatigue mentale ou de charge cognitive.
          </p>
          <p className="text-gray-700 mb-4">
            Elle pourra alors vous fournir des alertes bienveillantes, des encouragements personnalisés et des conseils encore plus ciblés pour vous aider à naviguer les défis du quotidien et à maintenir un équilibre mental optimal.
          </p>
          <p className="text-gray-600 text-sm">
            (Fonctionnalité IA Coach en cours de développement pour une future version. L'implémentation complète d'une telle IA nécessite une infrastructure backend et des modèles d'apprentissage machine sophistiqués.)
          </p>
        </div>
      </div>
    </section>
  );
};

export default AICoachSection;

