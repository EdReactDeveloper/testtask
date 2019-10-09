import React, { Component } from 'react';
import Header from '../components/Header'; 
import {connect} from 'react-redux'; 

class HeaderContainer extends Component {
  render() {
    return <Header />
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(HeaderContainer);