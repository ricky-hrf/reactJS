import Navbar from '../components/Fragments/Navbar';
import Footer from "../components/Fragments/Footer";
import Content from "../components/Layouts/contentLayouts";

// Komponen utama HomePage
const HomePage = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-6 py-16">
        <Content/>
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;