import React from 'react';
import PropTypes from 'prop-types';

import AnimeCard from './AnimeCard';

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(
        {
            attributes: PropTypes.shape({
                canonicalTitle: PropTypes.string,
            }),
        },
    )).isRequired,
};

function CardList({ data }) {
    return (
        <ul>
            { data.map(card => (
                <li key={card.id}>
                    <AnimeCard attributes={card.attributes} />
                </li>
            ))}
        </ul>
    );
}

CardList.propTypes = propTypes;

export default CardList;
