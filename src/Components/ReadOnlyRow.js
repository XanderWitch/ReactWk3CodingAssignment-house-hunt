import React from 'react';

const ReadOnlyRow = ({ data, handleEditClick, handleDeleteClick }) => {
	return (
		<tr>
			<td key={data._id} className='align-middle'>
				{data.location}
			</td>

			<td key={data._id} className='align-middle'>
				{data.bedrooms}
			</td>

			<td key={data._id} className='align-middle'>
				{data.bathrooms}
			</td>

			<td key={data._id} className='align-middle'>
				{data.squareFootage}
			</td>

			<td key={data._id} className='align-middle'>
				{data.price}
			</td>

			<td key={data._id} className='align-middle'>
				{data.notes}
			</td>
			<td key={data._id} className='align-middle'>
				<button
					className='btn btn-secondary'
					onClick={(event) => handleEditClick(event, data)}>
					Edit
				</button>
				<button
					className='btn btn-danger'
					data={data}
					onClick={() => handleDeleteClick(data._id)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default ReadOnlyRow;
