import React, { useState, useContext, createContext, useEffect } from 'react';

const CartStateContext = createContext();

const getCart = () => {
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  return savedCart ? savedCart : [];
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCart());
  const [uniqueItems, setUniqueItems] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const addItem = (newProduct, qty) => {
    if (!cart.find(item => item.product.id === newProduct.id)) {
      setCart([...cart, { product: newProduct, quantity: qty }]);
    } else {
      setCart(
        cart.map(item =>
          item.product.id === newProduct.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      );
    }
  };

  const updateItemCount = (id, qty) =>
    setCart(
      cart.map(item =>
        item.product.id === id ? { ...item, quantity: qty } : item
      )
    );

  const removeItem = id => {
    setCart(cart.filter(item => item.product.id !== id));
  };

  const clearCart = () => setCart([]);

  const getTotalItems = () => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    return totalItems;
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setUniqueItems(cart.length);
    setTotalItems(getTotalItems());
  }, [cart]);

  return (
    <CartStateContext.Provider
      value={{
        cart,
        uniqueItems,
        totalItems,
        addItem,
        clearCart,
        updateItemCount,
        removeItem,
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
