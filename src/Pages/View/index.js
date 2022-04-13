
import {
    Link,
    useParams
} from "react-router-dom";
import { Table } from 'antd';
import { useContext } from "react";
import { UserContext } from '../../providers/UserContext';

function View() {
    const { id } = useParams();
    const users = useContext(UserContext);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'Id',
            key: 'Id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Created On',
            dataIndex: 'CreatedOn',
            key: 'CreatedOn',
        },

        {
            title: 'Updated On',
            dataIndex: 'UpdatedOn',
            key: 'UpdatedOn',
        },
    ]

    const user = users.filter((item) => (item.Id === id));

    return (
        <>
            <Table columns={columns} dataSource={user} rowKey={(row) => row.Id} />
        </>
    );
}
export default View;