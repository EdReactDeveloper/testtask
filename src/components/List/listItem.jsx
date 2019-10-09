import React from 'react';
import style from './List.module.scss';

const ListItem = ({ item }) => {
  return (
    <div className={style.list_item}>
      <h4>{item.title}</h4>
      <p>{item.text}</p>
    </div>
  );
};

export default ListItem;