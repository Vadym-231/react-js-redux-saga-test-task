import { all } from 'redux-saga/effects';
import ordersSaga from './orders';

export default function* rootSaga() {
    yield all([
        ordersSaga()
    ]);
}
