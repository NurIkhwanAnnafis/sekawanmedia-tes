import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import { IProducts } from "../model.tickets";

interface Props {
    onClick: (type: 'approve' | 'reject', open: boolean) => void;
}

const ColumnAction: React.FC<Props> = ({ onClick }) => {

    const menu = (
        <Menu style={{ width: 100 }}>
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
