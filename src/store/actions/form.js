import { FORM_FIELD, TOUCHED } from './types';

export const formFieldAction = (key, value) => (dispatch) => {
	dispatch({
		type: FORM_FIELD,
		payload: { key, value }
	});
};

export const touchAction = (key) => dispatch=>{
	dispatch({
		type: TOUCHED,
		payload: key
	})
}
