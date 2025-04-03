import PropTypes from 'prop-types';
import 'boxicons';
import { useState } from 'react';

const CardContent = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { title, description, price } = props;
  return (
    <>
    <div className="items-center p-4 border-b flex flex-justify-between">
        <span className='font-semibold text-purple-800 text-sm'> {price.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}</span>
        <div className='ml-auto'>
          <button onClick={() => setIsFavorite(!isFavorite)} >
        <box-icon name="heart" type={isFavorite ? "solid" : "regular"} color={isFavorite ? "red" : "gray"}></box-icon>
      </button>
        </div>
      </div>
      <div className='px-4 py-2 h-[80px] overflow-hidden'>
        <h1 className="text-sm font-semibold text-gray-800">{title}</h1>
        <p className="text-slate-500 text-sm line-clamp-2">{description}{" "}
          <a href="#" className="text-blue-500">Read More</a>
        </p>
      </div>
    </>
  );
}  
  CardContent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    TambahKeKeranjang: PropTypes.func.isRequired,
  };  
export default CardContent;
