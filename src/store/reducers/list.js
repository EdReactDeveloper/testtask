import { FETCH_LIST_SUCCESS, FETCH_LIST_FAIL, GO_TO_PAGE } from '../actions/types';
import { changePage } from '../../components/misc/changePage';

const initialState = {
	list: [],
	isLoading: true,
	data: [],
	pages: null,
	currentPage: 2,
	pageSize: 5
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {

		case FETCH_LIST_SUCCESS: {
			const data = [ ...payload ];
			const pages = Math.ceil(data.length / state.pageSize);
			const list = changePage(state.currentPage, state.pageSize, data);
			return { ...state, data: payload, isLoading: false, pages, list };
		}

		case FETCH_LIST_FAIL: {
			return { ...state, data: [], isLoading: false };
		}

		case GO_TO_PAGE: {
			const list = changePage(payload, state.pageSize, state.data);
			return { ...state, currentPage: payload, list };
		}
		
		default:
			return state;
	}
};

export default reducer;
