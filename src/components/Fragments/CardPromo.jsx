import { Link } from "react-router-dom";

const CardPromo = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-2">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
          Promo Spesial Hari Ini!
        </h1>
        <p className="text-sm md:text-md text-purple-100 mb-8 max-w-xl">
          Nikmati diskon eksklusif hingga 50% untuk koleksi produk terbaik kami.
          Buruan sebelum kehabisan!
        </p>
        <Link to={'/promo'}>
          <button className="bg-white text-purple-600 px-5 py-2 rounded-full hover:bg-opacity-80 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
            Lihat Promo Lainnya
          </button>
        </Link>
      </div>
          
      <div className="lg:w-1/2 flex sm:flex-row item items-center justify-between gap-2">
        <div className="w-1/3 ml-3 transform hover:scale-110 -rotate-6 hover:-rotate-3 transition-all duration-300">
          <div className="relative">
          <img
            src="/product/product-2.jpg"
            alt="Promo product-2"
            className="w-full rounded-lg shadow-2xl border-2 border-white opacity-90 hover:opacity-100"
          />
            <div className="absolute top-2 right-0 bg-red-500 text-white px-2 py-1 rounded-l-md text-sm font-bold">
                50% OFF
              </div>
          </div>
        </div>
          <div className="left-10 top-1/4 w-1/3 transform rotate-6 hover:scale-110 hover:rotate-3 transition-all duration-300">
            <div className="relative">
              <img
                src="/product/product-1.jpg"
                alt="Promo Visual 2"
                className="w-full rounded-lg shadow-xl border-2 border-white opacity-90 hover:opacity-100"
              />
              <div className="absolute top-2 right-0 bg-red-500 text-white px-2 py-1 rounded-l-md text-sm font-bold">
                50% OFF
              </div>
          </div>
        </div>
          <div className="bottom-1/4 w-1/3 transform -rotate-6 hover:scale-110 hover:-rotate-3 transition-all duration-300">
          <div className="relative">
          <img
              src="/product/product-3.jpg"
              alt="Promo Visual 3"
              className="w-full rounded-lg shadow-xl border-4 border-white opacity-90 hover:opacity-100"
            />
            <div className="absolute top-2 right-0 bg-red-500 text-white px-2 py-1 rounded-l-md text-sm font-bold">
                50% OFF
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
export default CardPromo;