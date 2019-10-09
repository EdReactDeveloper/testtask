import React from 'react';
import {Button} from 'react-bootstrap'; 

const Authorized = ({ logoutHandler }) => {
  return <Button variant="light" onClick={logoutHandler}>logout</Button>
};

export default Authorized;