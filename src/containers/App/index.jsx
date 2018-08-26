import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './index.sass';

export class App extends Component {
	render() {
		return (
			<div className="App">
				<div>
					<img src={logo} className="App-logo" alt="logo" />
					<h2 className="App-title">
						<span> custom-react-scripts </span>
					</h2>

					<div className="App-subtitle">
						allow custom config for create-react-app without ejecting
					</div>
				</div>
			</div>
		);
	}
}

export default App;
