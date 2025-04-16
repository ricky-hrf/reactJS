import CardPromo from '../Fragments/CardPromo';
import { getProducts } from '../../services/productService';
import { useState, useEffect } from "react";
import Kategori from '../Fragments/Kategory';
import ProductUnggulan from '../Fragments/ProductUnggulan';
import 'swiper/css/pagination';


const StoreLanding = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // fungsi fetch data menggunakan service
  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  
  if (isLoading) return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 pt-4">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="animate-pulse bg-gray-200 h-48 rounded-lg" />
      ))}
    </div>
  );
  const categories = [...new Set(products.map(p => p.category).filter(Boolean))];

  return (
    <div>
      <section className="bg-gradient-to-r from-purple-500 to-purple-600 py-8 rounded-lg shadow-xl mb-4 mx-4 md:mx-8 lg:mx-16">
        <div className="container mx-auto px-4 md:px-6">
          <CardPromo />
        </div>
      </section>
      <section className="py-4 bg-white rounded-lg shadow-xl" id="products">
        <ProductUnggulan
        products={products} />
      </section>
      <section className="py-4 bg-white rounded-lg shadow-xl mt-4">
        <Kategori
          categories={categories} />
      </section>
    </div>
  );
};

export default StoreLanding;