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

const Routes = ({ isAuthorized }) => {
  return (
    <Router>
      <Header />
      <Layout>
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
  isAuthorized: state.auth.isAuthorized
})

export default connect(mapStateToProps)(Routes);