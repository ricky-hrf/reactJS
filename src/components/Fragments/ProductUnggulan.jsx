import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from "../Elements/ProductCard/index";
import { useSwiperLogic } from "../Hooks/useSwiperLogic";
import { useState, useEffect } from "react";

const ProductUnggulan = ({ products }) => {
  const [sortedProducts, setSortedProducts] = useState([]);
  useEffect(() => {
    // Sort products ketika prop products berubah
    const sorted = [...products].sort((a, b) => b.rating.rate - a.rating.rate);
    setSortedProducts(sorted);
  }, [products]);
  const {
    swiperRef,
    isBeginning,
    isEnd,
    prevRef,
    nextRef,
    handleSwiper,
    handleSlideChange,
  } = useSwiperLogic();

  return (
    <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Produk Unggulan Kami</h2>
          <div className="relative">
            <button
              ref={prevRef}
              onClick={() => swiperRef?.slidePrev()}
              className={`absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-purple-600 text-white p-2 rounded-full shadow-md transition-opacity ${
                isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <ChevronLeft size={16} />
            </button>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={2}
              onSwiper={handleSwiper}
              onSlideChange={handleSlideChange}
              breakpoints={{ 
              640:{slidesPerView:2},
              768:{slidesPerView:4},
              1024:{slidesPerView:6},
              }}
              className="mt-6 mb-6 pt-6 h-[260px]"
              style={{'--swiper-wrapper-height': '100%',}}
            >
            {sortedProducts.map((product) => (
              <SwiperSlide key={product.id} className="!h-auto">
                <div className="h-full">
                  <ProductCard product={product} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            ref={nextRef}
            onClick={() => swiperRef?.slideNext()}
            className={`absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-purple-600 text-white p-2 rounded-full shadow-md transition-opacity ${
          isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
          >
            <ChevronRight size={16} />
            </button>
            </div>
        </div>
  )
}
ProductUnggulan.propTypes = {
  products: PropTypes.array.isRequired,
};
export default ProductUnggulan;