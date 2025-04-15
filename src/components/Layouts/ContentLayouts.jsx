import CardPromo from '../Fragments/CardPromo';
import { useEffect, useState, useRef } from 'react';
import { getProducts } from '../../services/productService';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StoreLanding = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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

  return (
    <div>
      <section className="bg-gradient-to-r from-purple-500 to-purple-600 py-8 rounded-lg shadow-xl mb-4 mx-4 md:mx-8 lg:mx-16">
        <div className="container mx-auto px-4 md:px-6">
          <CardPromo />
        </div>
      </section>

      {/* Produk Unggulan */}
      <section className="py-4 bg-white rounded-lg shadow-xl" id="products">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Produk Unggulan Kami</h2>

          <div className="relative">
            <button
              ref={prevRef}
              onClick={() => swiperRef?.slidePrev()}
              className={`absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-purple-600 text-white p-2 rounded-full shadow-md transition-opacity ${
          isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
            >
              <ChevronLeft size={16} />
            </button>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={2}
            onSwiper={(swiper) => setSwiperRef(swiper)}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{ 
            640:{slidesPerView:2},
            768:{slidesPerView:4},
            1024:{slidesPerView:6},
            }}
            className="pt-4">
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="w-44 h-64 bg-white shadow-lg rounded-b-lg border hover:shadow-2xl hover:border-purple-400 hover:scale-105 transform transition-transform duration-300 cursor-pointer">
                <div className="relative  h-32 flex items-center justify-center overflow-hidden bg-white">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="max-h-full object-contain"
                  />
                  <div className="absolute top-0 left-0 bg-purple-500 text-white px-2 py-3 text-xs font-bold [clip-path:polygon(0_0,100%_0,100%_75%,50%_100%,0_75%)]">
                    New
                  </div>
                </div>
                <div className="p-2 overflow-hidden">
                    <span className="text-xs text-gray-500 hover:underline">{product.category}</span>
                    <h3 className="text-xs xs:text-[13px] sm:text-sm md:text-base lg:text-lg font-semibold mt-2 text-gray-700 line-clamp-2">{product.title}</h3>
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            ref={nextRef}
            onClick={() => swiperRef?.slideNext()}
            className={`absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-purple-600 text-white p-2 rounded-full shadow-md transition-opacity ${
          isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default StoreLanding;