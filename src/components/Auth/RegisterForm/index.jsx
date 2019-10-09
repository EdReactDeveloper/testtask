import React from 'react';
import Field from '../../misc/Field';
import { Form, Button } from 'react-bootstrap';

const Register = ({ submitHandler, filedHandler, form }) => {
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Field name='email' value={form['email']} onChangeHandler={filedHandler} />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Field name='password' value={form['password']} onChangeHandler={filedHandler} />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Repeat password</Form.Label>
        <Field name='password2' value={form['password2']} onChangeHandler={filedHandler} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form>
  );
};

export default Register;

