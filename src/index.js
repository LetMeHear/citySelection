import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory, createHashHistory, createMemoryHistory } from 'history';

import ListItem from '../jsx/ListItem.jsx';
import CseCity from '../jsx/CseCity.jsx';
import CityItem from '../jsx/CityItem.jsx';

import '../css/style.less';
import data from '../data.json';

console.log('succeed');

var history = new createBrowserHistory();
console.log(history);

const CseC = () => (
    <div>
		<CseCity />
	</div>
);

const CityList = () => (
    <div>
		<ListItem data={ data } history={ history } />
	</div>
);

const CityItems = () => (
    <div>
		<CityItem history={ history } />
	</div>
);

const App = () => (
    <BrowserRouter>
    	<Switch>
			<Route path="/" exact component = { CseC } />
			<Route path="/cho" component={ CityList } />
			<Route path="/cti" component={ CityItems } />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

