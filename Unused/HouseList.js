import React from 'react';
import { House } from '../src/Components/House';
import { House_Hunt_API } from '../src/Api/HouseHuntAPI';
import { NewHouseForm } from '../src/Components/NewHouseForm';

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
				<NewHouseForm />
				{this.state.houses.map((house) => (
					<House
						house={house}
						key={house._id}
						updateHouse={this.updateHouse}
					/>
				))}
			</div>
		);
	}
}
