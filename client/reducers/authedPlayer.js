import * as types from '../actionTypes';


export default function authedPlayer(state = (window.user || ''), action) {

    switch (action.type) {
        default:
            return state;
    }
}