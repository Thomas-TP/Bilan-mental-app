import React from 'react';

const Header: React.FC = () => {
  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Le Défi', href: '#problem' },
    { name: 'Notre Solution', href: '#solution' },
    { name: 'Pour Qui ?', href: '#personas' },
    { name: 'Notre Vision', href: '#vision' },
    { name: 'Nos Offres', href: '#monetization' },
    { name: 'Aide', href: '#chat' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-blue-600">
          BilanMental<span className="text-green-500">Express</span>
        </a>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile menu button - to be implemented later if needed */}
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
