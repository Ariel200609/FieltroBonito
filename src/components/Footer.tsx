import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiInstagram, FiMapPin, FiMail, FiMessageCircle } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import logoAmorEstelar from '../assets/images/logo/logoAmorEstelar.webp';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <FiInstagram size={24} />,
      url: 'https://instagram.com/amor.estelar.lp', // Instagram real
      color: 'hover:text-pink-400'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook size={24} />,
      url: 'https://facebook.com/amorestelar', // Facebook
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amor-light opacity-5"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              rotate: 0
            }}
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {i % 2 === 0 ? <FiHeart size={32} /> : <HiSparkles size={32} />}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-4">
              <motion.img
                src={logoAmorEstelar}
                alt="Amor Estelar Logo"
                className="w-16 h-16 rounded-full mr-4 shadow-lg border-2 border-amor-pink/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.h3 
                className="text-3xl font-bold flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <span className="bg-gradient-romantic bg-clip-text text-transparent">
                  Amor Estelar
                </span>
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="ml-3"
                >
                  <HiSparkles className="text-amor-pink" size={24} />
                </motion.div>
              </motion.h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Especializados en diseño gráfico, impresión y personalización de recuerdos. 
              Transformamos tus momentos más preciados en obras de arte únicas.
            </p>

            <div className="flex items-center text-gray-400 mb-4">
              <FiMapPin className="mr-2 text-amor-pink" size={18} />
              <span>Bahía Blanca, zona centro - Pedro Luro</span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-300"
            >
              <FiHeart className="mr-2 text-amor-rose" size={16} />
              <span className="text-sm">Imprimimos y personalizamos tus recuerdos 💗</span>
              <FiHeart className="ml-2 text-amor-rose" size={16} />
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-amor-light">Servicios</h4>
            <ul className="space-y-3">
              {[
                'Diseño Gráfico',
                'Polaroids Personalizadas',
                'Mapas del Amor',
                'Impresión Premium',
                'Diseños Personalizados'
              ].map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, color: '#F571E2' }}
                  className="text-gray-400 hover:text-amor-pink cursor-pointer transition-all duration-300"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-amor-light">Contacto</h4>
            
            {/* Contact Methods */}
            <div className="space-y-4 mb-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-400 hover:text-green-400 cursor-pointer transition-all duration-300"
              >
                <FiMessageCircle className="mr-3" size={18} />
                <span>WhatsApp</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300"
              >
                <FiMail className="mr-3" size={18} />
                <span>Gmail</span>
              </motion.div>
            </div>

            {/* Social Media */}
            <h5 className="text-lg font-semibold mb-4 text-amor-light">Síguenos</h5>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${social.color} transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Amor Estelar. Todos los derechos reservados.
              </p>
            </div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex items-center text-amor-pink"
            >
              <span className="text-sm mr-2">Hecho con</span>
              <FiHeart size={16} className="fill-current" />
              <span className="text-sm ml-2">en Bahía Blanca</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Hearts */}
        <div className="absolute bottom-4 right-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-amor-pink opacity-30"
              initial={{ 
                x: 0, 
                y: 0,
                scale: 0
              }}
              animate={{ 
                x: [0, -20, 20, 0],
                y: [0, -30, -60, -90],
                scale: [0, 1, 1, 0],
                opacity: [0.3, 0.6, 0.3, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeOut"
              }}
              style={{
                right: `${i * 15}px`,
              }}
            >
              <FiHeart size={12 + i * 2} />
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;