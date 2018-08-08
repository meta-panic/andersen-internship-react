const keyMirror = require('keymirror');

const actionTypes = keyMirror({
  BUTTON_PRESSED: null,
  FETCH_ANIME: null,
  FETCH_ANIME_REQUEST: null,
  FETCH_ANIME_FAILURE: null,
  FETCH_ANIME_SUCCESS: null,
  API_CALL: null,
});

const requestTypeConcat = (requestType, result) => `${requestType}_${result}`;

export { actionTypes, requestTypeConcat };
