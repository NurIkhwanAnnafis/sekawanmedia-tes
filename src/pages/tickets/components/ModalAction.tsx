import { Modal, Typography } from "antd";
import { useContext } from "react";
import { ContextTickets } from "../context/ContextProvider";

const { Text } = Typography;

const ModalAction: React.FC = () => {
    const {
        modalSelected,
        handleSetModalSelected,
        handleUpdateStatus
    } = useContext(ContextTickets);

    return (
        <Modal
            title={`${modalSelected.type === 'approve' ? 'Approve' : 'Reject'} Ticket`}
            visible={modalSelected.open}
            maskClosable
            onCancel={() => handleSetModalSelected('', null, false)}
            onOk={handleUpdateStatus}
        >
            <Text>
                {`Are you sure to ${modalSelected.type === 'approve' ? 'Approve' : 'Reject'} this `}
                <Text strong>{`Ticket(${modalSelected.values?.title})`}</Text>
            </Text>
        </Modal>
    )
}

export default ModalAction;