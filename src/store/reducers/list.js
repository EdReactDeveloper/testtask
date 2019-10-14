import { FETCH_LIST_SUCCESS, FETCH_LIST_FAIL, GO_TO_PAGE, FETCH_SEARCH, SUBMIT_SEARCH, SORTBY } from '../actions/types';
import { changePage } from '../../components/misc/changePage';

const initialState = {
	list: null,
	isLoading: true,
	data: [],
	pages: null,
	currentPage: 1,
	pageSize: 5,
	search: ''
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

		case FETCH_SEARCH: {
			return { ...state, search: payload.trim() };
		}

		case SUBMIT_SEARCH: {
			const arr = [ ...state.data ];
			const data = arr.filter(
				(item) =>
					item.title.toLowerCase().indexOf(state.search.toLowerCase()) !== -1 ||
					item.text.toLowerCase().search(state.search.toLowerCase()) !== -1
			);
			const pages = Math.ceil(data.length / state.pageSize);
			const list = changePage(1, state.pageSize, data);
			return { ...state, list, pages, currentPage: 1 };
		}

		case SORTBY: {
			const data = [...state.data]
			data.sort((a,b) => (a[payload] > b[payload]) ? 1: -1 )
			const list = changePage(state.currentPage, state.pageSize, data);
			
			return {
				...state, data, list
			}
		}

		default:
			return state;
	}
};

export default reducer;
