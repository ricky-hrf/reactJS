import { useState, useEffect } from 'react';
import { getProductByCategory } from '../services/productService';

const useProductByCategory = (product) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (product?.category) {
        try {
          const data = await getProductByCategory(product.category);
          const filtered = data.filter(p => p.id !== product.id);
          setRelatedProducts(filtered.slice(0, 4)); //mengambil 4 produk pertama dari kategori yang sama
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };
    if (product) {
      fetchRelatedProducts();
    } else {
      setLoading(false);
    }
  }, [product]);
  
  return { relatedProducts, error, loading };
  
};
export default useProductByCategory;