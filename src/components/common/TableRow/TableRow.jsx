import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './TableRow.css';

const cx = classNames.bind(styles);

const propTypes = {
  leftInfo: PropTypes.string.isRequired,
  rightInfo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

const TableRow = ({ leftInfo, rightInfo }) => (
  <div className={cx('table')}>
    <div className={cx('left')}>
      {leftInfo}
    </div>
    <div className={cx('right')}>
      {rightInfo}
    </div>
  </div>
);

TableRow.propTypes = propTypes;

export default TableRow;
