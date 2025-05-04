import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: '/', text: t('nav.home') },
    { to: '/services', text: t('nav.services') },
    { to: '/team', text: t('nav.team') },
    { to: '/projects', text: t('nav.projects') },
    { to: '/contact', text: t('nav.contact') },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
            {/* <Globe 
              size={36} 
              className="text-primary-500" 
              strokeWidth={1.5} 
            />
            <div>
              <span className="font-serif text-2xl font-bold text-primary-500">ISE</span>
              <span className="hidden md:inline-block text-sm text-gray-600 ml-2">
                Inclusive Social and Environment
              </span>
            </div> */}
            <img className="w-32 h-auto" src="https://image.phoudthasone.com/api/v1/buckets/image/objects/download?preview=true&prefix=ISE_Logo.png&version_id=null" alt="ISE Logo"  />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary-500 border-b-2 ${
                    isActive 
                      ? 'border-primary-500 text-primary-500' 
                      : 'border-transparent text-gray-700'
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-2 px-4 text-base ${
                        isActive 
                          ? 'bg-primary-50 text-primary-500 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;