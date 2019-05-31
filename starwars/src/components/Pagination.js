import React from 'react';

const Pagination = props => {
	return (
		<div className="pagination-buttons-container">
			<button
				name="previous"
				onClick={event => props.getNewPage(event)}
			>
				Previous
			</button>
			<button
				name="next"
				onClick={event => props.getNewPage(event)}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
