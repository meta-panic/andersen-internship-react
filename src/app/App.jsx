import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import Sidebar from './Sidebar/SideBar';
import CardList from './AnimeCards/CardList';
import headerContant from './Header/headerContent';
import styles from './App.css';
import commonStyles from './css/common.css';

const propTypes = {
  isAnimeInfo: PropTypes.arrayOf(PropTypes.bool).isRequired,
  animeInfo: PropTypes.arrayOf(PropTypes.shape(
    {
      attributes: PropTypes.shape({
        canonicalTitle: PropTypes.string,
      }),
      message: PropTypes.string,
    },
  )).isRequired,
};

const cx = classNames.bind(styles, commonStyles);

class App extends React.Component {
  render() {
    const { isAnimeInfo: [isInfo] } = this.props;
    const [animeInfo] = this.props.animeInfo;
    const { message } = this.props.animeInfo[0];

    return (
      <div className={cx('сontainer', 'common')}>
        <Header content={headerContant} />
        <Sidebar />
        { isInfo ? <CardList data={animeInfo.data} /> : null}
        { typeof message === 'string' ? message : null}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default connect(
  state => ({
    isAnimeInfo: state.isAnimeInfo,
    animeInfo: state.animeInfo,
  }),
  dispatch => ({}),
)(App);
