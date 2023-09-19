import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {  useParams } from 'react-router-dom';
import {
    addOrder, getOrderByID, updateOrder
} from '../../store/redux/action/orders';
import {Button, Form, Input, Select} from 'antd';
import {CheckOutlined, CloseCircleOutlined} from "@ant-design/icons";
import Spinner from "../../Components/Spinner";

const statuses = ['new', 'canceled', 'confirmed', 'delayed']

const Orders = () => {

    const { orderId } = useParams();
    const isUpdateMode = !!orderId;

    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const { order, isLoading } = useSelector(state => state.orders);
    const onSubmit = useCallback(e => isUpdateMode ? dispatch(updateOrder({ id: orderId, updateData: e })) : dispatch(addOrder(e)), [dispatch, isUpdateMode, orderId]);

    useEffect(() => {
        if(isUpdateMode && !order.id) dispatch(getOrderByID(orderId))
        if(order) form.setFields(Object.keys(order).map(key => ({ name: [key], value: order[key]})))
    }, [order, form, dispatch, isUpdateMode, orderId])


    return <div className={'edit_mode_page'}>
        {isLoading ? <Spinner/> : null}
        <div className={'edit_mode_page__container'}>
            <div className={'edit_mode_page__title'}>
                <span>
                    {
                        isUpdateMode
                            ?
                            'Updating order '
                            : 'Create order'
                    }
                </span>
                <span>
                    {
                        isUpdateMode
                            ?
                            <span className={'bold'}>
                                {`#${orderId}`}
                            </span>
                            : null
                    }
                </span>
            </div>
            <Form form={form} onFinish={onSubmit} className={'edit_mode_page__form'}  layout={'vertical'}>
                <Form.Item
                    name={'name'}
                    label={'Name:'}
                    rules={[
                        { required: true }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'phone'}
                    label={'Phone:'}
                    rules={[
                        { required: true, max: 12, min: 11 }
                    ]}
                >
                    <Input prefix={'+'} type={'number'}/>
                </Form.Item>
                <Form.Item
                    name={'address'}
                    label={'Address:'}
                    rules={[
                        { required: true }
                    ]}
                >
                    <Input/>
                </Form.Item>
                { !orderId
                    ? null :
                    <Form.Item
                        name={'status'}
                        label={'Order status:'}
                        rules={[
                            { required: true }
                        ]}
                    >
                        <Select>
                            {statuses.map(e => <Select.Option key={e} value={e}>{e.toUpperCase()}</Select.Option>)}
                        </Select>
                    </Form.Item>
                }
                <Form.Item className={'edit_mode_page__form__buttons'}>
                    <Button type={'primary'} htmlType={'submit'} icon={<CheckOutlined/>}>{'Confirm'}</Button>
                    <Button danger type={'primary'} href={'/'} icon={<CloseCircleOutlined/>}>{'Cancel'}</Button>
                </Form.Item>
            </Form>
        </div>
    </div>
};
export default Orders;
