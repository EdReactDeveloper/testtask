import { FORM_FIELD, TOUCHED, LOGIN_SUCCESS, REGISTER_SUCCESS } from '../actions/types';
import { validate } from '../../components/misc/validation';

const initialState = {
	email: {
		type: 'email',
		touched: false,
		value: '',
		error: '',
		isValid: false
	},
	password: {
		type: 'password',
		value: '',
		touched: false,
		error: '',
		isValid: false
	},
	password2: {
		type: 'password2',
		value: '',
		error: '',
	}
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {

		case FORM_FIELD: {
			const element = {...state[payload.key]} 
			element.touched = false
			element.value = payload.value
			element.isValid = validate(element)[0]
			element.error = validate(element)[1]
			return { ...state, [payload.key]: element };
		}

		case TOUCHED: {
			const element = {...state[payload]}
			element.isValid = validate(element)[0]
			element.error = validate(element)[1]
			element.touched = true
			return {...state, [payload]: element}
		}

		case LOGIN_SUCCESS: 
		case REGISTER_SUCCESS: 
		{
			const fields = {...state}
			for(let key in fields){
				fields[key].value = ''
			}
			return {
				...state, 
				email: fields.email, 
				password: fields.password, 
				password2: fields.password2
			}
		}
		
		default:
			return state;
	}
};

export default reducer;
