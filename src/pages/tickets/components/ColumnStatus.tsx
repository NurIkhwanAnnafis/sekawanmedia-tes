import { Tag } from "antd";
import { useTranslation } from "react-i18next";

interface Props {
    rating: number;
}

const ColumnStatus: React.FC <Props> = ({ rating }) => {
    const { t } = useTranslation(['ticket']);
    let result: { label: string | object, color: string } = {
        label: t('status.1', 'LOW', { returnObjects: true }),
        color: '#FEC400'
    }

    if (Math.floor(rating) > 3) {
        result = { label: t('status.0', 'HIGH', { returnObjects: true }), color: '#F12B2C' };
    } else if (Math.floor(rating) < 3) {
        result = { label: 'NORMAL', color: '#29CC97' };
    }

    return (
        <Tag color={result.color} style={{ padding: '0px 12px', borderRadius: 12 }}>
            {result.label}
        </Tag>
    )
}

export default ColumnStatus;
