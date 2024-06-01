/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import Sider from '../Sider';
import Header from '../Header';
import Content from '../Content';
import { Layout } from 'antd';
import { connect, useDispatch } from 'react-redux';
import Loading from '../Loading/Loading';
import { setIsMobile as actionSetIsMobile } from '../../redux/layout/layout.actions';

interface Props {
  children: any;
  title: string;
  loading?: boolean;
  id: string;
}

const Main: React.FC<Props> = (props) => {
  const { children, title, loading, id } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth <= 575) setIsMobile(true);
    dispatch(actionSetIsMobile(window.innerWidth <= 768));

    addEventListener('resize', handleCheckMobile);
  }, []);

  const handleCheckMobile = () => {
    const isMobile = window.innerWidth <= 1000;
    setIsMobile(isMobile);
    dispatch(actionSetIsMobile(window.innerWidth <= 768));
  };

  return (
    <Layout>
      <Header
        title={title}
        id={id}
        isMobile={isMobile}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <Sider isMobile={isMobile} collapsed={collapsed} setCollapsed={setCollapsed} />
      <Content>
        {loading && <Loading />}
        {children}
      </Content>
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  loading: state.layout.loading,
});

export default connect(mapStateToProps, null)(Main);
