import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

export default function ReadHouse() {
	const ENDPOINT =
		'https://crudcrud.com/api/776d23438df143b9be860123700b634d/houses';

	const [APIData, setAPIData] = useState([]);
	useEffect(() => {
		axios.get(ENDPOINT).then((response) => {
			console.log(response.data);
			setAPIData(response.data);
		});
	}, []);

	const updateAPIData = (_id) => {
		axios.put(`${ENDPOINT}/${_id}`, {
			location: editFormData.location,
			squareFootage: editFormData.squareFootage,
			bedrooms: editFormData.bedrooms,
			bathrooms: editFormData.bathrooms,
			price: editFormData.price,
			notes: editFormData.notes,
		})
			.then((res) => {
				getData();

				console.log(res);
				console.log('it works');
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const [data, setData] = useState(APIData);

	const getData = () => {
		axios.get(ENDPOINT).then((getData) => {
			setAPIData(getData.data);
		});
	};

	const handleDeleteClick = (_id) => {
		axios.delete(`${ENDPOINT}/${_id}`)
			.then((res) => {
				getData();

				console.log(res);
				console.log('it works');
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const handleEditClick = (event, data) => {
		event.preventDefault();
		setEditHouseId(data._id);

		const formValues = {
			location: data.location,
			bedrooms: data.bedrooms,
			bathrooms: data.bathrooms,
			squareFootage: data.squareFootage,
			price: data.price,
			notes: data.notes,
		};

		setEditFormData(formValues);
	};

	const [editFormData, setEditFormData] = useState({
		location: '',
		bedrooms: '',
		bathrooms: '',
		squareFootage: '',
		price: '',
		notes: '',
	});

	const handleEditFormSubmit = (event) => {
		event.preventDefault();
		const editedHouse = {
			_id: editHouseId,
			location: editFormData.location,
			bedrooms: editFormData.bedrooms,
			bathrooms: editFormData.bathrooms,
			squareFootage: editFormData.squareFootage,
			price: editFormData.price,
			notes: editFormData.notes,
		};

		updateAPIData(editHouseId);

		const newHouse = [...data];
		const index = data.findIndex((data) => data._id === editHouseId);

		newHouse[index] = editedHouse;

		setData(newHouse);
		setEditHouseId(null);
	};

	const handleEditFormChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute('name');
		const fieldValue = event.target.value;

		const newFormData = { ...editFormData };
		newFormData[fieldName] = fieldValue;

		setEditFormData(newFormData);
	};

	const [editHouseId, setEditHouseId] = useState(null);

	const handleCancelClick = () => setEditHouseId(null);

	return (
		<div className='table-responsive'>
			<div className='table-div'>
				<form onSubmit={handleEditFormSubmit}>
					<table className='table'>
						<thead>
							<tr>
								<th className='text-center'>
									Location
								</th>
								<th className='text-center'>
									Bedrooms
								</th>
								<th className='text-center'>
									Bathrooms
								</th>
								<th className='text-center'>
									Square Footage
								</th>
								<th className='text-center'>Price</th>
								<th className='text-center'>Notes</th>
								<th className='text-center'>Modify</th>
							</tr>
						</thead>
						<tbody>
							{APIData.map((data, index) => (
								<>
									{editHouseId === data._id ? (
										<EditableRow
											editFormData={
												editFormData
											}
											handleEditFormChange={
												handleEditFormChange
											}
											handleCancelClick={
												handleCancelClick
											}
										/>
									) : (
										<ReadOnlyRow
											data={data}
											handleEditClick={
												handleEditClick
											}
											handleDeleteClick={
												handleDeleteClick
											}
										/>
									)}
								</>
							))}
						</tbody>
					</table>
				</form>
			</div>
		</div>
	);
}
