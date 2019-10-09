import React from 'react';
import {Form} from 'react-bootstrap'; 

const Field = ({ name, value, onChangeHandler, onBlur, className }) => {
  switch (name) {
    case 'password':
      return <Form.Control 
        type="password"
        value={value}
        name='password'
        onBlur={onBlur}
        onChange={(e) => onChangeHandler(e)} 
        className={className}
        />
    case 'password2':
      return <Form.Control 
        type="password"
        value={value} name='password2'
        onBlur={onBlur}
        className={className}
        onChange={(e) => onChangeHandler(e)} />
    case 'email':
      return <Form.Control 
        type="email"
        value={value}
        name='email'
        className={className}
        onBlur={onBlur}
        onChange={(e) => onChangeHandler(e)} />
    default:
      return <Form.Control 
        type="text"
        value={value}
        name='name'
        className={className}
        onBlur={onBlur}
        onChange={(e) => onChangeHandler(e)} />
  }
};

export default Field;