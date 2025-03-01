import PropTypes from "prop-types";

const Label = (props) => {
  const { htmlFor, children, className } = props;
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-bold sm-2 ${className}`}>
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Label;
