import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import de motion
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import MentalCheckupSection from './components/MentalCheckupSection';
import DashboardSection from './components/DashboardSection';
import ConcreteSuggestionsSection from './components/ConcreteSuggestionsSection';
import AICoachSection from './components/AICoachSection';
import PassiveDataSection from './components/PassiveDataSection';
import PersonasSection from './components/PersonasSection';
import VisionSection from './components/VisionSection';
import MonetizationSection from './components/MonetizationSection';
import ContactProfessionalsSection from './components/ContactProfessionalsSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Preloader from './components/Preloader';
import './App.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  // Fonction pour envelopper les sections avec motion.div
  const AnimatedSection: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // L'animation se déclenche une fois quand 20% de l'élément est visible
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="font-sans bg-nuit-sereine text-craie-douce"> {/* Appliquer le fond sombre globalement */} 
      <Header />
      <main>
        <AnimatedSection><HeroSection /></AnimatedSection>
        <AnimatedSection><ProblemSection /></AnimatedSection>
        <AnimatedSection><SolutionSection /></AnimatedSection>
        <AnimatedSection><MentalCheckupSection /></AnimatedSection>
        <AnimatedSection><DashboardSection /></AnimatedSection>
        <AnimatedSection><ConcreteSuggestionsSection /></AnimatedSection>
        <AnimatedSection><AICoachSection /></AnimatedSection>
        <AnimatedSection><PassiveDataSection /></AnimatedSection>
        <AnimatedSection><PersonasSection /></AnimatedSection>
        <AnimatedSection><VisionSection /></AnimatedSection>
        <AnimatedSection><MonetizationSection /></AnimatedSection>
        <AnimatedSection><ContactProfessionalsSection /></AnimatedSection>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;

