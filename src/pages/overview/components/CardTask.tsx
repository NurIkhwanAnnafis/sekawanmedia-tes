import { Button, Card, Checkbox, Col, Divider, Input, Row, Tag, Typography } from "antd";
import React, { Fragment, useContext } from "react"
import "../configs/style.scss";
import { ContextOverview } from "../context/ContextProvider";
import { PlusOutlined } from "@ant-design/icons";
import TagPriority from "./TagPriority";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

const CardTask: React.FC = () => {
    const { t } = useTranslation(['overview']);
    const {
        dataUnresolved,
        dataTasks,
    } = useContext(ContextOverview);

    return (
        <Row gutter={[24, 24]}>
            <Col span={12} sm={12} xs={24}>
                <Card className="styleCard" style={{ minHeight: 305 }}>
                    <Row gutter={24} justify="space-between">
                        <Col span={18}>
                            <Title className="mb-0" level={5}>{t('unresolved_tickets.title', 'Unresolved tickets')}</Title>
                            <Text style={{ fontSize: 12 }} type="secondary">{t('unresolved_tickets.desc1', 'Group')}: <Text>{t('unresolved_tickets.desc2', 'Support')}</Text></Text>
                        </Col>
                        <Col span={6} className="text-end">
                            <Button type="link" className="p-0 m-0 h-auto">
                                {t('unresolved_tickets.view', 'View details')}
                            </Button>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={24} justify="space-between">
                        <Col span={18}>
                            <Text>{t('unresolved_tickets.list', 'Waiting on Feature Request')[0]}</Text>
                        </Col>
                        <Col span={6} className="text-end">
                            <Text type="secondary">{dataUnresolved.waiting_for_request}</Text>
                        </Col>
                        <Divider className="my-3" />
                        <Col span={18}>
                            <Text>{t('unresolved_tickets.list', 'Awaiting Customer Response')[1]}</Text>
                        </Col>
                        <Col span={6} className="text-end">
                            <Text type="secondary">{dataUnresolved.waiting_for_response}</Text>
                        </Col>
                        <Divider className="my-3" />
                        <Col span={18}>
                            <Text>{t('unresolved_tickets.list', 'Awaiting Developer Fix')[2]}</Text>
                        </Col>
                        <Col span={6} className="text-end">
                            <Text type="secondary">{dataUnresolved.waiting_for_developer}</Text>
                        </Col>
                        <Divider className="my-3" />
                        <Col span={18}>
                            <Text>{t('unresolved_tickets.list', 'Pending')[3]}</Text>
                        </Col>
                        <Col span={6} className="text-end">
                            <Text type="secondary">{dataUnresolved.pending}</Text>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={12} sm={12} xs={24}>
                <Card className="styleCard" style={{ minHeight: 305 }}>
                    <Row gutter={24} justify="space-between">
                        <Col span={12}>
                            <Title className="mb-0" level={5}>{t('tasks.title', 'Tasks')}</Title>
                            <Text style={{ fontSize: 12 }} type="secondary">{t('today', 'Today')}</Text>
                        </Col>
                        <Col span={12} className="text-end">
                            <Button type="link" className="p-0 m-0 h-auto">
                                {t('tasks.view', 'View all')}
                            </Button>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={24} justify="space-between">
                        <Col span={18}>
                            <Input size="small" className="px-0" placeholder={t('tasks.create', 'Create new task')} bordered={false} />
                        </Col>
                        <Col span={6} className="text-end">
                            <Button
                                type="ghost"
                                shape="circle"
                                size="small"
                                icon={<PlusOutlined style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.45)' }} />}
                                style={{
                                    minWidth: '18px',
                                    width: '18px',
                                    height: '18px',
                                }}
                            />
                        </Col>
                        {dataTasks.data.map(x => (
                            <Fragment>
                                <Divider className="my-3" />
                                <Col span={18}>
                                    <Checkbox checked={!!x.status}>{x.title}</Checkbox>
                                </Col>
                                <Col span={6} className="text-end px-0">
                                    <TagPriority level={x.level} />
                                </Col>
                            </Fragment>
                        ))}
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default CardTask;