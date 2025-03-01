import PropTypes from 'prop-types';

const CardImage = ({ image }) => {
  return (
    <img className="w-full object-cover rounded-2xl shadow-2xl" src={image} alt="" />
  );
}

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CardImage;