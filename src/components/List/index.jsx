import React from 'react';
import ListItem from './listItem';

const List = ({ list }) => {
  return (
    <>
      {list ? list.map(item => <ListItem key={item.id} item={item} />) : <div>LOADING...</div>}
    </>
  );
};

export default List;