import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../containers/Header';
import Login from '../containers/Login';
import Register from '../containers/Register';
import PrivateRoute from './PrivateRoute';
import List from '../containers/List';
import Layout from '../components/Layout';
import Footer from '../components/Footer'; 
import Alert from '../components/Alert'; 

const Routes = ({ isAuthorized, alerts }) => {
  return (
    <Router>
      <Header />
      <Layout>
        <Alert alerts={alerts}/>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute exact path='/' isAuthorized={isAuthorized} component={List} />
        </Switch>
      </Layout>
      <Footer />
    </Router>
  );
};

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
  alerts: state.alert
})

export default connect(mapStateToProps)(Routes);