import MainLayouts from "../components/Layouts/MainLayouts";
import { getProducts } from "../services/productService";
import { useState, useEffect } from "react";
import CardPromo from "../components/Fragments/CardPromo";
import ProductUnggulan from "../components/Fragments/ProductUnggulanSection";
import Products from "../components/Fragments/Products"
import CategorySection from "../components/Fragments/CategorySection";
import useCategories from "../Hooks/useCategories";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const {allCategories, categoriesLoading} = useCategories();

  // mengambil semua produk dari API
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

  return (
    <MainLayouts>
      <div className="min-h-screen bg-gray-100 mt-16 md:mt-0 xl:mt-0 p-2">
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
          <CategorySection
            categoriesLoading={categoriesLoading}
            categories={allCategories} />
        </section>
        <section className="py-4 bg-white rounded-lg shadow-xl mt-4" id="products">
          <Products
          products={products} />
        </section>
      </div>
    </MainLayouts>
  );
};

export default HomePage;