import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in', 'animate-slide-in-up');
            // Optionnel: déconnecter l'observateur après la première animation
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Déclenche quand 10% de la section est visible
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="accueil" 
      className="min-h-screen flex items-center justify-center bg-nuit-sereine text-craie-douce pt-20 md:pt-24 opacity-0"
    >
      <div className="container mx-auto px-6 text-center">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-on-scroll slide-in-up-on-scroll"
          style={{ animationDelay: '0.2s' }} // Décalage pour l'animation
        >
          Votre Bien-être Mental, <span className="text-vert-espoir">Simplifié</span>.
        </h1>
        <p 
          className="text-lg md:text-xl lg:text-2xl text-craie-douce/80 mb-10 max-w-3xl mx-auto animate-on-scroll slide-in-up-on-scroll"
          style={{ animationDelay: '0.4s' }}
        >
          Découvrez Bilan Mental Express : l’outil quotidien pour comprendre et améliorer votre équilibre intérieur, avec des conseils personnalisés et un soutien bienveillant.
        </p>
        <div 
          className="animate-on-scroll slide-in-up-on-scroll"
          style={{ animationDelay: '0.6s' }}
        >
          <a 
            href="#le-bilan" 
            className="bg-vert-espoir hover:bg-opacity-80 text-nuit-sereine font-bold py-4 px-10 rounded-lg text-lg md:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-vert-espoir/30"
          >
            Commencer mon Bilan
          </a>
        </div>
      </div>
      {/* Possibilité d'ajouter une image de fond subtile ou une illustration SVG animée ici */}
    </section>
  );
};

export default HeroSection;

