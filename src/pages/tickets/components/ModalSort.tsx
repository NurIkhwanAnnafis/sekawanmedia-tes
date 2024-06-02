import { Button, Form, Modal, Select } from "antd";
import { useContext } from "react";
import { ContextTickets } from "../context/ContextProvider";
import { useTranslation } from "react-i18next";
import { ContextTheme } from "../../../config/theme";

const { Option } = Select;

const ModalSort: React.FC = () => {
    const { t } = useTranslation(['ticket', 'base']);
    const [form] = Form.useForm();
    const {
        modalSort,
        handleSubmitSort,
        handleCloseModalSort,
        params,
    } = useContext(ContextTickets);
    const {
        theme,
    } = useContext(ContextTheme);

    return (
        <Modal
            title="Sort"
            visible={modalSort}
            footer={null}
            maskClosable
            onCancel={() => {
                handleCloseModalSort();
                form.resetFields();
            }}
            className={`custom-modal ${theme}`}
        >
            <Form
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                onFinish={values => handleSubmitSort(values.sortBy, values.order)}
                autoComplete="off"
                layout="vertical"
                initialValues={{ sortBy: params.sortBy, order: params.order }}
            >
                <Form.Item
                    label={t('modal.sort.sortBy', 'Sort by')}
                    name="sortBy"
                    rules={[{ required: true, message: t('modal.sort.errorSortBy', 'Please select sort by!') }]}
                >
                    <Select
                        onChange={(value) => form.setFieldsValue({ sortBy: value })}
                        allowClear
                    >
                        <Option value="name">{t('column.0', 'Ticket details', { returnObjects: true })}</Option>
                        <Option value="brand">{t('column.1', 'Customer name', { returnObjects: true })}</Option>
                        <Option value="rating">{t('column.3', 'Priority', { returnObjects: true })}</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label={t('modal.sort.order', 'Order')}
                    name="order"
                    rules={[{ required: true, message: t('modal.sort.errorOrder', 'Please select order!') }]}
                >
                    <Select
                        onChange={(value) => form.setFieldsValue({ order: value })}
                        allowClear
                    >
                        <Option value="asc">ASC</Option>
                        <Option value="desc">DESC</Option>
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

export default ModalSort;
