import React, { Component } from 'react';
import List from '../components/List'; 
import {connect} from 'react-redux'; 
import {fetchListAction} from '../store/actions/list';

class ListContainer extends Component {
  componentDidMount(){
    const {fetchListAction} = this.props
    fetchListAction()
  }
  render() {
    const {list} = this.props
    return <List list={list}/>
  }
}

const mapStateToProps = state => ({
  list: state.list.list
})

export default connect(mapStateToProps, {fetchListAction})(ListContainer);