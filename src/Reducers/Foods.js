const initialState = {
  pending: false,
  products: [],
  error: '',
  category: '',
};

const FoodReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        pending: false,
        products: action.products,
      };
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case 'UPDATE_CATEGORY':
      return {
        ...state,
        category: action.category,
      };
    default:
      return state;
  }
};

export default FoodReducer;
