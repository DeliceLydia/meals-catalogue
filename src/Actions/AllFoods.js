import { fetchFoodSuccess, fetchFoodError } from './index';

const fetchAllMeals = (type) => (dispatch) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchFoodSuccess(res.meals));
    })
    .catch((error) => {
      dispatch(fetchFoodError(error));
    });
};

export default fetchAllMeals;
