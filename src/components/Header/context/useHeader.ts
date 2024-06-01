import { useEffect, useState } from "react";
import { ICurrent } from "../model.header";
import { getUser } from "../../../data/user";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/layout/layout.actions";
import { requestLogout } from "../../../data/auth";
import { getRole } from "../../../utils/localStorage";

export const useHeader = () => {
    const dispatch = useDispatch();
    const [current, setCurrent] = useState<ICurrent>({ name: '', role: '', profile_image: '' });
    const handleLogout = () => requestLogout();

    const handleFetchUser = async () => {
        dispatch(setLoading(true));
        const role = getRole();
        const dataUser = await getUser(role);

        setCurrent(dataUser);
        dispatch(setLoading(false));
    };

    useEffect(() => {
        handleFetchUser();
    }, []);

    return {
        handleLogout,
        current,
    }
}