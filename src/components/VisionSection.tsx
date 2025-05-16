import React, { useEffect, useRef } from "react";

const VisionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.querySelectorAll(".animate-on-scroll-child").forEach((el, index) => {
              (el as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
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

  return (
    <section 
      ref={sectionRef}
      id="vision" 
      className="py-16 md:py-24 bg-nuit-sereine text-craie-douce animate-on-scroll slide-in-up-on-scroll"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-vert-espoir mb-4 animate-on-scroll-child slide-in-up-on-scroll">Notre Vision : Un Bien-être Mental Accessible à Tous</h2>
          <p className="text-lg md:text-xl text-craie-douce/80 max-w-3xl mx-auto animate-on-scroll-child slide-in-up-on-scroll">
            Nous croyons que prendre soin de sa santé mentale devrait être aussi simple et naturel que de prendre soin de sa santé physique. Bilan Mental Express est la première étape vers cet objectif.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-on-scroll-child slide-in-up-on-scroll">
            {/* Idéalement, une illustration inspirante ou une photo de haute qualité */}
            <div className="bg-encre-profonde/30 p-8 rounded-xl shadow-2xl aspect-w-16 aspect-h-9 flex items-center justify-center">
              <span className="text-6xl text-vert-espoir">🌍</span> {/* Placeholder Icon */}
            </div>
          </div>
          <div className="space-y-6 animate-on-scroll-child slide-in-up-on-scroll" style={{ transitionDelay: "0.2s"}}>
            <h3 className="text-2xl md:text-3xl font-semibold text-craie-douce">Plus qu\"un outil, une philosophie :</h3>
            <p className="text-craie-douce/70 leading-relaxed">
              Notre ambition est de déstigmatiser la santé mentale et de fournir des ressources proactives pour aider chacun à cultiver sa résilience, à mieux se comprendre et à s\"épanouir. Nous visons à créer un écosystème de bien-être où la technologie sert de catalyseur pour une meilleure connaissance de soi et un soutien continu.
            </p>
            <p className="text-craie-douce/70 leading-relaxed">
              Bilan Mental Express évoluera pour intégrer des fonctionnalités toujours plus personnalisées et prédictives, tout en garantissant la confidentialité et la sécurité de vos données.
            </p>
            <a 
              href="#le-bilan" 
              className="inline-block bg-vert-espoir hover:bg-opacity-80 text-nuit-sereine font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-vert-espoir/30 mt-4"
            >
              Découvrir le Bilan
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionSection;

