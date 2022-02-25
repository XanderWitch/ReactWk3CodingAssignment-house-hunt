import React from 'react';
import axios from 'axios';
import House from './House';

export default class HouseList extends React.Component {
	state = {
		houses: [],
	};

	componentDidMount() {
		axios.get(
			'https://crudcrud.com/api/776d23438df143b9be860123700b634d/houses'
		).then((res) => {
			const houses = res.data;
			this.setState({ houses });
		});
	}

	render() {
		return (
			<div className='container'>
				<ul>
					{this.state.houses.map((house) => (
						<li key={house._id}>{house.location}</li>
					))}
				</ul>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Location</th>
							<th>Square Footage</th>
							<th>Bedrooms</th>
							<th>Bathrooms</th>
							<th>Price</th>
							<th>Notes</th>
							<th>Modify House</th>
						</tr>
					</thead>
					<tbody>
						{this.state.houses.map((house) => (
							<House key={house._id} house={house} />
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
