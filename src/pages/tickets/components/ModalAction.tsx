import { Modal, Typography } from "antd";
import { useContext } from "react";
import { ContextTickets } from "../context/ContextProvider";
import { useTranslation, Trans } from "react-i18next";
import { ContextTheme } from "../../../config/theme";

const { Text } = Typography;

const ModalAction: React.FC = () => {
    const { t } = useTranslation(['ticket']);
    const {
        modalSelected,
        handleSetModalSelected,
        handleUpdateStatus
    } = useContext(ContextTickets);
    const {
        theme,
    } = useContext(ContextTheme);

    return (
        <Modal
            title={modalSelected.type === 'approve' ? t('modal.action.titleApprove', 'Approve Ticket') : t('modal.action.titleReject', 'Reject Ticket')}
            visible={modalSelected.open}
            maskClosable
            onCancel={() => handleSetModalSelected('', null, false)}
            onOk={handleUpdateStatus}
            className={`custom-modal ${theme}`}
        >
            <Text>
                <Trans t={t} i18nKey={modalSelected.type === 'approve' ? 'modal.action.descriptionApprove' : 'modal.action.descriptionReject'}>
                    {{ name: modalSelected.values?.title }}
                </Trans>
            </Text>
        </Modal>
    )
}

export default ModalAction;