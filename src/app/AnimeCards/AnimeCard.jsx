import React from 'react';
import PropTypes from 'prop-types';

const animeInfo = {
    attributes: PropTypes.shape({
        canonicalTitle: PropTypes.string,
    }).isRequired,
    animeId: PropTypes.string.isRequired,
};

const AnimeCard = ({ attributes, animeId }) => {
    console.log(animeId);
    return (
        <div className="animeCard">
            {attributes.canonicalTitle}
        </div>);
};

AnimeCard.propTypes = animeInfo;

export default AnimeCard;
