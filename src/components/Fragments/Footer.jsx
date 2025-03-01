import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo & Deskripsi */}
          <div>
            <h2 className="text-2xl font-bold text-white">BossMudaStore</h2>
            <p className="mt-3 text-gray-400">Tempat terbaik untuk mendapatkan produk berkualitas dengan harga terbaik.</p>
          </div>

          {/* Navigasi Cepat */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-purple-400 transition">🏠 Home</a></li>
              <li><a href="/products" className="hover:text-purple-400 transition">🛍 Produk</a></li>
              <li><a href="/about" className="hover:text-purple-400 transition">📜 Tentang Kami</a></li>
              <li><a href="/contact" className="hover:text-purple-400 transition">📞 Kontak</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Kontak Kami</h3>
            <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-purple-400" /> Jl. Boss Muda No.1, Jakarta</p>
            <p className="flex items-center gap-2"><FaPhoneAlt className="text-purple-400" /> +62 812-3456-7890</p>
            <p className="flex items-center gap-2"><FaEnvelope className="text-purple-400" /> support@bossmudastore.com</p>
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
          <p className="text-gray-400">&copy; 2025 BossMudaStore. All rights reserved.</p>
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
