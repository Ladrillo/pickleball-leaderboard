import { combineReducers } from 'redux';
import players from './reducers/players';
import authedPlayer from './reducers/authedPlayer';
import errors from './reducers/errors';


const rootReducer = combineReducers({
    authedPlayer,
    players,
    errors
});


export default rootReducer;