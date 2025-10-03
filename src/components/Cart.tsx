import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiX, FiPlus, FiMinus, FiTrash2, FiMessageCircle } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    isCartOpen,
    setIsCartOpen
  } = useCart();

  const whatsappNumber = "5492915277900";

  const handleCheckout = () => {
    try {
      if (cartItems.length === 0) return;

      let message = "🛒 *PEDIDO DESDE AMOR ESTELAR* 🛒\n\n";
      message += "¡Hola! Me gustaría hacer el siguiente pedido:\n\n";
      
      cartItems.forEach((item, index) => {
        message += `${index + 1}. *${item.product.name}*\n`;
        message += `   • Cantidad: ${item.quantity}\n`;
        message += `   • Precio unitario: $${item.product.price}\n`;
        message += `   • Subtotal: $${item.product.price * item.quantity}\n`;
        if (item.customization) {
          message += `   • Personalización: ${item.customization}\n`;
        }
        message += "\n";
      });
      
      message += `💰 *TOTAL: $${getCartTotal()}*\n\n`;
      message += "📍 Ubicación para entrega: Bahía Blanca\n";
      message += "🕐 ¿Cuándo necesito el pedido?\n\n";
      message += "¡Espero su confirmación! 💗";

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      
      // Limpiar carrito después del pedido
      clearCart();
      setIsCartOpen(false);
    } catch (error) {
      console.error('Error in checkout:', error);
    }
  };

  return (
    <>
      {/* Botón flotante del carrito */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-romantic text-white p-4 rounded-full shadow-2xl z-40 flex items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FiShoppingCart size={24} />
        {getCartItemsCount() > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-amor-rose text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold"
          >
            {getCartItemsCount()}
          </motion.span>
        )}
      </motion.button>

      {/* Modal del carrito */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsCartOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-romantic text-white p-6 flex justify-between items-center">
                <div className="flex items-center">
                  <FiShoppingCart className="mr-3" size={24} />
                  <h3 className="text-2xl font-bold">Mi Carrito</h3>
                  {getCartItemsCount() > 0 && (
                    <span className="ml-3 bg-white/20 px-3 py-1 rounded-full text-sm">
                      {getCartItemsCount()} productos
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-white hover:text-pink-200 transition-colors duration-300"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Contenido del carrito */}
              <div className="max-h-96 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <FiShoppingCart size={64} className="text-gray-300 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-600 mb-2">Tu carrito está vacío</h4>
                    <p className="text-gray-500">¡Agrega algunos productos para comenzar!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-xl"
                        />
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{item.product.name}</h4>
                          <p className="text-sm text-gray-600">${item.product.price} c/u</p>
                          {item.customization && (
                            <p className="text-xs text-amor-purple">✨ {item.customization}</p>
                          )}
                        </div>

                        {/* Controles de cantidad */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors duration-300"
                          >
                            <FiMinus size={16} />
                          </button>
                          
                          <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>
                          
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="bg-amor-purple hover:bg-amor-indigo text-white rounded-full p-1 transition-colors duration-300"
                          >
                            <FiPlus size={16} />
                          </button>
                        </div>

                        {/* Precio total del item */}
                        <div className="text-right">
                          <p className="font-bold text-lg text-gray-800">
                            ${item.product.price * item.quantity}
                          </p>
                        </div>

                        {/* Eliminar */}
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700 transition-colors duration-300"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer del carrito */}
              {cartItems.length > 0 && (
                <div className="border-t p-6 bg-gray-50">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-semibold text-gray-800">Total:</span>
                    <span className="text-2xl font-bold text-amor-purple">${getCartTotal()}</span>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={clearCart}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-full font-semibold transition-all duration-300"
                    >
                      Limpiar carrito
                    </button>
                    
                    <button
                      onClick={handleCheckout}
                      className="flex-2 bg-gradient-romantic text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center"
                    >
                      <FiMessageCircle className="mr-2" />
                      Enviar pedido por WhatsApp
                    </button>
                  </div>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    📱 Tu pedido se enviará por WhatsApp a: {whatsappNumber}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;