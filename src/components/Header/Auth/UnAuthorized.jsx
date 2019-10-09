import React from 'react';
import { Link } from 'react-router-dom';
import style from './Auth.module.scss';
import { Nav } from 'react-bootstrap';
const UnAuthorized = () => {
  return (
    <>
      <Nav.Item>
        <Link className={style.btn} to='/login'>login</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className={style.btn} to='/register'>register</Link>
      </Nav.Item>
    </>
  );
};

export default UnAuthorized;