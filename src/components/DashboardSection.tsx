import React, { useEffect, useRef } from "react";

const DashboardSection: React.FC = () => {
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
      id="dashboard" 
      className="py-16 md:py-24 bg-encre-profonde/10 text-craie-douce animate-on-scroll slide-in-up-on-scroll"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-vert-espoir mb-6 animate-on-scroll-child slide-in-up-on-scroll">Votre Tableau de Bord Personnel</h2>
        <p className="text-lg md:text-xl text-craie-douce/80 mb-10 max-w-2xl mx-auto animate-on-scroll-child slide-in-up-on-scroll">
          Suivez votre évolution, identifiez des tendances et comprenez mieux les facteurs qui influencent votre bien-être mental au fil du temps.
        </p>
        <div className="bg-nuit-sereine/50 p-8 md:p-12 rounded-xl shadow-2xl animate-on-scroll-child slide-in-up-on-scroll">
          <h3 className="text-2xl font-semibold text-craie-douce mb-4">Prochainement disponible</h3>
          <p className="text-craie-douce/70 mb-6">
            Cette section est en cours de conception et vous permettra bientôt de visualiser vos bilans passés, d\"observer des graphiques d\"évolution de votre humeur, de votre niveau d\"énergie, et d\"autres indicateurs clés. L\"objectif est de vous offrir un outil puissant pour une meilleure connaissance de soi.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-encre-profonde/30 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-vert-espoir mb-2">Historique des Bilans</h4>
              <p className="text-sm text-craie-douce/60">Accédez à tous vos bilans passés et revoyez vos réponses.</p>
            </div>
            <div className="bg-encre-profonde/30 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-vert-espoir mb-2">Graphiques d\"Évolution</h4>
              <p className="text-sm text-craie-douce/60">Visualisez vos scores et tendances sur des périodes choisies.</p>
            </div>
          </div>
          <p className="text-xs text-craie-douce/50 mt-8">
            Nous travaillons activement pour vous apporter ces fonctionnalités enrichissantes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;

