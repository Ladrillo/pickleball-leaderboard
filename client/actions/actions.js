import * as types from '../actionTypes';

export const getPlayers = () => ({
    type: types.GET_PLAYERS
});

export const challenge = (authedPlayer, otherPlayer) => ({
    type: types.CHALLENGE,
    payload: {
        id1: authedPlayer._id,
        id2: otherPlayer._id
    }
});

export const unchallenge = (authedPlayer, otherPlayer) => ({
    type: types.UNCHALLENGE,
    payload: {
        id1: authedPlayer._id,
        id2: otherPlayer._id
    }
});