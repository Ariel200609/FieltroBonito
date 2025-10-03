import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import logoAmorEstelar from '../assets/images/logo/logoAmorEstelar.webp';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-amor-purple via-amor-pink to-purple-400"
      onAnimationComplete={() => {
        setTimeout(onComplete, 100);
      }}
    >
      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 1.5,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            }}
            className="absolute"
          >
            <HiSparkles 
              className="text-white/30" 
              size={Math.random() * 20 + 10} 
            />
          </motion.div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative text-center text-white">
        {/* Logo animado */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          className="mb-6"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <img
              src={logoAmorEstelar}
              alt="Amor Estelar"
              className="w-24 h-24 mx-auto rounded-full shadow-2xl"
            />
            
            
          </motion.div>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          <motion.span
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Amor Estelar
          </motion.span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiHeart size={24} />
          </motion.div>
          <p className="text-xl md:text-2xl font-light">
            Imprimimos y personalizamos tus recuerdos
          </p>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          >
            <FiHeart size={24} />
          </motion.div>
        </motion.div>

        {/* Indicador de carga */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
          className="flex flex-col items-center space-y-4"
        >
          {/* Barra de progreso */}
          <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
              className="h-full bg-white rounded-full"
            />
          </div>

          {/* Texto de carga */}
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm font-light tracking-wider"
          >
            Cargando tu tienda de recuerdos...
          </motion.p>
        </motion.div>

        {/* Efecto de brillos */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;
