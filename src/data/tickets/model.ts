export type IProducts = {
    id: number;
    title: string;
    rating: number;
    brand: string;
    returnPolicy: string;
    thumbnail: string;
}

export type ITickets = {
    products: Array<IProducts>;
    total: number;
    skip: number;
    limit: number;
}

export type IParams = {
    search?: string;
    limit?: number;
    skip?: number;
    sortBy?: string;
    order?: 'asc' | 'desc'
}

export type IPayload = { title: string; customer: string; rating: number }