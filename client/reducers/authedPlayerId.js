import * as types from '../actionTypes';


export default function authedPlayerId(state = '', action) {

    switch (action.type) {
        default:
            return window.user._id || '';
    }
}