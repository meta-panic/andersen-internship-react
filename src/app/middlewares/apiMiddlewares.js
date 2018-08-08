import { actionTypes, requestTypeConcat } from '../actions/actionTypes';

const apiMiddleware = store => next => (action) => {
  const { url, requestType } = action;

  if (action.type === actionTypes.API_CALL) {
    store.dispatch({
      type: requestTypeConcat(requestType, 'REQUEST'),
    });

    return fetch(`https://kitsu.io/api/edge/anime?${url}&page[limit]=8&page[offset]=0`)
      .then(res => res.json())
      .then(
        ({ data }) => {
          if (data.length === 0) {
            console.error('The data is empty');
            store.dispatch({
              type: requestTypeConcat(requestType, 'FAILURE'),
              message: 'Sorry, this filter isn\'t correct',
            });
          } else {
            store.dispatch({
              type: requestTypeConcat(requestType, 'SUCCESS'),
              animeInfo: data,
            });
          }
        },
        err => store.dispatch({
          type: requestTypeConcat(requestType, 'FAILURE'),
          message: err,
        }),
      );
  }
  return next(action);
};

export default apiMiddleware;
