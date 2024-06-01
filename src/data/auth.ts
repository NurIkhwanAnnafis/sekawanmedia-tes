import { ErrorNotification } from '../components/Notification/CustomNotification';
import httpService from '../services/http.service';
import { deleteLocalUser, setUser } from '../utils/localStorage';

type IPayloadLogin = { email: string; password: string; role: 'admin' | 'guest' | '' }
type ILogin = { email: string; password: string; role: 'admin' | 'guest' | ''; token: string }

export const requestLogin = async (payload: IPayloadLogin): Promise<ILogin> => {
  try {
    const res: ILogin = await httpService.post(`auth/login/${payload.role}`, payload);
    setUser(res);

    return res;
  } catch (error: any) {
    ErrorNotification(error);

    return { email: '', password: '', role: '', token: '' };
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
