import { useState, useEffect } from "react";
import { fetchUsers } from "../services/UsersServices";
import UserCard from "../components/Fragments/UserCard";
import { FaPlus } from 'react-icons/fa';

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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold mb-4">Daftar Pengguna</h2>
          <button className="bg-purple-600 text-white px-4 py-2 rounded mb-4">
            <FaPlus className="inline mr-2" /> <span>Tambah Pengguna</span>
          </button>
        </div>
          <div className="user-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
    </div>
  </div>
  )
}
export default UserPage;