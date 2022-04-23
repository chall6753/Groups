import {combineReducers} from 'redux'
import sessionsReducer from './sessionsReducer'
import groupsReducer from "./groupsReducer"

export default combineReducers({
    session: sessionsReducer,
    groups: groupsReducer
})