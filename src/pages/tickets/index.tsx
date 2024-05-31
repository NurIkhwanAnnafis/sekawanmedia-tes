import React from 'react';
import { Card } from 'antd';
import Wrapper from '../../components/Wrapper';

import './configs/style.scss';
import { ContextTickets } from './context/ContextProvider';
import { useTicketList } from './context/useTicketList';
import Filter from './components/Filter';
import List from './components/List';
import ModalCreate from './components/ModalCreate';
import ModalAction from './components/ModalAction';

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
    } = useTicketList();

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
                }}
            >
                <Card className="styleCardTicket">
                    <Filter />
                    <br />
                    <List />

                    <ModalCreate />
                    <ModalAction />
                </Card>
            </ContextTickets.Provider>
        </Wrapper>
    );
};

export default Tickets;