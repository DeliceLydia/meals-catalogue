import PropTypes from 'prop-types';

const FoodDetails = ({
  category, area, ingredients,
}) => (
  <div className="details-container">
    <p>
      <span className="details-title">Category : </span>
      <span className="span">{category}</span>
    </p>
    <p>
      <span className="details-title">Origin : </span>
      <span className="span">{area}</span>
    </p>
    <p>
      <span className="details-title">Ingredients </span>
    </p>
    {ingredients.map((val) => (
      <span key={Math.random() * 1000} className="span">
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
