import React, { Component } from 'react';
import { connect } from 'react-redux';
import VegetableList from '../components/VegetableList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = ( state ) => ({
	searchVegField: state.searchVegField,
	searchSowField: state.searchSowField,
	searchHarvestField: state.searchHarvestField
})

const mapDispatchToProps = ( dispatch ) => ({
	onSearchChange: (event) => dispatch(setSearchField(event.target.id, event.target.value))
})

class App extends Component {
	constructor() {
		super();
		this.state = {
			vegetables: []
		};
	}

	componentDidMount() {
		this.setState({
			vegetables: this.props.vegetables
		});
	}

	render() {
		const { vegetables } = this.state;
		const { searchVegField, searchSowField, searchHarvestField } = this.props;

		const filteredVegetables = vegetables.filter( vegetable => {
			return vegetable.name.toLowerCase().includes(searchVegField) 
			&& vegetable.sow.join('').toLowerCase().includes(searchSowField)
			&& vegetable.harvest.join('').toLowerCase().includes(searchHarvestField);
		})

		return (
			<div className='tc'>
				<h1>Vegetable Planning</h1>
				<SearchBox id='vegetableSearchBox' placeholder={'Search Vegetables...'} searchChange={ this.props.onSearchChange }/>
				<SearchBox id='sowSearchBox' placeholder={'Search Sowing Month...'} searchChange={ this.props.onSearchChange }/>
				<SearchBox id='harvestSearchBox' placeholder={'Search Harvesting Month...'} searchChange={ this.props.onSearchChange }/>
				<Scroll>
					<VegetableList vegetables={ filteredVegetables }/>
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);