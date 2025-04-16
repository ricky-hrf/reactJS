import CardCategory from "../Elements/CardCategory";
import PropTypes from "prop-types";

const Kategori = ({ categories }) => {
  return (
    <div className="">
      <h2 className="ml-4 text-xl font-bold text-left text-gray-800 mb-4">Kategori Produk</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4" id="kategori">
        {categories.map((kategori, idx) => (
          <CardCategory key={idx} data={{ name: kategori }} />
        ))}
      </div>
    </div>
  );
}
Kategori.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Kategori;