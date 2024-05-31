import { Button, Col, Row } from 'antd';
import { ReactComponent as Icon } from '../../../../assets/icons/icon_info.svg';
import './index.scss';

interface Props {
  isRead?: boolean;
  title: string;
  description: string;
  onClick: () => void;
}

const CardNotificationPopup: React.FC<Props> = (props) => {
  const { isRead = false, title, description, onClick } = props;

  return (
    <Row gutter={25} className={`card__notification_popup ${isRead ? 'read' : ''}`}>
      <Col span={1}>
        <Icon />
      </Col>
      <Col span={22}>
        <p className="mb-0">
          <b>{title}</b>
        </p>
        <p style={{ wordBreak: 'break-all' }}>
          {description}
          <span>
            <Button type="link" size="small" onClick={onClick}>
              Lihat Detail
            </Button>
          </span>
        </p>
      </Col>
    </Row>
  );
};

export default CardNotificationPopup;
