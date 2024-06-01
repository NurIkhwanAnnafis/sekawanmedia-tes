import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

interface Props {
    onClick: (type: 'approve' | 'reject', open: boolean) => void;
    onClickDetail: () => void;
    isAdmin: boolean;
}

const ColumnAction: React.FC<Props> = ({ onClick, onClickDetail, isAdmin }) => {
    const { t } = useTranslation(['ticket']);

    const menu = (
        <Menu style={{ width: 100 }}>
            <Menu.Item key="0">
                <div onClick={onClickDetail}>
                    <p>Detail</p>
                </div>
            </Menu.Item>
            {isAdmin && (
                <Fragment>
                    <Menu.Item key="1">
                        <div onClick={() => onClick('approve', true)}>
                            <p>{t('action.0', 'Approve', { returnObjects: true })}</p>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <div onClick={() => onClick('reject', true)}>
                            <p>{t('action.1', 'Reject', { returnObjects: true })}</p>
                        </div>
                    </Menu.Item>
                </Fragment>
            )}
        </Menu>
    );

    return (
        <Dropdown
            overlay={menu}
            trigger={['click']}
            placement="bottomCenter"
        >
            <span className="ant-dropdown-link me-2" onClick={(e) => e.preventDefault()}>
                <Button htmlType="button" type="text"><MoreOutlined /></Button>
            </span>
        </Dropdown>
    )
}

export default ColumnAction;
