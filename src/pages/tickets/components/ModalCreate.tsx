import { Button, Form, Input, Modal, Select } from "antd";
import { useContext } from "react";
import { ContextTickets } from "../context/ContextProvider";
import { useTranslation } from "react-i18next";
import { ContextTheme } from "../../../config/theme";

const { Option } = Select;

const ModalCreate: React.FC = () => {
    const { t } = useTranslation(['ticket', 'base']);
    const [form] = Form.useForm();
    const {
        modalCreate,
        handleSubmit,
        handleCloseModalCreate,
    } = useContext(ContextTickets);
    const {
        theme,
    } = useContext(ContextTheme);

    return (
        <Modal
            title={t('modal.create.title', 'Create Ticket')}
            visible={modalCreate}
            footer={null}
            maskClosable
            onCancel={() => {
                handleCloseModalCreate();
                form.resetFields();
            }}
            className={`custom-modal ${theme}`}
        >
            <Form
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                onFinish={handleSubmit}
                autoComplete="off"
                layout="vertical"
            >
                <Form.Item
                    label={t('modal.create.label.0', 'Ticket Name', { returnObjects: true })}
                    name="title"
                    rules={[{ required: true, message: String(t('modal.create.error.0', 'Please input ticket name!', { returnObjects: true })) }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t('modal.create.label.1', 'Customer Name', { returnObjects: true })}
                    name="customer"
                    rules={[{ required: true, message: String(t('modal.create.error.1', 'Please input customer name!', { returnObjects: true })) }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t('modal.create.label.2', 'Priority', { returnObjects: true })}
                    name="rating"
                    rules={[{ required: true, message: String(t('modal.create.error.2', 'Please select priority!', { returnObjects: true })) }]}
                >
                    <Select
                        onChange={(value) => form.setFieldsValue({ rating: value })}
                        allowClear
                    >
                        <Option value={1}>{t('status.1', 'LOW', { returnObjects: true })}</Option>
                        <Option value={3}>NORMAL</Option>
                        <Option value={5}>{t('status.0', 'HIGH', { returnObjects: true })}</Option>
                    </Select>
                </Form.Item>
                <Form.Item className="text-end mb-0 mt-3">
                    <Button type="primary" htmlType="submit">
                        {t('label.submit', 'Submit', { ns: 'base' })}
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalCreate;
