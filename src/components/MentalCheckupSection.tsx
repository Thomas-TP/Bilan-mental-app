import React, { useState } from 'react';

// Définition des types pour les questions et réponses
interface AnswerOption {
  text: string;
  value: number;
}

interface Question {
  id: number;
  text: string;
  theme: string;
  options: AnswerOption[];
  answerType: 'scale' | 'choice';
}

// Données du questionnaire (basées sur questionnaire_design.md)
const quizQuestions: Question[] = [
  {
    id: 1, theme: "Humeur et Émotions",
    text: "Comment décririez-vous votre humeur générale aujourd'hui ?",
    answerType: 'scale',
    options: [
      { text: "Très maussade", value: 1 },
      { text: "Plutôt maussade", value: 2 },
      { text: "Neutre", value: 3 },
      { text: "Plutôt bonne", value: 4 },
      { text: "Excellente", value: 5 },
    ],
  },
  {
    id: 2, theme: "Niveau de Stress et d'Anxiété",
    text: "Sur une échelle de 1 à 5, comment évaluez-vous votre niveau de stress aujourd'hui ?",
    answerType: 'scale',
    options: [
      { text: "Très bas", value: 1 },
      { text: "Bas", value: 2 },
      { text: "Modéré", value: 3 },
      { text: "Élevé", value: 4 },
      { text: "Très élevé", value: 5 },
    ],
  },
  {
    id: 3, theme: "Qualité du Sommeil",
    text: "Comment avez-vous dormi la nuit dernière ?",
    answerType: 'choice',
    options: [
      { text: "Très mal, peu reposant", value: 1 },
      { text: "Assez mal, sommeil agité", value: 2 },
      { text: "Moyen, ni bien ni mal", value: 3 },
      { text: "Bien, sommeil réparateur", value: 4 },
      { text: "Très bien, parfaitement reposé(e)", value: 5 },
    ],
  },
  {
    id: 4, theme: "Niveau d'Énergie et Vitalité",
    text: "Comment vous sentez-vous physiquement et mentalement en termes d'énergie aujourd'hui ?",
    answerType: 'scale',
    options: [
      { text: "Totalement à plat, épuisé(e)", value: 1 },
      { text: "Fatigué(e), peu d'énergie", value: 2 },
      { text: "Niveau d'énergie moyen", value: 3 },
      { text: "Plein(e) d'énergie", value: 4 },
      { text: "Débordant(e) d'énergie", value: 5 },
    ],
  },
  {
    id: 5, theme: "Concentration et Productivité",
    text: "Avez-vous eu des difficultés à vous concentrer sur vos tâches aujourd'hui ?",
    answerType: 'scale',
    options: [
      { text: "Oui, constamment", value: 5 }, // Inversion pour le score, difficulté élevée = mauvais
      { text: "Oui, souvent", value: 4 },
      { text: "Parfois", value: 3 },
      { text: "Rarement", value: 2 },
      { text: "Pas du tout", value: 1 },
    ],
  },
  {
    id: 6, theme: "Relations Sociales et Connexion",
    text: "Vous êtes-vous senti(e) connecté(e) et soutenu(e) par votre entourage récemment ?",
    answerType: 'scale',
    options: [
      { text: "Pas du tout connecté(e) ni soutenu(e)", value: 1 },
      { text: "Peu connecté(e) et soutenu(e)", value: 2 },
      { text: "Moyennement connecté(e) et soutenu(e)", value: 3 },
      { text: "Bien connecté(e) et soutenu(e)", value: 4 },
      { text: "Très connecté(e) et pleinement soutenu(e)", value: 5 },
    ],
  },
  {
    id: 7, theme: "Sentiment d'Accomplissement et Positivité",
    text: "Avez-vous ressenti un sentiment de satisfaction ou d'accomplissement récemment (petites ou grandes choses) ?",
    answerType: 'scale',
    options: [
      { text: "Aucun sentiment de satisfaction", value: 1 },
      { text: "Rarement", value: 2 },
      { text: "Occasionnellement", value: 3 },
      { text: "Souvent", value: 4 },
      { text: "Très souvent, un réel sentiment d'accomplissement", value: 5 },
    ],
  },
];

interface AnswersState {
  [key: number]: number; // questionId: answerValue
}

const MentalCheckupSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswersState>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswer = (questionId: number, answerValue: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerValue }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, value) => sum + value, 0);
  };

  const getFeedback = (score: number): { category: string; message: string; suggestions: string[] } => {
    if (score <= 15) { // Seuil bas (7-15 dans la conception)
      return {
        category: "Besoin d'attention",
        message: "Il semble que vous traversiez une période un peu difficile. C'est courageux de faire ce bilan. N'oubliez pas que vous n'êtes pas seul(e).",
        suggestions: [
          "Prenez quelques minutes pour une respiration guidée afin de vous recentrer.",
          "Essayez une courte activité de journaling pour exprimer ce que vous ressentez.",
          "N'hésitez pas à parler à une personne de confiance ou à envisager de contacter un professionnel.",
        ],
      };
    } else if (score <= 27) { // Seuil moyen (16-27 dans la conception)
      return {
        category: "Globalement stable",
        message: "Votre bilan montre un équilibre global, c'est une bonne base ! Il y a toujours des petites choses que l'on peut ajuster pour se sentir encore mieux.",
        suggestions: [
          "Pourquoi ne pas intégrer une micro-déconnexion dans votre journée ?",
          "Pensez à une activité créative qui vous plaît pour stimuler votre esprit.",
          "Continuez à prêter attention à votre sommeil et à votre niveau d'énergie.",
        ],
      };
    } else { // Seuil élevé (28-35 dans la conception)
      return {
        category: "Bon état de bien-être",
        message: "Excellent ! Votre bilan indique un très bon état de bien-être mental. Continuez sur cette lancée !",
        suggestions: [
          "Maintenez vos bonnes habitudes en matière de sommeil, d'activité et de relations sociales.",
          "Partagez votre positivité avec votre entourage !",
          "Explorez de nouvelles activités pour continuer à nourrir votre esprit.",
        ],
      };
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setQuizStarted(true);
  };
  
  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  }

  if (!quizStarted) {
    return (
      <section id="mental-checkup-start" className="py-16 md:py-24 bg-gradient-to-br from-blue-500 to-green-400 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-down">Prêt pour votre Bilan Mental Express ?</h2>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-300">
            Prenez 5 minutes pour faire le point sur votre bien-être mental.
          </p>
          <button
            onClick={startQuiz}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 animate-bounce-slow delay-500"
          >
            Commencer le Bilan
          </button>
        </div>
      </section>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const feedback = getFeedback(score);
    return (
      <section id="mental-checkup-results" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Vos Résultats</h2>
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <p className="text-xl font-semibold text-blue-600 mb-2">Score Total : {score} / {quizQuestions.length * 5}</p>
            <p className="text-lg font-medium text-green-600 mb-4">Catégorie : {feedback.category}</p>
            <p className="text-gray-700 mb-6">{feedback.message}</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Suggestions pour vous :</h3>
            <ul className="list-disc list-inside text-left text-gray-600 space-y-2 mb-8">
              {feedback.suggestions.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
            <button
              onClick={restartQuiz}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Refaire le Bilan
            </button>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <section id="mental-checkup-quiz" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-6 max-w-xl">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <div className="mb-6">
            <p className="text-sm text-blue-600 font-semibold">Thème : {currentQuestion.theme}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1 mb-3">Question {currentQuestionIndex + 1} sur {quizQuestions.length}</h2>
            <p className="text-lg text-gray-700">{currentQuestion.text}</p>
          </div>

          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className={`w-full text-left p-4 rounded-md border-2 transition-all duration-200 ease-in-out 
                            ${answers[currentQuestion.id] === option.value 
                              ? 'bg-blue-500 text-white border-blue-600 ring-2 ring-blue-300'
                              : 'bg-gray-50 hover:bg-gray-100 border-gray-300 hover:border-blue-400'}`}
              >
                {option.text}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md disabled:opacity-50 transition-colors duration-300"
            >
              Précédent
            </button>
            <div className="w-full mx-4">
              <div className="bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <button
              onClick={handleNext}
              disabled={answers[currentQuestion.id] === undefined}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md disabled:opacity-50 transition-colors duration-300"
            >
              {currentQuestionIndex === quizQuestions.length - 1 ? 'Terminer' : 'Suivant'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalCheckupSection;

