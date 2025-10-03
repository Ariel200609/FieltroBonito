import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMessageCircle, FiMapPin, FiHeart } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const ContactSection: React.FC = () => {
  const whatsappNumber = "5492915277900"; // Número real de WhatsApp
  const emailAddress = "contacto@amorestelar.com"; // Email del emprendimiento

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre sus servicios de diseño y personalización 💗");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleCatalogClick = () => {
    const message = encodeURIComponent("¡Hola! 🌟 Me gustaría ver su catálogo completo con las 20 variedades de productos que ofrecen. ¡Estoy muy interesado/a! 💗");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Consulta sobre servicios - Amor Estelar");
    const body = encodeURIComponent("¡Hola! Me gustaría conocer más información sobre sus servicios de diseño gráfico y personalización de recuerdos.\n\n¡Espero su respuesta!\n\nSaludos 💗");
    window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-romantic relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              rotate: 0
            }}
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {i % 3 === 0 ? (
              <FiHeart size={20 + i * 2} />
            ) : i % 3 === 1 ? (
              <HiSparkles size={20 + i * 2} />
            ) : (
              <FiMapPin size={20 + i * 2} />
            )}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¡Hablemos de tu <span className="text-pink-200">proyecto!</span>
          </h2>
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FiHeart className="text-pink-200 mr-2" size={24} />
            </motion.div>
            <p className="text-xl text-pink-100 max-w-2xl">
              Estamos aquí para hacer realidad tus ideas más románticas y creativas
            </p>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FiHeart className="text-pink-200 ml-2" size={24} />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Elige cómo prefieres contactarnos:
            </h3>

            {/* WhatsApp */}
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppClick}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="bg-green-500 rounded-2xl p-4 mr-6 group-hover:bg-green-400 transition-colors duration-300"
                >
                  <FiMessageCircle size={32} className="text-white" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">WhatsApp</h4>
                  <p className="text-pink-100 mb-2">Envíanos tus fotos y cuéntanos tu idea</p>
                  <p className="text-pink-200 text-sm">Respuesta inmediata • Envío de archivos</p>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleEmailClick}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="bg-blue-500 rounded-2xl p-4 mr-6 group-hover:bg-blue-400 transition-colors duration-300"
                >
                  <FiMail size={32} className="text-white" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Gmail</h4>
                  <p className="text-pink-100 mb-2">Escríbenos con todos los detalles</p>
                  <p className="text-pink-200 text-sm">Presupuestos detallados • Consultas formales</p>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20"
            >
              <div className="flex items-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-red-500 rounded-2xl p-4 mr-6"
                >
                  <FiMapPin size={32} className="text-white" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Ubicación</h4>
                  <p className="text-pink-100 mb-1">Bahía Blanca, zona centro</p>
                  <p className="text-pink-200">Pedro Luro</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-center mb-6"
            >
              <HiSparkles size={48} className="text-pink-200 mx-auto" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white text-center mb-6">
              ¿Qué necesitamos de ti?
            </h3>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="bg-pink-400 rounded-full p-2 mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-pink-100">Tus fotos favoritas en alta calidad</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="bg-pink-400 rounded-full p-2 mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-pink-100">Cuéntanos tu historia de amor</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="bg-pink-400 rounded-full p-2 mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-pink-100">Lugares especiales (para mapas)</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="bg-pink-400 rounded-full p-2 mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-pink-100">Tu estilo preferido</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <p className="text-pink-200 text-sm mb-4">
                Tiempo de entrega: 3-7 días hábiles
              </p>
              <div className="flex items-center justify-center">
                <FiHeart className="text-pink-300 mr-2" size={16} />
                <p className="text-pink-200 text-sm">
                  Hacemos cada proyecto con amor
                </p>
                <FiHeart className="text-pink-300 ml-2" size={16} />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-pink-100 mb-8">
            ¡No esperes más para eternizar tus recuerdos más preciados!
          </p>
          
          {/* Botón destacado del catálogo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.08, y: -3 }}
              onClick={handleCatalogClick}
              className="bg-white text-amor-purple px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center justify-center mx-auto"
            >
              <HiSparkles className="mr-3 text-2xl" />
              Ver Catálogo Completo (20+ productos)
              <HiSparkles className="ml-3 text-2xl" />
            </motion.button>
            <p className="text-pink-200 text-sm mt-3">
              📱 Catálogo interactivo por WhatsApp
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="bg-white text-amor-purple px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-white/25 transition-all duration-300 flex items-center justify-center"
            >
              <FiMessageCircle className="mr-2" />
              Escribir por WhatsApp
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmailClick}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-amor-purple transition-all duration-300 flex items-center justify-center"
            >
              <FiMail className="mr-2" />
              Enviar email
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;