import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { apiMiddleware } from './app/middlewares';

import reducers from './app/reducers';

export default function configureStore() {
  const middlewares = [
    thunk,
  ];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewares.push(logger);
  }
  middlewares.push(apiMiddleware);

  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  return store;
}
