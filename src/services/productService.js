import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products"

// Ambil semua produk
export const getProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Something went wrong while fetching products.");
  }
};

// Ambil produk berdasarkan ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Something went wrong fetching product.")
  }
};