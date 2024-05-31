import { Avatar, Col, Divider, Drawer, Layout, Menu, Row, Typography } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';
import { Fragment } from 'react';
import { sidebarMenus } from '../../config/menus';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { getRole } from '../../utils/localStorage';
import { checkMenuRoles } from './utils';
import BoxProfileMobile from './section/Box.Profile.Mobile';

const { Title } = Typography;

interface Props {
  collapsed: boolean;
  isMobile: boolean;
  setCollapsed: (flag: boolean) => void;
}

const { Sider } = Layout;
const { SubMenu } = Menu;

const defaultIcon = <DesktopOutlined />;
const Index: React.FC<Props> = (props) => {
  const { collapsed, isMobile, setCollapsed } = props;
  const navigate = useNavigate();
  const userRoles = checkMenuRoles(getRole());

  return (
    <Fragment>
      {!isMobile && (
        <Sider width={220} className="d-none d-sm-block box-sider">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-5">
            <Avatar
              size={32}
              style={{ background: '#5574FF', color: '#ffffff', fontSize: 14 }}>
              D
            </Avatar>
            <Title level={5} className="mb-0">Dashboard Kit</Title>
          </div>
          <Menu defaultOpenKeys={['overview']} mode="inline" style={{ background: 'transparent' }}>
            {sidebarMenus.map(
              (val, i) =>
                val.role.includes(userRoles) &&
                (val.path ? (
                  <Menu.Item
                    key={val.path}
                    icon={val.icon || defaultIcon}
                    onClick={() => navigate(val.path)}>
                    {val.name}
                  </Menu.Item>
                ) : (
                  <Divider className="my-3" style={{ borderTop: '1px solid #9ea0ad6b' }} />
                )),
            )}
          </Menu>
        </Sider>
      )}

      {isMobile && (
        <Drawer
          placement="left"
          closable={false}
          onClose={() => setCollapsed(false)}
          visible={collapsed}
          key="left"
          bodyStyle={{ background: '#001529', paddingLeft: 0, paddingRight: 0 }}
          width={300}>
          <div className="d-flex justify-content-center text-center">
            <BoxProfileMobile isMobile={isMobile} />
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {sidebarMenus.map(
              (val) =>
                val.role.includes(userRoles) &&
                (val.path ? (
                  <Menu.Item
                    key={val.path}
                    icon={val.icon || defaultIcon}
                    onClick={() => navigate(val.path)}>
                    {val.name}
                  </Menu.Item>
                ) : (
                  <Divider className="my-3" style={{ borderTop: '1px solid #9ea0ad6b' }} />
                )),
            )}
          </Menu>
        </Drawer>
      )}
    </Fragment>
  );
};

export default Index;
