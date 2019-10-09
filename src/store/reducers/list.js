import { FETCH_LIST_SUCCESS, FETCH_LIST_FAIL } from '../actions/types';

const initialState = {
	list: []
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_LIST_SUCCESS: {
			return { ...state, list: payload };
		}
		case FETCH_LIST_FAIL: {
			return { ...state, list: [] };
		}
		default:
			return state;
	}
};

export default reducer;
