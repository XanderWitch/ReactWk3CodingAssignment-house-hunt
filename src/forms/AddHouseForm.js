import React, { useState } from 'react';

const AddHouseForm = (props) => {
	const initialFormState = {
		id: '',
		location: '',
		squareFootage: '',
		bedrooms: '',
		bathrooms: '',
		price: '',
		notes: '',
	};

	const [house, setHouse] = useState(initialFormState);

	const handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		setHouse({ ...house, [name]: value });
	};

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (!house.location || !house.squareFootage) return;
				props.addHouse(house);
				setHouse(initialFormState);
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

			<button>Add new house</button>
		</form>
	);
};

export default AddHouseForm;
