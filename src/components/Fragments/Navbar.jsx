import { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";
import PropTypes from 'prop-types';
import { FaUserCircle } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import SearchBar from "../Elements/SearchBar";

const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(false);

  const tabs = [
    "Makanan & Minuman",
    "Baju Pria",
    "Baju Wanita",
    "Baju Anak-anak",
    "Elektronik"
  ];

  const handleSearch = (query) => {
    console.log("Cari:", query);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 grid grid-cols-[200px,1fr,100px] items-center">
        {/* kolom pertama untuk logo */}
        <div className="self-start">
          <Link to="/" className="text-2xl font-extrabold text-purple-600 italic hover:text-purple-700 select-none">
            OnoNihaStore.
          </Link>
        </div>
        {/* kolom keduan untuk search bar dan kategori barang */}
        <div className="hidden md:flex flex-col items-center w-full">
          < SearchBar onSearch={handleSearch} />
          <div className="mt-2 flex justify-center">
            <ul className="flex gap-8 px-4 font-sans font-medium text-gray-600 ">
              {tabs.map((tab) => (
                <li key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer transition-all pb-1 ${
                    activeTab === tab ? " text-purple-600 border-b border-purple-600" : "hover:text-purple-600"
                      }`}
                >{tab}
                </li>
              ))}  
            </ul>
          </div>
        </div>
        {/* kolom ketiga untuk cart dan profile */}
        <div className="self-start">
          <div className="flex items-center justify-end space-x-4">
            <Link to="#" className="relative" onClick={()=> setIsCartOpen(true)} >
              <box-icon name="cart" color="gray" size="30px"></box-icon>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          <div className="relative">
            <FaUserCircle
              className="text-2xl cursor-pointer text-gray-600"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            />
            {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
                  <Link to="/profile">
                    <div className="px-4 py-2 hover:bg-gray-200 text-gray-600 rounded-t-lg cursor-pointer">My Profile</div>
                  </Link>
                  <div className="px-4 py-2 hover:bg-red-300 text-gray-600 rounded-b-lg hover:text-white cursor-pointer">Logout</div>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
      {/* searchbar untuk tampilan mobile */}
      <div className="md:hidden">
        <div className="container mx-auto px-4 py-1 my-1">
          <SearchBar onSearch = {handleSearch}/>
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
  setIsCartOpen: PropTypes.func.isRequired,
};

export default Navbar;
