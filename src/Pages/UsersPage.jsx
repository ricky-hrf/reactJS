import { useState, useEffect } from "react";
import { fetchUsers, addUser } from "../services/UsersServices";
import UserCard from "../components/Fragments/UserCard";
import { FaPlus, FaTimes } from 'react-icons/fa';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({
    foto: "",
    role: "user",
    nama: "",
    email: "",
    hp: "",
    bio: "",
    alamat: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value
    });
  };

  // handle form submission to add a new user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedUser = await addUser(newUser);
      setUsers([...users, addedUser]);
      setIsModalOpen(false);
      setNewUser({
        foto: "",
        role: "user",
        nama: "",
        email: "",
        hp: "",
        bio: "",
        alamat: ""
      });
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold mb-4">Daftar Pengguna</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded mb-4">
            <FaPlus className="inline mr-2" /> <span>Tambah Pengguna</span>
          </button>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {users.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
        </div>
        
        {/* modal tambah pengguna */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Tambah Pengguna Baru</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <FaTimes className="inline" />
                </button>
              </div>
              <form action="" onSubmit={handleSubmit}>
                <div className="">
                  <label htmlFor="" className="block text-gray-700 mb-1">Nama</label>
                  <input type="text" name="name" value={newUser.name} onChange={handleInputChange} className="border border-gray-300 p-1 w-full rounded" />
                </div>
                <div className="">
                  <label htmlFor="" className="block text-gray-700 mb-1">Hp</label>
                  <input type="text" name="hp" value={newUser.hp} onChange={handleInputChange} className="border border-gray-300 p-1 w-full rounded" />
                </div>
                <div className="">
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" value={newUser.email} onChange={handleInputChange} className="border border-gray-300 p-1 w-full rounded" />
                </div>
                <div className="">
                  <label htmlFor="alamat" className="block text-gray-700 mb-1">Alamat</label>
                  <input type="text" name="alamat" value={newUser.alamat} onChange={handleInputChange} className="border border-gray-300 p-1 w-full rounded" />
                </div>
                <div className="mt-2">
                  <button onClick={() => setIsModalOpen(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2">Batal</button>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded">Simpan</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default UserPage;