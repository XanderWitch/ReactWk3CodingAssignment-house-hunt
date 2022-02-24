import React from 'react';
import { House } from './House';
import { House_Hunt_API } from '../Api/HouseHuntAPI';

export class HouseList extends React.Component {
	state = {
		houses: [],
	};

	componentDidMount() {
		this.fetchHouses();
	}

	fetchHouses = async () => {
		const houses = await House_Hunt_API.get();
		this.setState({ houses });
	};

	updateHouse = async (updatedHouse) => {
		await House_Hunt_API.put(updatedHouse);
		this.fetchHouses();
	};

	addNewHouse = async (house) => {
		await House_Hunt_API.post(house);
		this.fetchHouses();
	};

	render() {
		return (
			<div className='house-list'>
				{this.state.houses.map((house) => (
					<House
						house={house}
						key={house._id}
						updateHouse={this.updateHouse}
					/>
				))}
				{/* <NewHouseForm /> */}
			</div>
		);
	}
}
