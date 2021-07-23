import { fetchSingleMeal, fetchFoodError } from './index';

const fetchMeal = (id) => (dispatch) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchSingleMeal(res.meals[0]));
      return res;
    })
    .catch((error) => {
      dispatch(fetchFoodError(error));
    });
};

export default fetchMeal;
