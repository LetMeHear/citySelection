import React, { Component } from 'react';

import './CseCity.less';

export class CseCity extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(ind) {
		alert(ind);
	}

	renderList() {
		return (<div
			className={ "list-choose-city" }
			onClick={ () => this.handleClick('chooseCity') }>
			{"选择城市"}</div>)
	}

	render() {
		return (this.renderList());
	}
}

export default CseCity;