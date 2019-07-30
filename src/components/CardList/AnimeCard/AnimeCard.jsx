import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AnimeCard.css';

const animeInfo = {
  attributes: PropTypes.shape({
    canonicalTitle: PropTypes.string,
  }).isRequired,
  animeId: PropTypes.string.isRequired,
};

const cx = classNames.bind(styles);

const getDuration = (startDate, endDate, status) => {
  let starYear;
  let endYear;
  let duration;
  if (status === 'current' || status === 'finished') {
    starYear = startDate.slice(0, 4);
    endYear = endDate.slice(0, 4);
  }

  switch (status) {
  case 'current':
    duration = `${starYear}-...`;
    break;
  case 'finished':
    if (starYear === endYear) {
      duration = `${starYear}`;
    } else {
      duration = `${starYear} - ${endYear}`;
    }
    break;
  default:
    duration = status;
    break;
  }

  return duration;
};

const AnimeCard = ({ attributes, animeId }) => (
  <div>
    <img src={attributes.posterImage.tiny} alt="tiny image" />
    <div className={cx('animeTitle')}>
      <Link
        className={cx('link')}
        to={{
          pathname: `/anime/${animeId}`,
          state: {
            animeInfo: attributes,
          },
        }}
      >
        {attributes.canonicalTitle}
      </Link>
    </div>
    <div>
      {attributes.showType}
    </div>
    <div>
      {getDuration(attributes.startDate, attributes.endDate, attributes.status)}
    </div>
    <div>
      {`Rating: ${attributes.ageRating}`}
    </div>
  </div>);

AnimeCard.propTypes = animeInfo;

export default AnimeCard;
