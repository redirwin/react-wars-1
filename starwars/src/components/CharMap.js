import React from 'react';
import StarWars from './StarWars';

const CharMap = props => {
	// console.log(props.characterList);
	return (
		<div>
			{props.characterList.map(item => {
				return <StarWars name={item.name} />;
			})}
		</div>
	);
};
export default CharMap;
