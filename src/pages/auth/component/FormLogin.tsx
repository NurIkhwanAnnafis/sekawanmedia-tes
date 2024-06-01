import { Button, Col, Form, Input, Row, Typography } from 'antd';
import React, { useContext } from 'react';
import { ContextAuth } from '../context/ContextProvider';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

const FormLogin: React.FC = () => {
  const { t } = useTranslation(['auth', 'base']);
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
            rules={[{ required: true, message: t('error.email', 'Email must be filled') }]}>
            <Input placeholder={t('placeholder.email', 'Please fill in email')} />
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
              {t('forgot', 'Forgot password?')}
            </Text>
          </Row>
        </Col>
        <Col span={24}>
          <Form.Item
            name="password"
            className="text-start"
            rules={[
              { required: true, message: t('error.password1', 'Please fill in Password') },
              { min: 8, message: t('error.password2', 'Password must be minimum 8 characters') }
            ]}
          >
            <Input.Password placeholder={t('placeholder.password', "Please fill in Password")} />
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
          {t('login', 'Log in')}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
