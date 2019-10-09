import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	GET_USER_SUCCESS,
	GET_USER_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL
} from '../actions/types';

export const getUserAction = (loggedIn) => dispatch=>{
	const token = JSON.parse(localStorage.getItem('token'))
	try {
		dispatch({
			type: GET_USER_SUCCESS,
			payload: {loggedIn, token}
		});
	} catch (error) {
		dispatch({
			type: GET_USER_FAIL
		});
	}
}

export const loginAction = (data, history) => dispatch=>{
  const token = JSON.parse(localStorage.getItem('token'));

	try {
		if (data == token) {
			localStorage.setItem('loggedIn', true);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: data
			});
			history.push('/')
		}
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL
		});
	}
}

export const registerAction = (data, history) => dispatch=>{
  localStorage.setItem('token', data);
	try {
		dispatch({
			type: REGISTER_SUCCESS,
			payload: data
		});
		history.push('/login')
	} catch (error) {
		dispatch({
			type: REGISTER_FAIL
		});
	}
}

export const logoutAction = () => dispatch=>{
	try {
		localStorage.setItem('loggedIn', false)
		dispatch({
			type: LOGOUT_SUCCESS
		});
	} catch (error) {
		dispatch({
			type: LOGOUT_FAIL
		});
	}
}
