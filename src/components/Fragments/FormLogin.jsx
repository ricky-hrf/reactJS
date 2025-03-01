import { useState } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Buttons";

const FormLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    window.location.href = "/product";
  }
  return (
    <form onSubmit={handleLogin}>
          <InputForm
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <InputForm
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
      <Button
        classname="bg-purple-800 w-full" type="submit">Login</Button>
        </form>
  );
}
export default FormLogin;