import { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";
import PropTypes from 'prop-types';
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({cartCount, setIsCartOpen}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-700">
          OnoNihaStore
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-purple-600">Home</Link></li>
          <li><Link to="/products" className="hover:text-purple-600">Products</Link></li>
          <li><Link to="/about" className="hover:text-purple-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-purple-600">Contact</Link></li>
        </ul>

        {/* Icon Cart & Burger Menu */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Link to="#" className="relative" onClick={()=> setIsCartOpen(true)} >
            <box-icon name="cart" color="gray" size="30px"></box-icon>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile */}
        <div className="relative">
          <FaUserCircle
            className="text-2xl cursor-pointer"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          />
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Lihat Profil</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Pengaturan</li>
                <li className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>

          {/* Burger Menu for Mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <box-icon name={isOpen ? "x" : "menu"} color="gray" size="30px"></box-icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white py-4 flex flex-col items-center gap-4 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-purple-600">Home</Link></li>
          <li><Link to="/products" className="hover:text-purple-600">Products</Link></li>
          <li><Link to="/about" className="hover:text-purple-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-purple-600">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};
Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
  setIsCartOpen: PropTypes.func.isRequired,
};

export default Navbar;
