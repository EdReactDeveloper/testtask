import React from 'react';

const Authorized = ({logoutHandler}) => {
  return (
    <div>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};

export default Authorized;