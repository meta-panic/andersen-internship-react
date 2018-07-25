import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import configureStore from './configureStore';
import commonStyle from './app/css/common.css';

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
