import React from 'react';
import Filter from './Filter';


class Sidebar extends React.Component {
    onClick = (event) => {
        this.props.addAnimeInfo(event);
    };

    render() {
        return (
            <aside>
                <button type='button' onClick={this.onClick}>
                    find
                </button>
                <Filter />
            </aside>
        );
    }
}

export default Sidebar;
