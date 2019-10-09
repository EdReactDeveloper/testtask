import React from 'react';
import ListItem from './listItem'; 

const List = ({list}) => {
  return (
    <div>
     {list && list.map(item=><ListItem key={item.id} item={item} />)}
    </div>
  );
};

export default List;