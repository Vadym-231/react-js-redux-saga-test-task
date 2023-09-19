import Api  from './api';


const service = {
    getOrders: () => {
        return Api.get(`orders`);
    },
    updateOrder: (id, data) => {
        return Api.patch(`orders/${id}`, data);
    },
    addOrder: (data) => {
        return Api.post(`orders`, { data});
    },
    getOrderById: (id) => {
        return Api.get(`orders/${id}`);
    },
    getOrderStatistic: () => {
        return Api.get('orders/statistics');
    }
};
export default service;
