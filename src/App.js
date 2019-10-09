import React from 'react';
import './App.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { getUserAction } from './store/actions/auth';

function App() {
  const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
	store.dispatch(getUserAction(loggedIn));
	return (
		<div className='App'>
			<Provider store={store}>
				<Routes />
			</Provider>
		</div>
	);
}

export default App;
