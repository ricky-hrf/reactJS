import axios from "axios";

const USER_API_URL = "http://localhost:5000/api/users";

// mengambil semua data user
export const fetchUsers = async () => {
  try {
    const response = await axios.get(USER_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    if (error.response) {
      throw new Error(`HTTP error! status: ${error.response.status}`);
    } else {
      throw new Error("Network error or server is down");
    }
  }
}
// mengambil data user berdasarkan ID
export const fetchUserById = async (userId) => {
  try {
    const response = await axios.get(`${USER_API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    if (error.response) {
      throw new Error(`HTTP error! status: ${error.response.status}`);
    } else {
      throw new Error("Network error or server is down");
    }
  }
}