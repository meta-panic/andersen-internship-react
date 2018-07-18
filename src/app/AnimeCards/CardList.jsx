import React from 'react';
import PropTypes from 'prop-types';

import AnimeCard from './AnimeCard';

function CardList({ cards }) {
    const animeCards = cards.map(card => (
        <li>
            <AnimeCard animeInfo={card} />
        </li>
    ));

    return (
        <ul>
            {animeCards}
        </ul>
    );
}

/* check props types and existence */
CardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
    })).isRequired,
};

export default CardList;
