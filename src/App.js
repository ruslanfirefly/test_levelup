import React, { Component } from 'react';
import { Button, Grid, Row } from 'react-bootstrap';
import './App.css';
import { data } from './data/items';
import { Link } from 'react-router-dom';


class App extends Component {
	constructor(props) {
		super();
		console.log(props)
		this.state = {
			data: data,
		};
	}


	render() {
		return (
			<Grid>
				<Row>
					<Button bsStyle="danger"> test</Button>
					<Link to={'/about/23'}>About</Link>
				</Row>
			</Grid>
		);
	}
}

export default App;
