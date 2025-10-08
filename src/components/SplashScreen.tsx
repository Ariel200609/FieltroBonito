import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import logoAmorEstelar from "../assets/images/logo/logoAmorEstelar.webp";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    // Aumentamos el tiempo total antes de desaparecer el splash
    const timer = setTimeout(() => onComplete(), 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#ADC9B8] overflow-hidden">
      {/* Cortinas izquierda y derecha */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ delay: 3.7, duration: 1.4, ease: "easeInOut" }}
        className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-br from-[#ADC9B8] to-[#C4D4A4] shadow-2xl rounded-r-[60px]"
      ></motion.div>

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ delay: 3.7, duration: 1.4, ease: "easeInOut" }}
        className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-[#ADC9B8] to-[#C4D4A4] shadow-2xl rounded-l-[60px]"
      ></motion.div>

      {/* Corazones flotando */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: Math.random() * window.innerHeight,
            x: Math.random() * window.innerWidth,
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            y: [Math.random() * 100, -50],
            opacity: [0.2, 1, 0],
            scale: [0.7, 1, 0.8],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute text-[#6FA088]/40"
        >
          <FiHeart size={28} />
        </motion.div>
      ))}

      {/* Contenido central */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative text-center z-10"
      >
        <motion.img
          src={logoAmorEstelar}
          alt="Amor Estelar"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.1, 1] }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100,
          }}
          className="w-28 h-28 mx-auto rounded-full shadow-lg border-4 border-[#C4D4A4]"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-[#6FA088] mt-6"
        >
          Bienvenido a{" "}
          <motion.span
            animate={{
              textShadow: [
                "0 0 10px rgba(175,201,184,0.6)",
                "0 0 25px rgba(196,212,164,0.9)",
                "0 0 10px rgba(175,201,184,0.6)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Fieltro Bonito 🌿
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="text-lg md:text-xl text-[#6FA088] mt-2 font-light"
        >
          Cada manualidad realizada con mucho amor 💚
        </motion.p>

        {/* Corazón palpitante */}
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-6 flex justify-center"
        >
          <FiHeart size={40} className="text-[#6FA088] drop-shadow-lg" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
