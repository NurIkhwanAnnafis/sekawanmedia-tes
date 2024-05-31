import { createContext } from "react";
import { IContextTickets, IFormCreate, IProducts } from "../model.tickets";

export const defaultValuesTickets = {
    dataTickets: {
        products: [],
        total: 0,
        skip: 0,
        limit: 0,
    },
    handleChangePage: (page: number, size: number) => { },
    loading: false,
    modalCreate: false,
    handleOpenModalCreate: () => { },
    handleCloseModalCreate: () => { },
    handleSubmit: (values: IFormCreate) => { },
    modalSelected: { type: '', values: null, open: false } as { type: '', values: IProducts | null, open: boolean },
    handleSetModalSelected: (type: 'approve' | 'reject' | '', values: IProducts | null, open: boolean) => { },
    handleUpdateStatus: () => { }
}

export const ContextTickets = createContext<IContextTickets>(defaultValuesTickets);