import React from 'react';

const Authorized = ({ logoutHandler }) => {
  return <button onClick={logoutHandler}>logout</button>
};

export default Authorized;