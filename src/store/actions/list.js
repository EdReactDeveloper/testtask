import {
	FETCH_LIST_SUCCESS,
	FETCH_LIST_FAIL,
	GO_TO_PAGE,
	FETCH_SEARCH,
	SUBMIT_SEARCH,
	SORTBY,
	CHANGE_PAGE_SIZE,
	CLEAR_FIELD
} from './types';
import axios from 'axios';
import {setAlertAction} from './alert'; 

export const fetchListAction = () => async (dispatch) => {
	try {
		const result = await axios.get('http://www.mocky.io/v2/5d9dc38e3200004e00329939');
		if (result.data.status === 'ok') {
			dispatch({
				type: FETCH_LIST_SUCCESS,
				payload: result.data.data
			});
		}
	} catch (error) {
		dispatch({
			type: FETCH_LIST_FAIL
		});
		dispatch(setAlertAction(error, 'danger'))

	}
};

export const goToPageAction = (number) => dispatch => {

	dispatch({
		type: GO_TO_PAGE,
		payload: number
	})
}

export const fetchSearchAction = data => dispatch => {
	dispatch({
		type: FETCH_SEARCH,
		payload: data
	})
}

export const submitSearchAction = () => dispatch => {
	dispatch({
		type: SUBMIT_SEARCH
	})
}

export const sortAction = (sortby) => dispatch => {

	try {
		dispatch({
			type: SORTBY,
			payload: sortby
		})
		dispatch(goToPageAction(1))
		dispatch(clearFieldAction())
	} catch (error) {
		dispatch(setAlertAction(error, 'danger'))
	}
}

export const changePageSizeAction = (size) => dispatch => {
	dispatch({
		type: CHANGE_PAGE_SIZE,
		payload: Number(size)
	})
	dispatch(goToPageAction(1))
	dispatch(clearFieldAction())

}

export const clearFieldAction = () => dispatch => {

	dispatch({
		type: CLEAR_FIELD
	})
	dispatch(submitSearchAction())
}