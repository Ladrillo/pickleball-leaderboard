import * as types from '../actionTypes';

export const getPlayers = () => ({
    type: types.GET_PLAYERS
});

export const challenge = (id1, id2) => ({
    type: types.CHALLENGE,
    payload: {
        id1,
        id2
    }
});

export const unchallenge = (id1, id2, result) => ({
    type: types.UNCHALLENGE,
    payload: {
        id1,
        id2,
        result
    }
});