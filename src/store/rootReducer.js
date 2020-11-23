import { combineReducers } from "redux";

// export const rootReducer =  combineReducers({})

import {usersReducer} from './users';
import {appReducer} from './app';

export default combineReducers({
    users: usersReducer,
    app: appReducer
});