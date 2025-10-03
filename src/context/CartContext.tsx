import React, { createContext, useContext, useState, type ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customization?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number, customization?: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, quantity: number = 1, customization?: string) => {
    try {
      setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.product.id === product.id);
        
        if (existingItem) {
          return prevItems.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity, customization: customization || item.customization }
              : item
          );
        } else {
          return [...prevItems, { product, quantity, customization }];
        }
      });
      
      // Auto-abrir carrito al agregar producto
      setTimeout(() => setIsCartOpen(true), 100);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = (productId: number) => {
    try {
      setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateQuantity = (productId: number, quantity: number) => {
    try {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }
      
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.product.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const clearCart = () => {
    try {
      setCartItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const getCartTotal = () => {
    try {
      return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    } catch (error) {
      console.error('Error calculating total:', error);
      return 0;
    }
  };

  const getCartItemsCount = () => {
    try {
      return cartItems.reduce((total, item) => total + item.quantity, 0);
    } catch (error) {
      console.error('Error counting items:', error);
      return 0;
    }
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    isCartOpen,
    setIsCartOpen,
    openCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};