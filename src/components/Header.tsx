import React, { useState, useEffect } from 'react';
import logoLight from '../assets/logo-light-bg.jpg'; // Utiliser le logo pour fond clair sur fond sombre

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                  ${isScrolled ? 'bg-nuit-sereine/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 group">
          <img src={logoLight} alt="Bilan Mental Express Logo" className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105" />
          {/* <span className="text-xl md:text-2xl font-bold text-craie-douce group-hover:text-vert-espoir transition-colors">Bilan Mental Express</span> */}
        </a>
        <nav className="hidden md:flex space-x-6">
          {['Accueil', 'Le Bilan', 'Ressources', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-craie-douce hover:text-vert-espoir transition-colors duration-300 relative group pb-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-vert-espoir transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <button className="md:hidden text-craie-douce hover:text-vert-espoir transition-colors">
          {/* Icône Burger Menu (à ajouter) */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

