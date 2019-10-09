import React from 'react';
import ListItem from './listItem';

const List = ({ list }) => {
  return (
    <>
      {list ?
        (list.length > 0 ?
          list.map(item => <ListItem key={item.id} item={item} />) :
          <div>no results</div>) :
        <div>LOADING ...</div>
      }
    </>
  );
};

export default List;