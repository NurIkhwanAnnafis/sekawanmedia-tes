import React from 'react';
import Wrapper from '../../components/Wrapper';
import { Card, Col, Row } from 'antd';
import CardSummary from './components/CardSummary';
import CardTask from './components/CardTask';
import CardChart from './components/CardChart';
import { ContextOverview } from './context/ContextProvider';
import { useOverviewList } from './context/useOverviewList';

const Overview: React.FC = () => {
  const {
    summary,
    dataGraph,
    dataUnresolved,
    dataTasks,
    handleChange,
    handleCreateNewTask,
    newTask,
    isAdmin,
  } = useOverviewList();

  return (
    <Wrapper>
      <ContextOverview.Provider
        value={{
          summary,
          dataGraph,
          dataUnresolved,
          dataTasks,
          handleChange,
          handleCreateNewTask,
          newTask,
          isAdmin,
        }}
      >
        <Row gutter={[24, 24]} style={{ padding: '0px 6px' }}>
          <Col span={24}>
            <CardSummary />
          </Col>
          <Col span={24}>
            <CardChart />
          </Col>
          <Col span={24}>
            <CardTask />
          </Col>
        </Row>
      </ContextOverview.Provider>
    </Wrapper>
  );
};

export default Overview;
