import { useEffect, useState } from "react"
import { IFormCreate, IParams, IProducts, ITickets } from "../model.tickets";
import { defaultValuesTickets } from "./ContextProvider";
import { getTickets, createTickets, updateTickets } from "../../../data/tickets";
import { ErrorNotification, SuccessNotification } from "../../../components/Notification/CustomNotification";
import { useDispatch } from "react-redux";
import { setLoading as setLoadingGlobal } from "../../../redux/layout/layout.actions";

interface IParamsHandleFetch {
    page: number;
    size: number;
}

export const useTicketList = () => {
    const dispatch = useDispatch();
    const [dataTickets, setDataTickets] = useState<ITickets>(defaultValuesTickets.dataTickets);
    const [loading, setLoading] = useState<boolean>(false);
    const [params, setParams] = useState<IParams>({
        limit: 10,
        order: 'asc',
        q: '',
        skip: 0,
        sortBy: '',
    });
    const [modalCreate, setModalCreate] = useState<boolean>(false);
    const [modalSelected, setModalSelected] = useState<{
        type: 'approve' | 'reject' | '';
        values: IProducts | null;
        open: boolean;
    }>({ type: '', values: null, open: false })
    const [modalSort, setModalSort] = useState<boolean>(false);
    const [modalFilter, setModalFilter] = useState<boolean>(false);

    const handleFetch = async (values?: IParamsHandleFetch) => {
        setLoading(true);
        const currentPage = ((values?.page || params.skip || 0) + 1) * 10

        const currentParams = {
            limit: values?.size || params.limit,
            skip: currentPage,
            ...params.sortBy && {
                order: params.order,
                sortBy: params.sortBy,
            },
            ...params.q && { q: params.q },
        }

        const res = await getTickets(currentParams);
        setDataTickets(res);
        setLoading(false);
    }

    const handleChangePage = (page: number, size: number) => setParams(prev => ({ ...prev, skip: page - 1, limit: size }));

    const handleOpenModalCreate = () => setModalCreate(true);
    const handleCloseModalCreate = () => setModalCreate(false);

    const handleSubmit = async (values: IFormCreate) => {
        dispatch(setLoadingGlobal(true));
        try {
            await createTickets(values);
            handleCloseModalCreate();
            SuccessNotification({ description: 'Ticket Successfully Created' });
            handleFetch({ page: params.skip || 0, size: params.limit || 0 });
        } catch (error: any) {
            ErrorNotification(error);
        } finally {
            dispatch(setLoadingGlobal(false));
        }
    }

    const handleSetModalSelected = (type: 'approve' | 'reject' | '', values: IProducts | null, open: boolean) => setModalSelected({ type, values, open });

    const handleUpdateStatus = async () => {
        dispatch(setLoadingGlobal(true));

        const payload = {
            title: modalSelected.values?.title || '',
            customer: modalSelected.values?.brand || '',
            rating: modalSelected.values?.rating || 0,
            status: modalSelected.type,
        }

        try {
            await updateTickets(payload, modalSelected.values?.id || '');
            handleSetModalSelected("", null, false);
            SuccessNotification({ description: 'Ticket Successfully Updated' });
            handleFetch({ page: params.skip || 0, size: params.limit || 0 });
        } catch (error: any) {
            ErrorNotification(error);
        } finally {
            dispatch(setLoadingGlobal(false));
        }
    }

    const handleOpenModalSort = () => setModalSort(true);
    const handleCloseModalSort = () => setModalSort(false);

    const handleSubmitSort = (sortBy: 'name' | 'brand' | 'rating' | '', order: 'asc' | 'desc' | '') => {
        setParams(prev => ({ ...prev, sortBy, order }));
        handleCloseModalSort();
    }

    const handleOpenModalFilter = () => setModalFilter(true);
    const handleCloseModalFilter = () => setModalFilter(false);

    const handleSubmitFilter = (search: string) => {
        setParams(prev => ({ ...prev, search }));
        handleCloseModalFilter();
    }

    useEffect(() => {
        handleFetch({ page: params.skip || 0, size: params.limit || 0 });
    }, [JSON.stringify(params)]);

    return {
        dataTickets,
        handleChangePage,
        loading,
        modalCreate,
        handleOpenModalCreate,
        handleCloseModalCreate,
        handleSubmit,
        modalSelected,
        handleSetModalSelected,
        handleUpdateStatus,
        modalSort,
        handleOpenModalSort,
        handleCloseModalSort,
        handleSubmitSort,
        modalFilter,
        handleOpenModalFilter,
        handleCloseModalFilter,
        handleSubmitFilter,
        params,
    }
}