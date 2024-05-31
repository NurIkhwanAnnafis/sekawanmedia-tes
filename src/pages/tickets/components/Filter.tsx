import { Button, Col, Row, Typography } from "antd";
import { useContext } from "react";
import { ContextTickets } from "../context/ContextProvider";

const { Title, Text } = Typography;

const Filter: React.FC = () => {
    const {
        handleOpenModalCreate,
    } = useContext(ContextTickets);

    return (
        <Row gutter={24} justify="space-between" align="middle">
            <Col span={18}>
                <Title level={5}>All tickets</Title>
            </Col>
            <Col span={6}>
                <Row gutter={24} align="middle" justify="end">
                    <Col span={6}>
                        <Text type="secondary">Sort</Text>
                    </Col>
                    <Col span={6}>
                        <Text type="secondary">Filter</Text>
                    </Col>
                    <Col span={10}>
                        <Button
                            htmlType="button"
                            type="primary"
                            onClick={handleOpenModalCreate}
                        >
                            Create
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Filter;