import React, { Component } from 'react';
import VegetableList from '../components/VegetableList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			vegetables: [],
			searchVegField: '',
			searchSowField: '',
			searchHarvestField: ''
		};
	}

	componentDidMount() {
		this.setState({
			vegetables: this.props.vegetables
		});
	}

	onSearchChange = ( event ) => {
		const id = event.target.id;

		if ( id === 'vegetableSB' ) {
			this.setState({
				searchVegField: event.target.value
			})
		} else if ( id === 'sowSB' ) {
			this.setState({
				searchSowField: event.target.value
			})
		} else {
			this.setState({
				searchHarvestField: event.target.value
			})
		}
	}

	render() {
		const { vegetables, searchVegField, searchSowField, searchHarvestField } = this.state;
		const filteredVegetables = vegetables.filter( vegetable => {
			return vegetable.name.toLowerCase().includes(searchVegField) 
			&& vegetable.sow.join('').toLowerCase().includes(searchSowField)
			&& vegetable.harvest.join('').toLowerCase().includes(searchHarvestField);
		})

		return (
			<div className='tc'>
				<h1>Vegetable Planning</h1>
				<SearchBox id='vegetableSB' placeholder={'Search Vegetables...'} searchChange={ this.onSearchChange }/>
				<SearchBox id='sowSB' placeholder={'Search Sowing Month...'} searchChange={ this.onSearchChange }/>
				<SearchBox id='harvestSB' placeholder={'Search Harvesting Month...'} searchChange={ this.onSearchChange }/>
				<Scroll>
					<VegetableList vegetables={ filteredVegetables }/>
				</Scroll>
			</div>
		);
	}
}

export default App;