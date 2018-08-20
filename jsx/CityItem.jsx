import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CityItem.less';

export class CityItem extends Component {
	constructor(props) {
		super(props);
	}

	renderList(props) {
		console.log(this.props.history);
		const newArr = this.props.history.location.query.day;
		console.log(newArr instanceof Array);
		return(
			newArr.map((item, index) =><div 
				className={'list-item-each'}
				key={ index }
				>
				{ item.name }
				</div>)
			);
	}

	render() {
		return(this.renderList());
	}
}

export default CityItem;