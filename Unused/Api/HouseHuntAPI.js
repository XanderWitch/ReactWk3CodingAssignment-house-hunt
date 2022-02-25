import React from 'react';

const ENDPOINT =
	'https://crudcrud.com/api/776d23438df143b9be860123700b634d/houses';

class HouseHuntAPI {
	get = async () => {
		try {
			const response = await fetch(ENDPOINT);
			const data = await response.json();
			return data;
		} catch (exception) {
			console.log(
				'Oops. There was a problem with your fetch: ',
				exception
			);
		}
	};

	put = async (house) => {
		try {
			const response = await fetch(`${ENDPOINT}/${house._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(house),
			});
			return await response.json();
		} catch (exception) {
			console.log(
				'Oops. There was a problem with your update: ',
				exception
			);
		}
	};

	post = async (house) => {
		try {
			const response = await fetch(`${ENDPOINT}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(house),
			});
			return await response.json();
		} catch (exception) {
			console.log(
				'Oops. There was a problem with your post: ',
				exception
			);
		}
	};
}

export const HouseHuntApi = new HouseHuntAPI();
