import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './app/reducers';

export default function configureStore() {
  const middlewares = [
    thunk,
  ];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const store = createStore(
    reducers,
    applyMiddleware(...middlewares),
  );

  return store;
}
