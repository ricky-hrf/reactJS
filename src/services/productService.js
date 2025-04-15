import axios from "axios";

export const getProducts = async () => {
  try{
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Something went wrong while fetching products.");
  }
}