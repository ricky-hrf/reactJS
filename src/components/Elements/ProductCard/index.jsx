import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="w-44 h-64 bg-white shadow-lg rounded-b-lg border hover:shadow-2xl hover:border-purple-400 duration-300 cursor-pointer">
      <div className="relative  h-32 flex items-center justify-center overflow-hidden bg-white">
        <img
          src={product.image} alt={product.title} className="max-h-full object-contain" />
        <div className="absolute top-0 left-0 bg-purple-500 text-white px-2 py-3 text-xs font-bold [clip-path:polygon(0_0,100%_0,100%_75%,50%_100%,0_75%)]">
          New
        </div>
      </div>
      <div className="p-2 overflow-hidden">
        <span className="text-xs text-gray-500 hover:underline">{product.category}</span>
        <h3 className="text-xs xs:text-[13px] sm:text-sm md:text-base lg:text-lg font-semibold mt-2 text-gray-700 line-clamp-2">{product.title}</h3>
        <div className="p-2 overflow-hidden">
          <div className="flex items-center mt-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill={i < Math.round(product.rating.rate) ? '#f59e0b' : 'transparent'} />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({product.rating.count})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Star = ({ fill }) => (
  <svg className="w-3 h-3" fill={fill} stroke="#f59e0b" viewBox="0 0 24 24">
    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

Star.propTypes = {
  fill: PropTypes.string.isRequired,
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductCard;