import React from 'react';
import { HouseHuntApi } from '../Api/HouseHuntAPI';
import axios from 'axios';

export class HouseTable extends React.Component {
	state = {
		houses: [],
	};

	componentDidMount() {
		this.fetchHouses();
	}

	fetchHouses = async () => {
		const houses = await HouseHuntApi.get();
		this.setState({ houses });
		console.log(houses);
	};

	updateHouse = async (updatedHouse) => {
		await HouseHuntApi.put(updatedHouse);
		this.fetchHouses();
	};

	render() {
		return (
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
					</tr>
				</thead>
				<tbody>
					{houses.map((house) => (
						<tr key={house._id}>
							<td>{house._id}</td>
							<td>{house.location}</td>
							<td>{house.squareFootage}</td>
							<td>{house.bedrooms}</td>
							<td>{house.bathrooms}</td>
							<td>{house.price}</td>
							<td>{house.notes}</td>
							<td>
								<button
									onClick={() => {
										editHouse(house);
									}}>
									Edit
								</button>
								<button
									onClick={() =>
										deleteHouse(house._id)
									}>
									Delete House
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}
