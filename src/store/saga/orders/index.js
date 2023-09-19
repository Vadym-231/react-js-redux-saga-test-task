import service from '../../../service/service';
import {all, put, takeLatest} from 'redux-saga/effects';
import {
    setLoaderStatus,
    storeOrders,
    getOrders,
    getOrderByID,
    addOrder,
    storeOrder,
    updateOrder,
    getOrderStatistics,
    storeOrderStatistics
} from '../../redux/action/orders';


function* getOrdersSaga () {
    try {
        yield put(setLoaderStatus(true));
        const { data } = yield service.getOrders();
        yield put(storeOrders(data.data));
        yield put(setLoaderStatus(false));
    }catch (e) {
        // toDo: here we can add some additional logical in case when we have errors
        console.error(e);
        yield put(setLoaderStatus(false));
    }
}

function* AddOrderSaga ({ payload }) {
    try {
        yield put(setLoaderStatus(true));
        yield service.addOrder(payload);
        yield put(setLoaderStatus(false));
        window.location.href = '/';
        // Redirect to order list

    }catch (e) {
        // toDo: here we can add some additional logical in case when we have errors
        console.error(e);
        yield put(setLoaderStatus(false));
    }
}
function* getOrderByIdSaga ({ payload }) {
    try {
        yield put(setLoaderStatus(true));
        const { data } = yield service.getOrderById(payload);
        yield put(storeOrder(data.data));
        yield put(setLoaderStatus(false));

    }catch (e) {
        // toDo: here we can add some additional logical in case when we have errors
        console.error(e);
        yield put(setLoaderStatus(false));
    }
}
function* updateOrderSaga ({ payload }) {
    try {
        const { id, updateData } = payload;
        yield put(setLoaderStatus(true));
        yield service.updateOrder(id, updateData);
        yield put(setLoaderStatus(false));
        window.location.href = '/';

        // Redirect to order list
    }catch (e) {
        // toDo: here we can add some additional logical in case when we have errors
        console.error(e);
        yield put(setLoaderStatus(false));
    }
}

function* getOrderStatisticsSaga () {
    try {

        yield put(setLoaderStatus(true));
        const { data } = yield service.getOrderStatistic();
        yield put(storeOrderStatistics(data.data));
        yield put(setLoaderStatus(false));

    }catch (e) {
        // toDo: here we can add some additional logical in case when we have errors
        console.error(e);
        yield put(setLoaderStatus(false));
    }
}

export default function* billingSagas() {
    yield all([
        yield takeLatest(getOrders, getOrdersSaga),
        yield takeLatest(addOrder, AddOrderSaga),
        yield takeLatest(getOrderByID, getOrderByIdSaga),
        yield takeLatest(updateOrder, updateOrderSaga),
        yield takeLatest(getOrderStatistics, getOrderStatisticsSaga)
    ]);
}
