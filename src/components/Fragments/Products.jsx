import PropTypes from "prop-types";
import ProductCard from "../Elements/ProductCard/products";

const Products = ({ products }) => {

  return (
    <div className="container mx-auto px-6">
      <h2 className="text-lg md:xl lg:3xl font-bold text-center text-gray-800 mb-4">Produk Kami</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center">
            {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}
Products.propTypes = {
  products: PropTypes.array.isRequired,
};
export default Products;