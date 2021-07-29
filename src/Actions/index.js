const fetchFoodError = (error) => ({
  type: 'FETCH_PRODUCTS_ERROR',
  error,
});

const fetchCategories = (categories) => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  categories,
});

const fetchSingleMeal = (details) => ({
  type: 'FETCH_MEAL_SUCCESS',
  details,
});

const fetchFoodSuccess = (products) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  products,
});

const UPDATE_CATEGORY = (category) => ({
  type: 'UPDATE_CATEGORY',
  category,
});

const resetSelected = () => ({ type: 'RESET' });

export {
  fetchCategories,
  fetchFoodError,
  fetchFoodSuccess,
  UPDATE_CATEGORY,
  fetchSingleMeal,
  resetSelected,
};
