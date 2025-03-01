import PropTypes from 'prop-types';
import 'boxicons';
import Button from '../Buttons';

const CardFooter = (props) => {
  const {TambahKeKeranjang} = props;
  return (
    <>      
      <div>
              <div className="flex gap-3 p-4 mt-auto">
        <Button
          onClick={TambahKeKeranjang}
          classname='flex-1 bg-purple-600 text-white text-sm hover:bg-purple-800'>
          Add To Cart
        </Button>
        <Button classname='flex-1 bg-white text-slate-700 hover:text-white border border-purple-700 text-sm hover:bg-purple-800'>
          Buy Now
        </Button>
      </div>
      </div>

    </>
  );
}  
  CardFooter.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    TambahKeKeranjang: PropTypes.func.isRequired,
  };  
export default CardFooter;
