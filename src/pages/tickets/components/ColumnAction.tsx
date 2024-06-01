import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";

interface Props {
    onClick: (type: 'approve' | 'reject', open: boolean) => void;
    onClickDetail: () => void;
}

const ColumnAction: React.FC<Props> = ({ onClick, onClickDetail }) => {

    const menu = (
        <Menu style={{ width: 100 }}>
            <Menu.Item key="0">
                <div onClick={onClickDetail}>
                    <p>Detail</p>
                </div>
            </Menu.Item>
            <Menu.Item key="1">
                <div onClick={() => onClick('approve', true)}>
                    <p>Approve</p>
                </div>
            </Menu.Item>
            <Menu.Item key="2">
                <div onClick={() => onClick('reject', true)}>
                    <p>Reject</p>
                </div>
            </Menu.Item>
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
