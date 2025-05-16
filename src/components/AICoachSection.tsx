import React, { useEffect, useRef } from "react";

const AICoachSection: React.FC = () => {
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
      id="ai-coach" 
      className="py-16 md:py-24 bg-encre-profonde/20 text-craie-douce animate-on-scroll slide-in-up-on-scroll"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-vert-espoir mb-4 animate-on-scroll-child slide-in-up-on-scroll">Votre Coach IA Personnel (Vision Future)</h2>
          <p className="text-lg md:text-xl text-craie-douce/80 max-w-3xl mx-auto animate-on-scroll-child slide-in-up-on-scroll">
            Imaginez un compagnon intelligent qui vous guide, vous soutient et vous aide à naviguer les défis du quotidien pour un bien-être durable.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-nuit-sereine/50 p-8 md:p-12 rounded-xl shadow-2xl animate-on-scroll-child slide-in-up-on-scroll">
          <h3 className="text-2xl md:text-3xl font-semibold text-craie-douce mb-6 text-center">Comment cela fonctionnerait ?</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl pt-1 text-vert-espoir">💡</div>
              <div>
                <h4 className="text-xl font-semibold text-craie-douce mb-1">Analyse Intelligente</h4>
                <p className="text-craie-douce/70">
                  Notre IA (en conception) analyserait vos réponses aux bilans et, avec votre accord, des données passives (sommeil, activité) pour identifier des tendances et des signaux faibles de votre état mental.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl pt-1 text-vert-espoir">💬</div>
              <div>
                <h4 className="text-xl font-semibold text-craie-douce mb-1">Soutien Proactif & Personnalisé</h4>
                <p className="text-craie-douce/70">
                  Recevez des alertes bienveillantes, des encouragements, et des conseils ciblés pour gérer le stress, améliorer votre concentration ou renforcer votre résilience.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl pt-1 text-vert-espoir">🌱</div>
              <div>
                <h4 className="text-xl font-semibold text-craie-douce mb-1">Croissance Continue</h4>
                <p className="text-craie-douce/70">
                  L\"IA Coach apprendrait avec vous pour vous offrir un accompagnement de plus en plus pertinent et adapté à vos besoins uniques.
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-craie-douce/50 mt-10 text-center">
            (Fonctionnalité IA Coach en cours de développement conceptuel. L\"implémentation complète d\"une telle IA nécessite une infrastructure et des modèles d\"apprentissage machine sophistiqués, non inclus dans la version actuelle purement front-end.)
          </p>
        </div>
      </div>
    </section>
  );
};

export default AICoachSection;

