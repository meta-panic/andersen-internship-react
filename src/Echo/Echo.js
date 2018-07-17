import React from 'react';

const style = {
    item: {
        color: 'blue',
        fontSize: '20px',
    },
};

const Echo = props => React.createElement('div', { style: style.item }, `Hello, ${props.someText}`);

export default Echo;
