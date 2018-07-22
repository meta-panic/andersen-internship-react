import React from 'react';
import classNames from 'classnames/bind';

import Header from './Header/Header';
import Sidebar from './Sidebar/SideBar';
import CardList from './AnimeCards/CardList';
import headerContant from './Header/headerContent';
import styles from './App.css';

const cx = classNames.bind(styles);

class App extends React.Component {
    state = {
        isAnimeInfo: false,
    };

    addAnimeInfoHandler = (e, filterState) => {
        fetch(`https://kitsu.io/api/edge/anime?filter[ageRating]=${filterState.checkedRating}&page[limit]=5&page[offset]=0`)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    isAnimeInfo: true,
                    animeInfo: data.data,
                });
            })
            .catch(err => console.error(`Runtime error: ${err}`));
        e.preventDefault();
    };

    render() {
        const { isAnimeInfo } = this.state;
        const { animeInfo } = this.state;
        return (
            <div className={cx('сontainer')}>
                <Header content={headerContant} />
                <Sidebar addAnimeInfoHandler={this.addAnimeInfoHandler} />
                { isAnimeInfo ? <CardList data={animeInfo} /> : null}
            </div>
        );
    }
}

export default App;
