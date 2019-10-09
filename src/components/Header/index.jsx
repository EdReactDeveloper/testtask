import React from 'react';
import Auth from './Auth'
import {Link} from 'react-router-dom'; 

const Header = (props) => {
  return (
    <div>
      <Link to='/'>home</Link>
      <Auth {...props}/>
    </div>
  );
};

export default Header;