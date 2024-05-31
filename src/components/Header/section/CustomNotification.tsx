import { notification } from 'antd';
import './customNotification.scss';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface Props {
  type: NotificationType;
  title: string;
  description: string;
}

export const openNotificationWithIcon = (props: Props) => {
  const { type, title, description } = props;
  const className = 'notification__outlet';

  notification[type]({
    message: <b>{title}</b>,
    description,
    className,
  });
};
