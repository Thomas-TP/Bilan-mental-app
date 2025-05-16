import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PersonasSection from './components/PersonasSection';
import VisionSection from './components/VisionSection';
import MonetizationSection from './components/MonetizationSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import './App.css'; // Pour les animations globales

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PersonasSection />
        <VisionSection />
        <MonetizationSection />
        {/* La section Chatbot est gérée par le composant Chatbot lui-même avec son icône flottante */}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
