import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ListItem from '../jsx/ListItem.jsx';
import CseCity from '../jsx/CseCity.jsx';

import '../css/style.less';
import data from '../data.json';

console.log('succeed');
console.log(data instanceof Array);

ReactDOM.render(
    <div>
	<CseCity />
    <ListItem data = { data } />
    </div>,
    document.getElementById('root')
);

