import React, { Component } from 'react';

class StarshipInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({ expanded: !this.state.expanded })
    }
    close() {
        this.setState({ expanded: !this.state.expanded })
    }
    render() {
        const info = this.props.starshipInfo;
        if(!this.state.expanded) {
            return <p className="btn btn-info" onClick={this.open}>Show Info</p>
        } 
        return (
            <div className="user-details">
                <p className="btn btn-warning" onClick={this.close}>Hide Info</p>
                <ul>
                    <li><h2>Name: {info.name}</h2></li>
                    <li><h2>Model: {info.model}</h2></li>
                    <li><h2>Length: {info.length}</h2></li>
                    <li><h2>Passengers: {info.passengers}</h2></li>
                    <li><h2>Hyperdrive Rating: {info.hyperdrive_rating}</h2></li>
                </ul>
            </div>
        )
    }
}

export default StarshipInfo;