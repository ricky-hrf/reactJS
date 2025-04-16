import { useState, useRef, useCallback } from "react";

export const useSwiperLogic = () => { 
  const [swiperRef, setSwiperRef] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSwiper = useCallback((swiper) => {
    setSwiperRef(swiper);
  }, []);

  const handleSlideChange = useCallback((swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  return {
    swiperRef,
    isBeginning,
    isEnd,
    prevRef,
    nextRef,
    handleSwiper,
    handleSlideChange,
  };
}
export default useSwiperLogic;