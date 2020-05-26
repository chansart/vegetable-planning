import {
	CHANGE_NAME_SEARCH_FIELD,
	CHANGE_SOW_SEARCH_FIELD,
	CHANGE_HARVEST_SEARCH_FIELD
} from './constants';

const initialStateSearch = {
	searchVegField: '',
	searchSowField: '',
	searchHarvestField: ''
}

export const searchVegetables = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case (CHANGE_NAME_SEARCH_FIELD):
			return Object.assign({}, state, { searchVegField: action.payload })
		case (CHANGE_SOW_SEARCH_FIELD):
			return Object.assign({}, state, { searchSowField: action.payload })
		case (CHANGE_HARVEST_SEARCH_FIELD):
			return Object.assign({}, state, { searchHarvestField: action.payload })
		default:
			return state
	}
}