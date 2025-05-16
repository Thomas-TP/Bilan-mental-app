import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-2">
          BilanMental<span className="text-green-400">Express</span> &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm text-gray-400">
          Votre partenaire pour un bien-être mental quotidien.
        </p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Mentions Légales</a>
          <span className="text-gray-500">|</span>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Politique de Confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
