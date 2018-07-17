import React from 'react';

const style = {
    item: {
        color: 'blue',
        fontSize: '20px',
    },
};

class Echo extends React.Component {
    render() {
        return (
            <div style={style.item}> 
                Hello,
                {this.props.children}
            </div>
        );
      }
}

export default Echo;
