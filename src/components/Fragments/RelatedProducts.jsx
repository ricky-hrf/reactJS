import { Link } from 'react-router-dom';

const RelatedProducts = ({ product, relatedProducts, loading }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Produk Lainnya dalam Kategori {product?.category}
      </h2>
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
          ))}
        </div>
      ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link 
                to={`/products/${relatedProduct.id}`}
                key={relatedProduct.id}
                className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img src={relatedProduct.image} alt={relatedProduct.title} className="w-full h-48 object-contain" />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-lg font-bold text-purple-600 mt-2">
                    {relatedProduct.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR"
                    })}
                </p>
                </div>
              </Link>
            ))}
          </div>
      )}
    </>
  );
}
import PropTypes from 'prop-types';

RelatedProducts.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
  }).isRequired,
  relatedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default RelatedProducts;