import React, { Component } from 'react';
import Header from '../components/Header'; 
import {connect} from 'react-redux'; 
import { logoutAction } from '../store/actions/auth';

class HeaderContainer extends Component {

  logoutHandler = () => {
    const { logoutAction } = this.props
    logoutAction()
  }

  render() {
    const { auth } = this.props

    return <Header 
    auth={auth}
    logoutHandler={this.logoutHandler}
    />
  }
}

const mapStateToProps = state => ({
  auth: state.auth

})

export default connect(mapStateToProps, {logoutAction})(HeaderContainer);