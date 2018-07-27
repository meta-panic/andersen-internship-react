import { actionTypes } from './actionTypes';

function fetchAnimeInfo(ageFilter) {
  return dispatch => dispatch({
    type: actionTypes.API_CALL,
    url: `filter[ageRating]=${ageFilter}`,
    requestType: actionTypes.FETCH_ANIME,
  });
}

export default fetchAnimeInfo;
