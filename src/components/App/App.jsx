import React from 'react';
import classNames from 'classnames/bind';
import { Switch, Route } from 'react-router-dom';

import Header from '../common/Header';
import headerContant from '../common/Header/headerContent';
import Main from '../Main';
import AnimePage from '../AnimePage';

import styles from './App.css';

const cx = classNames.bind(styles);

class App extends React.Component {
  render() {
    return (
      <div className={cx('сontainer')}>
        <Header content={headerContant} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/anime/:number" component={AnimePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
