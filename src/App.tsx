import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import MentalCheckupSection from './components/MentalCheckupSection';
import DashboardSection from './components/DashboardSection'; // Ajout
import ConcreteSuggestionsSection from './components/ConcreteSuggestionsSection'; // Ajout
import AICoachSection from './components/AICoachSection'; // Ajout
import PassiveDataSection from './components/PassiveDataSection'; // Ajout
import PersonasSection from './components/PersonasSection';
import VisionSection from './components/VisionSection';
import MonetizationSection from './components/MonetizationSection';
import ContactProfessionalsSection from './components/ContactProfessionalsSection'; // Ajout
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <MentalCheckupSection />
        <DashboardSection />
        <ConcreteSuggestionsSection />
        <AICoachSection />
        <PassiveDataSection />
        <PersonasSection />
        <VisionSection />
        <MonetizationSection />
        <ContactProfessionalsSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;

