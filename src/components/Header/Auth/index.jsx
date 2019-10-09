import React from 'react';
import Authorized from './Authorized';
import UnAuthorized from './UnAuthorized';

const Auth = ({ auth: { isAuthorized }, logoutHandler }) => {

  return (
    <div>
      {isAuthorized ? <Authorized logoutHandler={logoutHandler} /> : <UnAuthorized />}
    </div>
  );
};

export default Auth;
