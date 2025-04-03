import CardImage from "../Elements/Card/CardImage";
import CardContent from "../Elements/Card/CardContent";
import CardFooter from "../Elements/Card/CardFooter";
import PropTypes from 'prop-types';

const Card = ({ product, TambahKeKeranjang}) => {
  
  return (
    <div className="w-80 h-[400px] rounded-2xl flex flex-col shadow-lg bg-white border">
      <div className="h-[180px] w-full overflow-hidden">
        <CardImage image={product.image} />
      </div>
      <div>
        <CardContent
          price={product.price}
          title={product.title}
          description={product.description}
        />
        <CardFooter
          TambahKeKeranjang={() => TambahKeKeranjang(product)}
        />
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
  price: PropTypes.string,
  TambahKeKeranjang: PropTypes.func,
  }).isRequired,
  TambahKeKeranjang: PropTypes.func.isRequired,
};

export default Card;