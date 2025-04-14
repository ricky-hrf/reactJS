import Card from "../components/Fragments/CardProduct";
import { useState } from "react";
import CartModal from "../components/Fragments/CartModal";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";

const products = [{
  id: 1,
  image: "../product/product-2.jpg",
  title: "Buah Pisang",
  description: "buah ini yang membuat manusia semakin kuat",
  price: 100000
},
{
  id: 2,
  image: "/product/product-3.jpg",
  title: "Buah Naga",
  description: "Buah anti lapar",
  price: 150000
},
{
  id: 3,
  image: "/product/product-1.jpg",
  title: "Buah Strowberry",
  description: "Buah yang bisa meredakan amarah",
  price: 200000
}

];
  
const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const TambahKeKeranjang = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    } );
  };

  const HapusDariKeranjang = (id) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)
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
    <>
      <Navbar cartCount={cart.length} setIsCartOpen={setIsCartOpen} />
      <div className="pt-16 p-2 flex flex-wrap justify-center items-center min-h-screen gap-5 bg-slate-100">
        {products.map((product) => (
        <Card
          key={product.id}
            product={product}
            TambahKeKeranjang={TambahKeKeranjang}
          />
        ))}
        <CartModal
          isOpen={isCartOpen}
          setIsOpen={setIsCartOpen}
          cart={cart}
          HapusDariKeranjang={HapusDariKeranjang}
          TambahJumlah={TambahJumlah}
          KurangiJumlah={KurangiJumlah}
          totalHarga={totalHarga}
        />        
      </div>
      <Footer />
    </>
  );
}


export default ProductPage;