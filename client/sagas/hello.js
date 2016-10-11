import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import * as types from '../actionTypes';


export function sayHello() {
    console.log('the saga is doing stuff!');
}


export function* helloSaga(action) {
    yield call(sayHello);
    const result = yield call(get);
    yield put({ 
        type: types.BOOTSTRAPPING_SUCCESSFUL,
        payload: result.data
    });
}


const get = data => {
    let instance = axios.create({
        headers: { "Content-Type": "application/json" }
    });
    return instance.get('/api/bootstrap');
};


export default function* watchHello() {
    yield* takeEvery(types.BOOTSTRAPPING, helloSaga);
}