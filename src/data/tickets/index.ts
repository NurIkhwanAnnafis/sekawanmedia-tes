import { ErrorNotification } from "../../components/Notification/CustomNotification";
import { URL_API_TICKETS } from "../../config/keys";
import httpService from "../../services/http.service";
import { ITickets, IParams, IPayload, IProducts } from "./model";

const SERVICE = '/products'

const url = {
    add: '/add'
}

export const getTickets = async (params: IParams): Promise<ITickets> => {
    try {
        const res: ITickets = await httpService.get(SERVICE, { params, baseURL: URL_API_TICKETS });

        return res;
    } catch (error: any) {
        ErrorNotification(error);
        return {
            products: [],
            limit: 0,
            skip: 0,
            total: 0,
        };
    }
};

export const getTicketsSearch = async (q: string): Promise<ITickets> => {
    const params = {
        q,
        limit: 10,
        skip: 0,
    }

    try {
        const res: ITickets = await httpService.get(`${SERVICE}/search`, { params, baseURL: URL_API_TICKETS });

        return res;
    } catch (error: any) {
        ErrorNotification(error);
        return {
            products: [],
            limit: 0,
            skip: 0,
            total: 0,
        };
    }
};

export const getTicketsDetail = async (id: string | number): Promise<IProducts> => {
    try {
        const res: IProducts = await httpService.get(SERVICE + `/${id}`, { baseURL: URL_API_TICKETS });

        return res;
    } catch (error: any) {
        ErrorNotification(error);
        return {
            id: 0,
            title: '',
            rating: 0,
            brand: '',
            returnPolicy: '',
            thumbnail: '',
            description: '',
            sku: '',
        };
    }
};

export const createTickets = async (payload: IPayload): Promise<void> => {
    try {
        await httpService.post(SERVICE + url.add, JSON.stringify(payload), { baseURL: URL_API_TICKETS });
    } catch (error: any) {
        throw new Error(error)
    }
};

export const updateTickets = async (payload: IPayload, id: string | number): Promise<void> => {
    try {
        await httpService.put(SERVICE + `/${id}`, JSON.stringify(payload), { baseURL: URL_API_TICKETS });
    } catch (error: any) {
        throw new Error(error)
    }
};