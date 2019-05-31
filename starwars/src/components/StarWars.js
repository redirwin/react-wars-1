import React from 'react';
import './StarWars.scss';

const StarWars = props => {
	// Display the stats for each character passed in as a prop.
	return (
		<div className="character-card-container">
			<div className="character-card">
				<p>Name: {props.name}</p>
				<p>Born: {props.birthYear}</p>
				<p>Gender: {props.gender}</p>
				<p>Heigh: {props.height}cm</p>
				<p>Weight: {props.mass}kg</p>
				<p>Hair Color: {props.hairColor}</p>
				<p>Eye Color: {props.eyeColor}</p>
			</div>
		</div>
	);
};

export default StarWars;
