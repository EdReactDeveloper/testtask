import React, { Component } from 'react';
import List from '../components/List';
import { connect } from 'react-redux';
import {
  fetchListAction,
  goToPageAction,
  fetchSearchAction,
  submitSearchAction,
  sortAction,
  changePageSizeAction,
  clearFieldAction
} from '../store/actions/list';
import Pages from '../components/List/Pages';
import Search from '../components/List/Search';
import  PageSize from '../components/List/ PageSize'

class ListContainer extends Component {
  componentDidMount() {
    const { fetchListAction } = this.props
    fetchListAction()
  }

  submitSearch = e => {
    e.preventDefault()
    const { submitSearchAction } = this.props
    submitSearchAction()
  }

  render() {
    const {
      list,
      isLoading,
      search,
      pages,
      goToPageAction,
      currentPage,
      fetchSearchAction,
      sortAction,
      pageSize,
      changePageSizeAction,
      clearFieldAction
    } = this.props

    return (
      <>
        <Search
          search={search}
          fetchSearchAction={fetchSearchAction}
          submitSearch={this.submitSearch}
          sortAction={sortAction}
          clearFieldAction={clearFieldAction}
        />
        <List
          list={list}
          isLoading={isLoading}
        />
        {
          pages > 0 &&
          <>
          <Pages
            pages={pages}
            currentPage={currentPage}
            goToPageAction={goToPageAction}
          /> 
          <PageSize pageSize={pageSize} changePageSizeAction={changePageSizeAction}/>
          </>
        }
      
      </>
    )
  }
}

const mapStateToProps = state => ({
  list: state.list.list,
  isLoading: state.list.isLoading,
  pages: state.list.pages,
  currentPage: state.list.currentPage,
  search: state.list.search,
  pageSize: state.list.pageSize
})

export default connect(mapStateToProps, { 
  fetchListAction, goToPageAction, 
  fetchSearchAction, submitSearchAction, 
  sortAction, changePageSizeAction, clearFieldAction
})(ListContainer);