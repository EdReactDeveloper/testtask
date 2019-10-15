import React from 'react';
import Sorting from './Sorting';
import { FormControl, Button } from 'react-bootstrap';
import style from './Search.module.scss';

const Search = ({ search, submitSearch, fetchSearchAction, sortAction, clearFieldAction }) => {
  return (
    <div className={style.search} >
      <div className={style.search_wrapper}>
        <FormControl
          type="text"
          name="search"
          value={search}
          onChange={(e) => fetchSearchAction(e.target.value)}
          onKeyUp={submitSearch}
          className={style.search_bar}
        />{search.length > 0 && <Button 
        type="button" 
        className={style.search_btn}
        variant="light"
        onClick={()=>clearFieldAction()}>clear</Button> }
      </div>

      <Sorting sortAction={sortAction} />
    </div>
  );
};

export default Search;