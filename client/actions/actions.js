import * as types from '../actionTypes';

export const getPlayers = () => ({
    type: types.GET_PLAYERS
});

export const challenge = (me, otherPlayer) => ({
    type: types.CHALLENGE,
    payload: {
        id1: me._id,
        id2: otherPlayer._id
    }
});

export const unchallenge = (me, otherPlayer, result) => ({
    type: types.UNCHALLENGE,
    payload: {
        id1: me._id,
        id2: otherPlayer._id,
        result
    }
});