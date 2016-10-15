import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import * as types from '../actionTypes';


export function* challenge(action) {
    try {
        const result = yield call(post,
            '/api/lock',
            {
                id1: action.payload.id1,
                id2: action.payload.id2
            });

        if (result.status == 200) {
            yield put({
                type: types.CHALLENGE_SUCCEEDED
            });
            yield put({
                type: types.GET_PLAYERS
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
        yield put({
            type: types.CHALLENGE_FAILED,
            error
        });
    }
}


export function* unchallenge(action) {
    try {
        const result = yield call(post,
            '/api/unlock',
            {
                id1: action.payload.id1,
                id2: action.payload.id2
            });

        if (result.status == 200) {
            yield put({
                type: types.UNCHALLENGE_SUCCEEDED
            });
            yield put({
                type: types.GET_PLAYERS
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
        yield put({
            type: types.UNCHALLENGE_FAILED,
            error
        });
    }
}


const post = (url, data) => {
    let instance = axios.create({
        headers: { "Content-Type": "application/json" }
    });
    return instance.post(url, data);
};


export function* watchChallenge() {
    yield* takeEvery(types.CHALLENGE, challenge);
}


export function* watchUnchallenge() {
    yield* takeEvery(types.UNCHALLENGE, unchallenge);
}