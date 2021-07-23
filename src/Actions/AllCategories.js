import { fetchCategories, fetchFoodError } from './index';

const fetchAllCategories = () => (dispatch) => {
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchCategories(res.categories));
    })
    .catch((error) => {
      dispatch(fetchFoodError(error));
    });
};

export default fetchAllCategories;
