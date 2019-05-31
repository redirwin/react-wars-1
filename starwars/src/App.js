import React, { Component } from 'react';
import CharMap from './components/CharMap';
import Pagination from './components/Pagination';
import './App.scss';

class App extends Component {
	constructor() {
		super();
		this.state = {
			starwarsChars: [],
			url: 'https://swapi.co/api/people/',
			urlPage: 1,
			newURL: ''
		};
	}

	componentDidMount() {
		this.getCharacters(this.state.url);
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

	getNewPage = event => {
		console.log(this.state.newURL);
		if (event.currentTarget.name === 'next') {
			console.log(this.state.urlPage);

			this.setState({
				urlPage: parseInt(this.state.urlPage) + 1,
				newURL: `${this.state.url}?page=${
					this.state.urlPage
				}`
			});
			this.getCharacters(this.state.newURL);
		} else {
			// console.log('previous');
		}
	};

	render() {
		// console.log(this.state.starwarsChars);
		return (
			<div className="App">
				<div className="Header">
					<h1>The Stars of Star Wars</h1>
					<h2>Courtesy of React & Dave Irwin</h2>
				</div>
				<CharMap
					characterList={this.state.starwarsChars} // Pass character list to CharMap for processing.
				/>
				<Pagination getNewPage={this.getNewPage} />
			</div>
		);
	}
}

export default App;
