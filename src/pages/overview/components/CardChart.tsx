import { Card, Col, Row, Typography } from "antd";
import React, { useContext } from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import "../configs/style.scss";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { ContextOverview } from "../context/ContextProvider";
import { convertSecondstoHours, convertSecondstoMinutes } from "../configs/helper";

const { Title: TitleText, Text } = Typography;

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const CardChart: React.FC = () => {
    const {
        dataGraph: { graph, summary }
    } = useContext(ContextOverview);
    const labels = [];
    for (let i = 0; i < 13; i++) {
        labels.push(i);

    }

    const data: any = {
        labels,
        datasets: [
            {
                label: "Today",
                data: labels.map((id: number) => graph.today.find(x => x.id === id)?.total || 0),
                borderColor: "rgb(53, 162, 235)",
                cubicInterpolationMode: "monotone",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
            {
                label: "Yesterday",
                data: labels.map((id: number) => graph.yesterday.find(x => x.id === id)?.total || 0),
                borderColor: "rgb(223,224,235)",
                cubicInterpolationMode: "monotone",
                backgroundColor: "rgba(223,224,235, 0.5)",
            },
        ],
    };

    const options = {
        responsive: true,
        interaction: {
            intersect: false,
        },
        plugins: {
            type: "line",
            legend: {
                position: "top" as const,
                align: "end" as const,
            },

            title: {
                display: true,
                text: `as of ${moment().format('DD MMM YYYY, h:mm a')}`,
                position: "top" as const,
                align: 'start' as const
            },
        },
        scales: {
            x: {
                height: '100%',
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: true,
                },
                min: 0,
                max: 70
            }
        }
    };

    return (
        <Row gutter={[0, 0]}>
            <Col md={16} sm={24} xs={24}>
                <Card className="styleCardOnlyLeft" style={{ textAlign: 'start' }}>
                    <TitleText className="mb-0" level={5}>Today's trends</TitleText>
                    <Line options={options} data={data} />
                </Card>
            </Col>
            <Col md={8} sm={24} xs={24}>
                <Row gutter={24}>
                    <Col span={24}>
                        <Card className="styleCardOnlyRight" style={{ textAlign: 'center' }}>
                            <Text strong>Resolved</Text>
                            <TitleText level={5} className="mt-1 mb-0">{summary.resolved}</TitleText>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card className="styleCardOnlyRight" style={{ textAlign: 'center' }}>
                            <Text strong>Received</Text>
                            <TitleText level={5} className="mt-1 mb-0">{summary.received}</TitleText>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card className="styleCardOnlyRight" style={{ textAlign: 'center' }}>
                            <Text strong>Average First response time</Text>
                            <TitleText level={5} className="mt-1 mb-0">{convertSecondstoMinutes(summary.average_first_response_time)}</TitleText>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card className="styleCardOnlyRight" style={{ textAlign: 'center' }}>
                            <Text strong>Average response time</Text>
                            <TitleText level={5} className="mt-1 mb-0">{convertSecondstoHours(summary.average_response_time)}</TitleText>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card className="styleCardOnlyRight" style={{ textAlign: 'center' }}>
                            <Text strong>Resolution within SLA</Text>
                            <TitleText level={5} className="mt-1 mb-0">{summary.resolution_within_sla}%</TitleText>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default CardChart;