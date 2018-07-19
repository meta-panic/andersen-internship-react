import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedRating: ['G','R18'],
        };
    }

    onClick = (event) => {
        this.props.addAnimeInfoHandler(event, this.state);
    };

    handleRatingChange(event) {
        const target = event.target;
        const isChecked = target.checked;
        const name = target.name;
    
        this.setState((prevState, props)=> {
            const arr = new Set(prevState.checkedRating);           
            isChecked? arr.add(name): arr.delete(name);
        
            return {checkedRating: Array.from(arr)};
        });
    }

    render() {
        return (
            <aside>
                <button type="button" onClick={this.onClick}>
                    find
                </button>
                <fieldset name="ageRating">
                    <legend>Age rating</legend>        
                    {['G','PG','R','R18'].map( rating => (
                        <div key={rating}>
                            <input id={rating} name={rating} type="checkbox"
                                checked={this.state.checkedRating.indexOf(rating) > -1 ? true : false} 
                                onChange={this.handleRatingChange.bind(this)}/>
                            <label htmlFor={rating}>{rating}</label>
                        </div>
                    ))}
                </fieldset>
            </aside>
        );
    }
}

export default Sidebar;
