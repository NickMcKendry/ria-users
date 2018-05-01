import {
  setTextFilter,
  sortByFirstName,
  sortByLastName,
} from '../../actions/filters';

test('Should setup object for SET_TEXT_FILTER with provided value', () => {
  const action = setTextFilter('Nick');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    filter: 'Nick'
  });
});

test('Should setup object for SET_TEXT_FILTER with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    filter: ''
  });
});

test('Should setup object for SORT_BY_FIRST_NAME', () => {
  const action = sortByFirstName();
  expect(action).toEqual({
    type: 'SORT_BY_FIRST_NAME'
  });
});

test('Should setup object for SORT_BY_LAST_NAME', () => {
  const action = sortByLastName();
  expect(action).toEqual({
    type: 'SORT_BY_LAST_NAME'
  });
});
