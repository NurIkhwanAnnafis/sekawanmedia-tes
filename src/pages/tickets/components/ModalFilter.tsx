import { Button, Form, Input, Modal } from "antd";
import { useContext } from "react";
import { ContextTickets } from "../context/ContextProvider";
import { useTranslation } from "react-i18next";
import { ContextTheme } from "../../../config/theme";

const ModalFilter: React.FC = () => {
    const { t } = useTranslation(['ticket', 'base']);
    const [form] = Form.useForm();
    const {
        params,
        modalFilter,
        handleSubmitFilter,
        handleCloseModalFilter,
    } = useContext(ContextTickets);
    const {
        theme,
    } = useContext(ContextTheme);

    return (
        <Modal
            title={t('filter', 'Filter')}
            visible={modalFilter}
            footer={null}
            maskClosable
            onCancel={() => {
                handleCloseModalFilter();
                form.resetFields();
            }}
            className={`custom-modal ${theme}`}
        >
            <Form
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                onFinish={values => handleSubmitFilter(values.search)}
                autoComplete="off"
                layout="vertical"
                initialValues={{ q: params.q }}
            >
                <Form.Item
                    label={t('modal.filter.search', 'Search')}
                    name="q"
                    rules={[{ required: true, message: t('modal.filter.error', 'Please input search') }]}
                >
                    <Input />
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

export default ModalFilter;
