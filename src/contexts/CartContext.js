import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();



const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart, setTotal]);


  const cartCount = () => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }

  useEffect(() => {
    cartCount();
  }, [cart]);

  const addToCart = (product, id,) => {
    const newItem = { ...product, amount: 1 }
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart)
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseProduct = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  }

  const decreaseProduct = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        }
        else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return <CartContext.Provider value={
    {
      cart, setCart,
      addToCart, removeFromCart, clearCart,
      increaseProduct, decreaseProduct,
      itemAmount, setItemAmount,
      cartCount,
      total
    }
  }>
    {children}
  </CartContext.Provider>;
};

export default CartProvider;
