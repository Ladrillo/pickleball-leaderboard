import axios from 'axios';
import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import * as types from '../actionTypes';


export function* challengeSucceded(payload) {
    yield put({
        type: types.CHALLENGE_SUCCEEDED,
        payload
    });
}

export function* challegeFailed(error) {
    yield put({
        type: types.CHALLENGE_FAILED,
        error
    });
}

export function* unchallengeSucceded(payload) {
    yield put({
        type: types.UNCHALLENGE_SUCCEEDED,
        payload
    });
}

export function* unchallegeFailed(error) {
    yield put({
        type: types.UNCHALLENGE_FAILED,
        error
    });
}

export function* getPlayers() {
    yield put({
        type: types.GET_PLAYERS
    });
}

export function* challenge(action) {
    try {
        const result = yield call(post,
            '/api/lock',
            {
                id1: action.payload.id1,
                id2: action.payload.id2
            });
        if (result.status == 200 && result.data.warning === 'authenticate') {
            location.reload();
        }
        else if (result.status == 200 && result.data.warning === 'refresh') {
            yield put({
                type: types.INCONSISTENT_STATE
            });
            yield call(getPlayers);
        }
        else if (result.status == 200) {
            yield call(challengeSucceded, result.data);
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
        yield call(challegeFailed, error);
    }
}


export function* unchallenge(action) {
    try {
        const result = yield call(post,
            '/api/unlock',
            {
                id1: action.payload.id1,
                id2: action.payload.id2,
                result: action.payload.result
            });
        if (result.status == 200 && result.data.warning === 'authenticate') {
            location.reload();
        }
        else if (result.status == 200 && result.data.warning === 'refresh') {
            yield put({
                type: types.INCONSISTENT_STATE
            });
            yield call(getPlayers);
        }
        else if (result.status == 200) {
            yield call(unchallengeSucceded, result.data);
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
        yield call(unchallegeFailed, error);
    }
}


const post = (url, data) => {
    let instance = axios.create({
        headers: { "Content-Type": "application/json" }
    });
    return instance.post(url, data);
};


export function* watchChallenge() {
    yield* takeLatest(types.CHALLENGE, challenge);
}


export function* watchUnchallenge() {
    yield* takeLatest(types.UNCHALLENGE, unchallenge);
}