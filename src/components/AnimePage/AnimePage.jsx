import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import TableRow from '../common/TableRow';
import styles from './AnimePage.css';

const cx = classNames.bind(styles);

const propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      animeInfo: PropTypes.shape({
        posterImage: PropTypes.shape({
          small: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

class AnimePage extends React.Component {
  render() {
    const { animeInfo } = this.props.location.state;
    return (
      <div className={cx('animePage')}>
        <div className={cx('baskArrowContainer')}>
          <button className={cx('baskArrow')} onClick={this.props.history.goBack} type="button">
            ⭅ Back
          </button>
        </div>
        <div className={cx('animeImageContainer')}>
          <img className={cx('animeImage')} src={animeInfo.posterImage.small} alt="small image" />
        </div>
        <div className={cx('infoTableContainer')}>
          <h2 className={cx('title')}>
            {animeInfo.canonicalTitle}
          </h2>
          <br />
          <TableRow leftInfo="Original title:" rightInfo={animeInfo.titles.ja_jp} />
          <TableRow
            leftInfo="Age rating:"
            rightInfo={`${animeInfo.ageRating} (${animeInfo.ageRatingGuide})`}
          />
          <TableRow leftInfo="Status:" rightInfo={animeInfo.status} />
          <TableRow leftInfo="Show type:" rightInfo={animeInfo.showType} />
          <TableRow leftInfo="Episode count:" rightInfo={animeInfo.episodeCount} />
        </div>
        <div className={cx('synopsisContainer')}>
          <h3>
            Synopsis:
          </h3>
          {animeInfo.synopsis}
        </div>
      </div>
    );
  }
}

AnimePage.propTypes = propTypes;

export default AnimePage;
