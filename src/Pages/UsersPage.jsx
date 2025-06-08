import { useState, useEffect } from "react";
import { fetchUsers } from "../services/UsersServices";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="text-xl font-bold mb-4">Daftar Pengguna</h2>
        <div className="use-grid">
          {users.map(user => (
            <div key={user.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold">{user.nama}</h3>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Joined: {new Date(user.joindate).toLocaleDateString()}</p>
              <img src={user.gambar} alt={user.nama} className="w-24 h-24 rounded-full mt-2" />
            </div>
          ))}
        </div>
    </div>
  </div>
  )
}
export default UserPage;