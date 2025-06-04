import { FiHeart, FiShoppingBag, FiLogOut, FiCreditCard, FiMapPin, FiShield, FiMessageSquare } from 'react-icons/fi';
import { useState } from 'react';

const SidebarProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <div className="w-full md:w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow-xl p-4">
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
  )
}

export default SidebarProfile;