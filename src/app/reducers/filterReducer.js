import actionsType from '../constants/actionTypes';

const initialRating = ['G'];

const filterReducer = (state = initialRating, action) => {
  switch (action.type) {
  case actionsType.CHANGE_FILTER:
    return [...action.rating];
  default:
    return state;
  }
};

export default filterReducer;
