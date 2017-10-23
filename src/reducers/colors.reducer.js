import { Set } from 'immutable';
import {ADD_CITY, ADD_COLOR} from '../constants/actionConstants';

const initValue = new Set();



const colors = (state = initValue, action) => {
	switch (action.type){
		case ADD_CITY:
			return state.add(action.city.body);
		case ADD_COLOR:
			return state.add(action.color);
		default:
			return state
	}
};

export default colors;