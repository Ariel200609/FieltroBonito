import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiStar, FiX, FiPlus } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [customization, setCustomization] = useState('');


  const handleAddToCart = () => {
    try {
      addToCart(product, quantity, customization);
      setShowModal(false);
      setQuantity(1);
      setCustomization('');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleQuickAdd = () => {
    try {
      addToCart(product, 1);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const getCategoryColor = () => {
    switch (product.category) {
      case 'polaroids': return 'from-purple-500 to-pink-500';
      case 'stickers': return 'from-blue-500 to-indigo-500';
      case 'cuadros': return 'from-green-500 to-emerald-500';
      case 'otros': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryBadge = () => {
    switch (product.category) {
      case 'polaroids': return '📸 Polaroid';
      case 'stickers': return '🏷️ Sticker';
      case 'cuadros': return '🖼️ Cuadro';
      case 'otros': return '✨ Especial';
      default: return '✨ Producto';
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        {/* Badge de categoría */}
        <div className={`absolute top-4 left-4 bg-gradient-to-r ${getCategoryColor()} text-white px-3 py-1 rounded-full text-xs font-semibold z-10`}>
          {getCategoryBadge()}
        </div>

        {/* Badge de destacado */}
        {product.featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold z-10 flex items-center">
            <FiStar size={12} className="mr-1" />
            Destacado
          </div>
        )}

        {/* Imagen */}
        <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => setShowModal(true)}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor()} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
          
          {/* Overlay de "Ver más" */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <span className="text-white font-semibold">👁️ Ver detalles</span>
          </motion.div>
        </div>

        {/* Contenido */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-amor-purple transition-colors duration-300">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4 h-12 overflow-hidden">
            {product.description}
          </p>

          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-amor-purple">
              ${product.price}
            </span>
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} size={14} className="fill-current" />
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleQuickAdd}
            className={`w-full bg-gradient-to-r ${getCategoryColor()} text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
          >
            <FiPlus className="mr-2" />
            Agregar al carrito
          </motion.button>
        </div>

        {/* Decorative element */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-2 -right-2 text-amor-light opacity-20"
        >
          <HiSparkles size={32} />
        </motion.div>
      </motion.div>

      {/* Modal de detalles del producto - SIMPLIFICADO */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${getCategoryColor()} text-white p-6 flex justify-between items-center`}>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setShowModal(false)}
                  className="text-white hover:text-gray-200 transition-colors duration-300"
                >
                  <FiX size={20} />
                </motion.button>
              </div>

              {/* Imagen */}
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-bold text-amor-purple">
                    ${product.price}
                  </span>
                </div>

                {/* Personalización */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Personalización (opcional):
                  </label>
                  <textarea
                    value={customization}
                    onChange={(e) => setCustomization(e.target.value)}
                    placeholder="Ej: Nombres, fecha especial, frase personalizada..."
                    className="w-full p-3 border border-gray-300 rounded-xl focus:border-amor-purple focus:outline-none transition-all duration-300 resize-none"
                    rows={3}
                  />
                </div>

                {/* Cantidad */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-semibold text-gray-700">Cantidad:</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors duration-300"
                    >
                      <FiPlus size={16} style={{transform: 'rotate(45deg)'}} />
                    </button>
                    
                    <span className="font-bold text-xl w-12 text-center">{quantity}</span>
                    
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-amor-purple hover:bg-amor-indigo text-white rounded-full p-2 transition-colors duration-300"
                    >
                      <FiPlus size={16} />
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="text-xl font-bold text-amor-purple">
                      ${product.price * quantity}
                    </span>
                  </div>
                </div>

                {/* Botón agregar */}
                <button
                  onClick={handleAddToCart}
                  className={`w-full bg-gradient-to-r ${getCategoryColor()} text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
                >
                  <FiShoppingCart className="mr-3" />
                  Agregar al carrito
                  <HiSparkles className="ml-3" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCard;