import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  birthDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER' :
      return {
        ...state,
        text: action.filter
      };
    case 'SORT_BY_DATE' :
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_FIRST_NAME' :
      return {
        ...state,
        sortBy: 'first-name'
      };
    case 'SORT_BY_LAST_NAME' :
      return {
        ...state,
        sortBy: 'last-name'
      };
    case 'SORT_BY_ADDRESS' :
      return {
        ...state,
        sortBy: 'address'
      };
    case 'SET_START_DATE' :
      return {
        ...state,
        birthDate: action.date
      };
    case 'SET_END_DATE' :
      return {
        ...state,
        endDate: action.date
      };
    default :
      return state;
  };
};
