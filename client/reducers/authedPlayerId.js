import * as types from '../actionTypes';


export default function authedPlayerId(state = (window.user._id || ''), action) {

    switch (action.type) {
        default:
            return state;
    }
}