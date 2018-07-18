import React from 'react';
import PropTypes from 'prop-types';

function AnimeCard(props) {
    const { animeInfo } = props;
    return (
        <div className='animeCard'>
            {animeInfo.name}
        </div>
    );
}

/* check props types and existence */
AnimeCard.propTypes = {
    animeInfo: PropTypes.shape({
        name: PropTypes.string,
    }).isRequired,
};

export default AnimeCard;
