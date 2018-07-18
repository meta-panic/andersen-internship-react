import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import App from './app/App';

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);

registerServiceWorker();
