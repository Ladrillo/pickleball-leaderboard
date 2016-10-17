import * as types from '../actionTypes';


export default function players(state = [], action) {

    switch (action.type) {

        case types.GET_PLAYERS_SUCCEEDED:
            return action.payload;

        case types.CHALLENGE_SUCCEEDED:
            return action.payload;

        case types.UNCHALLENGE_SUCCEEDED:
            return action.payload;

        default:
            return state;
    }
}