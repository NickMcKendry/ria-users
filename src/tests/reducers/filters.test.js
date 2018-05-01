import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'first-name',
  });
});

test('Should set sort by to last-name', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_LAST_NAME' });
  expect(state.sortBy).toBe('last-name');
});

test('Should set sort by to firstName', () => {
  const currentState = {
    text: '',
    sortBy: 'first-name',
  }
  const state = filtersReducer(currentState, { type: 'SORT_BY_FIRST_NAME' });
  expect(state.sortBy).toBe('first-name');
});

test('Should set text filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    filter: 'test'
  }
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('test');
});
