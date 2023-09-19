import {createReducer} from 'redux-act';
import {
    setLoaderStatus,
    storeOrders,
    storeOrder,
    storeOrderStatistics
} from '../action/orders';


const initialState = {
    isLoading: false,
    orders: [],
    order: {},
    statistic: []
};

export const ordersReducer = createReducer({}, initialState);

ordersReducer.on(storeOrderStatistics, (state, payload) => ({ ...state, statistic: payload }))
ordersReducer.on(storeOrder, (state, payload) => ({ ...state, order: payload }))
ordersReducer.on(storeOrders, (state, payload) => ({ ...state, orders: payload }));
ordersReducer.on(setLoaderStatus, (state, payload) => ({ ...state, isLoading: payload }))

export default ordersReducer;