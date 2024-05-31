import React from 'react';

const Login: React.FC<{ children: any }> = (props) => {
  return (
    <div className="vh-100" style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      {props.children}
    </div>
  );
};

export default Login;
