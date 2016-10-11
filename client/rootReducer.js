import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import bootstrapping from './reducers/bootstrapping';


const rootReducer = combineReducers({
    bootstrapping
});


export default rootReducer;