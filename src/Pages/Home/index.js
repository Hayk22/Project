import { createContext, useContext } from 'react';
import { Table } from 'antd';
import {
    Link,
} from "react-router-dom";
import 'antd/dist/antd.css';
import { UserContext } from '../../providers/UserContext';

function Home() {
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
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => <Link to={`accounts/${record.Id}`}>View</Link>,
        },
    ]

    const user = useContext(UserContext);

    console.log(user);
    return (
        <Table columns={columns} dataSource={user} rowKey={(row) => row.Id} />
    );
}
export default Home;