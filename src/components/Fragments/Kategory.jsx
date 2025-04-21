import CardCategory from "../Elements/CardCategory";
import PropTypes from "prop-types";

const Kategori = ({ fruits }) => {
  if (!Array.isArray(fruits)) {
    return null;
  }
  const categories = [...new Set(fruits.map((p) => p.category))];

  return (
    <div className="">
      <h2 className="ml-4 text-xl font-bold text-left text-gray-800 mb-4">Kategori Produk</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4" id="kategori">
        {categories.map((category, index) => (
          <CardCategory key={index} category={category} />
        ))}
      </div>
    </div>
  );
}
Kategori.propTypes = {
  fruits: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};

export default Kategori;