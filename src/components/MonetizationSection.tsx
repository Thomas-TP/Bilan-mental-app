import React, { useEffect, useRef } from "react";

const MonetizationSection: React.FC = () => {
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
      id="monetisation" 
      className="py-16 md:py-24 bg-encre-profonde/20 text-craie-douce animate-on-scroll slide-in-up-on-scroll"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-vert-espoir mb-4 animate-on-scroll-child slide-in-up-on-scroll">Notre Modèle Économique : Transparence et Valeur</h2>
          <p className="text-lg md:text-xl text-craie-douce/80 max-w-3xl mx-auto animate-on-scroll-child slide-in-up-on-scroll">
            Nous souhaitons offrir un accès gratuit aux fonctionnalités essentielles de Bilan Mental Express, tout en proposant des options premium pour ceux qui désirent aller plus loin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Carte Version Gratuite */}
          <div className="bg-nuit-sereine/50 p-8 rounded-xl shadow-xl flex flex-col animate-on-scroll-child slide-in-up-on-scroll">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-craie-douce mb-2">Version Gratuite</h3>
              <p className="text-4xl font-bold text-vert-espoir">0€</p>
              <p className="text-sm text-craie-douce/60">Pour toujours</p>
            </div>
            <ul className="space-y-3 text-craie-douce/80 flex-grow mb-8">
              <li className="flex items-center"><span className="text-vert-espoir mr-2 text-xl">✓</span>Bilan mental quotidien (7 questions)</li>
              <li className="flex items-center"><span className="text-vert-espoir mr-2 text-xl">✓</span>Score et feedback de base</li>
              <li className="flex items-center"><span className="text-vert-espoir mr-2 text-xl">✓</span>Accès aux suggestions concrètes</li>
              <li className="flex items-center"><span className="text-vert-espoir mr-2 text-xl">✓</span>Chatbot d\"aide (réponses de base)</li>
            </ul>
            <button 
              disabled 
              className="w-full bg-gray-600 text-gray-400 font-bold py-3 px-6 rounded-lg cursor-not-allowed"
            >
              Actuellement Inclus
            </button>
          </div>

          {/* Carte Version Premium (Vision) */}
          <div className="bg-vert-espoir p-8 rounded-xl shadow-2xl flex flex-col ring-4 ring-vert-espoir/50 animate-on-scroll-child slide-in-up-on-scroll" style={{ transitionDelay: "0.2s"}}>
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-nuit-sereine mb-2">Version Premium</h3>
              <p className="text-4xl font-bold text-nuit-sereine">À définir</p>
              <p className="text-sm text-nuit-sereine/80">Abonnement mensuel/annuel</p>
            </div>
            <ul className="space-y-3 text-nuit-sereine/90 flex-grow mb-8">
              <li className="flex items-center"><span className="text-nuit-sereine mr-2 text-xl">✓</span><strong>Toutes les fonctionnalités gratuites</strong></li>
              <li className="flex items-center"><span className="text-nuit-sereine mr-2 text-xl">✓</span>Tableau de bord détaillé avec historique et graphiques</li>
              <li className="flex items-center"><span className="text-nuit-sereine mr-2 text-xl">✓</span>Analyses et insights plus poussés de l\"IA Coach</li>
              <li className="flex items-center"><span className="text-nuit-sereine mr-2 text-xl">✓</span>Programmes personnalisés et exercices guidés</li>
              <li className="flex items-center"><span className="text-nuit-sereine mr-2 text-xl">✓</span>Intégration (optionnelle) de données passives</li>
              <li className="flex items-center"><span className="text-nuit-sereine mr-2 text-xl">✓</span>Chatbot avec réponses avancées et contextuelles</li>
            </ul>
            <button 
              disabled
              className="w-full bg-nuit-sereine/80 hover:bg-nuit-sereine text-craie-douce font-bold py-3 px-6 rounded-lg transition-colors duration-300 cursor-not-allowed"
            >
              Prochainement
            </button>
          </div>
        </div>
        <p className="text-center text-sm text-craie-douce/60 mt-12 animate-on-scroll-child slide-in-up-on-scroll" style={{ transitionDelay: "0.4s"}}>
          Notre objectif est de rendre le soutien à la santé mentale accessible, tout en assurant la pérennité et l\"amélioration continue de Bilan Mental Express.
        </p>
      </div>
    </section>
  );
};

export default MonetizationSection;

