import { Card, Col, Row, Typography } from "antd";
import React, { useContext } from "react"
import "../configs/style.scss";
import { ContextOverview } from "../context/ContextProvider";
import { useTranslation } from "react-i18next";
import { ContextTheme } from "../../../config/theme";

const { Title } = Typography;

const CardSummary: React.FC = () => {
    const { t } = useTranslation(['overview']);
    const {
        summary,
    } = useContext(ContextOverview);
    const {
        theme,
    } = useContext(ContextTheme);

    return (
        <Row gutter={[24, 24]}>
            <Col span={6} sm={6} xs={24}>
                <Card className={`styleCard action ${theme}`} style={{ textAlign: 'center' }}>
                    <Title type="secondary" level={5}>{t('unresolved', 'Unresolved')}</Title>
                    <Title level={4} className="mt-1 mb-0">{summary.unresolved}</Title>
                </Card>
            </Col>
            <Col span={6} sm={6} xs={24}>
                <Card className={`styleCard action ${theme}`} style={{ textAlign: 'center' }}>
                    <Title type="secondary" level={5}>{t('overdue', 'Overdue')}</Title>
                    <Title level={4} className="mt-1 mb-0">{summary.overdue}</Title>
                </Card>
            </Col>
            <Col span={6} sm={6} xs={24}>
                <Card className={`styleCard action ${theme}`} style={{ textAlign: 'center' }}>
                    <Title type="secondary" level={5}>{t('open', 'Open')}</Title>
                    <Title level={4} className="mt-1 mb-0">{summary.open}</Title>
                </Card>
            </Col>
            <Col span={6} sm={6} xs={24}>
                <Card className={`styleCard action ${theme}`} style={{ textAlign: 'center' }}>
                    <Title type="secondary" level={5}>{t('hold', 'On hold')}</Title>
                    <Title level={4} className="mt-1 mb-0">{summary.hold}</Title>
                </Card>
            </Col>
        </Row>
    )
}

export default CardSummary;