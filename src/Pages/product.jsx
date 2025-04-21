import Card from "../components/Fragments/CardProduct";
import ContentLayouts from "../components/Layouts/MainLayouts";

const products = [{
  id: 1,
  image: "../product/product-2.jpg",
  title: "Buah Pisang",
  description: "buah ini yang membuat manusia semakin kuat",
  category: "prime",
  price: 100000
},
  {
    id: 2,
    image: "/product/product-3.jpg",
    title: "Buah Naga",
    description: "Buah anti lapar",
    category: "prime",
    price: 150000
  },
  {
    id: 3,
    image: "/product/product-3.jpg",
    title: "Buah Naga",
    description: "Buah anti lapar",
    category: "prime",
    price: 150000
  },
  {
  id: 4,
  image: "/product/product-3.jpg",
  title: "Buah Naga",
    description: "Buah anti lapar",
  category: "secunder",
  price: 150000
},
{
  id: 5,
  image: "/product/product-1.jpg",
  title: "Buah Strowberry",
  description: "Buah yang bisa meredakan amarah",
  category: "secunder",
  price: 200000
}
];
  
const ProductPage = () => {

  return (
    <ContentLayouts>
      <div className="pt-16 p-2 flex flex-wrap justify-center items-center min-h-screen gap-5 bg-slate-100">
        {products.map((product) => (
        <Card
          key={product.id}
            product={product}
          />
        ))}   
      </div>
    </ContentLayouts>
  );
}

export default ProductPage;