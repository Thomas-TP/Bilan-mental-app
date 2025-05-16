import React, { useState, useEffect, useRef } from "react";

// Icone du Chatbot
const ChatbotIcon: React.FC<{ onClick: () => void; isOpen: boolean }> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 bg-vert-espoir hover:bg-opacity-80 text-nuit-sereine p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none z-[100] ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100 animate-bounce-slow"}`}
      aria-label={isOpen ? "Fermer le chatbot" : "Ouvrir le chatbot"}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2s10 4.477 10 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8H5a2 2 0 00-2 2v4a2 2 0 002 2h2v2m4-6h4m0 0l-2-2m2 2l-2 2" />
      </svg>
    </button>
  );
};

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  options?: string[]; // Pour les suggestions de questions
}

// Fenêtre du Chatbot
const ChatWindow: React.FC<{ onClose: () => void; isOpen: boolean }> = ({ onClose, isOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l\"assistant virtuel de Bilan Mental Express. Comment puis-je vous aider aujourd\"hui ?",
      sender: "bot",
      options: ["Qu\"est-ce que Bilan Mental Express ?", "Comment fonctionne le bilan ?", "Je me sens stressé(e)"],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300); // Petit délai pour l\"animation d\"ouverture
    }
  }, [isOpen]);

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase().trim();

    // Réponses basées sur des mots-clés et un peu de contexte simple
    if (lowerInput.includes("bonjour") || lowerInput.includes("salut")) {
      return "Bonjour ! Comment puis-je vous être utile aujourd\"hui ? N\"hésitez pas à me poser vos questions sur Bilan Mental Express ou à me dire comment vous vous sentez.";
    }
    if (lowerInput.includes("merci")) {
      return "Avec plaisir ! Si vous avez d\"autres questions ou si je peux vous aider d\"une autre manière, dites-le moi.";
    }
    if (lowerInput.includes("au revoir") || lowerInput.includes("bye")) {
      return "Au revoir ! Prenez bien soin de vous et n\"oubliez pas que votre bien-être est important.";
    }
    if (lowerInput.includes("comment ça va") || lowerInput.includes("ça va")) {
      return "Je suis un programme informatique, donc je vais toujours bien, merci ! Et vous, comment vous sentez-vous aujourd\"hui ?";
    }

    // Questions sur l\"application
    if (lowerInput.includes("qu\"est-ce que bilan mental express") || lowerInput.includes("c\"est quoi bilan mental express")) {
      return "Bilan Mental Express est une application web conçue pour vous aider à faire un point rapide sur votre état mental quotidien. En quelques minutes, vous pouvez évaluer différents aspects de votre bien-être et obtenir des suggestions personnalisées.";
    }
    if (lowerInput.includes("comment fonctionne le bilan") || lowerInput.includes("questionnaire")) {
      return "Le bilan consiste en une série de 7 questions simples portant sur votre énergie, sommeil, humeur, etc. Vos réponses permettent de calculer un score et de vous fournir un feedback adapté. Vous pouvez le trouver dans la section \"Le Bilan\".";
    }
    if (lowerInput.includes("gratuit") || lowerInput.includes("prix") || lowerInput.includes("coûte") || lowerInput.includes("offres")) {
      return "L\"utilisation de base de Bilan Mental Express, y compris le bilan quotidien et les suggestions générales, est gratuite. Nous envisageons une version Premium avec des fonctionnalités avancées. Vous trouverez plus d\"informations dans la section \"Notre Modèle Économique\".";
    }
    if (lowerInput.includes("professionnel") || lowerInput.includes("aide psy") || lowerInput.includes("thérapeute")) {
      return "Si vous cherchez un professionnel, la section \"Trouver un Soutien Professionnel\" peut vous aider à trouver des contacts. Vous pouvez y entrer votre ville ou utiliser la géolocalisation. N\"oubliez pas que je ne suis qu\"un assistant virtuel et ne peux remplacer l\"avis d\"un expert.";
    }

    // Réponses liées à l\"état émotionnel (avec empathie)
    if (lowerInput.includes("stressé") || lowerInput.includes("anxieux") || lowerInput.includes("angoisse")) {
      return "Je comprends que vous vous sentiez stressé(e). C\"est une réaction courante face aux défis. Avez-vous essayé quelques techniques de relaxation, comme la respiration profonde ? La section \"Des Clés pour Votre Quotidien\" propose quelques pistes. Parfois, en parler à quelqu\"un peut aussi aider.";
    }
    if (lowerInput.includes("triste") || lowerInput.includes("déprimé") || lowerInput.includes("pas bien")) {
      return "Je suis désolé d\"entendre que vous vous sentez triste. Il est important de ne pas rester seul(e) avec ces émotions. Parler à un ami, un proche, ou un professionnel peut vraiment faire une différence. N\"oubliez pas que vos sentiments sont valides.";
    }
    if (lowerInput.includes("fatigué") || lowerInput.includes("épuisé")) {
      return "La fatigue peut vraiment peser. Assurez-vous de prendre des pauses et de vérifier la qualité de votre sommeil. Parfois, une petite sieste ou un moment de calme peut aider à recharger les batteries. Si cela persiste, il serait bon d\"en identifier la cause.";
    }
    if (lowerInput.includes("seul")) {
      return "Le sentiment de solitude peut être difficile. Sachez que vous n\"êtes pas seul(e) à ressentir cela. Essayer de contacter un ami, un membre de votre famille, ou même de participer à une activité de groupe pourrait vous aider à vous sentir plus connecté(e).";
    }

    // Réponse par défaut
    return "Je ne suis pas certain(e) de bien comprendre votre demande. Pourriez-vous la reformuler ? Vous pouvez aussi me demander de l\"aide sur ce que je peux faire, par exemple en tapant \"aide\".";
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue;
    if (messageText.trim() === "") return;

    const userMessage: Message = {
      id: Date.now(), // Utiliser Date.now() pour un ID unique plus simple
      text: messageText,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const botResponseText = getBotResponse(messageText);

    // Simuler un délai pour la réponse du bot
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: "bot",
        // Ajouter des options si la réponse est une question ouverte ou une suggestion
        options: botResponseText.includes("Comment puis-je vous être utile") || botResponseText.includes("Que souhaitez-vous savoir") ? ["Qu\"est-ce que Bilan Mental Express ?", "Comment fonctionne le bilan ?", "Je me sens stressé(e)"] : undefined,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 700 + Math.random() * 500); // Délai variable pour plus de réalisme

    setInputValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 w-[calc(100%-3rem)] max-w-sm h-[70vh] max-h-[550px] bg-nuit-sereine text-craie-douce rounded-xl shadow-2xl flex flex-col z-[99] transition-all duration-300 ease-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      <header className="bg-encre-profonde p-4 flex justify-between items-center rounded-t-xl">
        <h3 className="font-bold text-lg text-vert-espoir">Assistant BilanMental</h3>
        <button onClick={onClose} className="text-craie-douce hover:text-vert-espoir transition-colors" aria-label="Fermer le chatbot">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </header>
      <div className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-vert-espoir scrollbar-track-encre-profonde/50">
        {messages.map((msg) => (
          <div key={msg.id}>
            <div className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div 
                className={`max-w-[80%] py-2 px-4 rounded-2xl shadow ${msg.sender === "user" ? "bg-vert-espoir text-nuit-sereine rounded-br-none" : "bg-encre-profonde text-craie-douce rounded-bl-none"}`}
              >
                {msg.text.split("\n").map((line, i) => <p key={i}>{line}</p>)} 
              </div>
            </div>
            {msg.sender === "bot" && msg.options && (
              <div className="flex flex-wrap gap-2 mt-2 justify-start">
                {msg.options.map((option, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSendMessage(option)}
                    className="text-xs bg-nuit-sereine/60 hover:bg-vert-espoir hover:text-nuit-sereine text-craie-douce py-1.5 px-3 rounded-full transition-colors duration-200 shadow"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <footer className="p-3 border-t border-encre-profonde bg-nuit-sereine rounded-b-xl">
        <div className="flex items-center bg-encre-profonde rounded-lg overflow-hidden">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Posez votre question..."
            className="flex-grow p-3 bg-transparent text-craie-douce placeholder-craie-douce/50 focus:outline-none"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim()}
            className="text-vert-espoir hover:text-opacity-80 p-3 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Envoyer le message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

// Composant Principal du Chatbot
const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatbotIcon onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <ChatWindow onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
};

export default Chatbot;

