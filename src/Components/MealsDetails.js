import PropTypes from 'prop-types';

const FoodDetails = ({
  category, area, ingredients,
}) => (
  <div className="details-container">
    <p>
      <span>Category :</span>
      <span>{category}</span>
    </p>
    <p>
      <span>Country :</span>
      <span>{area}</span>
    </p>
    <p>
      <span>Ingredients</span>
    </p>
    {ingredients.map((val) => (
      <span key={Math.random() * 1000}>
        {val}
        {' '}
        |
        {' '}
      </span>
    ))}
  </div>

);

FoodDetails.propTypes = {
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(String).isRequired,
};

export default FoodDetails;
