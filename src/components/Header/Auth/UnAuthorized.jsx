import React from 'react';
import { Link } from 'react-router-dom';

const UnAuthorized = () => {
  return (
    <div>
      <div>
        <Link to='/login'>login</Link>
      </div>
      <div>
        <Link to='/register'>register</Link>
      </div>
    </div>
  );
};

export default UnAuthorized;