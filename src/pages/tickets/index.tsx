import React, { useContext } from 'react';
import { Card } from 'antd';
import Wrapper from '../../components/Wrapper';

import './configs/style.scss';
import { ContextTickets } from './context/ContextProvider';
import { useTicketList } from './context/useTicketList';
import Filter from './components/Filter';
import List from './components/List';
import ModalCreate from './components/ModalCreate';
import ModalAction from './components/ModalAction';
import ModalSort from './components/ModalSort';
import ModalFilter from './components/ModalFilter';
import { ContextTheme } from '../../config/theme';

const Tickets: React.FC = () => {
    const {
        dataTickets,
        handleChangePage,
        loading,
        handleOpenModalCreate,
        handleCloseModalCreate,
        handleSubmit,
        modalCreate,
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
        handleShowDetail,
        isAdmin,
    } = useTicketList();
    const {
        theme,
    } = useContext(ContextTheme);

    return (
        <Wrapper>
            <ContextTickets.Provider
                value={{
                    dataTickets,
                    handleChangePage,
                    loading,
                    handleOpenModalCreate,
                    handleCloseModalCreate,
                    handleSubmit,
                    modalCreate,
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
                    handleShowDetail,
                    isAdmin,
                }}
            >
                <Card className={`styleCardTicket ${theme}`}>
                    <Filter />
                    <br />
                    <List />

                    <ModalCreate />
                    <ModalAction />
                    {modalSort && <ModalSort />}
                    {modalFilter && <ModalFilter />}
                </Card>
            </ContextTickets.Provider>
        </Wrapper>
    );
};

export default Tickets;