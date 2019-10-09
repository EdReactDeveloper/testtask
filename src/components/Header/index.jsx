import React from 'react';
import Auth from './Auth'
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import { Navbar } from 'react-bootstrap';

const Header = (props) => {
  return (
    <Navbar className={style.container}>
        <Navbar.Brand><Link to='/'>home</Link></Navbar.Brand>
          <Auth {...props} />
    </Navbar>
  );
};

export default Header;