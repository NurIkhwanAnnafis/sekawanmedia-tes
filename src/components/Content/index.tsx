import { Layout } from 'antd';
import React from 'react';
import './index.scss';

interface Props {
  children: any;
}

const { Content } = Layout;

const Index: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Layout className="vh-100" style={{ overflow: 'hidden', background: '#F7F8FC' }}>
      <Content style={{ marginTop: 98, overflowY: 'auto', zIndex: 12 }}>
        <div className="box-content">{children}</div>
      </Content>
    </Layout>
  );
};

export default Index;
