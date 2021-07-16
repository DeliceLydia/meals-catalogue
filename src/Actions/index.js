const fetchFoodError = (error) => ({
  type: 'FETCH_PRODUCTS_ERROR',
  error,
});

const fetchCategories = (categories) => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  categories,
});

const fetchFoodSuccess = (products) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  products,
});

const UPDATE_CATEGORY = (category) => ({
  type: 'UPDATE_CATEGORY',
  category,
});

export {
  fetchCategories, fetchFoodError, fetchFoodSuccess, UPDATE_CATEGORY,
};
