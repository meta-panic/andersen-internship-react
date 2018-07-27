import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';
import CardList from '../CardList';

import styles from './Main.css';

const propTypes = {
  data: PropTypes.object,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
}.isRequired;

const cx = classNames.bind(styles);

class Main extends React.Component {
  render() {
    const { animeInfo } = this.props;
    const {
      data,
      loading,
    } = animeInfo;

    return (
      <div className={cx('main')}>
        <Sidebar />
        { data.length > 0 ? <CardList data={data} /> : null}
        { data.length === 0 ? 'Error during data loading' : null }
        { loading ? <div className={cx('spinner')} /> : null}
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default connect(
  state => ({
    animeInfo: state.animeInfo,
  }),
  dispatch => ({}),
)(Main);
