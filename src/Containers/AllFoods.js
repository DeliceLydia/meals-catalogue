import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../Components/Filter';
import fetchAllMeals from '../Actions/allFoods';
import { getProductsPending } from '../Selectors/Index';
import { UPDATE_CATEGORY } from '../Actions/index';
import MealsList from './FoodList';

const AllFoods = (props) => {
  const {
    addFilter, match, current, fetchAllMeals,
  } = props;

  const { category } = match.params;

  const handleFilterChange = (e) => {
    const newCategory = e.target.value;
    addFilter(e.target.value);
    fetchAllMeals(newCategory);
  };

  return (
    <div>
      <div className="">
        <div className="mb-5">
          <CategoryFilter onChange={handleFilterChange} value={current} />
        </div>
      </div>
      <MealsList category={category} />
    </div>
  );
};

AllFoods.defaultProps = {
  category: 'Pasta',
};

AllFoods.propTypes = {
  category: PropTypes.string,
  addFilter: PropTypes.func.isRequired,
  fetchAllMeals: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => {
  const { allMeals } = state;
  return (
    {
      pending: getProductsPending(allMeals),
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchAllMeals,
  addFilter: UPDATE_CATEGORY,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllFoods);
