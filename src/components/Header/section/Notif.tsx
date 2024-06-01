import { Badge, Button, Divider, Dropdown, Input, Menu, Select } from 'antd';
import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { IStore } from '../../../redux/model.store';

const { Option } = Select;

const Notif: React.FC = () => {
  const { t } = useTranslation(['base']);
  const notification = useSelector((state: IStore) => state.notification);

  const menu = (
    <Menu style={{ width: 250 }} className="p-3">
      <h5 className="mb-0">{t('notification.title', 'Notifikasi')}</h5>
      <Divider className="my-3" />

      <div>
        {notification.list.length === 0 ? (
          <p className="text-muted">
            <i>{t('notification.no', 'Belum ada notifikasi')}</i>
          </p>
        ) : (
          notification.list.map((val, i) => i < 5 && (
            <p key={val.id} className="text-muted">{val.title}</p>
          ))
        )}
      </div>

      <div className="text-center">
        <Button type="link" onClick={() => { }}>
          {t('notification.see', 'Lihat Semua')}
        </Button>
      </div>
    </Menu>
  );

  return (
    <div className="d-flex align-items-center gap-2">
      <Select
        placeholder={t('notification.search', 'search ticket')}
        size="small"
        options={[]}
        showSearch
        showArrow={false}
        style={{ marginTop: 4, width: 150 }}
      />
      <Dropdown
        overlay={menu}
        trigger={['click']}
        placement="bottomCenter"
        overlayClassName="custom-dropdown-notif">
        <div style={{ marginTop: -2 }}>
          <Badge dot count={notification.list.length} size="small">
            <BellOutlined />
          </Badge>
        </div>
      </Dropdown>
    </div>
  );
};

export default Notif;
