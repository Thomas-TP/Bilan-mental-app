import React from 'react';
import logoDarkBg from '../assets/logo-dark-bg.jpg'; // Assuming footer has a dark background

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src={logoDarkBg} alt="Bilan Mental Express Logo" className="h-12 md:h-14" />
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-gray-400">
            BilanMentalExpress &copy; {new Date().getFullYear()}
          </p>
          <p className="text-xs text-gray-500">
            Votre partenaire pour un bien-être mental quotidien.
          </p>
        </div>
        <div>
          <a href="#" className="text-gray-400 hover:text-white mx-2 text-sm">Mentions Légales</a>
          <span className="text-gray-500">|</span>
          <a href="#" className="text-gray-400 hover:text-white mx-2 text-sm">Politique de Confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
