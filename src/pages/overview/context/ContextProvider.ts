import { createContext } from "react";
import { IContextSummary } from "../model.overview";

export const defaultValue = {
    summary: {
        overdue: 0, hold: 0, open: 0, unresolved: 0
    },
    dataGraph: {
        graph: { today: [], yesterday: [] },
        summary: {
            average_first_response_time: 0,
            average_response_time: 0,
            received: 0,
            resolution_within_sla: 0,
            resolved: 0,
        }
    },
    dataUnresolved: {
        waiting_for_request: 0,
        waiting_for_response: 0,
        waiting_for_developer: 0,
        pending: 0,
    },
    dataTasks: { data: [] },
    newTask: '',
    handleChange: (value: string) => { },
    handleCreateNewTask: () => { },
    isAdmin: false
}

export const ContextOverview = createContext<IContextSummary>(defaultValue)