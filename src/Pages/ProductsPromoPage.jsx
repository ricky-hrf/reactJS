import { useState } from "react";
import MainLayouts from "../components/Layouts/MainLayouts";

const ProductsPromoPage = () => {
  const [activeTab, setActiveTab] = useState("Semua Promo");

  const tabs = [
    "Semua Promo",
    "Makanan & Minuman",
    "Kesehatan",
    "Rumah Tangga & Dapur",
    "Elektronik",
    "Health & Style",
  ];

  return (
    <div>
      <MainLayouts>
        <div className=" bg-white m-4 p-8 rounded-lg shadow-2xl">
          <div className="my-5 lg:mt-0">
          <ul className="flex flex-wrap md:flex-nowrap gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide justify-start text-sm md:text-base font-medium text-gray-600 border-b border-gray-300">
            {tabs.map((tab) => (
              <li key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer transition-all pb-1 ${
                activeTab === tab ? " text-purple-600 border-b border-purple-600" : "hover:text-purple-600"
                  }`}>
                {tab}
              </li>
            ))}
          </ul>
          </div>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-red-100 hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src="/product/product-2.jpg" 
                      alt="" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      DISKON 50%
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">Pisang Kuning</h3>
                    <p className="text-gray-600 text-sm mb-2">Deskripsi singkat produk promo...</p>
                    <div className="flex items-center justify-between mt-3">
                      <div>
                        <span className="text-gray-400 line-through text-xs">Rp 500.000</span>
                        <p className="text-red-600 font-bold text-sm">Rp 250.000</p>
                      </div>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition">
                        Beli Sekarang
                      </button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </MainLayouts>
    </div>
  );
}
export default ProductsPromoPage;