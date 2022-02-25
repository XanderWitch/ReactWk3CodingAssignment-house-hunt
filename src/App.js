import React, { Component } from 'react';
import HouseList from './Components/HouseList';

class App extends Component {
	render() {
		return (
			<div className='container'>
				<div>
					<h1 className='text-center'>House Hunt</h1>
					<h2>
						Compare Houses You've Visited to Pick Your Next
						Home
					</h2>
				</div>
				<div>
					<HouseList />
				</div>
			</div>
		);
	}
}

export default App;
