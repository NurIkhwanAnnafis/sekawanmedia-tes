import { Avatar, Badge, Button, Divider, Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BellOutlined, SearchOutlined } from '@ant-design/icons';

const Notif: React.FC = () => {
  const navigate = useNavigate();

  const menu = (
    <Menu style={{ width: 250 }} className="p-3">
      <h5 className="mb-0">Notifikasi</h5>
      <Divider className="my-3" />

      <div>
        <p className="text-muted">
          <i>Belum ada notifikasi</i>
        </p>
      </div>

      <div className="text-center">
        <Button type="link" onClick={() => navigate('/notification')}>
          Lihat Semua
        </Button>
      </div>
    </Menu>
  );

  return (
    <div className="d-flex align-items-center gap-2">
      <Button style={{ marginTop: 4 }} type="text" icon={<SearchOutlined />}></Button>
      <Dropdown
        overlay={menu}
        trigger={['click']}
        placement="bottomCenter"
        overlayClassName="custom-dropdown-notif">
        <div style={{ marginTop: -2 }}>
          <Badge dot count={1} size="small">
            <BellOutlined />
          </Badge>
        </div>
      </Dropdown>
    </div>
  );
};

export default Notif;
