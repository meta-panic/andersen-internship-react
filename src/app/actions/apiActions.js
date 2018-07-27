import { actionTypes } from './actionTypes';

function fetchAnimeInfo(ageFilter) {
  return dispatch => dispatch({
    type: actionTypes.API_CALL,
    url: `filter[ageRating]=${ageFilter}&page[limit]=8&page[offset]=0`,
    requestType: actionTypes.FETCH_ANIME,
  });
}

export default fetchAnimeInfo;
