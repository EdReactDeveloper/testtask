import React from 'react';
import Sorting from './Sorting';
import {FormControl, Button} from 'react-bootstrap';
import style from './Search.module.scss'; 

const Seacrch = ({search, submitSearch, fetchSearchAction, sortAction}) => {
  return (
    <form onSubmit={submitSearch} className={style.search} >
      <div className={style.search_wrapper}>
      <FormControl 
      type="text" 
      name="search" 
      value={search} 
      onChange={(e)=> fetchSearchAction(e.target.value)} 
      className={style.search_bar} 
      />
      <Button className={style.search_btn} type="submit">search</Button>
      </div>
      <Sorting sortAction={sortAction}/>
    </form>
  );
};

export default Seacrch;