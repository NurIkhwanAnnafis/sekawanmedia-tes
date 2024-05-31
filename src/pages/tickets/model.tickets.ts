export interface IProducts {
    id: number;
    title: string;
    rating: number;
    brand: string;
    returnPolicy: string;
    thumbnail: string;
}

export interface ITickets {
    products: Array<{
        id: number;
        title: string;
        rating: number;
        brand: string;
        returnPolicy: string;
        thumbnail: string;
    }>;
    total: number;
    skip: number;
    limit: number;
}

export interface IParams {
    search?: string;
    limit?: number;
    skip?: number;
    sortBy?: string;
    order?: 'asc' | 'desc'
}

export interface IFormCreate { title: string; customer: string; rating: number }

export interface IContextTickets {
    dataTickets: ITickets;
    handleChangePage: (page: number, size: number) => void;
    loading: boolean;
    modalCreate: boolean;
    handleOpenModalCreate: () => void;
    handleCloseModalCreate: () => void;
    handleSubmit: (values: IFormCreate) => void;
    modalSelected: {
        type: 'approve' | 'reject' | '';
        values: IProducts | null;
        open: boolean;
    },
    handleSetModalSelected: (type: 'approve' | 'reject' | '', values: IProducts | null, open: boolean) => void,
    handleUpdateStatus: () => void
}
