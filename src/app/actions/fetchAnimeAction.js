import actionsType from './actionTypes';

const startFetchAnimeInfo = () => ({ type: actionsType.FETCH_ANIME_START });

const fetchAnimeInfoSuccess = data => ({ type: actionsType.FETCH_ANIME_SUCCESS, animeInfo: data });

const fetchAnimeInfoError = error => ({ type: actionsType.FETCH_ANIME_FAILURE, message: error });

const fetchAnimeInfo = checkedRating => ((dispatch) => {
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
    );
});

export default fetchAnimeInfo;
