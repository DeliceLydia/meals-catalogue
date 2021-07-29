import PropTypes from 'prop-types';
import Image from './foodImg';

const Category = ({ src, name }) => (
  <Image className="category" src={src} name={name} />
);

Category.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Category;
