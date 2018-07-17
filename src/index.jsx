import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import Echo from './Echo/Echo';
import img from './img/img.jpg';

class App extends React.Component {
    render() {
        return (
            <div>
                <Echo>
                    Victor!
                </Echo>
                <img src={img} alt='Neo' />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);

registerServiceWorker();
