export const getCategoriesList = (state) => state.categories;
export const categoryName = (category) => category.strCategory;
export const categoryDetails = (category) => category.strCategoryDescription;
export const categoryImage = (category) => category.strCategoryThumb;
export const getProductsError = (state) => state.error;
export const getProducts = (state) => state.products;
export const getProductsPending = (state) => state.pending;
export const getImg = (state) => state.strMealThumb;
export const getArea = (state) => state.strArea;
export const getName = (state) => state.strMeal;
export const getInstructions = (state) => state.strInstructions;
export const getIngredient = (meal) => {
  const result = [];
  for (let i = 1; i <= 30; i += 1) {
    if (meal[`strIngredient${i}`] === '') {
      break;
    }
    result.push(meal[`strIngredient${i}`]);
  }
  return result;
};
