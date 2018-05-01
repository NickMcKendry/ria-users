import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'first-name'
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER' :
      return {
        ...state,
        text: action.filter
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
    default :
      return state;
  };
};
