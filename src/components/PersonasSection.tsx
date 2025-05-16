import React, { useEffect, useRef } from "react";

const PersonasSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.querySelectorAll(".animate-on-scroll-child").forEach((el, index) => {
              (el as HTMLElement).style.transitionDelay = `${index * 0.15}s`;
              el.classList.add("is-visible");
            });
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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

  const personas = [
    {
      name: "Léa, 28 ans, Chef de Projet Digital",
      challenge: "Submergée par les deadlines et la charge mentale, Léa cherche à mieux gérer son stress et à retrouver un équilibre vie pro/vie perso.",
      needs: "Outils rapides, discrets et efficaces pour un check-up quotidien et des conseils actionnables.",
      icon: "👩‍💻"
    },
    {
      name: "Marc (anciennement Mojito), 32 ans, Freelance Créatif",
      challenge: "Confronté à l\"incertitude et à la pression de la performance, Marc a besoin de structurer ses journées et de maintenir sa motivation.",
      needs: "Suivi de son état émotionnel, techniques de concentration et gestion de l\"anxiété.",
      icon: "👨‍🎨"
    },
    {
      name: "Sophie, 45 ans, Mère et Entrepreneure",
      challenge: "Jonglant entre ses responsabilités familiales et professionnelles, Sophie se sent souvent épuisée et a du mal à prendre du temps pour elle.",
      needs: "Solutions pour identifier rapidement les signaux de fatigue, astuces pour se ressourcer et prioriser son bien-être.",
      icon: "🧑‍💼"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="personas" 
      className="py-16 md:py-24 bg-encre-profonde/20 text-craie-douce animate-on-scroll slide-in-up-on-scroll"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-vert-espoir mb-4 animate-on-scroll-child slide-in-up-on-scroll">À Qui S\"Adresse Bilan Mental Express ?</h2>
          <p className="text-lg md:text-xl text-craie-douce/80 max-w-3xl mx-auto animate-on-scroll-child slide-in-up-on-scroll">
            Nous avons conçu cet outil pour tous ceux qui souhaitent prendre activement soin de leur bien-être mental, de manière simple et intégrée à leur quotidien.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {personas.map((persona, index) => (
            <div 
              key={index} 
              className="bg-nuit-sereine/50 p-6 md:p-8 rounded-xl shadow-xl hover:shadow-vert-espoir/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 animate-on-scroll-child slide-in-up-on-scroll h-full flex flex-col"
            >
              <div className="text-5xl mb-5 text-center text-vert-espoir">{persona.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-craie-douce mb-3">{persona.name}</h3>
              <p className="text-sm text-craie-douce/70 mb-2"><strong className="text-craie-douce/90">Défi :</strong> {persona.challenge}</p>
              <p className="text-sm text-craie-douce/70 flex-grow"><strong className="text-craie-douce/90">Besoin :</strong> {persona.needs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;

