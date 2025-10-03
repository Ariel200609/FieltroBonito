
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CartProvider, useCart } from './context/CartContext';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Cart from './components/Cart';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { openCart } = useCart();

  useEffect(() => {
    // Simular tiempo de carga mínimo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <SplashScreen key="splash" onComplete={() => setIsLoading(false)} />
      ) : (
        <div key="main" className="min-h-screen bg-white">
          <Header onCartClick={openCart} />
          <div id="hero">
            <HeroSection />
          </div>
          <div id="services">
            <ServicesSection />
          </div>
          <div id="products">
            <ProductsSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
          <Footer />
          <Cart />
        </div>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;