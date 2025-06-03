import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

const HeaderProfilePage = () => {
  return (
    <>
    <div className="px-8 pt-8">
          <Link to="/" className="flex items-center font-semibold text-gray-600 hover:underline">
            <FiChevronLeft className="mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <h1 className="flex flex-col-1 text-2xl font-extrabold text-purple-600">My Account</h1>
      </div>
    </>
  )
}
export default HeaderProfilePage;