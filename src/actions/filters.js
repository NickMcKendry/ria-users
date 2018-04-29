// SET_TEXT_FILTER

export const setTextFilter = (filter = '') => ({
  type: 'SET_TEXT_FILTER',
  filter
});

// SORT_BY_DATE

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT

export const sortByFirstName = () => ({
  type: 'SORT_BY_FIRST_NAME'
});

export const sortByLastName = () => ({
  type: 'SORT_BY_LAST_NAME'
});

export const sortByAddress = () => ({
  type: 'SORT_BY_ADDRESS'
});

// SET_START_DATE

export const setbirthDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

// SET_END_DATE

export const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});
