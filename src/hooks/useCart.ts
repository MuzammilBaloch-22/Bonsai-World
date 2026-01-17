import { useState, useEffect, useCallback } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CART_KEY = 'bonsai_cart';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_KEY);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    localStorage.setItem(CART_KEY, JSON.stringify(newCart));
    setCart(newCart);
  };

  const addToCart = useCallback((item: Omit<CartItem, 'quantity'>) => {
    const existingIndex = cart.findIndex((i) => i.id === item.id);
    
    if (existingIndex > -1) {
      const newCart = [...cart];
      newCart[existingIndex].quantity += 1;
      saveCart(newCart);
    } else {
      saveCart([...cart, { ...item, quantity: 1 }]);
    }
  }, [cart]);

  const removeFromCart = useCallback((id: string) => {
    saveCart(cart.filter((item) => item.id !== id));
  }, [cart]);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      saveCart(newCart);
    }
  }, [cart, removeFromCart]);

  const clearCart = useCallback(() => {
    saveCart([]);
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
  };
};
