import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import Echo from './Echo/Echo';

const functionalEl = React.createElement(Echo, { someText: 'Victor!' }, null);
const imgEl = React.createElement('img', { src: './img/img.jpg' });

const rootEl = React.createElement('div', null, functionalEl, imgEl);

ReactDOM.render(
    rootEl,
    document.getElementById('root'),
);

registerServiceWorker();
