import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-2xl p-8 m-3">
        <h1 className="text-3xl font-bold mb-2 text-center text-purple-800">
          {title}
        </h1>
        <p className="font-medium text-slate-500 mb-8">
          {type === "login" ? "welcome back! please enter your detail!" : " "}
      </p>
        {children}
        <Navigation type={type}/>
      </div>
    </div>
  );
}

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-center mt-3 font-semibold">
        Don&apos;t have an account? {" "}
        <Link to="/register" className="text-purple-800 font-bold hover:underline">
              Register
        </Link>
        </p>
    );
  } else {
    return (
      <p className="text-center mt-3 font-semibold">
        Already have an account? 
        <Link to="/login" className="text-purple-800 font-bold hover:underline">
          Login
        </Link>
      </p>
    );
  }
}

AuthLayouts.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
  Navigation.propTypes = {
    type: PropTypes.string.isRequired,
  }

export default AuthLayouts;