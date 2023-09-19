import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    getOrderStatistics
} from '../../store/redux/action/orders';
import {Button, Table} from 'antd';
import {ArrowLeftOutlined} from "@ant-design/icons";
import moment from 'moment'
import Spinner from "../../Components/Spinner";

const columns = [
    {
        title: 'Date',
        dataIndex: 'order_date',
        key: 'order_date',
        render: date => moment(date).format('DD/MM/YYYY')
    },
    {
        title: 'Count of confirmed',
        dataIndex: 'count_of_confirmed',
        key: 'count_of_confirmed',
    },
    {
        title: 'All orders',
        dataIndex: 'all_orders_in_the_day',
        key: 'all_orders_in_the_day',
    },
    {
        title: 'Confirmed (in the percents)',
        dataIndex: 'confirmed_percent',
        key: 'confirmed_percent',
        render: data => `${Number(data).toFixed(2) * 100} %`
    }
];

const Statistics = () => {

    const dispatch = useDispatch();
    const { statistic, isLoading } = useSelector(state => state.orders);
    useEffect(() => { dispatch(getOrderStatistics()) }, [dispatch]);

    return <div>
        {isLoading ? <Spinner/> : null}
        <div>
            <Button type="primary" href={'/'} icon={<ArrowLeftOutlined />}  size={'large'} block>
               Orders
            </Button>
            <Table dataSource={statistic.map(e => ({ ...e, key: e.order_date}))} pagination={false} columns={columns}/>
        </div>
    </div>
};
export default Statistics;
