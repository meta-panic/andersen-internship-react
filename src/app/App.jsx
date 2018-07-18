import React from 'react';
import Header from './Header/Header';
import headerContant from './Header/headerContent';

function App() {
    return (
        <div className='appContainer'>
            <Header content={headerContant} />
        </div>
    );
}

export default App;
