import {combineReducers} from 'redux';
import UserReducer from './reducer.users';
import ActiveuserReducer from './reducer.active-user';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveuserReducer
});

export default allReducers;