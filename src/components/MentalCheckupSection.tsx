import React, { useState, useEffect, useRef } from "react";

// Définition des types pour les questions et les réponses
interface Answer {
  text: string;
  score: number;
}

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Comment évaluez-vous votre niveau d\'énergie aujourd\'hui ?",
    answers: [
      { text: "Très bas, épuisé(e)", score: 1 },
      { text: "Plutôt bas", score: 2 },
      { text: "Moyen", score: 3 },
      { text: "Plutôt élevé", score: 4 },
      { text: "Très élevé, plein(e) d\'énergie", score: 5 },
    ],
  },
  {
    id: 2,
    text: "Votre sommeil cette nuit a-t-il été réparateur ?",
    answers: [
      { text: "Pas du tout, très mauvaise nuit", score: 1 },
      { text: "Peu réparateur", score: 2 },
      { text: "Moyennement", score: 3 },
      { text: "Plutôt bien dormi", score: 4 },
      { text: "Très bien, sommeil profond", score: 5 },
    ],
  },
  {
    id: 3,
    text: "Comment vous sentez-vous face à vos tâches/responsabilités du jour ?",
    answers: [
      { text: "Complètement dépassé(e)", score: 1 },
      { text: "Anxieux(se), stressé(e)", score: 2 },
      { text: "Gérable, mais avec effort", score: 3 },
      { text: "Confiant(e) et organisé(e)", score: 4 },
      { text: "Très motivé(e) et serein(e)", score: 5 },
    ],
  },
  {
    id: 4,
    text: "Avez-vous réussi à prendre du temps pour vous récemment (loisir, détente) ?",
    answers: [
      { text: "Aucun temps pour moi", score: 1 },
      { text: "Très peu, difficilement", score: 2 },
      { text: "Un peu, mais pas assez", score: 3 },
      { text: "Oui, régulièrement", score: 4 },
      { text: "Oui, pleinement et fréquemment", score: 5 },
    ],
  },
  {
    id: 5,
    text: "Votre humeur générale ces dernières heures est plutôt...",
    answers: [
      { text: "Très négative, irritable", score: 1 },
      { text: "Morose, maussade", score: 2 },
      { text: "Neutre, sans grand changement", score: 3 },
      { text: "Positive, de bonne humeur", score: 4 },
      { text: "Excellente, joyeux(se)", score: 5 },
    ],
  },
  {
    id: 6,
    text: "Vous sentez-vous connecté(e) aux autres (amis, famille, collègues) ?",
    answers: [
      { text: "Très isolé(e), déconnecté(e)", score: 1 },
      { text: "Plutôt seul(e)", score: 2 },
      { text: "Ça dépend des moments", score: 3 },
      { text: "Bien connecté(e) dans l\'ensemble", score: 4 },
      { text: "Très entouré(e) et soutenu(e)", score: 5 },
    ],
  },
  {
    id: 7,
    text: "Avez-vous ressenti de la joie ou du plaisir récemment ?",
    answers: [
      { text: "Non, pas du tout", score: 1 },
      { text: "Rarement ou très peu", score: 2 },
      { text: "Occasionnellement", score: 3 },
      { text: "Oui, plusieurs fois", score: 4 },
      { text: "Oui, fréquemment et intensément", score: 5 },
    ],
  },
];

const MentalCheckupSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [totalScore, setTotalScore] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const questionContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
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

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (questionContainerRef.current) {
      questionContainerRef.current.classList.remove("animate-fade-in");
      void questionContainerRef.current.offsetWidth; // Trigger reflow
      questionContainerRef.current.classList.add("animate-fade-in");
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const finalScore = newAnswers.reduce((acc, curr) => acc + curr, 0);
      setTotalScore(finalScore);
      setShowResults(true);
    }
  };

  const getFeedback = () => {
    if (totalScore === null) return "";
    if (totalScore <= 10) return "Votre score suggère que vous traversez une période difficile. N\'hésitez pas à chercher du soutien. Des petites actions quotidiennes peuvent aider, mais un professionnel peut vous offrir un accompagnement adapté.";
    if (totalScore <= 17) return "Il semble que votre bien-être mental soit mis à l\'épreuve. Pensez à intégrer des moments de détente et à parler de ce que vous ressentez. Nos suggestions pourraient vous être utiles.";
    if (totalScore <= 24) return "Votre équilibre mental semble correct, mais il y a peut-être des points d\'attention. Continuez à prendre soin de vous et à surveiller les signaux de stress ou de fatigue.";
    if (totalScore <= 30) return "Vous semblez plutôt bien ! Continuez à cultiver vos habitudes positives et à rester attentif(ve) à vos besoins.";
    return "Excellent ! Votre score indique un très bon équilibre mental. Continuez sur cette lancée et partagez votre positivité !";
  };

  const restartCheckup = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTotalScore(null);
    setShowResults(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <section 
      ref={sectionRef} 
      id="le-bilan" 
      className="py-16 md:py-24 bg-nuit-sereine text-craie-douce animate-on-scroll slide-in-up-on-scroll"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-vert-espoir">Votre Bilan Mental Express</h2>
          <p className="text-lg md:text-xl text-craie-douce/80 max-w-3xl mx-auto">
            Prenez quelques instants pour vous. Répondez honnêtement pour un aperçu de votre état actuel.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-encre-profonde/30 p-6 md:p-10 rounded-xl shadow-2xl">
          {!showResults ? (
            <div ref={questionContainerRef} className="transition-opacity duration-500 ease-in-out">
              <p className="text-sm text-craie-douce/70 mb-2">
                Question {currentQuestionIndex + 1} sur {questions.length}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-craie-douce mb-6 md:mb-8 min-h-[60px] md:min-h-[80px]">
                {currentQuestion.text}
              </h3>
              <div className="space-y-3 md:space-y-4">
                {currentQuestion.answers.map((answer) => (
                  <button
                    key={answer.text}
                    onClick={() => handleAnswer(answer.score)}
                    className="w-full text-left bg-nuit-sereine/50 hover:bg-vert-espoir hover:text-nuit-sereine text-craie-douce font-medium py-3 px-5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-vert-espoir"
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
              <div className="mt-8 h-2 bg-nuit-sereine/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-vert-espoir transition-all duration-500 ease-in-out"
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          ) : (
            <div className="text-center animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-bold text-vert-espoir mb-4">Résultats de votre Bilan</h3>
              {/* Score retiré sur demande de l'utilisateur */}
              {/* <p className="text-4xl md:text-5xl font-bold text-craie-douce mb-6">
                Score : {totalScore} / {questions.length * 5}
              </p> */}
              <p className="text-md md:text-lg text-craie-douce/90 mb-8 leading-relaxed">
                {getFeedback()}
              </p>
              <button
                onClick={restartCheckup}
                className="bg-vert-espoir hover:bg-opacity-80 text-nuit-sereine font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-vert-espoir/30"
              >
                Refaire le Bilan
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MentalCheckupSection;

