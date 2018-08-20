import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CseCity.less';

export class CseCity extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(ind) {
		console.log(ind);
	}

	renderList(props) {
		//console.log(this.props.match);
		return (
			<Link  className = { "for-text-d" } to="/cho">
			<div
			className={ "list-choose-city" }
			onClick={ () => this.handleClick('选择城市') }>
			{"选择城市"}</div>
			</Link>
			)
	}

	render() {
		return (this.renderList());
	}
}

export default CseCity;