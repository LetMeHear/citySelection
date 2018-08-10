import React, { Component } from 'react';

import './ListItem.less';

export class ListItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(props) {
		alert(this.props.item);
	}
	renderList(props) {
		return(
				<div 
				className="list-item-each"
				onClick = {this.handleClick}>{this.props.city}</div>
			);
	}
	render() {
		return (this.renderList());
	}
}

export default ListItem;