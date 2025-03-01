import { useState } from "react";
import Label from "./Label";
import Input from "./Input";
import PropTypes from 'prop-types';

const InputForm = (
  {label, name, type, value, onChange}
) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full mb-4">
      <Label
        onClick={() => setIsFocused(true)}
        htmlFor={name}
        className={`absolute left-3 cursor-text transition-all bg-white px-1 
          ${isFocused || value ? "-top-3 text-m text-purple-700" : "top-1/2 text-purple-500 text-sm transform -translate-y-1/2"}
      `}>{label}
      </Label>
      <Input
        name={name}
        type={type}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        value={value}
        placeholder={!focus && !value ? label : ""}
      />
    </div>
  );
}

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputForm;