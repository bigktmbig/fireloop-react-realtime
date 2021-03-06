require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import SDK, { Component } from '../shared/sdk/';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends Component {

	constructor() {
		super({services: ['BigUserApi']});
	}

	componentDidMount() {
		console.log(123);
		this.BigUserApi.find().subscribe(data => {
			console.log(data);
		})
	}

	render() {
		return (
			<div className="index">
			<img src={yeomanImage} alt="Yeoman Generator" />
			<div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
			</div>
			);
		}
	}

	AppComponent.defaultProps = {
	};

	export default AppComponent;
