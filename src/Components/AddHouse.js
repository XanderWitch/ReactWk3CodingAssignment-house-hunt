import axios from 'axios';
import React, { useState } from 'react';
import bootstrap from 'bootstrap';

export default function AddHouse() {
	const [location, setLocation] = useState('');
	const [bedrooms, setBedrooms] = useState('');
	const [bathrooms, setBathrooms] = useState('');
	const [squareFootage, setSquareFootage] = useState('');
	const [price, setPrice] = useState('');
	const [notes, setNotes] = useState('');

	const postData = () => {
		axios.post(
			'https://crudcrud.com/api/776d23438df143b9be860123700b634d/houses',
			{
				location,
				squareFootage,
				bedrooms,
				bathrooms,
				price,
				notes,
			}
		);
	};
	return (
		<div className='house-form'>
			<div className='house-form-box'>
				<h2>Add a New House</h2>
				<form>
					<label className='col-form-label'>Location</label>
					<input
						className='form-control'
						type='text'
						name='location'
						id='location'
						placeholder='House Location/Nickname'
						onChange={(e) => setLocation(e.target.value)}
					/>
					<label className='col-form-label'>
						Number of Bedrooms
					</label>
					<input
						className='form-control'
						type='text'
						name='bedrooms'
						id='bedrooms'
						placeholder='# bedrooms'
						onChange={(e) => setBedrooms(e.target.value)}
					/>
					<label className='col-form-label'>
						Number of Bathrooms
					</label>
					<input
						className='form-control'
						type='text'
						name='bathrooms'
						id='bathrooms'
						placeholder='# bedrooms'
						onChange={(e) => setBathrooms(e.target.value)}
					/>
					<label className='col-form-label'>
						Square Footage
					</label>
					<input
						className='form-control'
						type='text'
						name='squareFootage'
						id='squareFootage'
						placeholder='Total Square Feet'
						onChange={(e) => setSquareFootage(e.target.value)}
					/>
					<label className='col-form-label'>Price</label>
					<input
						className='form-control'
						type='text'
						name='price'
						placeholder='House Price ($USD)'
						onChange={(e) => setPrice(e.target.value)}
					/>

					<label className='col-form-label'>Notes</label>
					<textarea
						className='form-control'
						type='text'
						name='notes'
						placeholder='Important Notes'
						onChange={(e) => setNotes(e.target.value)}
					/>
					<button
						onClick={postData}
						className='btn btn-secondary mt-3'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
