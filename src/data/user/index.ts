import { ErrorNotification } from "../../components/Notification/CustomNotification";
import httpService from "../../services/http.service";
import { IUser } from "./model";

const SERVICE = '/user/'

export const getUser = async (role: 'admin' | 'guest' = 'guest'): Promise<IUser> => {
    try {
        const res: IUser = await httpService.get(SERVICE + `/${role}`);

        return res;
    } catch (error: any) {
        ErrorNotification(error);
        return { name: '', profile_image: '', role: '' };
    }
};