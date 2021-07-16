import PropTypes from 'prop-types';

const Image = ({ src, name }) => (
  <div className="image">
    <img className="recipe-img" src={src} alt={name} />
    <h2 className="food-title roboto">{name}</h2>
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Image;
