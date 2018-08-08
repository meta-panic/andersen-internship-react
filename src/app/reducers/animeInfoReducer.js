import { actionTypes } from '../actions/actionTypes';

const initialState = {
  data: {},
  loading: false,
  error: false,
  errorMessage: '',
};

const animeInfo = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.FETCH_ANIME_REQUEST:
    return {
      ...state,
      data: {},
      loading: true,
      error: false,
    };
  case actionTypes.FETCH_ANIME_SUCCESS:
    return {
      ...state,
      data: action.animeInfo,
      loading: false,
      error: false,
    };
  case actionTypes.FETCH_ANIME_FAILURE:
    return {
      ...state,
      data: {},
      loading: false,
      error: true,
      errorMessage: 'Loading error',
    };
  default:
    return initialState;
  }
};

export default animeInfo;
