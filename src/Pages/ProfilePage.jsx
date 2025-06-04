import { useState, useEffect } from 'react';
import { FiEdit, FiHeart, FiShoppingBag } from 'react-icons/fi';
import HeaderPage from "../components/Fragments/HeaderProfilePage";
import Navbar from '../components/Fragments/Navbar';
import SidebarProfile from '../components/Fragments/SidebarProfile';
import { fetchUserById } from '../services/UsersServices';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await fetchUserById(id);
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [id]);

  if (loading) return <div>Loading user data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <HeaderPage />
        <div className="flex flex-col md:flex-row gap-6">
          <SidebarProfile />
          {/* Main Content */}
          <div className="flex-1 shadow-xl">
            <div className="flex bg-gray-200 rounded-t-lg items-center justify-end p-2">
              {editMode ? (
                <div className="flex gap-2">
                  <button 
                    onClick={() => setEditMode(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => setEditMode(false)}
                    className="px-4 py-2 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700"
                  >
                    Save Changes
                  </button>
                </div>
                  ) : (
                    <button 
                      onClick={() => setEditMode(true)}
                      className="px-4 py-2 text-sm text-gray-600 bg-white rounded-md hover:bg-purple-400 hover:text-white font-bold"
                  >
                    <div className="flex justify-content-between gap-2">
                      <FiEdit className="w-4 h-4" />
                      <span>Edit</span>
                    </div>
                    </button>
                  )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg shadow-sm p-4">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex flex-col items-center py-4">
                  <div className="relative mb-4">
                    <img
                      className="w-40 h-40 rounded-full object-cover border-4 border-purple-400 cursor-pointer"
                      src={user.gambar} alt="User avatar" 
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Member since {user.joindate}</p>
                </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                    {editMode ? (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            value={user.nama}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={user.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                          <textarea
                            name="bio"
                            value={user.bio}
                            onChange={handleInputChange}
                            rows="3"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Full Name</p>
                          <p className="text-gray-900">{user.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="text-gray-900">{user.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="text-gray-900">{user.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Bio</p>
                          <p className="text-gray-900">{user.bio}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Address</h3>
                    {editMode ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                        <textarea
                          name="address"
                          value={user.address}
                          onChange={handleInputChange}
                          rows="2"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Shipping Address</p>
                          <p className="text-gray-900">{user.address}</p>
                        </div>
                        <button className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                          View all addresses
                        </button>
                      </div>
                    )}

                    <div className="mt-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                            <FiShoppingBag className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">Order #12345 placed</p>
                            <p className="text-sm text-gray-500">2 days ago</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <FiHeart className="h-5 w-5 text-green-600" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">Added to wishlist</p>
                            <p className="text-sm text-gray-500">5 days ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;