import { Button, Form, Input, Modal, Select } from "antd";
import { useContext } from "react";
import { ContextTickets } from "../context/ContextProvider";

const { Option } = Select;

const ModalCreate: React.FC = () => {
    const [form] = Form.useForm();
    const {
        modalCreate,
        handleSubmit,
        handleCloseModalCreate,
    } = useContext(ContextTickets);

    return (
        <Modal
            title="Create Ticket"
            visible={modalCreate}
            footer={null}
            maskClosable
            onCancel={handleCloseModalCreate}
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
                    label="Ticket Name"
                    name="title"
                    rules={[{ required: true, message: 'Please input ticket name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Customer Name"
                    name="customer"
                    rules={[{ required: true, message: 'Please input customer name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Priority"
                    name="rating"
                    rules={[{ required: true, message: 'Please select priority!' }]}
                >
                    <Select
                        onChange={(value) => form.setFieldsValue({ rating: value })}
                        allowClear
                    >
                        <Option value={1}>LOW</Option>
                        <Option value={3}>NORMAL</Option>
                        <Option value={5}>HIGH</Option>
                    </Select>
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

export default ModalCreate;
