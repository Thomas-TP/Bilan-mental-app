import React from 'react';

const PassiveDataSection: React.FC = () => {
  return (
    <section id="passive-data" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Analyse de Données Passives (Vision)</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pour une compréhension encore plus fine de votre bien-être, Bilan Mental Express envisage d'intégrer l'analyse de données passives.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">Quelles données ?</h3>
          <p className="text-gray-700 mb-4">
            Dans une version future et plus avancée (nécessitant votre consentement explicite et potentiellement une application mobile dédiée ou des connexions à des services tiers), nous pourrions analyser des indicateurs tels que :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Qualité et durée du sommeil (via des capteurs ou des applications de suivi).</li>
            <li>Niveau d'activité physique.</li>
            <li>Temps d'écran et utilisation des applications.</li>
            <li>Rythme de frappe au clavier (pour évaluer la concentration ou le stress).</li>
          </ul>
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">Objectif</h3>
          <p className="text-gray-700 mb-4">
            L'objectif serait de croiser ces informations avec vos bilans quotidiens pour offrir des aperçus plus riches et des recommandations encore plus personnalisées par notre IA Coach.
          </p>
          <p className="text-gray-600 text-sm">
            (Fonctionnalité d'analyse de données passives en cours de conception pour une future version. L'implémentation actuelle du site est purement front-end et ne collecte ni n'analyse de telles données. Toute future intégration se ferait dans le plus grand respect de la vie privée et avec des consentements clairs.)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PassiveDataSection;

