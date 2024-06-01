import { Button, Col, Row, Typography } from "antd";
import { useContext } from "react";
import { ContextTickets } from "../context/ContextProvider";
import { FilterOutlined, SortAscendingOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

const Filter: React.FC = () => {
    const { t } = useTranslation(['ticket']);
    const {
        handleOpenModalCreate,
        handleOpenModalSort,
        handleOpenModalFilter,
    } = useContext(ContextTickets);

    return (
        <Row gutter={24} justify="space-between" align="middle">
            <Col span={17}>
                <Title level={5}>{t('title', 'All tickets')}</Title>
            </Col>
            <Col span={7} className="pe-0">
                <Row gutter={8} align="middle" justify="end">
                    <Col span={8}>
                        <Button
                            icon={<SortAscendingOutlined />}
                            htmlType="button"
                            type="text"
                            className="d-flex align-items-center"
                            onClick={handleOpenModalSort}
                        >
                            <Text type="secondary">{t('sort', 'Sort')}</Text>
                        </Button>
                    </Col>
                    <Col span={8}>
                        <Button
                            icon={<FilterOutlined />}
                            htmlType="button"
                            type="text"
                            className="d-flex align-items-center"
                            onClick={handleOpenModalFilter}
                        >
                            <Text type="secondary">{t('filter', 'Filter')}</Text>
                        </Button>
                    </Col>
                    <Col span={8}>
                        <Button
                            htmlType="button"
                            type="primary"
                            onClick={handleOpenModalCreate}
                        >
                            {t('create', 'Create')}
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Filter;