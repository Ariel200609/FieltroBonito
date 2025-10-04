import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import CarruselTalleres from './components/carruselTalleres';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <SplashScreen key="splash" onComplete={() => setIsLoading(false)} />
      ) : (
        <div key="main" className="min-h-screen bg-white">
          <Header />
          <div id="hero">
            <HeroSection />
          </div>
          <div id="services">
            <ServicesSection />
          </div>
          <div id="products">
            <ProductsSection />
          </div>
          <div>
            <CarruselTalleres/>
          </div>
          <div id="contact">
            <ContactSection />
          </div>
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
};

export default AppContent;
