import React from 'react';

const House_Hunt_Endpoint =
	'https://crudcrud.com/api/776d23438df143b9be860123700b634d/houses';

class HouseHuntAPI {
	get = async () => {
		try {
			const response = await fetch(House_Hunt_Endpoint);
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
			const response = await fetch(
				`${House_Hunt_Endpoint}/${house._id}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(house),
				}
			);
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
			const response = await fetch(`${House_Hunt_Endpoint}`, {
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

export const House_Hunt_API = new HouseHuntAPI();
