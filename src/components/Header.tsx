import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const menuItems = [
    { name: 'Accueil', href: '#' },
    { name: 'Développeurs', href: '#' },
    { name: 'IA & Outils', href: '#' },
    { name: 'Projets', href: '#' },
    { name: 'Témoignages', href: '#' },
  ];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <motion.div
              className="text-white font-bold text-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-[#40E0D0]">Dev</span>Connect<span className="text-[#7B1FA2]">AI</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-gray-200 hover:text-white font-medium text-base relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#40E0D0] to-[#7B1FA2] group-hover:w-full transition-all duration-300"
                  layoutId="underline"
                ></motion.span>
              </motion.a>
            ))}
          </nav>

          {/* Login/Register Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="px-5 py-2 text-white font-medium text-sm rounded-full bg-gradient-to-r from-[#007BFF] to-[#7B1FA2] hover:shadow-lg transform transition"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(123, 31, 162, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Connexion / Inscription
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-200 hover:text-white outline-none p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-800 rounded-lg mt-2 p-4 shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-200 hover:text-white font-medium py-2 px-4 rounded-md hover:bg-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <motion.button
                className="mt-3 px-5 py-2 text-white font-medium text-sm rounded-full bg-gradient-to-r from-[#007BFF] to-[#7B1FA2]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connexion / Inscription
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
