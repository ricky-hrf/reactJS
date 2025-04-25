import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import MainLayout from '../components/Layouts/MainLayouts'
import {FaPlus, FaMinus, FaCommentDots, FaShareAlt,} from 'react-icons/fa';
import { getProductById, getProductByCategory } from '../services/productService';
import ImageProductDetail from '../components/Fragments/ImageProductDetail';
import DescriptionProductDetail from '../components/Fragments/DescriptionProductDetail';
import ConfirmationModal from '../components/Elements/Common/ConfirmationModal';
import useCategories from '../Hooks/useCategories';

const ProductDetailPage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(() => {
    const savedQty = localStorage.getItem(`quantity_${id}`);
    return savedQty ? (savedQty) : 1;
  });
  const [openConfirmModal, setOpenConfirmModal] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const {allCategories, categoriesLoading} = useCategories();

  // mengambil data produk berdasarkan kategori barang
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
          setRelatedLoading(false);
        }
      }
    };
    if (product) fetchRelatedProducts();
  }, [product]);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (id) {
      localStorage.setItem(`quantity_${id}`, quantity);
    }
  }, [quantity, id]);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (loading) return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 pt-4">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
      ))}
    </div>
  );
  if (error) return <p>Error: {error}</p>

  return (
    <>
      <MainLayout>
        <div className="p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 shadow-purple-300 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-6 gap-8">
              <ImageProductDetail 
              product = {product} />
              <DescriptionProductDetail
              product={product} />
            <div className="lg:col-span-3 p-4">
              <div className="border border-purple-600 rounded-lg p-4">
                <h3 className='font-semibold text-xl text-center text-purple-600'>Jumlah Barang</h3>
                <div className="my-4 text-gray-800 font-semibold">
                  <span>Biru</span>
                </div>
                <div className="border-b border-purple-200"></div>
                <div className="flex justify-start items-center gap-4">
                  <div className="flex justify-between items-center gap-4 my-3 border border-purple-600 rounded-lg">
                    <div onClick={decrementQuantity} className="cursor-pointer text-purple-700 hover:bg-gray-200 rounded-l-lg p-2">
                      <FaMinus />
                    </div>
                    <div className="text-gray-700">
                      <span>{quantity}</span>
                    </div>
                    <div className="cursor-pointer text-purple-700 hover:bg-gray-200 rounded-r-lg p-2" onClick={incrementQuantity}>
                      <FaPlus />
                    </div>
                  </div>
                  <span className='text-gray-700'></span>
                </div>
                <div className="mb-2 flex justify-between text-gray-600">
                  <span>SubTotal: </span>
                  <span className='font-semibold text-lg'>
                    {(product.price * quantity).toLocaleString("id-ID", {style: "currency", currency: "IDR"})}
                  </span>
                </div>
                <div className="mt-4">
                  <button onClick={() => { setOpenConfirmModal(product.id) }} className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg transition-colors mb-2">
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
          <ConfirmationModal
            isOpen={!!openConfirmModal}
            onCancel={() => setOpenConfirmModal(false)}
            onConfirm={() => {
              addToCart(product, quantity);
              localStorage.removeItem(`quantity_${id}`);
              setQuantity(1);
              setOpenConfirmModal(false);
            }}
            title="Tambah Barang"
            message="Apakah Anda yakin ingin menambah barang ini ke keranjang?"
            confirmText="Ya, Tambah"
          />
        </div>
        <div className="max-w-7xl mx-auto mt-16 mb-8 px-4 sm:px-6 lg:px-8 shadow-purple-300 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            Produk Lainnya dalam Kategori {product?.category}
          </h2>
          {relatedLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
              ))}
            </div>
          ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link 
                    to={`/products/${relatedProduct.id}`}
                    key={relatedProduct.id}
                    className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="w-full h-48 object-contain"
                    />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-purple-600 mt-2">
                      {relatedProduct.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR"
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {!relatedLoading && relatedProducts.length === 0 && (
            <p className="text-gray-500">Tidak ada produk lain dalam kategori ini</p>
          )}
          </div>

          <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Semua Kategori</h2>

            {categoriesLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
                ))}
              </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {allCategories.map((category) => (
                    <div key={category.name} className="border rounded-lg overflow-hidden shadow-sm transition-shadow">
                      <img src={category.image} alt={category.name} className='w-full h-48 object-contain p-4 bg-white' />
                      <div className="p-4 bg-gray-50 border-t">
                        <h3 className='font-semibold text-gray-700 capitalize'>
                          {category.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
            )}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default ProductDetailPage;