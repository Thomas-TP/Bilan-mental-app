import React, { useEffect, useRef } from "react";

const PassiveDataSection: React.FC = () => {
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
      id="passive-data" 
      className="py-16 md:py-24 bg-nuit-sereine text-craie-douce animate-on-scroll slide-in-up-on-scroll"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-vert-espoir mb-4 animate-on-scroll-child slide-in-up-on-scroll">Analyse de Données Passives (Vision Future)</h2>
          <p className="text-lg md:text-xl text-craie-douce/80 max-w-3xl mx-auto animate-on-scroll-child slide-in-up-on-scroll">
            Pour une compréhension encore plus fine et proactive de votre bien-être, Bilan Mental Express envisage l\"intégration de l\"analyse de données passives.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-encre-profonde/30 p-8 md:p-12 rounded-xl shadow-2xl animate-on-scroll-child slide-in-up-on-scroll">
          <h3 className="text-2xl md:text-3xl font-semibold text-craie-douce mb-6 text-center">Quelles données et pourquoi ?</h3>
          <p className="text-craie-douce/70 mb-6">
            Dans une version future, et toujours avec votre consentement explicite, nous pourrions analyser (via des capteurs de smartphone, objets connectés ou applications tierces) des indicateurs comme :
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <span className="text-xl text-vert-espoir pt-1">🛌</span>
              <div>
                <h4 className="font-semibold text-craie-douce">Qualité du Sommeil</h4>
                <p className="text-sm text-craie-douce/60">Durée, cycles, perturbations...</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-xl text-vert-espoir pt-1">🏃</span>
              <div>
                <h4 className="font-semibold text-craie-douce">Niveau d\"Activité Physique</h4>
                <p className="text-sm text-craie-douce/60">Nombre de pas, minutes actives...</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-xl text-vert-espoir pt-1">📱</span>
              <div>
                <h4 className="font-semibold text-craie-douce">Utilisation des Écrans</h4>
                <p className="text-sm text-craie-douce/60">Temps passé, type d\"applications...</p>
              </div>
            </li>
             <li className="flex items-start space-x-3">
              <span className="text-xl text-vert-espoir pt-1">⌨️</span>
              <div>
                <h4 className="font-semibold text-craie-douce">Rythme de Frappe (Optionnel)</h4>
                <p className="text-sm text-craie-douce/60">Indicateur potentiel de stress ou concentration.</p>
              </div>
            </li>
          </ul>
          <p className="text-craie-douce/70 mb-4">
            L\"objectif serait de croiser ces informations avec vos bilans quotidiens pour offrir des aperçus plus riches et des recommandations encore plus personnalisées par notre IA Coach, vous aidant à identifier des corrélations et à agir de manière préventive.
          </p>
          <p className="text-xs text-craie-douce/50 text-center">
            (Fonctionnalité d\"analyse de données passives en cours de conception pour une future version. L\"implémentation actuelle du site est purement front-end et ne collecte ni n\"analyse de telles données. Toute future intégration se ferait dans le plus grand respect de la vie privée et avec des consentements clairs.)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PassiveDataSection;

