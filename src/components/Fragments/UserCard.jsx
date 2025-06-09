import PropTypes from "prop-types";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const UserCard = ({ user }) => {
  return(
    <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow duration-300 mb-4">
      <div className="flex items-center space-x-4">
        <img
          className="h-16 w-16 rounded-full border-2 border-purple-400 cursor-pointer"
          src={user.foto}
          alt={user.nama}
        />
        <div>
          <h3 className="text-lg font-medium text-gray-900">{user.nama}</h3>
          <p className="text-sm text-gray-500">{user.role}</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="text-sm text-gray-500"><FaPhone className="inline mr-4" /> {user.hp}</div>
        <div className="text-sm text-gray-500"><FaEnvelope className="inline mr-4" /> {user.email}</div>
        <div className="text-sm text-gray-500"><FaMapMarkerAlt className="inline mr-4" /> {user.alamat}</div>
        <div className="text-sm text-gray-500"><FaUser className="inline mr-4" /> {user.bio}</div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    foto: PropTypes.string,
    role: PropTypes.string,
    nama: PropTypes.string,
    email: PropTypes.string,
    hp: PropTypes.string,
    bio: PropTypes.string,
    alamat: PropTypes.string,
  }).isRequired,
};

export default UserCard;