import { createContext } from "react";
import { IContextTickets, IFormCreate, IParams, IProducts } from "../model.tickets";

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
    handleUpdateStatus: () => { },
    modalSort: false,
    handleOpenModalSort: () => { },
    handleCloseModalSort: () => { },
    handleSubmitSort: (sortBy: 'name' | 'brand' | 'rating' | '', order: 'asc' | 'desc' | '') => { },
    modalFilter: false,
    handleOpenModalFilter: () => { },
    handleCloseModalFilter: () => { },
    handleSubmitFilter: (search: string) => { },
    params: {
        limit: 10,
        order: 'asc',
        search: '',
        skip: 0,
        sortBy: '',
    } as IParams,
    handleShowDetail: (id: string | number) => { },
}

export const ContextTickets = createContext<IContextTickets>(defaultValuesTickets);