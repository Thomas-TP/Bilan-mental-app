import React from 'react';

// Placeholder pour le tableau de bord détaillé
// Pourrait afficher l'historique des bilans (si stockage local), des graphiques d'évolution, etc.

const DashboardSection: React.FC = () => {
  return (
    <section id="dashboard" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Votre Tableau de Bord Personnel</h2>
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <p className="text-gray-700 mb-4">
            Cette section affichera bientôt un aperçu détaillé de votre bien-être mental au fil du temps, 
            avec des graphiques d'évolution et des analyses plus poussées.
          </p>
          <p className="text-gray-600 text-sm">
            (Fonctionnalité en cours de développement)
          </p>
          {/* Exemple de contenu possible :
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Score Moyen (7 derniers jours)</h3>
              <p className="text-3xl font-bold text-blue-600">25/35</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Tendance Humeur</h3>
              <p className="text-3xl font-bold text-green-600">Positive &#x1F7E2;</p>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;

