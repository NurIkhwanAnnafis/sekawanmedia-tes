import { Button, Form, Input, Modal } from "antd";
import { useContext } from "react";
import { ContextTickets } from "../context/ContextProvider";

const ModalFilter: React.FC = () => {
    const [form] = Form.useForm();
    const {
        params,
        modalFilter,
        handleSubmitFilter,
        handleCloseModalFilter,
    } = useContext(ContextTickets);

    return (
        <Modal
            title="Filter"
            visible={modalFilter}
            footer={null}
            maskClosable
            onCancel={handleCloseModalFilter}
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
                    label="Search"
                    name="q"
                    rules={[{ required: true, message: 'Please input search!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item className="text-end mb-0 mt-3">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalFilter;
