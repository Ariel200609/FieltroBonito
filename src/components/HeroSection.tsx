import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiStar, FiCamera, FiMail } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import heroImage from '../assets/images/hero/Hero.webp';
import logoAmorEstelar from '../assets/images/logo/logoAmorEstelar.webp';

const HeroSection: React.FC = () => {
  const whatsappNumber = "5492915277900";

  const handleCatalogClick = () => {
    const message = encodeURIComponent("¡Hola! 🌟 Me gustaría ver su catálogo completo con todas las variedades de productos que ofrecen. ¡Gracias! 💗");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleContactClick = () => {
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre sus servicios de diseño y personalización 💗");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Imagen de fondo fija */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Overlay con gradiente romántico */}
      <div className="absolute inset-0 bg-gradient-romantic opacity-85"></div>
      
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10"
            initial={{ 
              x: `${10 + i * 15}%`, 
              y: `${10 + i * 10}%`,
              rotate: 0
            }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {i % 3 === 0 ? (
              <FiHeart size={24 + i * 4} />
            ) : i % 3 === 1 ? (
              <HiSparkles size={24 + i * 4} />
            ) : (
              <FiStar size={24 + i * 4} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.img
            src={logoAmorEstelar}
            alt="Amor Estelar Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full shadow-2xl border-4 border-white/30"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <span className="block bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Amor
            </span>
            <span className="block bg-gradient-to-r from-pink-100 to-white bg-clip-text text-transparent">
              Estelar
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center mb-8"
          >
            <FiHeart className="mr-3 text-pink-200" size={24} />
            <p className="text-xl md:text-2xl font-light text-pink-100">
              Imprimimos y personalizamos tus recuerdos 💗
            </p>
            <FiHeart className="ml-3 text-pink-200" size={24} />
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            onClick={handleCatalogClick}
            className="group bg-white text-amor-purple px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center"
          >
            <FiCamera className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Ver Catálogo Completo
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            onClick={handleContactClick}
            className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-amor-purple transition-all duration-300 flex items-center"
          >
            <FiMail className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Contactar ahora
          </motion.button>
        </motion.div>
      </div>

      {/* Overlay pattern adicional para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
};

export default HeroSection;