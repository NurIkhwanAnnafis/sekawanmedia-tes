import { Button, Form, Modal, Select } from "antd";
import { useContext } from "react";
import { ContextTickets } from "../context/ContextProvider";

const { Option } = Select;

const ModalSort: React.FC = () => {
    const [form] = Form.useForm();
    const {
        modalSort,
        handleSubmitSort,
        handleCloseModalSort,
        params,
    } = useContext(ContextTickets);

    return (
        <Modal
            title="Sort"
            visible={modalSort}
            footer={null}
            maskClosable
            onCancel={handleCloseModalSort}
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
                    label="Sort by"
                    name="sortBy"
                    rules={[{ required: true, message: 'Please select sort by!' }]}
                >
                    <Select
                        onChange={(value) => form.setFieldsValue({ sortBy: value })}
                        allowClear
                    >
                        <Option value="name">Ticket Details</Option>
                        <Option value="brand">Customer Name</Option>
                        <Option value="rating">Priority</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Order"
                    name="order"
                    rules={[{ required: true, message: 'Please select order!' }]}
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
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalSort;
