import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    const { content } = props;
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

/* check props types and existence */
Header.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
};

export default Header;
