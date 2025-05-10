import { useState } from 'react';
import { FiChevronLeft, FiEdit, FiHeart, FiShoppingBag, FiLogOut, FiCreditCard, FiMapPin, FiShield, FiMessageSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Profile Name',
    email: 'profile@example.com',
    phone: '08123xxxxxx',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    joinDate: 'January 2025',
    address: 'Jalan Jalani aja dulu, Di hatimu',
    bio: 'yang tersakiti'
  });

  const orders = [
    { id: '#12345', date: '12/05/2023', status: 'Delivered', total: '$149.99', items: 3 },
    { id: '#12344', date: '05/05/2023', status: 'Shipped', total: '$89.99', items: 2 },
    { id: '#12343', date: '22/04/2023', status: 'Cancelled', total: '$45.99', items: 1 },
  ];

  const wishlist = [
    { id: 1, name: 'Wireless Headphones', price: '$99.99', image: 'https://via.placeholder.com/80' },
    { id: 2, name: 'Smart Watch', price: '$199.99', image: 'https://via.placeholder.com/80' },
    { id: 3, name: 'Running Shoes', price: '$79.99', image: 'https://via.placeholder.com/80' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header */}
      <header className="">
        <div className="px-8 pt-8">
          <Link to="/" className="flex items-center font-semibold text-gray-600 hover:underline">
            <FiChevronLeft className="mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <h1 className="flex flex-col-1 text-2xl font-extrabold text-purple-600">My Account</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col items-center py-4">
                <div className="relative mb-4">
                  <img 
                    className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100"
                    src={userData.avatar} 
                    alt="User avatar" 
                  />
                  <button 
                    className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition"
                    onClick={() => setEditMode(!editMode)}
                  >
                    <FiEdit className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-lg font-semibold text-gray-900">{userData.name}</h2>
                <p className="text-sm text-gray-500">{userData.email}</p>
                <p className="text-xs text-gray-400 mt-1">Member since {userData.joinDate}</p>
              </div>
            </div>

            <nav className="bg-white rounded-lg shadow-sm p-4">
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={`w-full flex items-center px-3 py-2 rounded-md ${activeTab === 'overview' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <span>Overview</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('orders')}
                    className={`w-full flex items-center px-3 py-2 rounded-md ${activeTab === 'orders' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FiShoppingBag className="mr-2" />
                    <span>My Orders</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('wishlist')}
                    className={`w-full flex items-center px-3 py-2 rounded-md ${activeTab === 'wishlist' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FiHeart className="mr-2" />
                    <span>Wishlist</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('address')}
                    className={`w-full flex items-center px-3 py-2 rounded-md ${activeTab === 'address' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FiMapPin className="mr-2" />
                    <span>Addresses</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('payment')}
                    className={`w-full flex items-center px-3 py-2 rounded-md ${activeTab === 'payment' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FiCreditCard className="mr-2" />
                    <span>Payment Methods</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('security')}
                    className={`w-full flex items-center px-3 py-2 rounded-md ${activeTab === 'security' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FiShield className="mr-2" />
                    <span>Security</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('support')}
                    className={`w-full flex items-center px-3 py-2 rounded-md ${activeTab === 'support' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FiMessageSquare className="mr-2" />
                    <span>Support</span>
                  </button>
                </li>
                <li className="pt-2 border-t border-gray-200">
                  <button className="w-full flex items-center px-3 py-2 rounded-md text-red-600 hover:bg-red-50">
                    <FiLogOut className="mr-2" />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Profile Overview</h2>
                  {editMode ? (
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setEditMode(false)}
                        className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={() => setEditMode(false)}
                        className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                      >
                        Save Changes
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setEditMode(true)}
                      className="px-4 py-2 text-sm text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                    {editMode ? (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={userData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                          <textarea
                            name="bio"
                            value={userData.bio}
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
                          <p className="text-gray-900">{userData.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="text-gray-900">{userData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="text-gray-900">{userData.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Bio</p>
                          <p className="text-gray-900">{userData.bio}</p>
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
                          value={userData.address}
                          onChange={handleInputChange}
                          rows="4"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Shipping Address</p>
                          <p className="text-gray-900">{userData.address}</p>
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
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">My Orders</h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">{order.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.total}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.items}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                            <button className="text-gray-600 hover:text-gray-900">Track</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <p className="text-sm text-gray-500">Showing 1 to 3 of 3 orders</p>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 cursor-not-allowed" disabled>
                      Previous
                    </button>
                    <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 cursor-not-allowed" disabled>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">My Wishlist</h2>
                  <button className="px-4 py-2 text-sm text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100">
                    Add All to Cart
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlist.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                      <div className="p-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-40 object-contain mb-4"
                        />
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-lg font-semibold text-indigo-600 mb-3">{item.price}</p>
                        <div className="flex justify-between">
                          <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                            Add to Cart
                          </button>
                          <button className="px-3 py-1 text-red-600 hover:text-red-800">
                            <FiHeart className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Load More
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'address' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">My Addresses</h2>
                  <button className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                    Add New Address
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6 relative">
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        <FiEdit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                      <FiMapPin className="mr-2 text-indigo-600" />
                      Primary Address
                    </h3>
                    <p className="text-gray-700 mb-2">Alexandra Smith</p>
                    <p className="text-gray-700 mb-2">123 Main St, Apt 4B</p>
                    <p className="text-gray-700 mb-2">New York, NY 10001</p>
                    <p className="text-gray-700 mb-2">United States</p>
                    <p className="text-gray-700">Phone: +1 (234) 567-8901</p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button className="text-sm text-indigo-600 hover:text-indigo-800">
                        Set as default
                      </button>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6 relative">
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        <FiEdit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                      <FiMapPin className="mr-2 text-gray-400" />
                      Work Address
                    </h3>
                    <p className="text-gray-700 mb-2">Alexandra Smith</p>
                    <p className="text-gray-700 mb-2">456 Business Ave, Floor 10</p>
                    <p className="text-gray-700 mb-2">New York, NY 10001</p>
                    <p className="text-gray-700">United States</p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button className="text-sm text-indigo-600 hover:text-indigo-800">
                        Set as default
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Payment Methods</h2>
                  <button className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                    Add New Card
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-6 relative">
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        <FiEdit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-6 bg-gray-200 rounded-sm mr-3"></div>
                      <span className="text-lg font-medium text-gray-900">VISA</span>
                      <span className="ml-auto text-sm text-gray-500">Default</span>
                    </div>
                    <p className="text-gray-700 mb-1">•••• •••• •••• 4242</p>
                    <p className="text-gray-700">Expires 04/2025</p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6 relative">
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        <FiEdit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-6 bg-gray-200 rounded-sm mr-3"></div>
                      <span className="text-lg font-medium text-gray-900">MasterCard</span>
                    </div>
                    <p className="text-gray-700 mb-1">•••• •••• •••• 5555</p>
                    <p className="text-gray-700">Expires 12/2024</p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button className="text-sm text-indigo-600 hover:text-indigo-800">
                        Set as default
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                        Update Password
                      </button>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-700">Add an extra layer of security to your account</p>
                        <p className="text-sm text-gray-500 mt-1">Require a code when logging in from new devices</p>
                      </div>
                      <button className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                        Enable 2FA
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Login History</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 10, 2023 10:30 AM</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Chrome on Windows</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">New York, US</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">192.168.1.1</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 8, 2023 2:15 PM</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Safari on iPhone</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Boston, US</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">192.168.1.2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Customer Support</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Us</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                          rows="5"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                      </div>
                      <div>
                        <button className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">FAQs</h3>
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-4">
                        <button className="flex justify-between items-center w-full text-left">
                          <span className="font-medium text-gray-900">How do I track my order?</span>
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      <div className="border-b border-gray-200 pb-4">
                        <button className="flex justify-between items-center w-full text-left">
                          <span className="font-medium text-gray-900">What is your return policy?</span>
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      <div className="border-b border-gray-200 pb-4">
                        <button className="flex justify-between items-center w-full text-left">
                          <span className="font-medium text-gray-900">How can I change my shipping address?</span>
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      <div className="border-b border-gray-200 pb-4">
                        <button className="flex justify-between items-center w-full text-left">
                          <span className="font-medium text-gray-900">Do you offer international shipping?</span>
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;