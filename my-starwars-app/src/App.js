import React, { Component } from 'react';
import List from './List';
import axios from 'axios';
import ListPlanets from './ListPlanets';
import ListStarship from './ListStarship';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      planet: [],
      starship:[],
    }
    this.getPeople = this.getPeople.bind(this);
    this.getPlanet = this.getPlanet.bind(this);
    this.getStarship = this.getStarship.bind(this);
  }
  getPeople() {
    return axios.get("https://swapi.co/api/people/").then((response) => {
      console.log(response.data.results);
      this.setState({ people: response.data.results })
    })
  }
  getPlanet() {
    return axios.get("https://swapi.co/api/planets/").then((response) => {
      console.log(response.data.results);
      this.setState({ planet: response.data.results })
    })
  }
  getStarship() {
    return axios.get("https://swapi.co/api/starships/").then((response) => {
      console.log(response.data.results);
      this.setState({ starship: response.data.results })
    })
  }

  componentDidMount() {
    this.getPeople()
    this.getPlanet()
    this.getStarship()
  }

  render() {
    const people = this.state.people;
    const planet = this.state.planet;
    const starship = this.state.starship;
    return (
      <div className="App">
        <List people={people}/>
        <ListPlanets planet={planet}/>
        <ListStarship starship={starship}/>
      </div>
    );
  }
}

export default App;
