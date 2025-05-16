import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-16 md:py-24 bg-gradient-to-br from-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-down">
          Vers un Avenir Mentalement Plus Sain
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up delay-300">
          Notre vision est de faire de Bilan Mental Express le "bilan de santé mentale" quotidien référent, un peu comme une brosse à dents pour le cerveau. Nous aspirons à ce qu'il devienne un réflexe simple et accessible pour prévenir les crises, restaurer l'énergie mentale et favoriser une société plus à l'écoute d'elle-même et du bien-être de chacun. Nous croyons en un futur où prendre soin de sa santé mentale est aussi naturel que de prendre soin de sa santé physique.
        </p>
        {/* Optional: Add a subtle background pattern or illustration */}
      </div>
    </section>
  );
};

export default VisionSection;
