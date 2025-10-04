import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const ProductsSection: React.FC = () => {
  const [activeFilter] = useState<'all' | string>('all');

  const getFilteredProducts = () => {
    if (activeFilter === 'all') return products;
    return products.filter(product => product.category === activeFilter);
  };

  /*const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };*/

  /*const filters = [
    { key: 'all', label: 'Todos los productos', icon: <FiHeart size={20} />, count: products.length },
    { key: 'polaroids', label: 'Polaroids', icon: <FiHeart size={20} />, count: getProductsByCategory('polaroids').length },
    { key: 'stickers', label: 'Stickers', icon: <HiSparkles size={20} />, count: getProductsByCategory('stickers').length },
    { key: 'cuadros', label: 'Cuadros', icon: <FiFilter size={20} />, count: getProductsByCategory('cuadros').length },
    { key: 'otros', label: 'Otros', icon: <FiHeart size={20} />, count: getProductsByCategory('otros').length },
  ];*/

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      {/*<div className="max-w-7xl mx-auto px-4">*/}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Manualidades
          </h2>
          <div className="flex items-center justify-center mb-8">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
              <FiHeart className="text-amor-pink mr-2" size={24} />
            </motion.div>
            <p className="text-xl text-gray-900 max-w-3xl">
              Descubre nuestros productos.
            </p>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
              <FiHeart className="text-amor-pink ml-2" size={24} />
            </motion.div>
          </div>

          {/* Filtros */}
          {/*
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-romantic text-black shadow-lg'
                    : 'bg- text-black-600 hover:text-black-800 shadow-md hover:shadow-lg'
                }`}
              >
                {filter.icon}
                <span className="ml-2">{filter.label}</span>
                <span className="ml-2 bg-black/10 px-2 py-1 rounded-full text-xs">
                  {filter.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>*/}

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {getFilteredProducts().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
