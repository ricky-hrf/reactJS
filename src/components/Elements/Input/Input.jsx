import PropTypes from 'prop-types';

const Input = ({ type, name, onFocus, onBlur, onChange, value, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};


Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Input;