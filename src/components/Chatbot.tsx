import React, { useState } from 'react';

const ChatbotIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 focus:outline-none z-50 animate-bounce-slow"
      aria-label="Ouvrir le chatbot"
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
  sender: 'user' | 'bot';
}

const ChatWindow: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const predefinedResponses: { [key: string]: string } = {
    "bonjour": "Bonjour ! En quoi puis-je vous assister ?",
    "salut": "Salut ! Comment ça va ?",
    "aide": "Je peux vous donner des informations sur Bilan Mental Express. Que souhaitez-vous savoir ? (Ex: 'Qu\'est-ce que Bilan Mental Express ?', 'Comment fonctionne le questionnaire ?', 'Quelles sont les offres ?')",
    "qu'est-ce que bilan mental express ?": "Bilan Mental Express est une application pour faire un check-up mental quotidien en 5 minutes.",
    "comment fonctionne le questionnaire ?": "C'est un questionnaire quotidien de 5 minutes, ludique et adaptatif.",
    "quelles sont les offres ?": "Nous avons une offre Freemium, une offre Premium, et des solutions pour les entreprises. Plus de détails dans la section 'Nos Offres'.",
    "merci": "De rien ! N'hésitez pas si vous avez d'autres questions.",
    "au revoir": "Au revoir et prenez soin de vous !",
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const botResponseText = predefinedResponses[inputValue.toLowerCase().trim()] || "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ou demander de l'aide ?";
    
    const botMessage: Message = {
      id: messages.length + 2,
      text: botResponseText,
      sender: 'bot',
    };

    setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 500);

    setInputValue('');
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 md:w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col z-50 animate-slide-in-up-chat">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-lg">
        <h3 className="font-semibold text-lg">Assistant BilanMental</h3>
        <button onClick={onClose} className="text-white hover:text-gray-200" aria-label="Fermer le chatbot">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </header>
      <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <footer className="p-3 border-t border-gray-200 bg-white rounded-b-lg">
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Posez votre question..."
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors duration-300"
          >
            Envoyer
          </button>
        </div>
      </footer>
    </div>
  );
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatbotIcon onClick={() => setIsOpen(true)} />
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Chatbot;
