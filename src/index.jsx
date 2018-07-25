import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import configureStore from './configureStore';
import commonStyle from './app/css/common.css';

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
