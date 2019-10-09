import React from 'react';

const Field = ({ name, value, onChangeHandler }) => {
  switch (name) {
    case 'password': return <input type="password" value={value} name='password' onChange={(e) => onChangeHandler(e)} />
    case 'password2': return <input type="password" value={value} name='password2' onChange={(e) => onChangeHandler(e)} />
    case 'email': return <input type="email" value={value} name='email' onChange={(e) => onChangeHandler(e)} />
    case 'name': return <input type="text" value={value} name='name' onChange={(e) => onChangeHandler(e)} />
    default: return <input type="text" value={value} name='name' onChange={(e) => onChangeHandler(e)} />
  }
};

export default Field;