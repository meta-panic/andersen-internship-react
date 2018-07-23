import actionsType from '../constants/actionTypes';

const initialState = {
  data: {},
  loading: false,
  error: false,
  message: null,
};

const animeInfo = (state = initialState, action) => {
  switch (action.type) {
  case actionsType.FETCH_ANIME_START:
    return [
      {
        data: {}, loading: true, error: false,
      },
    ];
  case actionsType.FETCH_ANIME_SUCCESS:
    return [
      {
        data: action.animeInfo, loading: false, error: false,
      },
    ];
  case actionsType.FETCH_ANIME_FAILURE:
    return [
      {
        data: {}, loading: false, error: true, message: action.message,
      },
    ];
  default:
    return [initialState];
  }
};

export default animeInfo;
