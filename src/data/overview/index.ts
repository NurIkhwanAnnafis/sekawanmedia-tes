import { ErrorNotification } from "../../components/Notification/CustomNotification";
import httpService from "../../services/http.service";
import { IGraph, ISummary, IUnresolved, ITasks } from "./model";

const SERVICE = '/overview/'

const url = {
    summary: 'summary',
    graph: 'graph',
    unresolved: 'summary/unresolved',
    tasks: 'summary/tasks',
}

export const getSummary = async (): Promise<ISummary> => {
    try {
        const res: ISummary = await httpService.get(SERVICE + url.summary);

        return res;
    } catch (error: any) {
        ErrorNotification(error);
        return { overdue: 0, hold: 0, open: 0, unresolved: 0 };
    }
};

export const getGraph = async (): Promise<IGraph> => {
    try {
        const res: IGraph = await httpService.get(SERVICE + url.graph);

        return res;
    } catch (error: any) {
        ErrorNotification(error);
        return {
            graph: { today: [], yesterday: [] },
            summary: {
                average_first_response_time: 0,
                average_response_time: 0,
                received: 0,
                resolution_within_sla: 0,
                resolved: 0,
            }
        };
    }
};

export const getUnresolved = async (): Promise<IUnresolved> => {
    try {
        const res: IUnresolved = await httpService.get(SERVICE + url.unresolved);

        return res;
    } catch (error: any) {
        ErrorNotification(error);
        return {
            waiting_for_request: 0,
            waiting_for_response: 0,
            waiting_for_developer: 0,
            pending: 0,
        };
    }
};

export const getTasks = async (): Promise<ITasks> => {
    try {
        const res: ITasks = await httpService.get(SERVICE + url.tasks);

        return res;
    } catch (error: any) {
        ErrorNotification(error);
        return { data: [] };
    }
};