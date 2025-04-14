const CardPromo = () => {
  return (
    <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        Promo Spesial Hari Ini!
      </h1>
      <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl">
        Nikmati diskon eksklusif hingga 50% untuk koleksi produk terbaik kami. 
        Buruan sebelum kehabisan!
      </p>
      <button className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-opacity-80 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
        Lihat Promo Lainnya
      </button>
    </div>
  );
}
export default CardPromo;