import React from 'react';
import {Container} from 'react-bootstrap'
import style from './Layout.module.scss'; 

const Layout = (props) => {
  return (
    <Container className={style.wrapper}>
      {props.children}
    </Container>
  );
};

export default Layout;