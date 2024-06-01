import { ReactElement } from "react";
import { Button, Card, Col, Image, Modal, Row, Typography } from "antd";
import Wrapper from "../../../components/Wrapper";
import { useTicketDetail } from "../context/useTicketDetail";
import moment from "moment";
import ColumnStatus from "./ColumnStatus";

const { Title, Text } = Typography;

const ValueSection = ({ label, value }: { label: string, value: string | Element | ReactElement }) => (
    <Row gutter={24} className="mb-1">
        <Col md={6} sm={12}>
            <Text type="secondary">{label}</Text>
        </Col>
        <Col md={18} sm={12}>
            {value}
        </Col>
    </Row>
)

const Detail = () => {
    const {
        detail,
        handleBack,
        modal,
        setModal,
        handleUpdateStatus,
    } = useTicketDetail();

    return (
        <Wrapper>
            <Card className="styleCardTicket">
                <Row gutter={24}>
                    <Col span={24}>
                        <Title level={5}>Detail Ticket</Title>
                    </Col>
                </Row>

                <ValueSection label="Profile" value={<Image width={80} src={detail.thumbnail} />} />
                <ValueSection label="Title" value={detail.title || '-'} />
                <ValueSection label="Code" value={detail.sku || '-'} />
                <ValueSection label="Policy" value={detail.returnPolicy || '-'} />
                <ValueSection label="Customer Name" value={detail.brand || '-'} />
                <ValueSection label="Date" value={moment().format('DD MMMM YYYY h:mm a')} />
                <ValueSection label="Description" value={detail.description || '-'} />
                <ValueSection label="Priority" value={<ColumnStatus rating={detail.rating} />} />

                <Row gutter={24} className="mt-5">
                    <Col sm={12} xs={0}></Col>
                    <Col sm={12} xs={24} className="text-end">
                        <Button htmlType="button" type="default" onClick={handleBack}>
                            Cancel
                        </Button>
                        <Button htmlType="button" type="primary" danger className="mx-2" onClick={() => setModal({ open: true, type: 'reject' })}>
                            Rejected
                        </Button>
                        <Button htmlType="button" type="primary" onClick={() => setModal({ open: true, type: 'approve' })}>
                            Approve
                        </Button>
                    </Col>
                </Row>
            </Card>

            <Modal
                title={`${modal.type === 'approve' ? 'Approve' : 'Reject'} Ticket`}
                visible={modal.open}
                maskClosable
                onCancel={() => setModal({ type: '', open: false })}
                onOk={handleUpdateStatus}
            >
                <Text>
                    {`Are you sure to ${modal.type === 'approve' ? 'Approve' : 'Reject'} this `}
                    <Text strong>{`Ticket(${detail.title})`}</Text>
                </Text>
            </Modal>
        </Wrapper>
    )
}

export default Detail;
