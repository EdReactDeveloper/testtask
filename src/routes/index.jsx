import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import React from 'react';
import Header from '../containers/Header'; 
import Login from '../containers/Login'; 
import Register from '../containers/Register'; 
import PrivateRoute from './PrivateRoute'; 
import {connect} from 'react-redux'; 

const Routes = ({isAuthorized}) => {
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

const mapStateToProps = state=>({
  isAuthorized: state.auth.isAuthorized
})

export default connect(mapStateToProps)(Routes);