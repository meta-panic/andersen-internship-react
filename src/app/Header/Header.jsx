import React from 'react';

function Header(props) {
    console.log(props);
    const {content} = props;
    console.log(content);
    return (
        <header>
            <h1>
                {content.title}
            </h1>
            <p>
                {content.description}
            </p>
        </header>
    );
}

export default Header;
