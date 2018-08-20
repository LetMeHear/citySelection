import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ListItem.less';

export class ListItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(item) {
		this.props.history.push({
			pathname: '/cti',
			query: {
				day: item.city
			}
		})
		console.log(item);
	}
	renderList() {
		const data = this.props.data;
		return(
				data.map((item,index) => <Link 
					className = { "for-text-d" }
					key={ index }
					to={ location }
					>
					<div 
					className={'list-item-each'}
					onClick = { () => this.handleClick(item) }
					>
					{ item.name }
					</div></Link>)
			);
	}
	render() {
		return (this.renderList());
	}
}

export default ListItem;