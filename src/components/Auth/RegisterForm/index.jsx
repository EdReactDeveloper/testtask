import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Formfield from '../FormField';

const Register = ({ submitHandler, fieldHandler, touchHandler, form }) => {
  return (
    <Form onSubmit={submitHandler}>
      <h3>Register</h3>
      
      {form && form.map(item => <Formfield
        key={item.type}
        field={item} form={form}
        fieldHandler={fieldHandler}
        touchHandler={touchHandler}
      />
      )}

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  );
};

export default Register;

