import { Tag } from "antd";

interface Props {
    rating: number;
}

const ColumnStatus: React.FC <Props> = ({ rating }) => {
    let result: { label: string, color: string } = {
        label: 'LOW',
        color: '#FEC400'
    }

    if (Math.floor(rating) > 3) {
        result = { label: 'HIGH', color: '#F12B2C' };
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
