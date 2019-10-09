import React from 'react';
import Auth from './Auth'
import {Link} from 'react-router-dom'; 
import style from './Header.module.scss'; 

const Header = (props) => {
  return (
    <div className={style.container}>
      <Link to='/'>home</Link>
      <Auth {...props}/>
    </div>
  );
};

export default Header;