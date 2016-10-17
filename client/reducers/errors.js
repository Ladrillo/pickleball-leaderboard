import * as types from '../actionTypes';


const errors = (state = [], action) => {
    switch (action.type) {

        case types.GET_PLAYERS_FAILED:
            return state.concat(action.error);

        case types.CHALLENGE_FAILED:
            return state.concat(action.error);

        case types.UNCHALLENGE_FAILED:
            return state.concat(action.error);

        default:
            return state;
    }
};


export default errors;