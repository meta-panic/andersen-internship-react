import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Header.css';

const cx = classNames.bind(styles);

const propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

const Header = ({ content }) => (
  <header>
    <h1 className={cx('title')}>
      {content.title}
    </h1>
    <p className={cx('description')}>
      {content.description}
    </p>
  </header>
);

Header.propTypes = propTypes;

export default Header;
