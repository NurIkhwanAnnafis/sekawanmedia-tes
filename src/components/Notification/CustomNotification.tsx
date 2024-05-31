import { notification } from 'antd';

interface Props {
  description?: string;
}

export const SuccessNotification = ({ description }: Props) =>
  notification.success({
    message: 'Success!',
    placement: 'topRight',
    description,
  });

export const ErrorNotification = ({ description }: Props) => 
  notification.error({
    message: 'Error!',
    placement: 'topRight',
    description,
  });
