import { combineReducers } from 'redux';
import players from './reducers/players';
import authedPlayerId from './reducers/authedPlayerId';
import errors from './reducers/errors';


const rootReducer = combineReducers({
    authedPlayerId,
    players,
    errors
});


export default rootReducer;