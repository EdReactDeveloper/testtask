import React from 'react';
import Auth from './Auth'

const Header = (props) => {
  return (
    <div>
      <button>home</button>
      <Auth {...props}/>
    </div>
  );
};

export default Header;