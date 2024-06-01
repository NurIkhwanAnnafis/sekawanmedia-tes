import { Avatar, Col, Row, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProducts } from '../model.tickets';
import moment from 'moment';
import { UserOutlined } from '@ant-design/icons';
import ColumnStatus from '../components/ColumnStatus';
import ColumnAction from '../components/ColumnAction';

const { Text } = Typography;

interface IColumns {
    handleSetModalSelected: (type: 'approve' | 'reject', values: IProducts | null, open: boolean) => void
    handleShowDetail: (id: string | number) => void
}

export const columns = ({ handleSetModalSelected, handleShowDetail }: IColumns): ColumnsType<IProducts> => [
    {
        title: 'Ticket details',
        dataIndex: 'title',
        key: 'title',
        width: 300,
        fixed: 'left',
        className: "ps-4",
        render: (text, record) => (
            <Row gutter={24} align="middle">
                <Col span={6} className="pe-0">
                    {record.thumbnail ? (
                        <Avatar size="default" src={record.thumbnail} />
                    ) : (
                        <Avatar size="default" icon={<UserOutlined />} />
                    )}
                </Col>
                <Col span={18} className="ps-0">
                    <div className="d-flex flex-column">
                        <Text strong>{text}</Text>
                        <Text type="secondary" style={{ fontSize: 12 }}>{record.returnPolicy}</Text>
                    </div>
                </Col>
            </Row>
        ),
    },
    {
        title: 'Customer name',
        dataIndex: 'brand',
        key: 'brand',
        render: text => (
            <div className="d-flex flex-column">
                <Text strong>{text || '-'}</Text>
                <Text type="secondary" style={{ fontSize: 12 }}>on {moment().format('DD MM YYYY')}</Text>
            </div>
        ),
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: () => (
            <div className="d-flex flex-column">
                <Text strong>{moment().format('MMM DD, YYYY')}</Text>
                <Text type="secondary" style={{ fontSize: 12 }}>{moment().format('h:mm a')}</Text>
            </div>
        ),
    },
    {
        title: 'Priority',
        key: 'rating',
        dataIndex: 'rating',
        render: text => <ColumnStatus rating={text} />
    },
    {
        title: '',
        key: 'action',
        width: 100,
        render: (_, record) => (
            <ColumnAction
                onClick={(type, open) => handleSetModalSelected(type, record, open)}
                onClickDetail={() => handleShowDetail(record.id)}
            />
        ),
    },
];