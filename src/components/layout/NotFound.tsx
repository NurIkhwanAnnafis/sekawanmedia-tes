import React from 'react';
import '../../assets/styles/NotFound.scss';

const Login: React.FC<{ children: any }> = (props) => {
  return (
    <div>
      <div className="container vh-100">
        <div className="error-content text-center">{props.children}</div>
      </div>
    </div>
  );
};

export default Login;
