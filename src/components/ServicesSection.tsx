import React from 'react';
import { motion } from 'framer-motion';
import { FiImage, FiPrinter, FiHeart, FiMap } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const services = [
  {
    icon: <HiSparkles size={48} />,
    title: "Diseño Gráfico",
    description: "Creamos diseños únicos y personalizados que capturan la esencia de tus momentos especiales."
  },
  {
    icon: <FiPrinter size={48} />,
    title: "Impresión Personalizada",
    description: "Imprimimos tus recuerdos con la más alta calidad en diferentes formatos y materiales."
  },
  {
    icon: <FiImage size={48} />,
    title: "Polaroids Personalizadas",
    description: "Transforma tus fotos favoritas en hermosas polaroids con diseños únicos y románticos."
  },
  {
    icon: <FiMap size={48} />,
    title: "Mapas del Amor",
    description: "Mapas personalizados que marcan los lugares especiales de tu historia de amor."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Lo que <span className="bg-gradient-romantic bg-clip-text text-transparent">hacemos</span>
          </h2>
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FiHeart className="text-amor-pink mr-2" size={24} />
            </motion.div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Especializados en crear y personalizar recuerdos únicos que perdurarán para siempre
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
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-romantic text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
          >
            Descubre todos nuestros servicios
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;