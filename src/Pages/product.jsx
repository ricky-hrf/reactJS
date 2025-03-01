import Card from "../components/Fragments/CardProduct";
import { useState } from "react";
import CartModal from "../components/Fragments/CartModal";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";

const products = [{
  id: 1,
  image: "/product/product-2.jpg",
  title: "Buah Pisang",
  description: "buah ini yang membuat manusia semakin kuat",
  price: "100 jt"
},
{
  id: 2,
  image: "/product/product-3.jpg",
  title: "Buah Naga",
  description: "Buah anti lapar",
  price: "150 jt"
},
{
  id: 3,
  image: "/product/product-1.jpg",
  title: "Buah Strowberry",
  description: "Buah yang bisa meredakan amarah",
  price: "200 jt"
},
  {id: 1,
  image: "/product/product-2.jpg",
  title: "Buah Pisang",
  description: "buah ini yang membuat manusia semakin kuat",
  price: "100 jt"
},
{
  id: 2,
  image: "/product/product-3.jpg",
  title: "Buah Naga",
  description: "Buah anti lapar",
  price: "150 jt"
},
{
  id: 3,
  image: "/product/product-1.jpg",
  title: "Buah Strowberry",
  description: "Buah yang bisa meredakan amarah",
  price: "200 jt"
},
{ id: 1,
  image: "/product/product-2.jpg",
  title: "Buah Pisang",
  description: "buah ini yang membuat manusia semakin kuat",
  price: "100 jt"
},
{
  id: 2,
  image: "/product/product-3.jpg",
  title: "Buah Naga",
  description: "Buah anti lapar",
  price: "150 jt"
},
{
  id: 3,
  image: "/product/product-1.jpg",
  title: "Buah Strowberry",
  description: "Buah yang bisa meredakan amarah",
  price: "200 jt"
}

];
  
const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const TambahKeKeranjang = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  return (
    <>
      <Navbar cartCount={cart.length} setIsCartOpen={setIsCartOpen} />
      <div className="pt-16 p-2 flex flex-wrap justify-center items-center min-h-screen gap-5 bg-slate-90">
        {products.map((product) => (
        <Card
          key={product.id}
            product={product}
            TambahKeKeranjang={TambahKeKeranjang}
        />
        ))}
    <CartModal isOpen={isCartOpen} setIsOpen={setIsCartOpen} cart={cart} />        
      </div>
      <Footer />
    </>
  );
}


export default ProductPage;