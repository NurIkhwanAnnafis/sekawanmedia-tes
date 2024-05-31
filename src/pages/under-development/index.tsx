import React from 'react';
import { Typography } from 'antd';
import Wrapper from '../../components/Wrapper';

const { Title } = Typography;

const Tickets: React.FC = () => {
    return (
        <Wrapper>
            <Title type="secondary" level={5}>Under Development</Title>
        </Wrapper>
    );
};

export default Tickets;