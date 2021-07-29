import categoriesReducer from '../../Reducers/category';

const initialState = {
  pending: false,
  categories: [],
  error: undefined,
};

describe('update category', () => {
  it('should fetch the categories', () => {
    expect(categoriesReducer(initialState,
      { type: 'FETCH_CATEGORIES_SUCCESS', categories: ['Pasta', 'Pork'] }))
      .toEqual({ ...initialState, categories: ['Pasta', 'Pork'] });
  });
});
