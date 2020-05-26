import {
	CHANGE_NAME_SEARCH_FIELD,
	CHANGE_SOW_SEARCH_FIELD,
	CHANGE_HARVEST_SEARCH_FIELD
} from './constants';

export const setSearchField = (id, text) => {
	switch (id) {
		case 'vegetableSearchBox':
			return {
				type: CHANGE_NAME_SEARCH_FIELD,
				payload: text
			}
		case 'sowSearchBox':
			return {
				type: CHANGE_SOW_SEARCH_FIELD,
				payload: text
			}
		case 'harvestSearchBox':
			return {
				type: CHANGE_HARVEST_SEARCH_FIELD,
				payload: text
			}
		default:
			return {
				type: CHANGE_NAME_SEARCH_FIELD,
				payload: ''
			}
	}
}