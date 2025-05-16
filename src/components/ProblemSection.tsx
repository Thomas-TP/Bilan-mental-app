import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-slide-in-left">
          Le Stress et l'Anxiété : Un Défi Moderne
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 animate-slide-in-right delay-300">
          De plus en plus de personnes ressentent du stress, de l’anxiété, de la surcharge mentale ou des baisses d’énergie sans comprendre les causes exactes. L’accès à un accompagnement psychologique reste difficile, coûteux, ou stigmatisant. Il manque un outil simple, rapide et accessible pour faire le point sur son état mental au quotidien.
        </p>
        {/* Optional: Add some icons or subtle illustrations here */}
      </div>
    </section>
  );
};

export default ProblemSection;
