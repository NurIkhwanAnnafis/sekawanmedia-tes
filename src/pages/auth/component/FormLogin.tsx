import { Button, Col, Form, Input, Row, Typography } from 'antd';
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { ContextAuth } from '../context/ContextProvider';

const { Text } = Typography;

const FormLogin: React.FC = (props) => {
  const {
    form,
    handleSubmit,
    loading,
  } = useContext(ContextAuth);
  const onFinish = (values: any) => {
    handleSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        email: form.email,
        password: form.password,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical">
      <Row gutter={[24, 2]}>
        <Col span={24} style={{ textAlign: 'start' }}>
          <Text type="secondary" strong>
            EMAIL
          </Text>
        </Col>
        <Col span={24}>
          <Form.Item
            name="email"
            className="mb-0 text-start"
            rules={[{ required: true, message: 'Email must be filled' }]}>
            <Input placeholder="Please fill in email" />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row gutter={[24, 2]}>
        <Col span={24} style={{ textAlign: 'start' }}>
          <Row gutter={24} justify="space-between" align="middle" className="mx-0">
            <Text type="secondary" strong>
              PASSWORD
            </Text>
            <Text disabled style={{ cursor: 'pointer', fontSize: 12 }}>
              Forgot password?
            </Text>
          </Row>
        </Col>
        <Col span={24}>
          <Form.Item
            name="password"
            className="text-start"
            rules={[
              { required: true, message: 'Please fill in Password.' },
              { min: 8, message: 'Password must be minimum 8 characters.' }
            ]}
          >
            <Input.Password placeholder="Please fill in Password" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item className="mt-3">
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: '100%', borderRadius: 4 }}
          loading={loading}
        >
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = (state: any) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, null)(FormLogin);
