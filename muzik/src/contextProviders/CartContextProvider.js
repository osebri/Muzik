import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  
  const initialCartProducts = JSON.parse(localStorage.getItem('cart')) || [];

  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  useEffect(() => {
    
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const removeFromCart = (productTitleToRemove) => {
    const updatedCart = [...cartProducts];

    
    const indexToRemove = updatedCart.findIndex(
      (product) => product.title === productTitleToRemove
    );

    if (indexToRemove !== -1) {
      
      updatedCart.splice(indexToRemove, 1);
      setCartProducts(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
