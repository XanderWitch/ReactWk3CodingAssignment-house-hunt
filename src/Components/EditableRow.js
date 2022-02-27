import React from 'react';

const EditableRow = ({
	editFormData,
	handleEditFormChange,
	handleCancelClick,
}) => {
	return (
		<tr>
			<td>
				<input
					type='text'
					placeholder='Enter the location ...'
					name='location'
					value={editFormData.location}
					onChange={handleEditFormChange}></input>
			</td>
			<td>
				<input
					type='text'
					placeholder='# Bedrooms ...'
					name='bedrooms'
					value={editFormData.bedrooms}
					onChange={handleEditFormChange}></input>
			</td>
			<td>
				<input
					type='text'
					placeholder='# Bathrooms ...'
					name='bathrooms'
					value={editFormData.bathrooms}
					onChange={handleEditFormChange}></input>
			</td>
			<td>
				<input
					type='text'
					placeholder='Enter the square footage'
					name='squareFootage'
					value={editFormData.squareFootage}
					onChange={handleEditFormChange}></input>
			</td>
			<td>
				<input
					type='text'
					placeholder='Enter the price ...'
					name='price'
					value={editFormData.price}
					onChange={handleEditFormChange}></input>
			</td>
			<td>
				<input
					type='text'
					placeholder='Notes ...'
					name='notes'
					value={editFormData.notes}
					onChange={handleEditFormChange}></input>
			</td>
			<td>
				<button type='submit' className='btn btn-success'>
					Save
				</button>
				<button
					onClick={handleCancelClick}
					className='btn btn-secondary'>
					Cancel
				</button>
			</td>
		</tr>
	);
};

export default EditableRow;
