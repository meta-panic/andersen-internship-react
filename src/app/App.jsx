import React from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import CardList from './AnimeCards/CardList';
import headerContant from './Header/headerContent';

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
                    animeInfo: data,
                });
            })
            .catch(err => console.log(`Runtime error: ${err}`));
        e.preventDefault();
    };

    render() {
        const animeInfo = this.state.isAnimeInfo?<CardList data={this.state.animeInfo.data}></CardList>:null;       
        return (
            <div className="appContainer">
                <Header content={headerContant} />
                <Sidebar addAnimeInfoHandler={this.addAnimeInfoHandler} />
                {animeInfo}
            </div>
        );
    }
}

export default App;
