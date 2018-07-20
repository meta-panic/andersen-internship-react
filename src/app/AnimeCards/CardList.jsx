import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AnimeCard from './AnimeCard';
import styles from './CardList.css';

const cx = classNames.bind(styles);

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
        <ul className={cx('animeInfoContainer')}>
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
