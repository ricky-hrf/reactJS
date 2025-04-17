import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";


const Card = ({ product}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="w-full h-[380px] rounded-2xl flex flex-col shadow-lg bg-white border hover:shadow-3xl hover:scale-105 transition-transform duration-300">
      <div className="h-[180px] w-full overflow-hidden">
        <img src={product.image} alt="heheh" />
      </div>
      <div>
        <div className="items-center px-4 py-2 border-b flex flex-justify-between">
          <span className='font-semibold text-purple-800 text-sm'> {product.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}</span>
          <div className='ml-auto'>
            <button onClick={() => setIsFavorite(!isFavorite)} >
              <box-icon name="heart" type={isFavorite ? "solid" : "regular"} color={isFavorite ? "red" : "gray"}></box-icon>
            </button>
          </div>
        </div>
        <div className='px-4 py-2 h-[90px] overflow-hidden'>
          <h1 className="text-sm font-semibold text-gray-800 line-clamp-2 hover:underline cursor-pointer">{product.title}</h1>
          <p className="text-slate-500 text-xs line-clamp-2">{product.description}</p>
        </div>
        <div className="p-2">
          <button className="mt-2 w-full bg-purple-600 text-white text-sm py-2 rounded-lg flex items-center justify-center hover:bg-purple-700 transition">
              <FaShoppingCart />
            <span className='ml-2'>
              Add to Cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  TambahKeKeranjang: PropTypes.func,
  }).isRequired,
  TambahKeKeranjang: PropTypes.func.isRequired,
};

export default Card;