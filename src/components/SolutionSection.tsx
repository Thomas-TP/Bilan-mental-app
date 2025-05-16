import React, { useEffect, useRef } from 'react';

const SolutionSection: React.FC = () => {
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
      id="solution" 
      className="py-16 md:py-24 bg-encre-profonde/20 text-craie-douce"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-on-scroll slide-in-up-on-scroll text-vert-espoir">Bilan Mental Express : Votre Allié Bien-être</h2>
          <p className="text-lg md:text-xl text-craie-douce/80 max-w-3xl mx-auto animate-on-scroll slide-in-up-on-scroll">
            Une approche simple et proactive pour prendre soin de votre santé mentale au quotidien, directement depuis votre navigateur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          <div className="animate-on-scroll slide-in-up-on-scroll">
            {/* Idéalement, remplacer par une illustration ou une image de qualité */}
            <div className="bg-nuit-sereine p-8 rounded-xl shadow-2xl aspect-video flex items-center justify-center">
              <span className="text-5xl text-vert-espoir">📊</span> {/* Placeholder Icon */}
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {
              [
                {
                  title: "Check-up Quotidien Rapide",
                  description: "7 questions ciblées pour évaluer votre état mental en moins de 2 minutes.",
                  icon: "⏱️"
                },
                {
                  title: "Feedback Personnalisé",
                  description: "Recevez instantanément un score et des conseils adaptés à votre situation.",
                  icon: "💡"
                },
                {
                  title: "Suivi & Évolution",
                  description: "Visualisez vos progrès et comprenez mieux les facteurs influençant votre bien-être (via le futur dashboard).",
                  icon: "📈"
                },
                 {
                  title: "Ressources & Suggestions",
                  description: "Accédez à des outils et des conseils concrets pour cultiver un mental plus sain.",
                  icon: "📚"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-on-scroll slide-in-up-on-scroll p-4 rounded-lg hover:bg-nuit-sereine/50 transition-colors duration-300"
                >
                  <div className="text-3xl pt-1 text-vert-espoir">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-craie-douce mb-1">{feature.title}</h3>
                    <p className="text-craie-douce/70 text-sm md:text-base">{feature.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

