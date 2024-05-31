import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Typography } from 'antd';
import { connect } from 'react-redux';

import './index.scss';
import DropdownProfile from './section/Drodown.Profile';
import { ContextHeader } from './context/ContextProvider';
import { useHeader } from './context/useHeader';

interface Props {
  collapsed: boolean;
  setCollapsed: (flag: boolean) => void;
  isMobile: boolean;
  title: string;
  isUpdateUser?: boolean;
}

const { Header } = Layout;
const { Title } = Typography;

const Index: React.FC<Props> = (props) => {
  const { collapsed, setCollapsed, isMobile, title } = props;
  const {
    handleLogout,
    current
  } = useHeader();

  const widthBoxHeader = !isMobile ? { width: `calc(100% - 220px)` } : { width: `100%` };

  return (
    <ContextHeader.Provider
      value={{
        handleLogout,
        current,
      }}
    >
      <Header className="box-header">
        <div className="d-flex">
          <div className="header-container" style={widthBoxHeader}>
            <div className="box-title">
              <Title level={5}>{title}</Title>
              <div className="d-flex align-items-center">
                {isMobile && (
                  <Button
                    type="text"
                    onClick={() => setCollapsed(!collapsed)}
                    style={{ color: 'white' }}>
                    <MenuUnfoldOutlined />
                  </Button>
                )}
              </div>
            </div>
            <DropdownProfile />
          </div>
        </div>
      </Header>
    </ContextHeader.Provider>
  );
};

const mapStateToProps = (state: any) => ({
  isUpdateUser: state.layout.isUpdateUser,
});

export default connect(mapStateToProps, null)(Index);
