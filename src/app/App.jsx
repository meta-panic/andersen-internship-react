import React from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import CardList from './AnimeCards/CardList';
import headerContant from './Header/headerContent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnimeInfo: false,
        };
    }

    addAnimeInfo = (e) => {
        console.log("state of App was changed");
        e.preventDefault();
        this.setState({
            isAnimeInfo: true,
        });
    };

    render() {
        const test = [{name: 'Anime1'}, {name: 'Anime2'}];
        const animeInfo = this.state.isAnimeInfo?<CardList cards={test}></CardList>:null;
        return (
            <div className='appContainer'>
                <Header content={headerContant} />
                <Sidebar addAnimeInfo={this.addAnimeInfo} />
                {animeInfo}
            </div>
        );
    }
}

export default App;
