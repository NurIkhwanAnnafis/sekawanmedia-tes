import { Card, Col, Row, Typography } from "antd";
import React, { useContext } from "react"
import "../configs/style.scss";
import { ContextOverview } from "../context/ContextProvider";

const { Title } = Typography;

const CardSummary: React.FC = () => {
    const {
        summary,
    } = useContext(ContextOverview);

    return (
        <Row gutter={[24, 24]}>
            <Col span={6} sm={6} xs={24}>
                <Card className="styleCard action" style={{  textAlign: 'center' }}>
                    <Title type="secondary" level={5}>Unresolved</Title>
                    <Title level={4} className="mt-1 mb-0">{summary.unresolved}</Title>
                </Card>
            </Col>
            <Col span={6} sm={6} xs={24}>
                <Card className="styleCard action" style={{  textAlign: 'center' }}>
                    <Title type="secondary" level={5}>Overdue</Title>
                    <Title level={4} className="mt-1 mb-0">{summary.overdue}</Title>
                </Card>
            </Col>
            <Col span={6} sm={6} xs={24}>
                <Card className="styleCard action" style={{  textAlign: 'center' }}>
                    <Title type="secondary" level={5}>Open</Title>
                    <Title level={4} className="mt-1 mb-0">{summary.open}</Title>
                </Card>
            </Col>
            <Col span={6} sm={6} xs={24}>
                <Card className="styleCard action" style={{  textAlign: 'center' }}>
                    <Title type="secondary" level={5}>On hold</Title>
                    <Title level={4} className="mt-1 mb-0">{summary.hold}</Title>
                </Card>
            </Col>
        </Row>
    )
}

export default CardSummary;