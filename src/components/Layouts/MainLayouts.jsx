import 'swiper/css/pagination';
import Navbar from '../Fragments/Navbar';
import CartDrawer from '../Fragments/CartDrawer';
import Footer from '../Fragments/Footer';
import PropTypes from 'prop-types';

const MainLayouts = ({ children }) => {
  
  return (
    <div className="">
      <Navbar />
      <CartDrawer />
      <main className="mt-32 md:mt-32 lg:mt-24 xl:mt-24  min-h-screen bg-gray-100">
        {children}
      </main>
      <Footer />
    </div>
  );
}
MainLayouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayouts;