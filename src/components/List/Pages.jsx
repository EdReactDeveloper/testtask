import React from 'react';
import style from './List.module.scss';

const Pages = ({ pages, goToPageAction, currentPage }) => {
  const array = []
  for (let i = 1; i <= pages; i++) {
    array.push(i)
  }
  return <div className={style.buttons}>
    {array.map(number => <button
      key={number}
      onClick={() => goToPageAction(number)}
      className={currentPage === number ? style.buttons_selected : style.buttons_btn}
    >
      {number}
    </button>)}
  </div>
};

export default Pages;