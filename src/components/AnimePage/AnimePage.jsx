import React from 'react';
import classNames from 'classnames/bind';

import styles from './AnimePage.css';

const cx = classNames.bind(styles);

class App extends React.Component {
  render() {
    return (
      <div className={cx('сontainer')}>
        There is going be animePage...
      </div>
    );
  }
}

export default App;
