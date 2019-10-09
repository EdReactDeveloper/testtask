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

const initialState = {
	isAuthorized: false,
	isLoading: true,
	isRegistered: false,
	token: null,
	loginData: null
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case LOGIN_SUCCESS: {
			return { ...state, isAuthorized: true, loginData: payload, isLoading: false };
		}
		case REGISTER_SUCCESS: {
			return {
				...state,
				isRegistered: true,
				isLoading: false,
				token: payload
			};
		}

		case GET_USER_SUCCESS: {
			return {
				...state,
				isAuthorized: payload.loggedIn,
				token: payload.token,
				isLoading: false
			};
		}

		case LOGOUT_SUCCESS: {
			return {
				...state,
				isAuthorized: false
			};
		}
		case LOGIN_FAIL:
		case LOGOUT_FAIL:
		case GET_USER_FAIL:
		case REGISTER_FAIL: {
			return { ...state, isAuthorized: false, isLoading: false };
		}
		default:
			return state;
	}
};

export default reducer;
