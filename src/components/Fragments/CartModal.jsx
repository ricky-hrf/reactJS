
import PropTypes from 'prop-types';

const CartModal = ({ isOpen, setIsOpen, cart, HapusDariKeranjang, TambahJumlah, KurangiJumlah, totalHarga }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-10 right-24 bg-slate-100 shadow-lg rounded-lg w-auto min-w-[300px] max-w-[600px] p-4 z-50">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">
          keranjang
        </h2>
        <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800">
          <box-icon name='x-circle'></box-icon>
        </button>
      </div>
      {cart.length === 0 ? (
        <div className="text-sm text-gray-600">Belum ada item di keranjang.</div>
      ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-sm">
                  <th className="text-left py-2 px-3 w-1/3">Nama Barang</th>
                  <th className="text-right py-2 px-3 w-1/4">Harga</th>
                  <th className="text-center py-2 px-3 w-[50px]">Qty</th>
                  <th className="text-right py-2 px-3 w-1/4">Total Harga</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="border-b text-sm">
                    <td className="py-2 px-3">{item.title}</td>
                    <td className="text-right py-2 px-3">
                      {item.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}
                    </td>
                    <td className="text-center py-2 px-3 flex items-center gap-3 p-4 mt-auto">
                      <div className="">
                        {item.quantity}
                      </div>
                      <div>
                        <button onClick={() => TambahJumlah(item.id)}><box-icon name='chevron-up'></box-icon></button>
                        <button onClick={() => KurangiJumlah(item.id)}><box-icon name='chevron-down' ></box-icon></button>
                      </div>
                    </td>
                    <td className="text-right py-2 px-1">
                      {(item.price * item.quantity).toLocaleString("id-ID", {style:"currency", currency:"IDR"})}
                    </td>
                    <td className="text-center py-2 px-3">
                      <button onClick={() => HapusDariKeranjang(item.id)}>
                        <box-icon name='trash' color="gray"></box-icon>
                      </button>
                    </td>
                  </tr>
                )
                )}
              </tbody>
              <tfoot>
                <tr className="bg-gray-100 text-sm font-semibold">
                  <td colSpan="3" className="text-center py-2 px-3 border-t-2">Total Harga barang</td>
                  <td className="text-right py-2 px-3">
                    {totalHarga.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
            <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Checkout</button>
          </div>
      )}
    </div>
  );
}
CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  HapusDariKeranjang: PropTypes.func.isRequired,
  TambahJumlah: PropTypes.func.isRequired,
  KurangiJumlah: PropTypes.func.isRequired,
  totalHarga: PropTypes.func.isRequired,
};

export default CartModal;