import React from 'react';
import './index.scss';

interface Props {
  children: any;
}

const Wrapper: React.FC<Props> = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="container-Wrapper">
      {children}
    </div>
  );
};

export default Wrapper;
