import React, { useState } from 'react';
import { connect } from 'react-redux';
import logo from '../../../assets/icons/MO_Logo_big.svg';
import profileIcon from '../../../assets/icons/profile-icon.svg';
import { Avatar } from 'antd';

interface Props {
  isMobile?: boolean;
}

const BoxProfileMobile: React.FC<Props> = (props) => {
  const { isMobile } = props;
  const [current, setCurrent] = useState<{
    box: boolean;
    name: string;
    status: string;
  }>({
    box: false,
    name: '',
    status: '',
  });

  const styleText = isMobile ? { color: 'white' } : {};

  return (
    <div className="box-user">
      <Avatar
        size={144}
        style={{ background: '#5574FF', color: '#ffffff', fontSize: 32, fontWeight: 700 }}>
        D
      </Avatar>
      <br />
      <Avatar
        size={60}
        style={{ background: '#5574FF', color: '#ffffff', fontSize: 32, fontWeight: 700 }}>
        D
      </Avatar>
      <br />
      <h5 className="mb-0" style={styleText}>
        {current.name}
      </h5>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  isUpdateUser: state.layout.isUpdateUser,
});

export default connect(mapStateToProps, null)(BoxProfileMobile);
