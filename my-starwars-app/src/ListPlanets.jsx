import React, { Component } from 'react';
import PlanetInfo from './PlanetInfo';

class ListPlanets extends Component {
    render() {
        const planet = this.props.planet;
        return (
            <div className="Planet">
                <div class="jumbotron">
                    <div class="container">
                        <h1 class="center">StarWars Swapi API - Planets</h1>
                        <p>The most famous planets of StarWars</p>
                    </div>
                </div>
                {
                    planet.map((pl) => {
                        console.log(pl)
                        return (
                            <div key={pl.url}>
                                <h1 className="planets-name">{pl.name}</h1>
                                <PlanetInfo planetInfo={pl}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
export default ListPlanets;