import React from 'react';
import { motion } from 'framer-motion';
import {  FiHeart } from 'react-icons/fi';
import { HiAcademicCap, HiLightBulb, HiShoppingBag, HiSparkles  } from 'react-icons/hi';

const services = [
  {
    icon: <HiLightBulb size={48} />,  
    title: "2020 / 2021",
    description: "Nació como una chispa de inspiración en plena pandemia, aprendiendo de tutoriales y explorando ideas."
  },
  {
    icon: <HiShoppingBag size={48} />, 
    title: "2022 / 2023",
    description: "Llegaron las primeras ventas: ferias, pedidos personalizados y los primeros clientes que confiaron en mí."
  },
  {
    icon: <HiAcademicCap size={48} />, 
    title: "2024 / 2025",
    description: "Sigo creciendo a través de cursos, perfeccionando mi técnica y participando en más ferias locales."
  },
  {
    icon: <HiSparkles size={48} />,  
    title: "2026",
    description: "Lo mejor aún está por venir... ¿están listos para lo que se viene?"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#C4D4A4]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Mi historia 
          </h2>
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FiHeart className="text-amor-pink mr-2" size={24} />
            </motion.div>
            <p className="text-lg text-gray-900 max-w-2xl">
              ¿Cómo comenzó este camino?
            </p>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FiHeart className="text-amor-pink ml-2" size={24} />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100"
            >
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-amor-purple mb-6 flex justify-center"
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-amor-purple transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Decorative element */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="h-1 bg-gradient-romantic mx-auto mt-6 rounded-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="bbg-gradient-to-r from-[#DBD499] to-[#C4D4A4] 
                    text-gray-900 px-12 py-4 rounded-full 
                    font-extrabold text-lg tracking-wide
                    shadow-2xl hover:shadow-yellow-200/60
                    border-4 border-white
                    transition-all duration-300"
          onClick={() => window.open('https://www.instagram.com/fieltrobonito.bb', '_blank')}
          > 
            ✨ Descubre todo sobre Fieltro Bonito
            
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;