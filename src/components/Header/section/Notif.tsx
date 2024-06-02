import { Badge, Button, Divider, Dropdown, Menu, Select, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { IStore } from '../../../redux/model.store';
import { useContext } from 'react';
import { ContextHeader } from '../context/ContextProvider';
import { debounce } from 'lodash';
import { ContextTheme } from '../../../config/theme';

const { Text, Title } = Typography;

const Notif: React.FC = () => {
  const { t } = useTranslation(['base']);
  const notification = useSelector((state: IStore) => state.notification);
  const {
    options,
    handleSearch,
    handleClick
  } = useContext(ContextHeader);
  const {
    theme,
  } = useContext(ContextTheme);

  const menu = (
    <Menu style={{ width: 250 }} className="p-3">
      <Title level={5} className="mb-0">{t('notification.title', 'Notifikasi')}</Title>
      <Divider className="my-3" />

      <div className="mb-3">
        {notification.list.length === 0 ? (
          <Text type="secondary" italic>
            {t('notification.no', 'Belum ada notifikasi')}
          </Text>
        ) : (
          notification.list.map((val, i) => i < 5 && (
            <Text key={val.id} type="secondary">
              {val.title}
            </Text>
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
        options={options}
        showSearch
        showArrow={false}
        style={{ marginTop: 4, width: 120, marginRight: 8 }}
        defaultActiveFirstOption={false}
        filterOption={false}
        onSearch={debounce((value) => handleSearch(value), 500)}
        onChange={(e) => handleClick(e)}
        notFoundContent={null}
      />
      <Dropdown
        overlay={menu}
        trigger={['click']}
        placement="bottomCenter"
        overlayClassName={`custom-dropdown-notif ${theme}`}>
        <div style={{ marginTop: -2 }}>
          <Badge dot count={notification.list.length} size="small">
            <BellOutlined style={{ color: theme ? '#fff' : undefined }} />
          </Badge>
        </div>
      </Dropdown>
    </div>
  );
};

export default Notif;
