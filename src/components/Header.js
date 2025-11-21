import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerContent = (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-900">Teplin</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary-900 transition-colors">Services</a>
            <a href="#work" className="text-gray-600 hover:text-primary-900 transition-colors">Work</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-900 transition-colors">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-primary-900 transition-colors">About</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Get Started</button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600 hover:text-primary-900 transition-colors">Services</a>
              <a href="#work" className="text-gray-600 hover:text-primary-900 transition-colors">Work</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-900 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-primary-900 transition-colors">About</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="btn-secondary">Login</button>
                <button className="btn-primary">Get Started</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );

  if (shouldReduceMotion) {
    return headerContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {headerContent}
    </motion.div>
  );
};

export default Header;