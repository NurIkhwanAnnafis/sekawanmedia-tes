import { useEffect, useState } from "react"
import { IGraph, ISummary, IUnresolved, ITasks } from "../model.overview"
import * as apiSummary from "../../../data/overview"
import { defaultValue } from "./ContextProvider";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/layout/layout.actions";

export const useOverviewList = () => {
    const dispatch = useDispatch();
    const [summary, setSummary] = useState<ISummary>(defaultValue.summary);
    const [dataGraph, setDataGraph] = useState<IGraph>(defaultValue.dataGraph);
    const [dataUnresolved, setDataUnresolved] = useState<IUnresolved>(defaultValue.dataUnresolved);
    const [dataTasks, setDataTasks] = useState<ITasks>(defaultValue.dataTasks);

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

    useEffect(() => {
        handleFetch();
    }, []);

    return {
        summary,
        dataGraph,
        dataUnresolved,
        dataTasks,
    }
}