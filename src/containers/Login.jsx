import React, { Component } from 'react';
import Login from '../components/Auth/LoginForm'; 
import {connect} from 'react-redux'; 

class LoginContainer extends Component {
  render() {
    return <Login />
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(LoginContainer);