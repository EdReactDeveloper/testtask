import React from 'react';
import Field from '../misc/Field';
import { Form } from 'react-bootstrap';
import Validation from './Validation';
import style from './Form.module.scss';

const FormField = ({ field, fieldHandler, touchHandler }) => {
  return (
    <Form.Group controlId="formGroupEmail">
      <Form.Label>{field.type}</Form.Label>
      <Field
        name={field.type}
        value={field.value}
        onChangeHandler={fieldHandler}
        className={field.touched && !field.isValid ? style.red : ''}
        onBlur={() => touchHandler(field.type)}
      />
      <Validation field={field} />
    </Form.Group>
  );
};

export default FormField;