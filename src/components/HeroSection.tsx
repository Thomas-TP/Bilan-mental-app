import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-500 to-green-400 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">
          Bilan Mental <span className="text-yellow-300">Express</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up delay-500">
          Votre check-up mental quotidien en 5 minutes pour un esprit sain.
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto animate-fade-in-up delay-1000">
          Bilan Mental Express est une application mobile intelligente qui permet aux utilisateurs de faire un véritable check-up mental quotidien en seulement cinq minutes. En combinant intelligence artificielle, techniques de psychologie positive et données passives, elle fournit un tableau de bord personnel de l’état psychologique de l’utilisateur, avec des recommandations concrètes pour se sentir mieux, jour après jour.
        </p>
        <a
          href="#solution"
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 animate-bounce-slow delay-1500"
        >
          Découvrez comment
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
