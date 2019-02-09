import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
    state = {
        lat: null,
        long: null,
        errorMessage: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
        console.log('Component was rendered!');
    }

    componentDidUpdate() {
        console.log('Component has Updated and re-rendered!');
    }

    render() {
        if (this.state.errorMessage && !this.state.lat)
            return <div> Error: {this.state.errorMessage} </div>
        else if (!this.state.errorMessage && this.state.lat)
            return <SeasonDisplay lat={this.state.lat}/>
        else 
            return <div>Loading...</div>
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);