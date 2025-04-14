import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const TambahKeKeranjang = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const HapusDariKeranjang = (id) => {
    setCart(prevCart =>
      prevCart
        .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        .filter(item => item.quantity > 0)
    );
  };

  const TambahJumlah = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const KurangiJumlah = (id) => {
    setCart(cart.map(item => item.id === id && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
    ));
  };

  const totalHarga = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      isCartOpen,
      setIsCartOpen,
      TambahKeKeranjang,
      HapusDariKeranjang,
      TambahJumlah,
      KurangiJumlah,
      totalHarga
    }}>
      {children}
    </CartContext.Provider>
  );
};