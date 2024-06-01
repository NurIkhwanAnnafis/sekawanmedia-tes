import { useEffect, useState } from "react";
import { ICurrent } from "../model.header";
import { getUser } from "../../../data/user";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/layout/layout.actions";
import { requestLogout } from "../../../data/auth";
import { getRole } from "../../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { getTicketsSearch } from "../../../data/tickets";

export const useHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [current, setCurrent] = useState<ICurrent>({ name: '', role: '', profile_image: '' });
    const [options, setOptions] = useState<Array<{label: string; value: string | number}>>([]);
    const handleLogout = () => requestLogout();

    const handleFetchUser = async () => {
        dispatch(setLoading(true));
        const role = getRole();
        const dataUser = await getUser(role);

        setCurrent(dataUser);
        dispatch(setLoading(false));
    };

    const handleSearch = async (q: string) => {
        const res = await getTicketsSearch(q);

        setOptions(res.products.map(x => ({ label: x.title, value: x.id })));
    }

    const handleClick = (id: string | number) => navigate(`/tickets/${id}`);

    useEffect(() => {
        handleFetchUser();
    }, []);

    return {
        handleLogout,
        current,
        options,
        handleSearch,
        handleClick
    }
}