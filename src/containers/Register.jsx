import React, { Component } from 'react';
import Register from '../components/Auth/RegisterForm'; 
import {connect} from 'react-redux'; 

class RegisterContainer extends Component {
  render() {
    return <Register />
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(RegisterContainer);