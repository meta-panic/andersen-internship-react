import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './SideBar.css';
import actionsType from '../constants/actionTypes';
import fetchAnimeInfo from '../actions/fetchAnimeAction';

const propTypes = {
  checkedRating: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onButtonPress: PropTypes.func.isRequired,
};

const cx = classNames.bind(styles);

const ageRatingArray = ['G', 'PG', 'R', 'R18'];

class Sidebar extends React.Component {
  onClick = () => {
    this.props.onButtonPress(this.props.checkedRating);
  }

  handleRatingChange = (event) => {
    const { target } = event;
    const isChecked = target.checked;
    const { name } = target;

    const arr = new Set(this.props.checkedRating);
    isChecked ? arr.add(name) : arr.delete(name);

    this.props.onRatingChange(Array.from(arr));
  }

  render() {
    return (
      <aside className={cx('sidebar')}>
        <button className={cx('getAnimeButton')} type="button" onClick={this.onClick}>
        find
        </button>
        <fieldset className={cx('ratingFilter')} name="ageRating">
          <legend className={cx('filterName')}>
            Age rating
          </legend>
          {ageRatingArray.map(rating => (
            <div className={cx('checkbox')} key={rating}>
              <label htmlFor={rating}>
                <input
                  id={rating}
                  name={rating}
                  type="checkbox"
                  checked={this.props.checkedRating.indexOf(rating) > -1}
                  onChange={this.handleRatingChange}
                />
                {rating}
              </label>
            </div>
          ))}
        </fieldset>
      </aside>
    );
  }
}

Sidebar.propTypes = propTypes;

export default connect(
  state => ({
    checkedRating: state.filter,
  }),
  dispatch => ({
    onRatingChange: (filter) => {
      dispatch({ type: actionsType.CHANGE_FILTER, rating: filter });
    },
    onButtonPress: (checkedRating) => {
      dispatch(fetchAnimeInfo(checkedRating));
    },
  }),
)(Sidebar);
