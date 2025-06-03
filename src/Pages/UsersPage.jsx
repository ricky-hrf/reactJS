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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Daftar Pengguna</h2>
      <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Gambar</th>
            <th className="p-3">Nama</th>
            <th className="p-3">No. HP</th>
            <th className="p-3">Email</th>
            <th className="p-3">Umur</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <img
                  src={user.foto}
                  alt={user.nama}
                  className="w-12 h-12 rounded-full object-cover border-purple-600"
                />
              </td>
              <td className="p-3">{user.nama}</td>
              <td className="p-3">{user.hp}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.umur}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default UserPage;