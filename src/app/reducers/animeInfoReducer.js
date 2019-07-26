import { actionTypes } from '../actions/actionTypes';

export const initialState = {
  data: {},
  loading: false,
};

export const animeInfo = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.FETCH_ANIME_REQUEST:
    return {
      ...state,
      data: {},
      loading: true,
    };
  case actionTypes.FETCH_ANIME_SUCCESS:
    return {
      ...state,
      data: action.animeInfo,
      loading: false,
    };
  case actionTypes.FETCH_ANIME_FAILURE:
    return {
      ...state,
      data: {},
      loading: false,
    };
  default:
    return initialState;
  }
};

export default animeInfo;
