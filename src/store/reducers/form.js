import { FORM_FIELD } from '../actions/types';

const initialState = {
	password: '',
	password2: '',
	email: ''
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
	
		default:
			return state;
	}
};

export default reducer;
