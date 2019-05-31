import React from 'react';
import StarWars from './StarWars';

const CharMap = props => {
	return (
		// Map over character list and pass some stats for display.
		<div>
			{props.characterList.map(character => {
				return (
					<StarWars
						key={character.created}
						name={character.name}
						birthYear={character.birth_year}
						gender={character.gender}
						height={character.height}
						mass={character.mass}
						hairColor={character.hair_color}
						eyeColor={character.eye_color}
					/>
				);
			})}
		</div>
	);
};
export default CharMap;
