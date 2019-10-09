import React from 'react';

const Validation = ({field}) => {
  return (
    <>
      {!field.isValid && field.touched && <span>{field.error}</span>}
    </>
  );
};

export default Validation;