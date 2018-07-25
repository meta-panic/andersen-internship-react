import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../Header';
import Sidebar from '../Sidebar';
import CardList from '../CardList';
import headerContant from '../Header/headerContent';

import styles from './App.css';

const propTypes = {
  data: PropTypes.object,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
}.isRequired;

const cx = classNames.bind(styles);

class App extends React.Component {
  render() {
    const { animeInfo } = this.props;
    const {
      data,
      loading,
      errorMessage,
      error,
    } = animeInfo;

    return (
      <div className={cx('сontainer')}>
        <Header content={headerContant} />
        <Sidebar />
        { data.length > 0 ? <CardList data={data} /> : null}
        { error ? errorMessage : null}
        { loading ? <div className={cx('spinner')} /> : null}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default connect(
  state => ({
    animeInfo: state.animeInfo,
  }),
  dispatch => ({}),
)(App);
