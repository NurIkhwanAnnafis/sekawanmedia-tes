import { Avatar, Divider, Dropdown, Menu, Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import Notif from './Notif';
import { UserOutlined } from '@ant-design/icons';
import { ContextHeader } from '../context/ContextProvider';
const { Text } = Typography;

const DropdownProfile: React.FC = (props) => {
  const [hiddenText, setHiddenText] = useState<boolean>(false);
  const {
    handleLogout,
    current: { name, profile_image },
  } = useContext(ContextHeader);

  const menu = (
    <Menu style={{ width: 170 }}>
      <Menu.Item key="3">
        <div onClick={() => handleLogout()}>
          <p>Keluar Aplikasi</p>
        </div>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    if (window.innerWidth <= 1000) setHiddenText(true);

    // eslint-disable-next-line no-restricted-globals
    addEventListener('resize', handleCheckWidth);
  }, []);

  const handleCheckWidth = () => {
    const isHidden = window.innerWidth <= 1000;
    setHiddenText(isHidden);
  };

  return (
    <div className="d-flex justify-content-end align-items-start box-profile">
      <Notif />

      <div className="mx-3">
        <Divider type="vertical" />
      </div>

      {!hiddenText && (
        <div className="me-3">
          <Text style={{ fontWeight: 600 }}>
            {name}
          </Text>
        </div>
      )}

      <Dropdown
        overlay={menu}
        trigger={['click']}
        placement="bottomCenter"
        overlayClassName="custom-dropdown-profile">
        <span className="ant-dropdown-link me-2" onClick={(e) => e.preventDefault()}>
          {profile_image ? (
            <Avatar size="large" src={profile_image} />
          ) : (
            <Avatar size="large" icon={<UserOutlined />} />
          )}
        </span>
      </Dropdown>
    </div>
  );
};

export default DropdownProfile;
