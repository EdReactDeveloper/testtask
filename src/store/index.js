import {createStore, applyMiddleware, combineReducers} from 'redux'; 
import thunk from 'redux-thunk'; 
import {composeWithDevTools} from 'redux-devtools-extension';
import auth from './reducers/auth'; 
import form from './reducers/form'; 
import list from './reducers/list'; 

const reducers = combineReducers({
  auth, form, list
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;