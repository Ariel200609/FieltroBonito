import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingBag, FiHeart } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import logoAmorEstelar from '../assets/images/logo/logoAmorEstelar.webp';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { getCartItemsCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determinar si el header debe estar visible
      if (currentScrollY < 50) {
        // Siempre visible en la parte superior
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling hacia abajo - ocultar header
          setIsVisible(false);
          setIsMenuOpen(false); // Cerrar menú móvil si está abierto
        } else if (currentScrollY < lastScrollY) {
          // Scrolling hacia arriba - mostrar header
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'hero', label: 'Inicio', icon: <FiHeart size={18} /> },
    { id: 'services', label: 'Servicios', icon: <HiSparkles size={18} /> },
    { id: 'products', label: 'Productos', icon: <FiShoppingBag size={18} /> },
    { id: 'contact', label: 'Contacto', icon: <FiHeart size={18} /> },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ 
          duration: isVisible ? 0.6 : 0.3,
          delay: isVisible && lastScrollY === 0 ? 1.5 : 0,
          ease: "easeInOut"
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <motion.img
                src={logoAmorEstelar}
                alt="Amor Estelar"
                className="h-12 w-12 rounded-full object-cover shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <div>
                <h1 className="text-xl font-bold bg-gradient-romantic bg-clip-text text-transparent">
                  Amor Estelar
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">
                  Personalizamos tus recuerdos 💜
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:text-amor-purple hover:bg-purple-50 transition-all duration-300"
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
            </nav>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCartClick}
                className="relative p-3 bg-gradient-to-r from-amor-purple to-amor-pink text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FiShoppingBag size={20} />
                {getCartItemsCount() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold"
                  >
                    {getCartItemsCount()}
                  </motion.span>
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-amor-purple transition-colors"
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left text-gray-700 hover:text-amor-purple hover:bg-purple-50 transition-all duration-300"
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
};

export default Header;
