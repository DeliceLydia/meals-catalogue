import PropTypes from 'prop-types';

const CategoryFilter = ({ onChange, value }) => {
  const categories = ['Pasta', 'Pork', 'Seafood', 'Beef', 'Chicken', 'Dessert', 'Lamb', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Miscellaneous', 'Goat'];
  return (
    <div className="category-filter">
      <h3 className="category-title">Food Categories</h3>
      <select onChange={onChange} value={value} className="select-filter">
        {categories.map((val) => <option key={Math.random() * 100} value={val}>{val}</option>)}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CategoryFilter;
