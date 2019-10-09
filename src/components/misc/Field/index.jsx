import React from 'react';
import {Form} from 'react-bootstrap'; 

const Field = ({ name, value, onChangeHandler }) => {
  switch (name) {
    case 'password':
      return <Form.Control 
        type="password"
        value={value}
        name='password'
        onChange={(e) => onChangeHandler(e)} />
    case 'password2':
      return <Form.Control 
        type="password"
        value={value} name='password2'
        onChange={(e) => onChangeHandler(e)} />
    case 'email':
      return <Form.Control 
        type="email"
        value={value}
        name='email'
        onChange={(e) => onChangeHandler(e)} />
    case 'name':
      return <Form.Control 
        type="text"
        value={value}
        name='name'
        onChange={(e) => onChangeHandler(e)} />
    default:
      return <Form.Control 
        type="text"
        value={value}
        name='name'
        onChange={(e) => onChangeHandler(e)} />
  }
};

export default Field;