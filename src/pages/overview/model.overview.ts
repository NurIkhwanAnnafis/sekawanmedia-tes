export interface ISummary {
    unresolved: number;
    overdue: number;
    open: number;
    hold: number;
}

export interface IGraph {
    graph: {
        today: Array<{ id: number, total: number }>;
        yesterday: Array<{ id: number, total: number }>;
    },
    summary: {
        resolved: number;
        received: number;
        average_first_response_time: number;
        average_response_time: number;
        resolution_within_sla: number;
    }
}

export interface IUnresolved {
    waiting_for_request: number;
    waiting_for_response: number;
    waiting_for_developer: number;
    pending: number;
}

export interface ITasks {
    data: Array<{ id: number, title: string, level: number, status: number }>
}

export interface IContextSummary {
    summary: ISummary;
    dataGraph: IGraph;
    dataUnresolved: IUnresolved;
    dataTasks: ITasks;
    newTask: string;
    handleChange: (value: string) => void;
    handleCreateNewTask: () => void;
    isAdmin: boolean;
}