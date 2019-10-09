import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import React from 'react';
import Header from '../containers/Header'; 
import Login from '../containers/Login'; 
import Register from '../containers/Register'; 

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
       
      </Switch>
    </Router>
  );
};

export default Routes;