import { useState, useEffect } from "react";
import { getAllCategories, getProductByCategory } from "../services/productService"

const useCategories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [error, setError] = useState(null);

  // mengambil kategori produk dan gambar pertama dari setiap kategori
    useEffect(() => {
      const fetchCategoriesWithImages = async () => {
        try {
          const categories = await getAllCategories();
          const categoriesWithImages = await Promise.all(
            categories.map(async (category) => {
              const products = await getProductByCategory(category);
              return {
                name: category,
                image: products[0]?.image || '/placeholder-image.jpg'
              };
            })
          );
          setAllCategories(categoriesWithImages);
        } catch (err) {
          setError(err.message);
        } finally {
          setCategoriesLoading(false);
        }
      };
      fetchCategoriesWithImages();
    }, []);
  
  return {allCategories, categoriesLoading, error}
}

export default useCategories;