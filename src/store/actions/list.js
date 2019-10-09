import { FETCH_LIST_SUCCESS, FETCH_LIST_FAIL } from './types';
import axios from 'axios';

export const fetchListAction = () => async (dispatch) => {
	try {
		const result = await axios.get('http://www.mocky.io/v2/5d5c36f03200007800628dbc/');
		let res = JSON.stringify(result.data);
		res = JSON.parse(res);

		dispatch({
			type: FETCH_LIST_SUCCESS,
			payload: result.data
		});
	} catch (error) {
		dispatch({
			type: FETCH_LIST_FAIL
		});
	}
};
