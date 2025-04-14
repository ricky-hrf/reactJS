import CardPromo from '../Fragments/CardPromo';

const StoreLanding = () => {

  return (
    <div>
      <section className="bg-gradient-to-r from-purple-500 to-purple-600 py-16 rounded-lg shadow-xl mb-16 mx-4 md:mx-8 lg:mx-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <CardPromo />

            {/* Image Content */}
            <div className="lg:w-1/2 flex justify-center relative">
              {/* Main Image */}
              <div className="relative z-10 w-2/3 transform hover:-translate-y-2 transition-all duration-300">
                <img 
                  src="/product/product-2.jpg" 
                  alt="Promo Visual"
                  className="w-full rounded-lg shadow-2xl border-4 border-white"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  50% OFF
                </div>
              </div>
              
              {/* Secondary Images */}
              <div className="absolute -right-10 top-1/4 w-1/3 transform rotate-6 hover:rotate-3 transition-all duration-300">
                <img 
                  src="/product/product-1.jpg" 
                  alt="Promo Visual 2"
                  className="w-full rounded-lg shadow-xl border-4 border-white opacity-90 hover:opacity-100"
                />
              </div>
              
              <div className="absolute -left-10 bottom-1/4 w-1/3 transform -rotate-6 hover:-rotate-3 transition-all duration-300">
                <img 
                  src="/product/product-3.jpg" 
                  alt="Promo Visual 3"
                  className="w-full rounded-lg shadow-xl border-4 border-white opacity-90 hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section className="py-16 bg-white" id="products">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Produk Unggulan</h2>
        </div>
      </section>
    </div>
  );
};

export default StoreLanding;