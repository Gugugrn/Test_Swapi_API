import React, { Component } from 'react';
import StarshipInfo from './StarshipInfo';

class ListStarship extends Component {
    render() {
        const starship = this.props.starship;
        return (
            <div className="starship">
                <div class="jumbotron">
                    <div class="container">
                        <h1 class="center">StarWars Swapi API - Starships</h1>
                        <p>The most famous starships of StarWars</p>
                    </div>
                </div>
                {
                    starship.map((st) => {
                        //console.log(st)
                        return (
                            <div key={st.url}>
                                <h1 className="starship-name">{st.name}</h1>
                                <StarshipInfo starshipInfo={st}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
export default ListStarship;