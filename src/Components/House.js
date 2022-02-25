import React from 'react';

function House({
	house: { _id, location, squareFootage, bedrooms, bathrooms, price, notes },
}) {
	return (
		<tr key={_id}>
			<td>{location}</td>
			<td>{squareFootage}</td>
			<td>{bedrooms}</td>
			<td>{bathrooms}</td>
			<td>{price}</td>
			<td>{notes}</td>
			<td>
				<button>Edit</button>
				<button>Delete</button>
			</td>
		</tr>
	);
}

export default House;
