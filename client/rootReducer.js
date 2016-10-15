import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import players from './reducers/players';
import authedPlayer from './reducers/authedPlayer';


const rootReducer = combineReducers({
    authedPlayer,
    players
});


export default rootReducer;