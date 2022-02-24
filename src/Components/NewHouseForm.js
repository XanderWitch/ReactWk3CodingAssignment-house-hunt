import React, { useState } from 'react';
import { HouseList } from './HouseList';

export const NewHouseForm = (props) => {
	const [location, setLocation] = useState('');
	const [squareFootage, setSquareFootage] = useState(''); //undefined because it's a number, needs to be validated
	const [bedrooms, setBedrooms] = useState('');
	const [bathrooms, setBathrooms] = useState('');
	const [price, setPrice] = useState('');
	const [name, setName] = useState('');
	const [text, setText] = useState('');

	//define onSubmit
	const onSubmit = (event) => {
		event.preventDefault();
		if (location && squareFootage) {
			props.addNewHouse({
				location,
				squareFootage,
				bedrooms,
				bathrooms,
				price,
				notes: {
					name,
					text,
				},
			});
			setLocation(''); //reset value
			setSquareFootage(''); //reset value
			setBedrooms(''); //reset value
			setBathrooms(''); //reset value
			setPrice(''); //reset value
			setName(''); //reset value
			setText(''); //reset value
		} else {
			console.log('invalid input');
		}
	};

	return (
		<div>
			<h4>Add a new house</h4>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder="Enter the house's location"
					onChange={(event) => setLocation(event.target.value)}
					value={location}
				/>
				<input
					type='text'
					placeholder="Enter the house's square footage"
					onChange={(event) =>
						setSquareFootage(event.target.value)
					}
					value={squareFootage}
				/>
				<input
					type='text'
					placeholder='Enter the number of bedrooms'
					onChange={(event) => setBedrooms(event.target.value)}
					value={bedrooms}
				/>
				<input
					type='text'
					placeholder='Enter the number of bathrooms'
					onChange={(event) => setBathrooms(event.target.value)}
					value={bathrooms}
				/>
				<input
					type='text'
					placeholder="Enter the house's price"
					onChange={(event) => setPrice(event.target.value)}
					value={price}
				/>
				<input
					type='text'
					placeholder='Name this note'
					onChange={(event) => setName(event.target.value)}
					value={name}
				/>
				<input
					type='text'
					placeholder='Add your note text here'
					onChange={(event) => setText(event.target.value)}
					value={text}
				/>
				<button type='submit'>Add House</button>
			</form>
		</div>
	);
};
