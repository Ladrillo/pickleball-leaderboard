import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import * as types from '../actionTypes';


export function* getPlayers() {
    try {
        const result = yield call(get, '/api/players');

        if (result.status == 200 && result.data.warning === 'authenticate') {
            location.reload();
        }
        else if (result.status == 200) {
            yield put({
                type: types.GET_PLAYERS_SUCCEEDED,
                payload: result.data
            });
        }
        else if (result.status != 200) {
            const error = {
                result
            };
            throw error;
        }
    }
    catch (error) {
        console.log(error);
        yield put({
            type: types.GET_PLAYERS_FAILED,
            error
        });
    }
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