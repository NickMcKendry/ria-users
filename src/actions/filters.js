
export const setTextFilter = (filter = '') => ({
  type: 'SET_TEXT_FILTER',
  filter
});

export const sortByFirstName = () => ({
  type: 'SORT_BY_FIRST_NAME'
});

export const sortByLastName = () => ({
  type: 'SORT_BY_LAST_NAME'
});
