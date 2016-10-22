import * as types from '../actionTypes';


export default function authedPlayerId(state = '', action) {

    switch (action.type) {
        default:
            if (window.user) {
                return window.user._id;
            }
            return '';
    }
}