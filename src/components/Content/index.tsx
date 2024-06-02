import { Layout } from 'antd';
import React, { useContext } from 'react';
import './index.scss';
import { ContextTheme } from '../../config/theme';

interface Props {
  children: any;
}

const { Content } = Layout;

const Index: React.FC<Props> = (props) => {
  const { children } = props;
  const {
    theme,
  } = useContext(ContextTheme);

  return (
    <Layout className="vh-100" style={{ overflow: 'hidden', background: theme ? '#3a3f51' :'#F7F8FC' }}>
      <Content style={{ marginTop: 98, overflowY: 'auto', zIndex: 12 }}>
        <div className={`box-content ${theme}`}>{children}</div>
      </Content>
    </Layout>
  );
};

export default Index;
