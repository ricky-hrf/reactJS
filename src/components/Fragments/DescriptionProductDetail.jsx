import PropTypes from 'prop-types';
import { useState} from 'react';
import {FaStar, FaHeart, FaRegHeart} from 'react-icons/fa';

const DescriptionProductDetail = ({ product }) => {
  const [favorited, setFavorited] = useState(null);
  
  return (
    <div className="lg:col-span-5 md:col-span-4">
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-gray-600">
          {product.title}
        </h1>
        <div className="flex justify-start items-center gap-2 my-2">
          <FaStar className='h-6 w-6' color='yellow' />
          <span className="text-lg text-gray-600">
            {product.rating?.rate}/ 5 ({product.rating?.count} reviews)
          </span>
        </div>
        <div className="my-4 flex items-center justify-between">
          <p className="text-2xl font-semibold text-purple-600">
            {product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
          </p>
          <button onClick={() => setFavorited(!favorited)} className='text-purple-600 text-xl'>
            {favorited ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
        <div className="border border-purple-100 mb-4"></div>
      </div>
      <div className="space-y-4">
        <div className='mt-4'>
          <h3 className="text-lg font-medium text-gray-900">Deskripsi Produk</h3>
          <p className="text-gray-500 mt-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

DescriptionProductDetail.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default DescriptionProductDetail;