import { FORM_FIELD } from '../actions/types';

const initialState = {
	password: '',
	password2: '',
	email: ''
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FORM_FIELD: {
			return { ...state, [payload.key]: [ payload.value ] };
		}
		default:
			return state;
	}
};

export default reducer;
