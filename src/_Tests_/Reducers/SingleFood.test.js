import singleFoodReducer from '../../Reducers/singleFood';

const initialState = {
  pending: false,
  details: {},
  error: undefined,
};

describe('update category', () => {
  it('should render a single recipe', () => {
    expect(singleFoodReducer(initialState,
      { type: 'FETCH_MEAL_SUCCESS', details: { x: 'oo', y: 'boo' } }))
      .toEqual({ ...initialState, details: { x: 'oo', y: 'boo' } });
  });
});
