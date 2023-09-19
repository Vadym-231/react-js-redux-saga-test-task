import {createAction} from 'redux-act';


export const getOrders =  createAction('GET_ORDERS');
export const storeOrders = createAction('STORE_ORDERS')

export const addOrder = createAction('ADD_ORDER');

export const getOrderByID = createAction('GET_ORDER');
export const storeOrder = createAction('STORE_ORDER');

export const updateOrder = createAction('UPDATE_ORDER');

export const getOrderStatistics = createAction('GET_STATISTICS');
export const storeOrderStatistics = createAction('STORE_STATISTICS');

export const setLoaderStatus = createAction('SET_LOADING_STATUS')
