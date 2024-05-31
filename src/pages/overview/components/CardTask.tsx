import { Button, Card, Checkbox, Col, Divider, Input, Row, Tag, Typography } from "antd";
import React, { Fragment, useContext } from "react"
import "../configs/style.scss";
import { ContextOverview } from "../context/ContextProvider";
import { PlusOutlined } from "@ant-design/icons";
import TagPriority from "./TagPriority";

const { Title, Text } = Typography;

const CardTask: React.FC = () => {
    const {
        dataUnresolved,
        dataTasks,
    } = useContext(ContextOverview);

    return (
        <Row gutter={[24, 24]}>
            <Col span={12} sm={12} xs={24}>
                <Card className="styleCard" style={{ minHeight: 305 }}>
                    <Row gutter={24} justify="space-between">
                        <Col span={12}>
                            <Title className="mb-0" level={5}>Unresolved tickets</Title>
                            <Text style={{ fontSize: 12 }} type="secondary">Group: <Text>Support</Text></Text>
                        </Col>
                        <Col span={12} className="text-end">
                            <Button type="link" className="p-0 m-0 h-auto">
                                View details
                            </Button>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={24} justify="space-between">
                        <Col span={18}>
                            <Text>Waiting on Feature Request</Text>
                        </Col>
                        <Col span={6} className="text-end">
                            <Text type="secondary">{dataUnresolved.waiting_for_request}</Text>
                        </Col>
                        <Divider className="my-3" />
                        <Col span={18}>
                            <Text>Awaiting Customer Response</Text>
                        </Col>
                        <Col span={6} className="text-end">
                            <Text type="secondary">{dataUnresolved.waiting_for_response}</Text>
                        </Col>
                        <Divider className="my-3" />
                        <Col span={18}>
                            <Text>Awaiting Developer Fix</Text>
                        </Col>
                        <Col span={6} className="text-end">
                            <Text type="secondary">{dataUnresolved.waiting_for_developer}</Text>
                        </Col>
                        <Divider className="my-3" />
                        <Col span={18}>
                            <Text>Pending</Text>
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
                            <Title className="mb-0" level={5}>Tasks</Title>
                            <Text style={{ fontSize: 12 }} type="secondary">Today</Text>
                        </Col>
                        <Col span={12} className="text-end">
                            <Button type="link" className="p-0 m-0 h-auto">
                                View all
                            </Button>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={24} justify="space-between">
                        <Col span={18}>
                            <Input size="small" className="px-0" placeholder="Create new task" bordered={false} />
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