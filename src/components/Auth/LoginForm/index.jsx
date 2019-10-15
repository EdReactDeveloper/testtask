import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Formfield from '../FormField';
import style from '../Form.module.scss';

const LoginForm = ({ fieldHandler, form, submitHandler, touchHandler }) => {
  return (
    <Form onSubmit={submitHandler} className={style.form_wrapper}>
      <h3>Login</h3>

      {form && form.map(item => {
        if (item.type === 'password2') {
          return '';
        }
        return <Formfield
          key={item.type}
          field={item} form={form}
          fieldHandler={fieldHandler}
          touchHandler={touchHandler}
        />
      })
      }
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;

