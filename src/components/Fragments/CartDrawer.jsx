import { useState } from "react";
import { useCart } from "../../context/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTimes,
  faShoppingBasket,
  faTrashAlt,
  faPlus,
  faMinus
} from '@fortawesome/free-solid-svg-icons'
import ConfirmationModal from "../Elements/Common/ConfirmationModal";
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity} = useCart();
  
  const [itemToDelete, setItemToDelete] = useState(null);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[999]">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity">
        <div className="fixed top-0 right-0 h-full w-full max-w-md flex flex-col bg-white shadow-2xl transform transition-transform duration-300">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon
                icon={faShoppingBasket}
                className="w-6 h-6 text-purple-600"
              />
              <h2 className="text-2xl font-bold text-gray-800">
                Keranjang Belanja
                <span className="text-sm font-normal ml-2">
                  ({cartItems.length} item)
                </span>
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FontAwesomeIcon
                icon={faTimes}
                className="w-5 h-5 text-gray-500 hover:text-gray-700"
              />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-8">
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  className="w-20 h-20 text-gray-300 mb-6"
                />
                <h3 className="text-lg font-medium text-gray-500 mb-2">
                  Keranjang Kosong
                </h3>
                <p className="text-gray-400 text-center text-sm">
                  Tambahkan produk ke keranjang untuk mulai berbelanja
                </p>
              </div>
            ) : (
                cartItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4 flex-1">
                      <Link 
                        to={`/products/${item.id}`}
                        onClick={() => setIsCartOpen(false)}
                        className="shrink-0"
                      >
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                      </Link>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-gray-500">
                          {item.quantity} × Rp {item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg">
                        <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded-l-lg">
                          <FontAwesomeIcon icon={faMinus} className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded-r-lg">
                          <FontAwesomeIcon icon={faPlus} className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() =>setItemToDelete(item.id)}
                        className="text-red-500 hover:text-red-700 p-2" >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </div>
                  </div>
                ))
            )}
          </div>
          <ConfirmationModal
            isOpen={!!itemToDelete}
            onCancel={() => setItemToDelete(null)}
            onConfirm={() => {
              removeFromCart(itemToDelete)
              setItemToDelete(null)
            }}
            title="Hapus Item"
            message="Apakah Anda yakin ingin menghapus item ini dari keranjang?"
            confirmText="Ya, Hapus"
          />

          {cartItems.length === 0 ? (
            // saat keranjang kosong
            <div className="p-6 border-t border-gray-100">
              <button className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors" onClick={() => setIsCartOpen(false)}>
                Lanjutkan Belanja
              </button>
            </div>
          ) : (
              <div className="p-6 border-t border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold text-purple-600">Rp {totalPrice.toLocaleString()}</span>
                </div>
                <Link to={'/checkout'}>
                  <button className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors" onClick={() => setIsCartOpen(false)}>
                    Checkout
                  </button>
                </Link>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;