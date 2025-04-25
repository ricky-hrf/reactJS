import PropTypes from 'prop-types';

const CategorySection = ({ categoriesLoading, categories }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-700 mb-6">Semua Kategori</h2>

      {categoriesLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="border rounded-lg overflow-hidden shadow-sm transition-shadow">
              <div className="p-4 bg-gray-50 border-t">
                <h3 className='font-semibold text-gray-700 capitalize'>
                  {category.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}
                </h3>
              </div>
              <img src={category.image} alt={category.name} className='w-full h-48 object-contain p-4 bg-white' />
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

CategorySection.propTypes = {
  categoriesLoading: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default CategorySection;