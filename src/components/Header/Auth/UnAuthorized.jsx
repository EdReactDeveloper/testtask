import React from 'react';
import { Link } from 'react-router-dom';
import style from './Auth.module.scss'; 

const UnAuthorized = () => {
  return (
    <>
      <Link className={style.btn} to='/login'>login</Link>
      <Link className={style.btn} to='/register'>register</Link>
    </>
  );
};

export default UnAuthorized;