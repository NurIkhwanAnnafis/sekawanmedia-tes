import React from 'react';
import './auth.scss';
import FormLogin from './component/FormLogin';
import { useAuthForm } from './context/useAuthForm';
import { Avatar, Col, Row, Typography } from 'antd';
import { ContextAuth } from './context/ContextProvider';

const { Text, Title, Link } = Typography;

const Auth: React.FC = () => {
  const { form, handleSubmit, loading, t } = useAuthForm();

  return (
    <ContextAuth.Provider
      value={{
        form,
        handleSubmit,
        loading,
      }}
    >
      <Row gutter={24} className="app" align="middle" justify="center">
        <Col span={20} lg={6} md={12} sm={12} className="box-login">
          <Row className="mb-2">
            <Col span={12} offset={6}>
              <Avatar
                size={52}
                style={{ background: '#5574FF', color: '#ffffff', fontSize: 32, fontWeight: 700 }}>
                D
              </Avatar>
            </Col>
          </Row>
          <Text style={{ color: 'rgba(0, 0, 0, 0.25)', fontWeight: 600, fontSize: 16 }}>
            Dashboard Kit
          </Text>
          <Title level={3}>{t('title', 'Log In to Dashboard Kit')}</Title>
          <Text style={{ color: 'rgba(0, 0, 0, 0.25)', fontWeight: 600 }}>
            {t('description', 'Enter your email and password below')}
          </Text>

          <div className="box-form">
            <FormLogin />
          </div>

          <Text style={{ color: 'rgba(0, 0, 0, 0.25)', fontWeight: 600 }}>
            {t('noAccount.desc1', `Don't have an account?`)}{' '}
            <Link href="sekawanmedia.co.id" target="_blank">
              {t('noAccount.desc2', 'Sign up')}
            </Link>
          </Text>
        </Col>
      </Row>
    </ContextAuth.Provider>
  );
};

export default Auth;
