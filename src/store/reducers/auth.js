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
	
		default:
			return state;
	}
};

export default reducer;