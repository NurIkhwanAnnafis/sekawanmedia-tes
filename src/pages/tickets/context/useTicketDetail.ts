import { useEffect, useState } from "react"
import { IProducts } from "../model.tickets"
import { useNavigate, useParams } from "react-router-dom";
import { getTicketsDetail, updateTickets } from "../../../data/tickets";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/layout/layout.actions";
import { ErrorNotification, SuccessNotification } from "../../../components/Notification/CustomNotification";
import { useTranslation } from "react-i18next";
import { getRole } from "../../../utils/localStorage";

export const useTicketDetail = () => {
    const { t } = useTranslation(['base']);
    const isAdmin = getRole() === 'admin';
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const [modal, setModal] = useState<{
        open: boolean;
        type: 'approve' | 'reject' | '';
    }>({ open: false, type: '' });
    const [detail, setDataDetail] = useState<IProducts>({
        id: 0,
        title: '',
        rating: 0,
        brand: '',
        returnPolicy: '',
        thumbnail: '',
        description: '',
        sku: '',
    });

    const handleFetch = async (id: string | number) => {
        dispatch(setLoading(true));
        const res = await getTicketsDetail(id);

        setDataDetail(res);
        dispatch(setLoading(false));
    };

    const handleBack = () => navigate('/tickets');

    const handleUpdateStatus = async () => {
        dispatch(setLoading(true));

        const payload = {
            title: detail.title || '',
            customer: detail.brand || '',
            rating: detail.rating || 0,
            status: modal.type,
        }

        try {
            await updateTickets(payload, detail.id);
            handleBack()
            setModal({ open: false, type: '' });
            SuccessNotification({ description: t('message.ticket.update', 'Ticket Successfully Updated') });
        } catch (error: any) {
            ErrorNotification(error);
        } finally {
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
        if (params.id) handleFetch(params.id);
    }, [params.id])

    return {
        detail,
        handleBack,
        modal,
        setModal,
        handleUpdateStatus,
        isAdmin,
    }
}