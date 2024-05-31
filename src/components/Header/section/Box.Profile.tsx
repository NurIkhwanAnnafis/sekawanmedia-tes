import { Avatar } from 'antd';
import React from 'react';
import { ICurrent } from '../model.header';

interface Props {
  isMobile?: boolean;
  current: ICurrent | undefined;
}

const BoxProfile: React.FC<Props> = (props) => {
  const {
    isMobile,
    current = {
      box: false,
      name: '',
      status: '',
      role: '',
    },
  } = props;

  const styleText = isMobile ? { color: 'white' } : {};

  return (
    <div className="box-user">
      <br />
      <br />
      <h5 className="mb-0" style={styleText}>
        {current.name}
      </h5>
    </div>
  );
};

export default BoxProfile;
