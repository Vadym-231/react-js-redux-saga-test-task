import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
   getOrders
} from '../store/redux/action/orders';
import {Button, Table} from 'antd';
import { EditOutlined, PlusOutlined, StockOutlined} from "@ant-design/icons";
import Spinner from "../Components/Spinner";

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        render: phone => `+${phone}`
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: status => status?.toUpperCase()
        //render: data => data ? moment(data).format('DD/MM/YYYY') : 'No data here!'
    },
    {
        title: '',
        dataIndex: 'id',
        key: 'id',
        render: (id) => <Button href={`/${id}/edit`} icon={<EditOutlined/>}>
            {'Edit'}
        </Button>
    }
];

const Orders = () => {

    const dispatch = useDispatch();
    const { orders, isLoading } = useSelector(state => state.orders);
    useEffect(() => { dispatch(getOrders()) }, [dispatch]);

    return <div className={'order_list_page'}>
        {isLoading ? <Spinner/> : null}
        <div className={'order_list_page__container'}>
            <Button type="link" href={'/statistic'}  icon={<StockOutlined/>}  size={'large'} block>
                To Statistics
            </Button>
            <Button type="primary" href={'/create'} icon={<PlusOutlined />}  size={'large'} block>
                Create order
            </Button>
            <Table dataSource={orders.map(e => ({...e, key: e.id }))} pagination={false} columns={columns}/>
        </div>
       </div>
};
export default Orders;
