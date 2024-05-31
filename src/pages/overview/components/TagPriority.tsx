import React from "react";
import { Tag, Typography } from "antd";
import { ENUM_PRIORITY } from "../configs/enum";

const { Text } = Typography;

interface Props {
    level: number;
}

const TagPriority: React.FC<Props> = ({ level }) => {
    let result: { label: string | React.ReactElement, color: string } = {
        label: <Text type="secondary">DEFAULT</Text>,
        color: '#F0F1F7'
    }

    switch (level) {
        case ENUM_PRIORITY.CRITICAL:
            result = { label: 'URGENT', color: '#FEC400' };
            break;

        case ENUM_PRIORITY.MEDIUM:
            result = { label: 'NEW', color: '#29CC97' };
            break;

        default:
            break;
    }

    return (
        <Tag color={result.color}>
            {result.label}
        </Tag>
    )
}

export default TagPriority;