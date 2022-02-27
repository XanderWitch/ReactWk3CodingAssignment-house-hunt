import React, { Component } from 'react';
import ReadHouse from '../src/Components/ReadHouse';
import AddHouse from '../src/Components//AddHouse';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	render() {
		return (
			<div>
				<div className='top-bar'>
					<h1 className='title'>HOUSE HUNT</h1>
					<h2 className='title'>
						Compare Houses You've Visited to
						<br />
						Pick Your Next Home
					</h2>
				</div>
				<div>
					<ReadHouse />
				</div>
				<div>
					<AddHouse />
				</div>
			</div>
		);
	}
}

export default App;
