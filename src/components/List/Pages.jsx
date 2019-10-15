import React from 'react';
import style from './List.module.scss';
import { Pagination } from 'react-bootstrap';

const Pages = ({ pages, goToPageAction, currentPage }) => {
  const array = []
  for (let i = 1; i <= pages; i++) {
    array.push(i)
  }
  return <div className={style.pagination_wrapper}>
    <Pagination>
      {array.map(number => <Pagination.Item
        key={number}
        onClick={() => goToPageAction(number)}
        active={currentPage === number}
      >
        {number}
      </Pagination.Item>)}
    </Pagination>
  </div>
};

export default Pages;