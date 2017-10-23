import { ADD_CITY, REMOVE_LAST_CITY } from '../constants/actionConstants';


export const addCity = (city) => {
	return {
		type: ADD_CITY,
		city,
	};
};

export const removeLastCity = (dispatch) => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(data => {
			console.log(REMOVE_LAST_CITY);
			return data.json();
		})
		.then(data => {
			data.map(el => dispatch({
					type: ADD_CITY,
					city: el,
				}));
		});
};