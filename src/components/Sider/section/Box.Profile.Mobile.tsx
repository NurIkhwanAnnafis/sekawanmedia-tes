import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Typography } from 'antd';

const { Title } = Typography;

const BoxProfileMobile: React.FC = () => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-2 mb-5">
      <Avatar
        size={48}
        style={{ background: '#5574FF', color: '#ffffff', fontSize: 14 }}>
        D
      </Avatar>
      <Title level={5} className="mb-0" style={{ color: '#9EA0AD' }}>Dashboard Kit</Title>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  isUpdateUser: state.layout.isUpdateUser,
});

export default connect(mapStateToProps, null)(BoxProfileMobile);
