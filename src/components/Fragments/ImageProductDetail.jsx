import PropTypes from "prop-types";

const ImageProductDetail = ({ product }) => {
  return (
    <div className="lg:col-span-4 md:col-span-2">
        <div  className="rounded-lg overflow-hidden border border-purple-300 h-[300px] w=full">
          <img
            src={product.image}
            alt={product.title}
          className="w-full h-full object-contain p-8"/>
        </div>
      <div className="flex justify-start gap-4 mt-4">
        <div className="h-16 w-16 rounded-lg border hover:border-purple-300 hover:bg-purple-50 cursor-pointer">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full p-2 object-contain "
          />
        </div>
        <div className="h-16 w-16 rounded-lg border hover:border-purple-300 cursor-pointer hover:bg-purple-50">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full p-2 object-contain "
          />
        </div>
      </div>
    </div>
  );
}

ImageProductDetail.propTypes = {
  product: PropTypes.array.isRequired,
};
export default ImageProductDetail;