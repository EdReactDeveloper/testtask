import React from 'react';
import Field from '../../misc/Field';
import { Form, Button } from 'react-bootstrap';

const LoginForm = ({ filedHandler, form, submitHandler }) => {
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;

