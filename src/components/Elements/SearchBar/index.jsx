import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";

const SearchBar = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <div className="flex justify-between border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400">
              <FaSearch className="mt-1 text-gray-400 mr-4" />
              <input type="text" placeholder="Cari produk ..."
                className="w-full focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
          </form>
    </>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;