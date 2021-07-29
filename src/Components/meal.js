import PropTypes from 'prop-types';
import Image from './foodImg';

const MealInfo = ({
  src, name,
}) => (
  <Image className="category" src={src} name={name} alt={name} />
);

MealInfo.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default MealInfo;
