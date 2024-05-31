import { useEffect, useState } from "react";
import { ICurrent } from "../model.header";
import { deleteLocalUser } from "../../../utils/localStorage";
import { getUser } from "../../../data/user";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/layout/layout.actions";

export const useHeader = () => {
    const dispatch = useDispatch();
    const [current, setCurrent] = useState<ICurrent>({ name: '', role: '', profile_image: '' });
    const handleLogout = () => deleteLocalUser();

    const handleFetchUser = async () => {
        dispatch(setLoading(true));
        const dataUser = await getUser('admin');

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