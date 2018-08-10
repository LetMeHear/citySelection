import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ListItem from '../jsx/ListItem.jsx';

import '../css/style.less';

console.log('succeed');

class HelloW extends Component {
    renderList() {
        return (
            <h1 className="aaa">Hello World !</h1>
        );
    }
    render() {
        return (
        this.renderList()
        );
    }
}

ReactDOM.render(
    <ListItem item = "aaa from index" city="选择城市" />,
    document.getElementById('root')
);

export default HelloW;