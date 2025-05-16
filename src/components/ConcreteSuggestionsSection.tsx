import React, { useEffect, useRef } from "react";

interface SuggestionCardProps {
  title: string;
  description: string;
  icon: string; 
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-nuit-sereine/50 p-6 rounded-xl shadow-lg hover:shadow-vert-espoir/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 h-full flex flex-col">
      <div className="text-5xl mb-5 text-center text-vert-espoir">{icon}</div>
      <h3 className="text-xl font-bold text-craie-douce mb-3 text-center">{title}</h3>
      <p className="text-craie-douce/70 text-sm text-center flex-grow">{description}</p>
    </div>
  );
};

const ConcreteSuggestionsSection: React.FC = () => {
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


  const suggestions = [
    {
      title: "Respiration Consciente",
      description: "Prenez 5 minutes pour une séance de respiration profonde. Inspirez lentement par le nez, retenez quelques secondes, puis expirez doucement par la bouche. Répétez.",
      icon: "🌬️",
    },
    {
      title: "Pause Active & Créative",
      description: "Accordez-vous un moment pour une activité qui vous plaît : dessiner, écrire, écouter de la musique, ou simplement marcher quelques minutes.",
      icon: "🎨",
    },
    {
      title: "Micro-Déconnexion Numérique",
      description: "Éloignez-vous de vos écrans pendant 10-15 minutes. Levez-vous, étirez-vous, regardez par la fenêtre ou buvez un verre d\"eau.",
      icon: "🔌", 
    },
    {
      title: "Gratitude Express",
      description: "Notez mentalement ou sur papier 3 choses, même petites, pour lesquelles vous êtes reconnaissant(e) aujourd\"hui.",
      icon: "📓", 
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="ressources" // Changé l\'id pour correspondre au menu du Header
      className="py-16 md:py-24 bg-nuit-sereine text-craie-douce animate-on-scroll slide-in-up-on-scroll"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-vert-espoir mb-4 animate-on-scroll-child slide-in-up-on-scroll">Des Clés pour Votre Quotidien</h2>
          <p className="text-lg md:text-xl text-craie-douce/80 max-w-3xl mx-auto animate-on-scroll-child slide-in-up-on-scroll">
            Intégrez ces actions simples dans votre routine pour cultiver un esprit plus serein et résilient.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="animate-on-scroll-child slide-in-up-on-scroll h-full">
              <SuggestionCard {...suggestion} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConcreteSuggestionsSection;

