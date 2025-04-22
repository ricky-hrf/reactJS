import { useState } from 'react';
import { FaChevronLeft, FaLock, FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ConfirmationModal from '../components/Elements/Common/ConfirmationModal';

const CheckoutPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, } = useCart();
  const [itemToDelete, setItemToDelete] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="flex items-center font-semibold text-gray-600 hover:underline">
            <FaChevronLeft className="mr-2" />
            Kembali ke Beranda
          </Link>
          <h1 className="text-3xl font-bold mt-4 text-purple-600">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-purple-300 shadow-xl p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Keranjang Belanja</h2>
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center border-b py-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-20 h-20 object-cover rounded-lg border border-purple-300 p-1"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.price.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-purple-200 rounded-lg text-gray-800">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-3 py-1 hover:bg-purple-200 rounded-l-lg"
                          disabled={item.quantity === 1}
                        >
                          <FaMinus className="text-sm" />
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-3 py-1 hover:bg-purple-200 rounded-r-lg"
                          disabled={item.quantity === item.stock}
                        >
                          <FaPlus className="text-sm" />
                        </button>
                      </div>
                      <div className="flex items-center">
                        <spa className="font-medium text-gray-800">
                          {(item.price * item.quantity).toLocaleString("id-ID", {style: "currency", currency: "IDR"})}
                        </spa>
                        <button
                          onClick={() => setItemToDelete(item.id)}
                          className="ml-4 text-purple-600 hover:text-purple-800"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ConfirmationModal
              isOpen={!!itemToDelete}
              onCancel={() => setItemToDelete(null)}
              onConfirm={() => {
                removeFromCart(itemToDelete)
                setItemToDelete(null)
              }}
            />

            <div className="bg-white rounded-lg shadow-xl shadow-purple-300 p-6 mb-6 text-gray-700">
              <h2 className="text-xl font-semibold mb-4 ">Detail Penerima</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center gap-2">
                  <label htmlFor="nama">Nama Penerima</label>
                  <input
                    id='nama'
                    type="text"
                    placeholder="Nama Penerima"
                    className="border rounded-lg p-2"
                    required
                  />
                </div>
                <div className="flex justify-between items-center gap-2">
                  <label htmlFor="contact">Contact</label>
                  <input
                    type="number"
                    placeholder="Nomor hp/WA"
                    className="border rounded-lg p-2"
                    required
                  />
                </div>
                <div className="flex justify-between items-center gap-2">
                  <label htmlFor="city">Alamat</label>
                  <input
                    type="text"
                    placeholder="Kota"
                    className="border rounded-lg p-2"
                    required
                  />
                </div>
                <div className="flex justify-between items-center gap-2">
                  <label htmlFor="posCode">Kode Pos</label>
                  <input
                    id='posCode'
                    type="text"
                    placeholder="Kode Pos"
                    className="border rounded-lg p-2"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl shadow-purple-300  p-6 text-gray-600">
              <h2 className="text-xl font-semibold mb-4">Metode Pembayaran</h2>
              <div className="space-y-3">
                <label className="flex items-center border rounded-lg p-2 hover:border-purple-500">
                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    className="mr-3"
                  />
                  <div>
                    <h3 className="font-medium">E-wallet</h3>
                  </div>
                </label>

                <label className="flex items-center border rounded-lg p-2 hover:border-purple-500">
                  <input
                    type="radio"
                    name="payment"
                    value="bank-transfer"
                    className="mr-3"
                  />
                  <h3 className="font-medium">Transfer Bank</h3>
                </label>

                <label className="flex items-center border rounded-lg p-2 hover:border-purple-500">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    className="mr-3"
                  />
                  <h3 className="font-medium">Bayar di Tempat (COD)</h3>
                </label>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-xl shadow-purple-300 p-6 text-gray">
              <h2 className="text-xl font-semibold mb-4">Ringkasan Pesanan</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp 100.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Ongkos Kirim</span>
                  <span>Rp 100.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Diskon</span>
                  <span>- Rp 25.000</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>Rp 250.000</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Kode Promo"
                  className="border rounded-lg p-3 w-full"
                />
                <button className="mt-2 text-purple-600 hover:text-purple-800">
                  Gunakan Kode Promo
                </button>
              </div>

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 
                flex items-center justify-center font-medium">
                <FaLock className="mr-2" />
                Bayar Sekarang
              </button>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Dengan melanjutkan, Anda menyetujui Syarat & Ketentuan kami
              </p>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-6">
            <img src="/ssl-secure.png" alt="SSL Secure" className="h-8" />
            <img src="/payment-options.png" alt="Payment Options" className="h-8" />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            100% Pembayaran Aman dan Terenkripsi
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;