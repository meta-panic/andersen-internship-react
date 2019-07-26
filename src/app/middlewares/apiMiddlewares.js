import { actionTypes, requestTypeConcat } from '../actions/actionTypes';

export const ROOT_URL = 'https://kitsu.io/api/edge/anime?';

export const apiMiddleware = store => next => (action) => {
  const { url, requestType } = action;

  if (action.type === actionTypes.API_CALL) {
    store.dispatch({
      type: requestTypeConcat(requestType, 'REQUEST'),
    });

    return fetch(`${ROOT_URL}${url}`)
      .then(res => res.json())
      .then(
        (response) => {
          store.dispatch({
            type: requestTypeConcat(requestType, 'SUCCESS'),
            animeInfo: response.data,
          });
        },
        () => store.dispatch({
          type: requestTypeConcat(requestType, 'FAILURE')
        }),
      );
  }
  return next(action);
};
