import { useCart } from "../../context/CartContext"

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen } = useCart();
  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white shadow-lg z-[999] border-1 border-gray-200 transition-transform duration-300">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">Keranjang Belanja</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-red-500">
            &times;
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600">Keranjang masih kosong</p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;