import React, { Component } from 'react';
import List from '../components/List';
import { connect } from 'react-redux';
import { fetchListAction, goToPageAction } from '../store/actions/list';
import Pages from '../components/List/Pages'; 

class ListContainer extends Component {
  componentDidMount() {
    const { fetchListAction } = this.props
    fetchListAction()
  }

  render() {
    const { list, isLoading, pages, goToPageAction, currentPage } = this.props
     
    return (
    <>
    <List list={list} isLoading={isLoading} />
    {pages && <Pages pages={pages} currentPage={currentPage} goToPageAction={goToPageAction}/>}
    </>
    )
  }
}

const mapStateToProps = state => ({
  list: state.list.list,
  isLoading: state.list.isLoading,
  pages: state.list.pages,
  currentPage: state.list.currentPage
})

export default connect(mapStateToProps, { fetchListAction, goToPageAction })(ListContainer);