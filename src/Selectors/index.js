export const getCategoriesList = (state) => state.categories;
export const categoryName = (category) => category.strCategory;
export const categoryDetails = (category) => category.strCategoryDescription;
export const categoryImage = (category) => category.strCategoryThumb;
export const getProductsError = (state) => state.error;
export const getProducts = (state) => state.products;
export const getProductsPending = (state) => state.pending;
