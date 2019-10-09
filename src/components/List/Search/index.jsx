import React from 'react';

const Seacrch = ({search, submitSearch, fetchSearchAction}) => {
  return (
    <form onSubmit={submitSearch}>
      <input type="text" name="search" value={search} onChange={(e)=> fetchSearchAction(e.target.value)} />
      <button type="submit">search</button>
    </form>
  );
};

export default Seacrch;