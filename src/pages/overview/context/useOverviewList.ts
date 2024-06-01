import { useEffect, useState } from "react"
import { IGraph, ISummary, IUnresolved, ITasks } from "../model.overview"
import * as apiSummary from "../../../data/overview"
import { defaultValue } from "./ContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../redux/layout/layout.actions";
import { setAddNotification } from "../../../redux/notification/notification.actions";
import { IStore } from "../../../redux/model.store";
import { SuccessNotification } from "../../../components/Notification/CustomNotification";
import { message } from "antd";
import { useTranslation } from "react-i18next";
import { getRole } from "../../../utils/localStorage";

export const useOverviewList = () => {
    const { t } = useTranslation(['base']);
    const isAdmin = getRole() === 'admin';
    const dispatch = useDispatch();
    const notification = useSelector((state: IStore) => state.notification);
    const [summary, setSummary] = useState<ISummary>(defaultValue.summary);
    const [dataGraph, setDataGraph] = useState<IGraph>(defaultValue.dataGraph);
    const [dataUnresolved, setDataUnresolved] = useState<IUnresolved>(defaultValue.dataUnresolved);
    const [dataTasks, setDataTasks] = useState<ITasks>(defaultValue.dataTasks);
    const [newTask, setNewTask] = useState<string>('');

    const handleFetchSummary = async () => {
        const dataSummary = await apiSummary.getSummary();

        setSummary(dataSummary);
    }

    const handleFetchGraph = async () => {
        const dataGraph = await apiSummary.getGraph();

        setDataGraph(dataGraph);
    }

    const handleFetchUnresolved = async () => {
        const dataUnresolved = await apiSummary.getUnresolved()

        setDataUnresolved(dataUnresolved);
    }

    const handleFetchTasks = async () => {
        const dataTasks = await apiSummary.getTasks();

        setDataTasks(dataTasks);
    }

    const handleFetch = async () => {
        dispatch(setLoading(true));
        try {
            await handleFetchSummary();
            await handleFetchGraph();
            handleFetchUnresolved();
            handleFetchTasks();
        } catch (error) {
            console.error(error);
        } finally {
            dispatch(setLoading(false));
        }
    }

    const handleChange = (value: string) => setNewTask(value);

    const handleCreateNewTask = () => {
        if (!newTask) return message.warning(t('message.task.warningTitle', 'Title is required'));

        const payload = {
            id: notification.list.length + 1,
            title: newTask
        }
        dispatch(setAddNotification(payload));
        SuccessNotification({ description: t('message.task.create', 'Succesfully created task') });
        setNewTask('');
    }

    useEffect(() => {
        handleFetch();
    }, []);

    return {
        summary,
        dataGraph,
        dataUnresolved,
        dataTasks,
        handleChange,
        handleCreateNewTask,
        newTask,
        isAdmin,
    }
}