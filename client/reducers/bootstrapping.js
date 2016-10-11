import * as types from '../actionTypes';


export default function bootstrapping(state = '', action) {

    switch (action.type) {

        case types.BOOTSTRAPPING_SUCCESSFUL:
            return action.payload;

        default:
            return state;
    }
}