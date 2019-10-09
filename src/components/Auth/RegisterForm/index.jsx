import React from 'react';
import Field from '../../misc/Field';

const Register = ({ submitHandler, filedHandler, form }) => {
  return (
    <form onSubmit={submitHandler} >
      <Field name='email' value={form['email']} onChangeHandler={filedHandler} />
      <Field name='password' value={form['password']} onChangeHandler={filedHandler} />
      <Field name='password2' value={form['password2']} onChangeHandler={filedHandler} />
      <button type='submit'>login</button>
    </form>
  );
};

export default Register;