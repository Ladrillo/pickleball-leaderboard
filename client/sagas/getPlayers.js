import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import * as types from '../actionTypes';


export function* getPlayers(action) {
    const result = yield call(get, '/api/players');
    yield put({
        type: types.GET_PLAYERS_SUCCEEDED,
        payload: result.data
    });
}


const get = url => {
    let instance = axios.create({
        headers: { "Content-Type": "application/json" }
    });
    return instance.get(url);
};


export default function* watchGetPlayers() {
    yield* takeEvery(types.GET_PLAYERS, getPlayers);
}