import './index.scss';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loading: React.FC = () => {
  return (
    <div className="center-content">
      <div className="loading-screen">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />

        <h6 className="text-loading">Loading...</h6>
      </div>
    </div>
  );
};

export default Loading;
