import { FETCH_LIST_SUCCESS, FETCH_LIST_FAIL, GO_TO_PAGE } from './types';
import axios from 'axios';

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
	}
};

export const goToPageAction = (number)=> dispatch=>{
	dispatch({
		type: GO_TO_PAGE,
		payload: number
	})
}