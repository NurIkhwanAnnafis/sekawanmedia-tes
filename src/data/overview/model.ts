export type ISummary = {
    unresolved: number;
    overdue: number;
    open: number;
    hold: number;
}

export type IGraph = {
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

export type IUnresolved = {
    waiting_for_request: number;
    waiting_for_response: number;
    waiting_for_developer: number;
    pending: number;
}

export type ITasks = {
    data: Array<{ id: number, title: string, level: number, status: number }>
}