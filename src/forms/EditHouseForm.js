import React, { useState, useEffect } from 'react';

const EditHouseForm = (props) => {
	const [house, setHouse] = useState(props.currentHouse);

	useEffect(() => {
		setHouse(props.currentHouse);
	}, [props]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setHouse({ ...house, [name]: value });
	};

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				props.updateHouse(house._id, house);
			}}>
			<label>Location</label>
			<input
				type='text'
				name='location'
				placeholder='House Location/Nickname'
				value={house.location}
				onChange={handleInputChange}
			/>
			<label>Square Footage</label>
			<input
				type='text'
				name='squareFootage'
				placeholder='Total Square Feet'
				value={house.squareFootage}
				onChange={handleInputChange}
			/>
			<label>Number of Bedrooms</label>
			<input
				type='text'
				name='bedrooms'
				placeholder='# bedrooms'
				value={house.bedrooms}
				onChange={handleInputChange}
			/>
			<label>Number of Bathrooms</label>
			<input
				type='text'
				name='bathrooms'
				placeholder='# bedrooms'
				value={house.bathrooms}
				onChange={handleInputChange}
			/>
			<label>Price</label>
			<input
				type='text'
				name='price'
				placeholder='House Price ($USD)'
				value={house.price}
				onChange={handleInputChange}
			/>
			<label>Notes</label>
			<input
				type='text'
				name='notes'
				placeholder='Important Notes'
				value={house.notes}
				onChange={handleInputChange}
			/>

			<button type='button' onClick={() => props.setEditing(false)}>
				Update House
			</button>
		</form>
	);
};

export default EditHouseForm;
