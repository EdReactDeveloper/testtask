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
import { hashIt } from '../../components/misc/hash'
import { setAlertAction } from './alert';

export const getUserAction = (loggedIn) => (dispatch) => {
	const token = JSON.parse(localStorage.getItem('token'));
	try {
		dispatch({
			type: GET_USER_SUCCESS,
			payload: { loggedIn, token }
		});
	} catch (error) {
		dispatch({
			type: GET_USER_FAIL
		});
	}
};

export const loginAction = (payload, history) => (dispatch) => {
	const { email, password } = payload
	try {
		const db = JSON.parse(localStorage.getItem('db'));
		const allowed = db.findIndex(item => item.email === email && item.password === hashIt(password)) !== -1
		if (allowed) {
			localStorage.setItem('loggedIn', true);
			const token = JSON.stringify(db)
			localStorage.setItem('token', token);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: db
			});
			history.push('/');
		} else {
			dispatch(setAlertAction('wrong credentials', 'danger'))
		}
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL
		});
	}
};

export const registerAction = (payload, history) => (dispatch) => {
	const { email, password, password2 } = payload
	if (password === password2) {

		let db = JSON.parse(localStorage.getItem('db'))
		if (!db) {
			db = []
		}
		const exists = db.some(item => item.email === email)

		if (exists) {
			dispatch(setAlertAction('use with this email already exists', 'danger'))
		} else {
			db.push({ email, password: hashIt(password) })
			localStorage.setItem('db', JSON.stringify(db))

			try {
				dispatch({
					type: REGISTER_SUCCESS,
					payload: db
				});
				history.push('/login');
				dispatch(setAlertAction('you have been registered, now log in', 'success'))
			} catch (error) {
				dispatch({
					type: REGISTER_FAIL
				});
				dispatch(setAlertAction(error, 'danger'))
			}
			
		}
	} else {
		alert('passwords should match')
	}
};

export const logoutAction = () => (dispatch) => {
	try {
		localStorage.setItem('loggedIn', false);
		dispatch({
			type: LOGOUT_SUCCESS
		});
	} catch (error) {
		dispatch({
			type: LOGOUT_FAIL
		});
		dispatch(setAlertAction(error, 'danger'))

	}
};
