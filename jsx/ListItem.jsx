import React, { Component } from 'react';

import './ListItem.less';

export class ListItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(item) {
		alert(item.name);
	}
	renderList(props) {
		const data = this.props.data;
		return(
				data.map((item,index) => <div 
					className="list-item-each"
					onClick = { () => this.handleClick(item) }
					key={ index }>
					{ item.name }
					</div>)
			);
	}
	render() {
		return (this.renderList());
	}
}

export default ListItem;