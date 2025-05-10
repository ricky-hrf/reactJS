import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaBoxOpen,
  FaInfoCircle

} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 fixed-bottom">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Deskripsi */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Pembayaran</h2>
            <div className="grid grid-cols-4 gap-2">
                <img src="/product/ovoreal.png" alt="Ovo" className="h-8 w-16 transition-transform hover:scale-110 rounded cursor-pointer" />
                <img src="/product/dana.jpeg" alt="SSL Secure" className="h-8 w-16 transition-transform hover:scale-110 rounded cursor-pointer" />
                <img src="/product/link.jpg" alt="SSL Secure" className="h-8 w-16 transition-transform hover:scale-110 rounded cursor-pointer" />
                <img src="/product/Mastercard-Logo-2016-2020.png" alt="master-card" className="h-8 w-16 transition-transform hover:scale-110 rounded cursor-pointer" />
                <img src="/product/ATM_BCA.webp" alt="ATM BCA" className="h-8 w-16 transition-transform hover:scale-110 rounded cursor-pointer" />
                <img src="/product/ATM_BRI.jpg" alt="ATM BRI" className="h-8 w-16 transition-transform hover:scale-110 rounded cursor-pointer" />
            </div>
          </div>

          {/* Navigasi Cepat */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="/" className="flex items-center gap-2 hover:text-purple-400 transition"><FaHome className="mr-2"></FaHome>Home</a></li>
              <li><a href="/product" className="flex items-center gap-2 hover:text-purple-400 transition"><FaBoxOpen className="mr-2" />Produk</a></li>
              <li><a href="/about" className="flex items-center gap-2 hover:text-purple-400 transition"><FaInfoCircle className="mr-2" />Tentang Kami</a></li>
              <li><a href="/contact" className="flex items-center gap-2 hover:text-purple-400 transition"><FaEnvelope className="mr-2" />Kontak</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Kontak Kami</h3>
            <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-purple-400" /> Jl. Jalani Aja Dulu, Sosweet</p>
            <p className="flex items-center gap-2"><FaPhoneAlt className="text-purple-400" /> +62 812-3456-7890</p>
            <p className="flex items-center gap-2"><FaEnvelope className="text-purple-400" /> support@ononihastore.com</p>
          </div>

          {/* Newsletter & Sosial Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Berlangganan</h3>
            <form className="flex">
              <input type="email" placeholder="Masukkan email..." className="w-full px-3 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition" />
              <button type="submit" className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-r-md transition">Kirim</button>
            </form>
            <h3 className="text-lg font-semibold text-white mt-4">Ikuti Kami</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition"><FaFacebookF size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition"><FaInstagram size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition"><FaTwitter size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition"><FaYoutube size={22} /></a>
            </div>
          </div>

        </div>

        {/* Garis Pembatas */}
        <hr className="my-6 border-gray-700" />

        {/* Bagian Bawah Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2025 OnoNihaStore. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">Kebijakan Privasi</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
