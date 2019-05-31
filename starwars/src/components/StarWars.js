import React from 'react';
import './StarWars.scss';

const StarWars = props => {
	// Display the stats for each character passed in as a prop.
	return (
		<div className="character-card-container">
			<div className="character-card">
				<p>Name: {props.name}</p>
				<p>Born: {props.birthYear}</p>
			</div>
		</div>
	);
};

export default StarWars;
