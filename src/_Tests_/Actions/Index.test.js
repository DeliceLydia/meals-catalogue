import { UPDATE_CATEGORY, fetchSingleMeal } from '../../Actions/index';

describe('update current category', () => {
  it('it creates an action to change categories', () => {
    const text = 'Code';
    const expectedAction = {
      type: 'UPDATE_CATEGORY',
      category: text,
    };
    expect(UPDATE_CATEGORY(text)).toEqual(expectedAction);
  });
});

describe('get recipe details', () => {
  it('should give details for recipe', () => {
    const data = { name: 'beef', category: 'Beef' };
    const expectedAction = {
      type: 'FETCH_MEAL_SUCCESS',
      details: data,
    };
    expect(fetchSingleMeal(data)).toEqual(expectedAction);
  });
});
