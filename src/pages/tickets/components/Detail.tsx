import { Fragment, ReactElement, useContext } from "react";
import { Button, Card, Col, Image, Modal, Row, Typography } from "antd";
import Wrapper from "../../../components/Wrapper";
import { useTicketDetail } from "../context/useTicketDetail";
import moment from "moment";
import ColumnStatus from "./ColumnStatus";
import { Trans, useTranslation } from "react-i18next";
import { ContextTheme } from "../../../config/theme";

const { Title, Text } = Typography;

const ValueSection = ({ label, value }: { label: string, value: string | Element | ReactElement }) => (
    <Row gutter={24} className="mb-1">
        <Col md={6} sm={12}>
            <Text type="secondary">{label}</Text>
        </Col>
        <Col md={18} sm={12}>
            <Text>{value}</Text>
        </Col>
    </Row>
)

const Detail = () => {
    const { t } = useTranslation(['ticket', 'base']);
    const {
        detail,
        handleBack,
        modal,
        setModal,
        handleUpdateStatus,
        isAdmin,
    } = useTicketDetail();
    const {
        theme,
    } = useContext(ContextTheme);

    return (
        <Wrapper>
            <Card className={`styleCardTicket ${theme}`}>
                <Row gutter={24}>
                    <Col span={24}>
                        <Title level={5}>{t('detail.header', 'Detail Ticket')}</Title>
                    </Col>
                </Row>

                <ValueSection label={t('detail.profile', 'Profile')} value={<Image width={80} src={detail.thumbnail} />} />
                <ValueSection label={t('detail.title', 'Title')} value={detail.title || '-'} />
                <ValueSection label={t('detail.code', "Code")} value={detail.sku || '-'} />
                <ValueSection label={t('detail.policy', "Policy")} value={detail.returnPolicy || '-'} />
                <ValueSection label={t('detail.customer', 'Customer Name')} value={detail.brand || '-'} />
                <ValueSection label={t('detail.date', "Date")} value={moment().format('DD MMMM YYYY h:mm a')} />
                <ValueSection label={t('detail.description', "Description")} value={detail.description || '-'} />
                <ValueSection label={t('detail.priority', "Priority")} value={<ColumnStatus rating={detail.rating} />} />

                <Row gutter={24} className="mt-5">
                    <Col sm={12} xs={0}></Col>
                    <Col sm={12} xs={24} className="text-end">
                        <Button htmlType="button" type="default" onClick={handleBack}>
                            {t('label.cancel', 'Cabcel', { ns: 'base' })}
                        </Button>
                        {isAdmin && (
                            <Fragment>
                                <Button htmlType="button" type="primary" danger className="mx-2" onClick={() => setModal({ open: true, type: 'reject' })}>
                                    {t('action.1', 'Reject', { returnObjects: true })}
                                </Button>
                                <Button htmlType="button" type="primary" onClick={() => setModal({ open: true, type: 'approve' })}>
                                    {t('action.0', 'Approve', { returnObjects: true })}
                                </Button>
                            </Fragment>
                        )}
                    </Col>
                </Row>
            </Card>

            <Modal
                title={modal.type === 'approve' ? t('modal.action.titleApprove', 'Approve Ticket') : t('modal.action.titleReject', 'Reject Ticket')}
                visible={modal.open}
                maskClosable
                onCancel={() => setModal({ type: '', open: false })}
                onOk={handleUpdateStatus}
                className={`custom-modal ${theme}`}
            >
                <Text>
                    <Trans t={t} i18nKey={modal.type === 'approve' ? 'modal.action.descriptionApprove' : 'modal.action.descriptionReject'}>
                        {{ name: detail.title }}
                    </Trans>
                </Text>
            </Modal>
        </Wrapper>
    )
}

export default Detail;
