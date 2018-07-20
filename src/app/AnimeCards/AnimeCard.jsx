import React from 'react';
import PropTypes from 'prop-types';

const animeInfo = {
    attributes: PropTypes.shape({
        canonicalTitle: PropTypes.string,
    }).isRequired,
};

const AnimeCard = ({ attributes }) => (
    <div className="animeCard">
        {attributes.canonicalTitle}
    </div>);


AnimeCard.propTypes = animeInfo;

export default AnimeCard;
