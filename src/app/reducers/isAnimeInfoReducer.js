import actionsType from '../constants/actionTypes';

const initialState = {
  isAnimeInfo: false,
};

const isAnimeInfo = (state = initialState, action) => {
  switch (action.type) {
  case actionsType.FETCH_ANIME_SUCCESS:
    return [
      true,
    ];
  case actionsType.FETCH_ANIME_FAILURE:
    return [initialState.isAnimeInfo];
  default:
    return [initialState.isAnimeInfo];
  }
};

export default isAnimeInfo;
