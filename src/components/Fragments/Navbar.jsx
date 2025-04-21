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

  const handleSearch = (query) => {
    console.log("Cari:", query);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600 italic">
          OnoNihaStore.
        </Link>
        <div className="hidden md:flex flex-1 justify-center">
          < SearchBar onSearch={handleSearch} />
        </div>
        <div className="flex items-center gap-4">
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
              <ul className="">
                <li className="px-4 py-2 hover:bg-gray-200 text-gray-600 rounded-t-lg cursor-pointer">Lihat Profil</li>
                <li className="px-4 py-2 hover:bg-gray-200 text-gray-600 cursor-pointer">Pengaturan</li>
                <li className="px-4 py-2 hover:bg-red-300 text-gray-600 rounded-b-lg hover:text-white cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
        </div>
      </div>
      {/* searchbar untuk tampilan mobile */}
      <div className="md:hidden">
        <div className="container mx-auto px-4 py-1 my-2">
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
