import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {getProduct} from '../services/productService'

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      const data = await getProduct();
      setProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  if (isLoading) return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 pt-4">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="animate-pulse bg-gray-200 h-48 rounded-lg" />
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-8"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-2xl text-purple-600">
                ${product.price}
              </p>
              <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Deskripsi Produk</h3>
              <p className="text-gray-500 mt-2">{product.description}</p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-gray-500">Rating</dt>
                  <dd className="text-gray-900">
                    {product.rating?.rate} / 5 ({product.rating?.count} reviews)
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <button
            onClick={() => {
              addToCart({
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.image
              });
              alert('Produk berhasil ditambahkan ke keranjang!');
            }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors"
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;