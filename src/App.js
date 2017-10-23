import React, { Component } from 'react';
import { Col, Grid, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';
import { data } from './data/items';
import { connect } from 'react-redux';
import { addCity, removeLastCity } from './actions/cites.action';

class App extends Component {
	constructor(props) {
		super();
		console.log(props);
		this.state = {
			data: data,
			city: '',
		};
	}

	writeCity = (e) => {
		this.setState({ city: e.target.value });
	};
	saveCity = () => {
		this.props.addCity(this.state.city);
		this.setState({ city: '' });
	};

	render() {
		const { cit: cites, removeCity: RC, col: colors} = this.props;
		return (
			<Grid>
				<Row>
					<Col md={6}>
						<h1>Hello - Main Page</h1>
						<Link to={'/about/23'}>About</Link>
						<br/>
						<input type="text" onChange={this.writeCity} value={this.state.city} className="input-md"/>
						<Button onClick={this.saveCity} bsStyle="btn ">Add</Button>
						<Button onClick={RC} bsStyle="danger">Remove</Button>
						<br/>
						<ul>
							{cites.size === 0 ?  undefined: cites.toJSON().map(el=> <li key={el}>{el}</li>)}
						</ul>
					</Col>
					<Col md={6}>
						<h1>Hello - Main Page2</h1>
						<Link to={'/about/23'}>About</Link>
						<br/>
						<input type="text" onChange={this.writeCity} value={this.state.city} className="input-md"/>
						<Button onClick={this.saveCity} bsStyle="btn ">Add</Button>
						<Button onClick={RC} bsStyle="danger">Remove</Button>
						<br/>
						<ul>
							{colors.size === 0 ?  undefined: colors.toJSON().map(el=> <li key={el}>{el}</li>)}
						</ul>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default connect((state) => {
		return {
			cit: state.cites,
			col: state.colors
		};
	},
	(dispatch) => {
		return {
			addCity: (city) => {
				dispatch(addCity(city));
			},
			removeCity: ()=>{
				removeLastCity(dispatch)
			}
		};
	})(App);
