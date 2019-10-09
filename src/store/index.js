import {createStore, applyMiddleware, combineReducers} from 'redux'; 
import thunk from 'redux-thunk'; 
import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = combineReducers({
  
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;