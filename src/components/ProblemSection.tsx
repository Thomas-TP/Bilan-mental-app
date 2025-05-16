import React, { useEffect, useRef } from 'react';

const ProblemSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
              el.classList.add('is-visible');
              (el as HTMLElement).style.transitionDelay = `${index * 0.15}s`;
            });
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
      id="probleme" 
      className="py-16 md:py-24 bg-nuit-sereine text-craie-douce"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-on-scroll slide-in-up-on-scroll text-vert-espoir">Le Mal-être Invisible du Quotidien</h2>
          <p className="text-lg md:text-xl text-craie-douce/80 max-w-3xl mx-auto animate-on-scroll slide-in-up-on-scroll">
            Stress, charge mentale, fatigue émotionnelle... Des maux souvent banalisés qui pèsent sur notre équilibre et notre productivité sans que nous en ayons toujours conscience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {
            [
              {
                title: "Surcharge Cognitive",
                description: "Un flux constant d'informations et de sollicitations qui épuise nos ressources mentales.",
                icon: "🧠" // Placeholder icon
              },
              {
                title: "Pression & Performance",
                description: "L'exigence de performance au travail et dans la vie personnelle génère un stress chronique.",
                icon: "⚖️" // Placeholder icon
              },
              {
                title: "Isolement Subtil",
                description: "Moins de liens sociaux de qualité, un sentiment de déconnexion malgré l'hyper-connectivité.",
                icon: "🔗" // Placeholder icon
              }
            ].map((problem, index) => (
              <div 
                key={index} 
                className="bg-encre-profonde/30 p-6 md:p-8 rounded-xl shadow-xl hover:shadow-vert-espoir/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-on-scroll slide-in-up-on-scroll"
              >
                <div className="text-4xl mb-4 text-vert-espoir">{problem.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-craie-douce mb-3">{problem.title}</h3>
                <p className="text-craie-douce/70 text-sm md:text-base">{problem.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

