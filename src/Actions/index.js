const fetchRecipesError = (error) => ({
  type: 'FETCH_PRODUCTS_ERROR',
  error,
});

const fetchCategories = (categories) => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  categories,
});

export { fetchCategories, fetchRecipesError };
