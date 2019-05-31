import React, { Component } from 'react';
import CharMap from './components/CharMap';
import './App.scss';

class App extends Component {
	constructor() {
		super();
		this.state = {
			starwarsChars: []
		};
	}

	componentDidMount() {
		this.getCharacters('https://swapi.co/api/people/');
	}

	getCharacters = URL => {
		// feel free to research what this code is doing.
		// At a high level we are calling an API to fetch some starwars data from the open web.
		// We then take that data and resolve it our state.
		fetch(URL)
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({ starwarsChars: data.results });
			})
			.catch(err => {
				throw new Error(err);
			});
	};

	render() {
		console.log(this.state.starwarsChars);
		return (
			<div className="App">
				<div className="Header">
					<h1>The Stars of Star Wars</h1>
					<h2>Courtesy of React & Dave Irwin</h2>
				</div>
				<CharMap
					characterList={this.state.starwarsChars} // Pass character list to CharMap for processing.
				/>
			</div>
		);
	}
}

export default App;
