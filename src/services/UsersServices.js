// mengambil semua data user
export const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }
};
