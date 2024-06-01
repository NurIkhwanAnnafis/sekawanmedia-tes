import { Col, Pagination, Row, Table } from "antd";
import { Fragment, useContext } from "react";
import { columns } from "../configs/table";
import { ContextTickets } from "../context/ContextProvider";
import { useTranslation } from "react-i18next";

const List: React.FC = () => {
    const { t } = useTranslation(['ticket']);
    const {
        dataTickets,
        handleChangePage,
        loading,
        handleSetModalSelected,
        handleShowDetail,
        isAdmin,
    } = useContext(ContextTickets);

    return (
        <Fragment>
            <Row gutter={24} style={{ margin: '0px -24px' }}>
                <Col span={24} className="px-0">
                    <Table
                        columns={columns({ handleSetModalSelected, handleShowDetail, t, isAdmin })}
                        dataSource={dataTickets.products}
                        pagination={false} scroll={{ x: 1000 }}
                        loading={loading}
                    />
                </Col>
            </Row>
            <br />
            <Row gutter={24}>
                <Col span={24} className="text-end">
                    <Pagination
                        size="small"
                        total={dataTickets.total}
                        showSizeChanger
                        onChange={(page, size) => handleChangePage(page, size)}
                        current={dataTickets.skip / 10}
                        pageSize={dataTickets.limit}
                    />
                </Col>
            </Row>
        </Fragment>
    )
}

export default List;