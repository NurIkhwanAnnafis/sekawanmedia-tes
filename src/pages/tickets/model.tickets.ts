export interface IProducts {
    id: number;
    title: string;
    rating: number;
    brand: string;
    returnPolicy: string;
    thumbnail: string;
    description?: string;
    sku?: string;
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
    q?: string;
    limit?: number;
    skip?: number;
    sortBy?: 'name' | 'brand' | 'rating' | '';
    order?: 'asc' | 'desc' | ''
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
    };
    handleSetModalSelected: (type: 'approve' | 'reject' | '', values: IProducts | null, open: boolean) => void;
    handleUpdateStatus: () => void;
    modalSort: boolean;
    handleOpenModalSort: () => void;
    handleCloseModalSort: () => void;
    handleSubmitSort: (sortBy: 'name' | 'brand' | 'rating' | '', order: 'asc' | 'desc' | '') => void;
    modalFilter: boolean;
    handleOpenModalFilter: () => void;
    handleCloseModalFilter: () => void;
    handleSubmitFilter: (search: string) => void;
    params: IParams,
    handleShowDetail: (id: string | number) => void;
}
