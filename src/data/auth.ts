import { ErrorNotification } from '../components/Notification/CustomNotification';
import httpService from '../services/http.service';
import { deleteLocalUser, setUser } from '../utils/localStorage';

export const requestLogin = async (data: object) => {
  try {
    const res: any = await httpService.post('/auth/web', data);
    setUser(res.data);

    return res;
  } catch (error: any) {
    return ErrorNotification(error);
  }
};

export const requestLogout = async () => {
  try {
    deleteLocalUser();
    window.location.href = '/login';

    return {};
  } catch (error: any) {
    return ErrorNotification(error);
  }
};
