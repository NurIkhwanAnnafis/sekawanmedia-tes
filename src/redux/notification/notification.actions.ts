import { authTypes } from './notification.types';

export const setAddNotification = (data: { id: string | number; title: string }) => ({
  type: authTypes.ADD_NOTIFICATION,
  payload: data,
});

export const setEmptyNotification = () => ({
  type: authTypes.RESET_NOTIFICATION,
});
