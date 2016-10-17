import * as types from '../actionTypes';


const errors = (state = [], action) => {

    if (action.error) {
        return state.concat(action.error);
    }
    return state;
};


export default errors;