
import PropTypes from 'prop-types';

const CartModal = ({ isOpen, setIsOpen, cart }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-4 right-4 bg-white shadow-lg rounded-lg w-64 p-4 border border-gray-300 z-50">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">
          keranjang
        </h2>
        <button onClick={() => setIsOpen(false)}>
          <box-icon name='x-circle'></box-icon>
        </button>
      </div>
      {cart.length === 0 ? (
        <div className="text-sm text-gray-600">Belum ada item di keranjang.</div>
      ) : (
        <ul className="text-sm text-gray-700">
          {cart.map((item, index) => (
            <li key={index} className="border-b py-2">
              {item.title} - {item.price}
            </li>
          ))}
        </ul>
      )}
      <button className="mt-4 w-full">Checkout</button>
    </div>
  );
}
CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CartModal;