import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import MainLayout from '../components/Layouts/MainLayouts'
import {
  FaStar, FaPlus, FaMinus, FaCommentDots, FaShareAlt,
  FaHeart, FaRegHeart
  } from 'react-icons/fa';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorited, setFavorited] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [stock] = useState(100)

  const tambahQuantity = () => {
    if(quantity<stock){
      setQuantity(prev => prev + 1);
    }
  };

  const kurangQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
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

  const subTotal = product ? product.price * quantity : 0;

  return (
    <>
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-6 gap-8">
          <div className="lg:col-span-4 md:col-span-2">
            <div className="rounded-lg overflow-hidden border border-purple-300 h-[300px] w=full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-8"
              />
            </div>
              <div className="flex justify-start gap-4 mt-4">
                <div className="h-16 w-16 rounded-lg border hover:border-purple-300 hover:bg-purple-50 cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full p-2 object-contain "
                  />
                </div>
                <div className="h-16 w-16 rounded-lg border hover:border-purple-300 cursor-pointer hover:bg-purple-50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full p-2 object-contain "
                  />
                </div>
              </div>
          </div>

          <div className="lg:col-span-5 md:col-span-4">
            <div className='space-y-4'>
              <h1 className="text-xl font-bold text-gray-800">{product.title}</h1>
              <div className="flex justify-start items-center gap-2 my-2">
                <FaStar className='h-6 w-6' color='yellow'/>
                <span className='text-lg text-gray-600'>
                  {product.rating?.rate} / 5 ({product.rating?.count} reviews)
                </span>
              </div>
              <div className="my-4 flex items-center justify-between">
                <p className="text-2xl font-semibold text-purple-600">
                  {product.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}
                </p>
                  <button onClick={() => setFavorited(!favorited)} className='text-purple-600 text-xl'>
                    {favorited ? <FaHeart /> : <FaRegHeart />}
                </button>
                </div>
                <div className="border border-purple-100 mb-4"></div>
            </div>

            <div className="space-y-4">
              <div className='mt-4'>
                <h3 className="text-lg font-medium text-gray-900">Deskripsi Produk</h3>
                <p className="text-gray-500 mt-2">{product.description}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 p-4">
            <div className="border border-purple-600 rounded-lg p-4">
              <h3 className='font-semibold text-xl text-center text-purple-600'>Jumlah Barang</h3>
              <div className="my-4 text-gray-800 font-semibold">
                <span>Biru</span>
              </div>
              <div className="border-b border-purple-200"></div>
              <div className="flex justify-start items-center gap-4">
                <div className="flex justify-between items-center gap-4 my-3 border border-purple-600 rounded-lg">
                    <div className="cursor-pointer text-purple-700 hover:bg-gray-200 rounded-l-lg p-2"
                    onClick={kurangQuantity}>
                    <FaMinus />
                  </div>
                  <div className="text-gray-700">
                      <span>{ quantity}</span>
                  </div>
                    <div
                      onClick={tambahQuantity}
                      className="cursor-pointer text-purple-700 hover:bg-gray-200 rounded-r-lg p-2">
                    <FaPlus />
                  </div>
                </div>
                  <span className='text-gray-700'>{ stock}</span>
              </div>
              <div className="mb-2 flex justify-between text-gray-600">
                <span>SubTotal: </span>
                <span className='font-semibold text-lg'>{subTotal.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}</span>
              </div>
              <div className="mt-4">
                <button
                onClick={() => {
                addToCart({
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  image: product.image,
                  quantity: quantity
                });
                }}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg transition-colors mb-2"
                >
                  Tambah ke Keranjang
                </button>
                <button className="w-full border border-purple-600 text-purple-700 py-2 px-6 rounded-lg font-semibold hover:bg-gray-200">Beli</button>
              </div>
              <div className="flex justify-between gap-4 mt-2">
                <div className="flex justify-between items-center gap-2 text-purple-600 cursor-pointer rounded-lg hover:bg-gray-200 hover:text-purple-700 p-2">
                  <FaCommentDots />
                  <span>Chat</span>
                </div>
                <div className="flex justify-between items-center gap-2 text-purple-600 cursor-pointer rounded-lg hover:bg-gray-200 hover:text-purple-700 p-2">
                  <FaShareAlt />
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </MainLayout>
    </>
  );
};

export default ProductDetailPage;