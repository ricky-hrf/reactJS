import { useState } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Buttons";

const FormRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    konfirpassword: "",

  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form action="">
          <InputForm
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          
          <InputForm
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          
          <InputForm
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          
          <InputForm
            label="Konfirmasi Password"
            type="password"
            name="konfirpassword"
            value={formData.konfirpassword}
            onChange={handleChange}
          />
          
          <Button classname="bg-purple-800 w-full">Register</Button>
        </form>
  );
}
export default FormRegister;