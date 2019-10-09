import React from 'react';
import Authorized from './Authorized';
import UnAuthorized from './UnAuthorized';
import style from './Auth.module.scss'; 

const Auth = ({ auth: { isAuthorized }, logoutHandler }) => {

  return (
    <div className={style.wrapper}>
      {isAuthorized ? <Authorized logoutHandler={logoutHandler} /> : <UnAuthorized />}
    </div>
  );
};

export default Auth;
