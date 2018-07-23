import actionsType from '../constants/actionTypes';

const startFetchAnimeInfo = () => {
  return { type: actionsType.FETCH_ANIME_START };
};

const fetchAnimeInfoSuccess = (data) => {
  console.log(data);
  return { type: actionsType.FETCH_ANIME_SUCCESS, animeInfo: data };
};

const fetchAnimeInfoError = (error) => {
  return { type: actionsType.FETCH_ANIME_FAILURE, message: error };
};

const fetchAnimeInfo = (checkedRating) => {
  return (dispatch) => {
    dispatch(startFetchAnimeInfo());
    fetch(`https://kitsu.io/api/edge/anime?filter[ageRating]=${checkedRating}&page[limit]=8&page[offset]=0`)
      .then(response => response.json())
      .then(
        ({ data }) => {
          if (data.length === 0) {
            console.error('The data is empty');
            dispatch(fetchAnimeInfoError('Sorry, this filter isn\'t correct'));
          } else {
            dispatch(fetchAnimeInfoSuccess(data));
          }
        },
        (err) => {
          dispatch(fetchAnimeInfoError());
        },
      );
  };
};

export default fetchAnimeInfo;
