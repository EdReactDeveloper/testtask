import React from 'react';
import Sorting from './Sorting';

const Seacrch = ({search, submitSearch, fetchSearchAction, sortAction}) => {
  return (
    <form onSubmit={submitSearch}>
      <input type="text" name="search" value={search} onChange={(e)=> fetchSearchAction(e.target.value)} />
      <button type="submit">search</button>
      <Sorting sortAction={sortAction}/>
    </form>
  );
};

export default Seacrch;