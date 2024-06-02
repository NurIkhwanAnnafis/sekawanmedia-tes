import { Avatar, Divider, Dropdown, Menu, Switch, Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import Notif from './Notif';
import { UserOutlined } from '@ant-design/icons';
import { ContextHeader } from '../context/ContextProvider';
import { useTranslation } from 'react-i18next';
import { ContextTheme } from '../../../config/theme';

const { Text } = Typography;

const DropdownProfile: React.FC = (props) => {
  const { t, i18n } = useTranslation(['base']);
  const [hiddenText, setHiddenText] = useState<boolean>(false);
  const {
    handleLogout,
    current: { name, profile_image },
  } = useContext(ContextHeader);
  const {
    theme,
    handleChangeTheme,
  } = useContext(ContextTheme);

  const menu = (
    <Menu style={{ width: 170 }}>
      <Menu.Item key="1">
        <div className="d-flex justify-content-between align-items-center" onClick={(e) => e ? e.stopPropagation() : {}}>
          <p>{t('header.theme', 'Theme')}</p>
          <Switch
            checkedChildren="dark"
            unCheckedChildren="light"
            checked={theme === 'dark'}
            onChange={(check) => handleChangeTheme(check ? 'dark' : '')}
          />
        </div>
      </Menu.Item>
      <Menu.Item key="2">
        <div className="d-flex justify-content-between align-items-center" onClick={(e) => e ? e.stopPropagation() : {}}>
          <p>{t('header.language', 'Bahasa')}</p>
          <Switch
            checkedChildren="en"
            unCheckedChildren="id"
            checked={i18n.language === 'en'}
            onChange={(check) => i18n.changeLanguage(check ? 'en' : 'id')}
          />
        </div>
      </Menu.Item>
      <Menu.Item key="3">
        <div onClick={() => handleLogout()}>
          <p>{t('header.logout', 'Keluar')}</p>
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
        overlayClassName={`custom-dropdown-profile ${theme}`}>
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
